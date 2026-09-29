/**
 * LinkedIn Comment Grabber — bookmarklet source.
 *
 * What it does: run it on a LinkedIn post/article page (while logged in,
 * with any "...more" comments already expanded) and it reads whatever
 * comments are currently visible on your screen, formats them as plain
 * text, and copies that to your clipboard — ready to paste to Claude.
 *
 * What it does NOT do: log in, navigate, scroll, or touch LinkedIn's
 * servers on its own. It only reads the page that is already open in
 * front of you, only when you click it, only once. This is the safe
 * alternative to any kind of unattended/scheduled LinkedIn scraping,
 * which risks the account being flagged for automated access.
 *
 * Setup (one-time):
 *   1. Show your browser's bookmarks bar (Ctrl+Shift+B in Chrome).
 *   2. Right-click the bar -> Add page / Add bookmark.
 *   3. Name it "Grab LinkedIn Comments".
 *   4. For the URL, paste the ONE-LINE minified version below (not this
 *      readable source file) — see bookmarklet.min.txt in this folder.
 *   5. Save.
 *
 * Use: open a LinkedIn post, expand any "...more" comments you want,
 * click the bookmark. It copies the results to your clipboard (or shows
 * them in a popup if clipboard access is blocked) — paste that to Claude.
 */
(function () {
  function text(el) {
    return el ? el.innerText.trim().replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n") : "";
  }

  function findComments() {
    // LinkedIn uses different DOM structures on different surfaces
    // (article/pulse pages vs. the main feed). Try known patterns for
    // both, in order, and take whichever finds real results first.
    var selectorSets = [
      {
        block: "section.comment",
        name: ".comment__author",
        headline: ".comment__author-headline, .comment__author-title",
        body: ".comment__text",
      },
      {
        block: ".comments-comment-item, .comments-comment-entity",
        name: ".comments-comment-meta__description-title, .comments-post-meta__name-text",
        headline: ".comments-comment-meta__description-subtitle, .comments-post-meta__headline",
        body: ".comments-comment-item__main-content, .update-components-text",
      },
    ];

    for (var s = 0; s < selectorSets.length; s++) {
      var set = selectorSets[s];
      var blocks = Array.prototype.slice.call(document.querySelectorAll(set.block));
      var found = [];
      for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        var name = text(block.querySelector(set.name));
        var headline = text(block.querySelector(set.headline));
        var body = text(block.querySelector(set.body));
        if (name && body && body.length > 3) {
          found.push({ name: name, headline: headline, body: body });
        }
      }
      if (found.length > 0) return found;
    }

    // Last-resort fallback: any profile link followed by a nearby text
    // block, for pages that don't match either known structure.
    var links = Array.prototype.slice.call(document.querySelectorAll('a[href*="/in/"]'));
    var fallback = [];
    for (var j = 0; j < links.length; j++) {
      var nameText = text(links[j]);
      if (!nameText || nameText.length > 60) continue;
      var container = links[j].closest("section, article, div");
      var body = container ? text(container).replace(nameText, "").trim() : "";
      if (body.length > 10 && body.length < 2000) {
        fallback.push({ name: nameText, headline: "", body: body });
      }
    }
    return fallback;
  }

  var results = findComments();

  // De-duplicate (the same comment often matches multiple selector attempts).
  var seen = {};
  results = results.filter(function (r) {
    var key = r.name + "|" + r.body.slice(0, 80);
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  });

  if (results.length === 0) {
    alert(
      'No comments found on this page.\n\nMake sure:\n- You have scrolled to where the comments are\n- You clicked "Load more comments" if needed\n- You clicked "...more" on any truncated comments\n\nThen try again.'
    );
    return;
  }

  var out =
    "Post URL: " +
    location.href +
    "\n\n" +
    results
      .map(function (r, i) {
        return (
          i + 1 + ". " + r.name + (r.headline ? " — " + r.headline : " — [headline not found, check their profile]") + "\n\"" + r.body + "\"\n"
        );
      })
      .join("\n");

  function fallbackPrompt() {
    window.prompt("Copy this text (Ctrl+A, Ctrl+C, then close this):", out);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(out)
      .then(function () {
        alert("Copied " + results.length + " comment(s) to your clipboard! Paste it to Claude.");
      })
      .catch(fallbackPrompt);
  } else {
    fallbackPrompt();
  }
})();
