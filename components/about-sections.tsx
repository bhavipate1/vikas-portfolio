"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";
import { ArrowUpRightIcon, BookIcon, LinkedInIcon, MailIcon, MicIcon, PhoneIcon } from "@/components/icons";
import { CountUp } from "@/components/count-up";
import { LogoMarquee } from "@/components/logo-marquee";
import { Photo } from "@/components/photo";
import { PhotoReveal } from "@/components/photo-reveal";
import { Reveal, RevealGroup, RevealWords, revealItem } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { Badge, Cta } from "@/components/ui";
import { about, site } from "@/lib/content";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

function PaperEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-base font-bold uppercase tracking-[3.91px] text-[#8a5a34]">{children}</span>
  );
}

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-2 pt-28 sm:pt-32 lg:min-h-[85vh] lg:flex lg:flex-col lg:justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, var(--accent-soft), transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <Reveal delay={0}>
            <Badge>{about.badge}</Badge>
          </Reveal>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <RevealWords text={about.headline[0]} delay={0.12} />{" "}
            <RevealWords
              text={about.headline[1]}
              delay={0.12 + about.headline[0].split(" ").length * 0.045}
              className="text-accent"
            />
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-balance text-base text-muted">{about.body}</p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {about.ctas.map((cta) => (
                <Cta key={cta.href} href={cta.href} style={cta.style as "solid" | "outline"}>
                  {cta.label}
                </Cta>
              ))}
            </div>
          </Reveal>
        </div>

        <PhotoReveal
          delay={0.2}
          from="right"
          className="aspect-[635/600] w-full border border-border"
          caption={
            <div
              className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5"
              style={{ background: "linear-gradient(to bottom, rgba(22,19,15,0) 50%, rgba(22,19,15,0.8) 100%)" }}
            >
              <div>
                <div className="text-base font-normal text-foreground">{about.photoCaption.name}</div>
                <div className="text-xs text-muted">{about.photoCaption.role}</div>
              </div>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vikas Surani on LinkedIn"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          }
        >
          <Photo src="/images/about/hero.jpg" alt={about.photoCaption.name} className="h-full w-full" priority />
        </PhotoReveal>
      </div>
    </section>
  );
}

