"use client";

import { type FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LogoMarquee } from "@/components/logo-marquee";
import { Photo } from "@/components/photo";
import { PhotoReveal } from "@/components/photo-reveal";
import { Reveal, RevealGroup, RevealWords, revealItem } from "@/components/reveal";
import { Badge, Eyebrow } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";
import { articles, write } from "@/lib/content";

export function WriteHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitted");
  }

  return (
    <section className="relative overflow-hidden pb-12 pt-28 sm:pb-14 sm:pt-32 lg:min-h-[85vh] lg:flex lg:flex-col lg:justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, var(--accent-soft), transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.35fr] lg:gap-16 lg:px-10">
        <div>
          <Reveal delay={0}>
            <Badge>{write.badge}</Badge>
          </Reveal>
          <h1 className="mt-5 text-balance text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <RevealWords text={write.headline[0]} delay={0.12} className="font-semibold" />{" "}
            <RevealWords text={write.headline[1]} delay={0.2} className="font-light text-accent" />
          </h1>
          <Reveal delay={0.42}>
            <p className="mt-6 max-w-lg text-balance text-base text-muted">{write.body}</p>
          </Reveal>

          <Reveal delay={0.52}>
            <form onSubmit={handleSubmit} className="mt-8 flex max-w-md flex-col gap-6 sm:flex-row" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[5px] border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-[5px] bg-accent px-6 py-3 text-sm font-normal text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-muted" role="status">
              {status === "submitted" ? "You're on the list." : write.subscribeNote}
            </p>
          </Reveal>
        </div>

        <PhotoReveal
          delay={0.2}
          from="right"
          eager
          style={{ aspectRatio: "6 / 5" }}
          className="w-full border border-border bg-surface-2"
          caption={
            <div
              className="absolute inset-0 flex flex-col justify-end px-8 pb-8"
              style={{
                background: "linear-gradient(180deg, rgba(22,19,15,0.15) 30%, rgba(22,19,15,0.88) 100%)",
              }}
            >
              <span className="inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-[10.5px] font-normal uppercase tracking-[1.89px] text-accent-foreground">
                {write.featured.issue}
              </span>
              <h2 className="mt-4 text-3xl font-normal leading-snug text-[#f4ede3]">
                The year every company
                <br />
                became an AI company —
                <br />
                and what that cost them
              </h2>
              <p className="mt-5 text-sm text-[#b8ada1]">{write.featured.body}</p>
              <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#f4ede3]/[0.22] pt-7">
                <span className="text-xs text-[#9a8f84]">{write.featured.meta}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f4ede3]/40 text-[#f4ede3]">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          }
        >
          <Photo src="/images/write/hero.jpg" alt={write.featured.title} className="h-full w-full" priority />
        </PhotoReveal>
      </div>
    </section>
  );
}

export function WriteCategoryLabels() {
  return (
    <section className="border-y border-paper-border bg-paper py-8">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <LogoMarquee items={write.categoryLabels} light />
      </div>
    </section>
  );
}

export function ArticleArchive() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", ...write.filters];

  const filtered = useMemo(() => {
    if (activeFilter === "All") return articles;
    return articles.filter((a) => a.tag === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-paper py-12 sm:py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow light>{write.library.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl lg:text-5xl">
              {write.library.title}
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
                className={`rounded-full border px-5 py-2.5 text-xs font-normal transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                  activeFilter === f
                    ? "border-[#8a5a34] bg-[#8a5a34] text-white"
                    : "border-paper-border text-paper-muted hover:text-paper-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {filtered.map((article) => (
            <motion.div
              key={article.title}
              variants={revealItem}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              layout
              className="block h-full overflow-hidden border border-paper-border bg-paper-surface"
            >
              <div className="relative">
                <Photo src={article.image} alt={article.title} className="aspect-[16/10]" light />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-normal uppercase tracking-wide text-foreground backdrop-blur-sm">
                  {article.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-normal leading-snug text-paper-foreground">{article.title}</h3>
                <p className="mt-2 text-sm text-paper-muted">{article.description}</p>
                <div className="mt-5 border-t border-paper-border pt-4 text-xs text-paper-muted">{article.meta}</div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-paper-muted">Nothing in this category yet.</p>
        )}

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[5px] border border-paper-border px-8 py-4 text-sm font-normal text-paper-foreground transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            Load more writing
          </button>
        </div>
      </div>
    </section>
  );
}

export function WhyIWrite() {
  return (
    <section className="bg-paper py-12 sm:py-14">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-10">
        <PhotoReveal className="aspect-[4/3] w-full border border-paper-border">
          <Photo src="/images/write/why-i-write.jpg" alt={write.whyIWrite.name} className="h-full w-full" light />
        </PhotoReveal>

        <Reveal delay={0.1}>
          <Eyebrow light>{write.whyIWrite.eyebrow}</Eyebrow>
          <span className="mt-9 block text-6xl leading-none text-paper-muted">&ldquo;</span>
          <p className="mt-1 text-balance text-2xl font-light leading-snug tracking-tight text-paper-foreground sm:text-3xl lg:text-4xl">
            {write.whyIWrite.quote}
          </p>
          <div className="mt-10 border-t border-paper-border pt-6">
            <div className="text-sm font-normal text-paper-foreground">{write.whyIWrite.name}</div>
            <div className="text-xs text-paper-muted">{write.whyIWrite.role}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Experiential() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitted");
  }

  return (
    <section className="border-t border-border bg-surface-2 pt-12 pb-0 sm:pt-14">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <Eyebrow>{write.experiential.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {write.experiential.title}
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted sm:text-base">{write.experiential.body}</p>

          <form onSubmit={handleSubmit} className="mt-8 flex max-w-md flex-col gap-6 sm:flex-row" noValidate>
            <label htmlFor="experiential-email" className="sr-only">
              Email address
            </label>
            <input
              id="experiential-email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[5px] border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center rounded-[5px] bg-accent px-6 py-3 text-sm font-normal text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
          {status === "submitted" && <p className="mt-2 text-xs text-accent">You&apos;re on the list.</p>}

          <div className="mt-7 flex flex-wrap gap-8 border-t border-border pt-6">
            {write.experiential.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-semibold text-accent">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <PhotoReveal
          delay={0.1}
          from="right"
          style={{ aspectRatio: "612 / 559" }}
          className="w-full border border-border"
        >
          <Photo src="/images/write/experiential.jpg" alt={write.experiential.title} className="h-full w-full" />
        </PhotoReveal>
      </div>
    </section>
  );
}
