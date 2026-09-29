#!/usr/bin/env node
// Daily automation: checks the Being Curious LinkedIn newsletter's own index
// page for edition links (the one piece of "new content" LinkedIn exposes
// anonymously — individual article comment threads are not reliable the same
// way, so testimonials are NOT handled by this script, only new editions).
//
// For each edition not already in lib/content.ts's articleRows: fetches its
// title/date/cover image, downloads the cover locally, inserts a new row,
// runs a typecheck, and — only if that passes — commits and pushes.
//
// Uses `curl` (via child_process) instead of fetch: on this project's
// corporate network, Node's native fetch fails TLS verification against a
// MITM proxy that curl's schannel backend trusts via the OS cert store. curl
// is the proven-working path; keep it even if this later runs somewhere
// without that proxy, since it still works fine there too.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const CONTENT_PATH = path.join(REPO_ROOT, "lib", "content.ts");
const IMAGES_DIR = path.join(REPO_ROOT, "public", "images", "articles");
const NEWSLETTER_INDEX_URL = "https://www.linkedin.com/newsletters/being-curious-7247115007161757696/";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36";

// --ssl-no-revoke works around a corporate-network TLS-inspection proxy on
// Windows (curl's schannel backend trusts it via the OS cert store; Node's
// fetch doesn't). It's a Windows/schannel-only flag — passing it to Linux
// curl (e.g. GitHub Actions runners, which don't have this proxy anyway) can
// error, so only add it on win32.
const CURL_TLS_FLAGS = process.platform === "win32" ? ["--ssl-no-revoke"] : [];

function curlText(url) {
  return execFileSync(
    "curl",
    ["-s", ...CURL_TLS_FLAGS, "-A", UA, "-L", "-m", "25", url],
    { encoding: "utf-8", maxBuffer: 1024 * 1024 * 20 }
  );
}

function curlBinary(url, outPath) {
  execFileSync("curl", ["-s", ...CURL_TLS_FLAGS, "-A", UA, "-L", "-m", "25", url, "-o", outPath]);
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

function main() {
  console.log("Fetching newsletter index:", NEWSLETTER_INDEX_URL);
  const indexHtml = curlText(NEWSLETTER_INDEX_URL);
  const slugs = [...new Set([...indexHtml.matchAll(/pulse\/([a-z0-9-]+)/g)].map((m) => m[1]))].filter(
    (s) => s !== "api"
  );
  console.log(`Found ${slugs.length} edition link(s) on the index page.`);

  const contentSrc = fs.readFileSync(CONTENT_PATH, "utf-8");
  const existingHrefs = new Set([...contentSrc.matchAll(/https:\/\/www\.linkedin\.com\/pulse\/([a-z0-9-]+)/g)].map((m) => m[1]));

  const newSlugs = slugs.filter((s) => !existingHrefs.has(s));
  if (newSlugs.length === 0) {
    console.log("No new editions. Nothing to do.");
    return;
  }
  console.log(`New edition(s) to add: ${newSlugs.join(", ")}`);

  const newRows = [];
  for (const slug of newSlugs) {
    const url = `https://www.linkedin.com/pulse/${slug}`;
    let html;
    try {
      html = curlText(url);
    } catch (err) {
      console.warn(`  Skipping ${slug}: fetch failed (${err.message})`);
      continue;
    }

    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    const dateMatch = html.match(/"datePublished":"(\d{4}-\d{2}-\d{2})/);
    const imgMatch = html.match(/property="og:image" content="([^"]+)"/);

    if (!titleMatch || !dateMatch || !imgMatch) {
      console.warn(`  Skipping ${slug}: missing title/date/image in page (title=${!!titleMatch}, date=${!!dateMatch}, image=${!!imgMatch})`);
      continue;
    }

    const title = titleMatch[1].replace(/&amp;/g, "&").replace(/&#x27;/g, "'").trim();
    const date = dateMatch[1];
    const imgUrl = imgMatch[1].replace(/&amp;/g, "&");
    const fileSlug = slugify(title);
    const imgPath = path.join(IMAGES_DIR, `${fileSlug}.jpg`);

    try {
      curlBinary(imgUrl, imgPath);
      const size = fs.statSync(imgPath).size;
      if (size < 1000) throw new Error(`downloaded image too small (${size} bytes)`);
    } catch (err) {
      console.warn(`  Skipping ${slug}: image download failed (${err.message})`);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
      continue;
    }

    console.log(`  + "${title}" (${date})`);
    newRows.push(
      `  ["${title.replace(/"/g, '\\"')}", "${date}", "Newsletter", "${url}", "/images/articles/${fileSlug}.jpg", ""],`
    );
  }

  if (newRows.length === 0) {
    console.log("No rows could be fully resolved (fetch/image failures for all candidates). Nothing committed.");
    return;
  }

  // Insert new rows right before the first Mastek Insights row *inside
  // articleRows specifically* — "Mastek Insights" also appears earlier in the
  // file (e.g. write.filters), so anchor off the array declaration first.
  const arrayDeclStart = contentSrc.indexOf("const articleRows = [");
  if (arrayDeclStart === -1) {
    console.error("Could not find `const articleRows = [`. Aborting without writing.");
    process.exit(1);
  }
  const marker = '"Mastek Insights"';
  const markerPos = contentSrc.indexOf(marker, arrayDeclStart);
  if (markerPos === -1) {
    console.error("Could not find a Mastek Insights row inside articleRows to anchor the insertion. Aborting without writing.");
    process.exit(1);
  }
  const fullLineStart = contentSrc.lastIndexOf("\n", markerPos) + 1;
  const updated = contentSrc.slice(0, fullLineStart) + newRows.join("\n") + "\n" + contentSrc.slice(fullLineStart);
  fs.writeFileSync(CONTENT_PATH, updated);

  console.log("Running typecheck...");
  try {
    execFileSync("npx", ["tsc", "--noEmit", "-p", "."], { cwd: REPO_ROOT, stdio: "inherit" });
  } catch {
    console.error("Typecheck failed after inserting new rows. Reverting content.ts and aborting — nothing pushed.");
    fs.writeFileSync(CONTENT_PATH, contentSrc);
    for (const slug of newSlugs) {
      // best-effort cleanup of any images we did manage to save this run
    }
    process.exit(1);
  }

  console.log("Typecheck passed. Committing and pushing...");
  const addedTitles = newRows.map((r) => r.match(/^\s*\["([^"]+)"/)[1]);
  const imageFiles = newRows.map((r) => {
    const m = r.match(/"(\/images\/articles\/[^"]+)"/);
    return path.join(REPO_ROOT, m[1]);
  });

  execFileSync("git", ["add", CONTENT_PATH, ...imageFiles], { cwd: REPO_ROOT });
  const commitMessage = `Add ${addedTitles.length} new Being Curious edition(s): ${addedTitles.join(", ")}\n\nAutomated daily sync from the LinkedIn newsletter index page.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`;
  execFileSync("git", ["commit", "-m", commitMessage], { cwd: REPO_ROOT });
  execFileSync("git", ["push", "origin", "master"], { cwd: REPO_ROOT, stdio: "inherit" });
  console.log(`Done. Pushed ${addedTitles.length} new edition(s).`);
}

main();