export function AboutStats() {
  return (
    <section className="border-y border-overlay-border bg-background py-12">
      <RevealGroup className="mx-auto grid max-w-8xl grid-cols-2 gap-8 px-5 sm:grid-cols-4 sm:gap-0 sm:px-8 lg:px-10">
        {about.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={revealItem}
            className={`py-8 ${
              i === about.stats.length - 1 ? "pl-7 pt-8 pb-14" : i === 0 ? "pr-8" : "pl-7 pr-8"
            }`}
          >
            <CountUp value={stat.value} className="text-3xl font-semibold text-accent tabular-nums sm:text-4xl" />
            <div className="mt-1.5 max-w-[180px] text-xs leading-snug text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}

export function AboutIntro() {
  return (
    <section className="bg-paper py-12 sm:py-14">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.62fr_1fr] lg:gap-16 lg:px-10">
        <PhotoReveal
          className="aspect-[497/560] w-full border border-paper-border"
          caption={
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background/90 to-transparent p-5">
              <div>
                <div className="text-sm font-normal text-foreground">{about.photoCaption.name}</div>
                <div className="text-xs text-muted">Global VP, Mastek</div>
              </div>
              <div className="text-[10px] font-normal uppercase tracking-widest text-muted">
                Learn · Share · Inspire
              </div>
            </div>
          }
        >
          <Photo src="/images/about/intro.jpg" alt="Vikas Surani at Mastek" className="h-full w-full" />
        </PhotoReveal>

        <div>
          <Reveal>
            <p className="border-l-2 border-accent pl-9 text-balance text-[28px] font-light leading-[36px] tracking-[-1px] text-paper-foreground sm:text-[40px] sm:leading-[49.6px] sm:tracking-[-1.4px]">
              {about.intro}
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-11 sm:grid-cols-2">
            {about.thenNow.map((block, i) => (
              <Reveal key={block.label} delay={i * 0.1}>
                <PaperEyebrow>{block.label}</PaperEyebrow>
                <p className="mt-3.5 text-sm leading-relaxed text-paper-muted sm:text-base">{block.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="border-y border-paper-border bg-paper pt-6 pb-12 sm:pt-8 sm:pb-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <PaperEyebrow>{about.education.eyebrow}</PaperEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">
              {about.education.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-paper-muted sm:text-base">{about.education.description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mt-10 flex items-center">
          <span aria-hidden className="h-px w-full bg-paper-border" />
          <span className="absolute left-0 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          <span className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" aria-hidden />
          <span className="absolute right-0 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.06}>
          {about.education.items.map((item, i) => (
            <motion.div key={item.org} variants={revealItem} whileHover={{ y: -3 }} transition={{ duration: 0.25 }}>
              <TiltCard className="overflow-hidden border border-paper-border px-8 pt-9 pb-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-heading text-8xl font-semibold leading-none text-[#8a5a34]/5"
                >
                  {romanNumerals[about.education.items.length - 1 - i]}
                </span>
                <span className="relative inline-block rounded-[3px] bg-[#8a5a34] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {item.tag}
                </span>
                <h3 className="relative mt-7 text-lg font-normal text-paper-foreground">{item.org}</h3>
                <p className="relative mt-1 text-xs text-paper-muted">{item.program}</p>
                <p className="relative mt-5 text-sm text-paper-muted">{item.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 flex flex-col overflow-hidden bg-background sm:flex-row">
          <PhotoReveal
            vignette={false}
            className="h-64 w-full shrink-0 sm:h-auto sm:w-1/3"
            caption={
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/0 via-background/40 to-background"
              />
            }
          >
            <Photo
              src="/images/about/connect.jpg"
              alt="Vikas Surani in the audience"
              className="h-full w-full"
              objectPosition="5% center"
            />
          </PhotoReveal>
          <div className="flex flex-1 flex-col justify-center px-8 py-10 sm:px-12 sm:py-12">
            <p className="text-balance text-2xl font-light leading-snug tracking-tight text-foreground sm:text-3xl">
              {about.beyondDegrees.body}
            </p>
            <p className="mt-5 text-sm text-muted sm:text-base">{about.beyondDegrees.meta}</p>
            <p className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-xs text-muted">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/25 text-[10px]">
                i
              </span>
              {about.certsNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TurnsThatMattered() {
  const [active, setActive] = useState(0);
  const current = about.turns.items[active];

  return (
    <section id="turns" className="scroll-mt-24 border-y border-paper-border bg-paper py-12 sm:py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <PaperEyebrow>{about.turns.eyebrow}</PaperEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">
              {about.turns.subtitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-paper-muted sm:text-base">{about.turns.description}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <Reveal delay={0.1}>
            {about.turns.items.map((item, i) => (
              <motion.button
                key={item.year}
                type="button"
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`flex w-full flex-col gap-1.5 border-l-2 py-5 pl-5 text-left transition-colors sm:pl-6 ${
                  active === i ? "border-[#8a5a34]" : "border-paper-border"
                }`}
              >
                <span
                  className={`text-xs font-normal uppercase tracking-[0.18em] tabular-nums transition-colors ${
                    active === i ? "text-[#8a5a34]" : "text-paper-muted"
                  }`}
                >
                  {item.year}
                </span>
                <span
                  className={`text-base font-semibold leading-snug transition-colors sm:text-lg ${
                    active === i ? "text-paper-foreground" : "text-paper-muted"
                  }`}
                >
                  {item.title}
                </span>
              </motion.button>
            ))}
          </Reveal>

          <div className="relative overflow-hidden border border-paper-border bg-paper-surface p-8 sm:px-14 sm:pt-14 sm:pb-12">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-4 select-none font-heading text-[6rem] font-semibold leading-none tracking-tight text-paper-foreground/[0.06] sm:text-[8rem]"
            >
              {current.year}
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {current.tag ? (
                  <span className="inline-flex items-center rounded-full border border-paper-border px-3 py-1 text-xs uppercase tracking-wide text-accent">
                    {current.tag}
                  </span>
                ) : (
                  <span className="block h-[26px]" />
                )}
                <h3 className="mt-7 text-2xl font-semibold leading-snug text-paper-foreground sm:text-3xl">
                  {current.title}
                </h3>
                {current.school && <p className="mt-2 text-sm text-paper-muted">{current.school}</p>}
                {current.body && <p className="mt-4 text-sm leading-relaxed text-paper-muted sm:text-base">{current.body}</p>}
                <div className="mt-8 flex items-center justify-between gap-5 border-t border-paper-border pt-8">
                  <span aria-hidden />
                  <span className="text-xs uppercase tracking-wide text-paper-muted">
                    Turn {active + 1} of {about.turns.items.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValuesTested() {
  return (
    <section className="bg-background pt-12 text-foreground sm:pt-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{about.values.title}</h2>
          <p className="max-w-sm text-sm text-muted sm:text-base">{about.values.intro}</p>
        </Reveal>

        <div className="mt-12 divide-y divide-overlay-border border-y border-overlay-border">
          {about.values.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className={`group grid grid-cols-1 gap-2 pl-0 pr-4 transition-[padding] duration-300 hover:pl-4 sm:grid-cols-[28px_minmax(0,300px)_28px_1fr] sm:items-baseline sm:gap-8 ${
                  i === about.values.items.length - 1 ? "py-8" : "pt-8 pb-7"
                }`}
              >
                <span className="text-xs font-normal text-accent">{romanNumerals[i]}</span>
                <h3 className="text-xl font-normal">{item.title}</h3>
                <motion.span
                  variants={{ rest: { opacity: 0, x: -6 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.2 }}
                  className="hidden text-accent sm:block"
                  aria-hidden
                >
                  <ArrowUpRightIcon className="h-4 w-4" />
                </motion.span>
                <p className="max-w-xl text-sm text-muted sm:text-base">{item.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OtherHalf() {
  return (
    <section id="off-the-clock" className="scroll-mt-24 bg-background pt-10 pb-12 sm:pt-12 sm:pb-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="max-w-sm text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{about.otherHalf.title}</h2>
          <p className="max-w-sm text-sm text-muted sm:text-base">{about.otherHalf.subtitle}</p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.05} className="border border-border p-6 sm:p-9">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
              <BookIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-2xl font-normal">{about.otherHalf.reader.title}</h3>
            <p className="mt-3 max-w-lg text-sm text-muted sm:text-base">{about.otherHalf.reader.body}</p>
            <div className="mt-5 max-w-lg">
              <LogoMarquee items={about.otherHalf.reader.tags} />
            </div>
            <div className="mt-8 flex gap-6 border-t border-border pt-6">
              {about.otherHalf.reader.stats.map((stat) => (
                <div key={stat.label}>
                  <CountUp value={stat.value} className="text-2xl font-semibold text-accent tabular-nums" />
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <PhotoReveal
            delay={0.1}
            from="right"
            className="aspect-[636/384] w-full border border-border"
            caption={
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <span className="text-3xl leading-none text-accent">&ldquo;</span>
                <p className="mt-1 text-lg font-normal leading-snug text-balance">{about.otherHalf.quote.text}</p>
                <p className="mt-2 text-xs text-muted">{about.otherHalf.quote.meta}</p>
              </div>
            }
          >
            <Photo src="/images/about/beyond-degrees.jpg" alt="Vikas Surani on a panel at Karnavati University" className="h-full w-full" />
          </PhotoReveal>
        </div>

        <RevealGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {about.otherHalf.facts.map((fact) => (
            <motion.div
              key={fact.tag}
              variants={revealItem}
              whileHover={{ y: -4, borderColor: "var(--accent)" }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3.5 border-l border-border px-6 py-7"
            >
              <span className="text-xs font-normal uppercase tracking-wide text-accent">{fact.tag}</span>
              <h3 className="text-xl font-normal">{fact.title}</h3>
              <p className="text-sm text-muted">{fact.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function OnTheField() {
  return (
    <section className="border-y border-paper-border bg-paper pt-10 pb-12 sm:pt-12 sm:pb-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <PaperEyebrow>{about.onField.eyebrow}</PaperEyebrow>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">
              {about.onField.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-paper-muted sm:text-base">{about.onField.description}</p>
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {about.onField.sports.map((sport, i) => (
            <Reveal key={sport.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, borderColor: "var(--accent)" }}
                transition={{ duration: 0.25 }}
                className={`border-t border-[#8a5a34] pt-6 ${i > 0 ? "pb-7" : ""}`}
              >
                <span className="text-xs font-normal uppercase tracking-wide text-accent">{sport.tag}</span>
                <h3 className="mt-3 text-2xl font-normal text-paper-foreground">{sport.title}</h3>
                <p className="mt-4 text-sm text-paper-muted">{sport.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const connectIcons = { Email: MailIcon, Mobile: PhoneIcon, LinkedIn: LinkedInIcon, Speaking: MicIcon };

export function AboutConnect() {
  return (
    <section className="bg-paper pt-9 pb-0 sm:pt-10">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="bg-background p-6 sm:p-10 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {about.connect.eyebrow}
                </span>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {about.connect.title}
                </h2>
                <p className="mt-5 max-w-lg text-sm text-muted sm:text-base">{about.connect.body}</p>
              </Reveal>

              <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.06}>
                {about.connect.cards.map((card) => {
                  const Icon = connectIcons[card.label as keyof typeof connectIcons];
                  return (
                    <motion.a
                      key={card.label}
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      variants={revealItem}
                      whileHover={{ y: -3 }}
                      className={`rounded-2xl border p-4 transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                        card.highlight
                          ? "border-accent/30 bg-accent-soft hover:border-accent"
                          : "border-border bg-surface hover:border-accent"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      <div className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-muted">{card.label}</div>
                      <div className="mt-1 text-sm font-medium text-foreground">{card.value}</div>
                    </motion.a>
                  );
                })}
              </RevealGroup>
            </div>

            <PhotoReveal delay={0.15} from="right" className="aspect-[4/3] w-full border border-border">
              <Photo src="/images/about/other-half.jpg" alt="Vikas Surani in the audience with family" className="h-full w-full" />
            </PhotoReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
