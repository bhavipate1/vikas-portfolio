"use client";

import { motion } from "framer-motion";
import { Photo } from "@/components/photo";
import { PhotoReveal } from "@/components/photo-reveal";
import { Reveal, RevealGroup, RevealWords, revealItem } from "@/components/reveal";
import { Badge, Eyebrow } from "@/components/ui";
import { learner } from "@/lib/content";

export function LearnerHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-32 lg:min-h-[78vh] lg:flex lg:flex-col lg:justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, var(--accent-soft), transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <Reveal delay={0} eager>
            <Badge>{learner.badge}</Badge>
          </Reveal>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <RevealWords text={learner.headline[0]} delay={0.12} />{" "}
            <RevealWords text={learner.headline[1]} delay={0.2} className="font-light text-accent" />
          </h1>
          <Reveal delay={0.4} eager>
            <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-muted">{learner.body}</p>
          </Reveal>
        </div>

        <PhotoReveal delay={0.2} from="right" eager className="aspect-[6/5] w-full border border-border bg-surface-2">
          <Photo src="/images/about/beyond-degrees.jpg" alt="Vikas Surani's learning journey" className="h-full w-full" priority />
        </PhotoReveal>
      </div>
    </section>
  );
}

export function LearnerJourney() {
  return (
    <section id="learning-journey" className="border-t border-border bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>{learner.journey.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {learner.journey.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{learner.journey.intro}</p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {learner.journey.items.map((item, index) => (
            <motion.article
              key={item.title}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="flex h-full flex-col border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">{item.year}</span>
                <span className="text-xs tabular-nums text-muted">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-xl font-normal">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
