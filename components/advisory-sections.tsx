"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import {
  ArrowUpRightIcon,
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  CoffeeIcon,
  HeartIcon,
  UserIcon,
  UserPlusIcon,
} from "@/components/icons";
import { CountUp } from "@/components/count-up";
import { Photo } from "@/components/photo";
import { PhotoReveal } from "@/components/photo-reveal";
import { Reveal, RevealGroup, RevealWords, revealItem } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { Badge, Cta, Eyebrow } from "@/components/ui";
import { advisory, site } from "@/lib/content";
import { scrollToRequestForm, useAdvisoryForm } from "@/components/advisory-form-context";

const stepIcons = { calendar: CalendarIcon, heart: HeartIcon, chat: ChatIcon };

function DashArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 14" fill="none" className={`w-14 text-paper-muted ${className}`} aria-hidden>
      <path d="M5 7H41" stroke="currentColor" strokeWidth="1.3" strokeDasharray="4 4" />
      <path d="M39 2.5L45 7L39 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AdvisoryHero() {
  const { setTopic } = useAdvisoryForm();
  const [heroTopic, setHeroTopic] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:min-h-[85vh] lg:flex lg:flex-col lg:justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, var(--accent-soft), transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <Reveal delay={0}>
            <Badge>{advisory.badge}</Badge>
          </Reveal>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl">
            <RevealWords text={advisory.headline[0]} delay={0.12} />
            <br />
            <RevealWords text={advisory.headline[1]} delay={0.2} className="text-accent font-light" />
          </h1>
          <Reveal delay={0.42}>
            <p className="mt-6 max-w-lg text-balance text-base text-muted">{advisory.body}</p>
          </Reveal>

          <Reveal delay={0.52}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {advisory.ctas.map((cta) => (
                <Cta key={cta.href} href={cta.href} style={cta.style as "solid" | "outline"}>
                  {cta.label}
                </Cta>
              ))}
            </div>
          </Reveal>

          <RevealGroup
            className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6"
            stagger={0.08}
          >
            {advisory.stats.map((stat) => (
              <motion.div key={stat.label} variants={revealItem}>
                <CountUp value={stat.value} className="text-2xl font-semibold text-accent tabular-nums" />
                <div className="mt-1.5 text-xs text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <PhotoReveal
          delay={0.2}
          from="right"
          eager
          className="aspect-[616/568] w-full border border-border"
          caption={
            <div className="absolute inset-x-4 bottom-4 border border-white/15 bg-background/75 px-6 py-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <HeartIcon className="h-4 w-4" />
                </span>
                <div className="text-sm font-semibold text-foreground">{advisory.photoCard.title}</div>
              </div>
              <p className="mt-3.5 text-xs leading-relaxed text-muted">{advisory.photoCard.body}</p>
            </div>
          }
        >
          <Photo src="/images/advisory/hero.jpg" alt={advisory.photoCard.title} className="h-full w-full" priority />
        </PhotoReveal>
      </div>

      <div className="mt-12 border-t border-paper-border bg-paper">
        <RevealGroup
          className="mx-auto flex max-w-8xl flex-wrap justify-center px-5 sm:flex-nowrap sm:px-8 lg:px-10"
          stagger={0.05}
        >
          {advisory.categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              variants={revealItem}
              onClick={() => {
                setTopic(category);
                setHeroTopic(category);
                scrollToRequestForm();
              }}
              aria-pressed={heroTopic === category}
              className={`flex-1 px-5 py-7 text-center text-xs font-normal uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                heroTopic === category ? "text-accent" : "text-paper-muted hover:text-paper-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function AdvisoryHowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-y border-paper-border bg-paper py-12 sm:py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow light>{advisory.howItWorks.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl lg:text-5xl">
            {advisory.howItWorks.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 divide-y divide-paper-border border-y border-paper-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {advisory.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[step.icon as keyof typeof stepIcons];
            return (
              <motion.div
                key={step.title}
                variants={revealItem}
                className={`flex flex-col gap-3 px-8 pt-9 transition-colors duration-300 ease-out hover:bg-paper-surface ${i === 1 ? "pb-10" : "pb-16"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-[#8a5a34] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm text-paper-border">0{i + 1}</span>
                </div>
                <h3 className="pt-10 text-xl font-normal text-paper-foreground">{step.title}</h3>
                <p className="text-sm text-paper-muted">{step.body}</p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export function AdvisoryImpact() {
  const flow = advisory.impact.flow;
  return (
    <section id="contributions" className="scroll-mt-24 bg-paper pt-14 sm:pt-20">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow light>{advisory.impact.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl lg:text-5xl">{advisory.impact.title}</h2>
          </div>
          <p className="max-w-sm text-sm text-paper-muted">{advisory.impact.disclaimer}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 border border-paper-border bg-paper-surface p-8 sm:px-10 sm:pt-16 sm:pb-9">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <Eyebrow light>{advisory.impact.moneyGoesEyebrow}</Eyebrow>
            <p className="text-sm text-paper-muted">{advisory.impact.moneyGoesNote}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-0">
            <div className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#8a5a34]/35 bg-[#8a5a34]/5 text-[#8a5a34]">
                <UserPlusIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-normal text-paper-foreground">{flow[0].title}</h3>
              <p className="mt-1.5 text-sm text-paper-muted">{flow[0].body}</p>
            </div>

            <DashArrow className="hidden sm:block" />

            <div className="bg-surface-2 px-6 py-7 text-center">
              <span className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full bg-accent text-accent-foreground">
                <HeartIcon className="h-6 w-6" />
              </span>
              <div className="mt-3 font-heading text-3xl font-semibold text-foreground">{flow[1].value}</div>
              <h3 className="mt-1 text-sm font-normal text-accent">{flow[1].title}</h3>
              <p className="mt-2 text-xs text-muted">{flow[1].body}</p>
            </div>

            <DashArrow className="hidden sm:block" />

            <div className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-paper-muted/60 text-xl font-normal text-paper-muted">
                {flow[2].value}
              </span>
              <h3 className="mt-4 text-lg font-normal text-paper-foreground">{flow[2].title}</h3>
              <p className="mt-1.5 text-sm text-paper-muted">{flow[2].body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AdvisoryCause() {
  return (
    <section className="bg-paper py-6 sm:py-7">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-12 bg-background p-8 text-foreground sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-11">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Eyebrow>{advisory.cause.eyebrow}</Eyebrow>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] font-normal uppercase tracking-wide text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Live tally
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {advisory.cause.title}
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">{advisory.cause.body}</p>

          <div className="mt-8">
            <div className="flex items-baseline gap-2.5">
              <span className="font-heading text-5xl font-semibold text-accent">₹0</span>
              <span className="text-sm text-muted">{advisory.cause.progress.raisedLabel}</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border/40">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#8a5a34] to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />
            </div>
            <div className="mt-2 flex flex-col gap-1 text-xs text-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <span>{advisory.cause.progress.note}</span>
              <span className="shrink-0">{advisory.cause.progress.goalLabel}</span>
            </div>
          </div>

          <div className="mt-8 flex gap-10 border-t border-border pt-7">
            {advisory.cause.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <div className="font-heading text-2xl font-semibold">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <PhotoReveal
          delay={0.1}
          from="right"
          className="aspect-[4/3] w-full border border-border"
          caption={
            <>
              <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-normal uppercase tracking-wide text-muted backdrop-blur-sm">
                {advisory.partners.announcedLabel}
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-5">
                <div className="text-xl font-normal text-foreground">{advisory.cause.photoCaption.title}</div>
                <p className="mt-1 text-xs text-muted">{advisory.cause.photoCaption.meta}</p>
              </div>
            </>
          }
        >
          <Photo src="/images/advisory/cause.jpg" alt={advisory.cause.photoCaption.title} className="h-full w-full" />
        </PhotoReveal>
      </div>
      </div>
    </section>
  );
}

export function AdvisoryOffers() {
  const { tier, tierTouched, setTier } = useAdvisoryForm();
  const selectedOffer = advisory.offers.find((o) => o.title === tier) ?? advisory.offers[0];

  return (
    <section className="bg-paper pt-6 pb-5 sm:pt-7 sm:pb-6">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-10 lg:px-10">
        <RevealGroup className="flex flex-col gap-3.5">
          {advisory.offers.map((offer) => {
            const selected = tierTouched && tier === offer.title;
            return (
              <motion.button
                key={offer.title}
                type="button"
                variants={revealItem}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setTier(offer.title);
                  scrollToRequestForm();
                }}
                aria-pressed={selected}
                className={`flex w-full items-start gap-5 border border-l-4 border-paper-border bg-paper-surface py-7 pl-8 pr-7 text-left transition-colors ${
                  selected ? "border-l-accent bg-accent-soft/40" : "border-l-paper-border hover:border-l-accent/60"
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[3px] ${
                    selected ? "bg-[#8a5a34] text-white" : "bg-[#8a5a34]/10 text-[#8a5a34]"
                  }`}
                >
                  <CoffeeIcon className="h-[22px] w-[22px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-normal text-paper-foreground">{offer.title}</h3>
                      <span className="rounded-full border border-[#8a5a34]/30 bg-[#8a5a34]/10 px-2.5 py-[5px] text-[11px] font-normal uppercase tracking-wide text-[#8a5a34]">
                        {offer.badge}
                      </span>
                    </div>
                    <span className="text-sm text-paper-muted">
                      <span className="font-semibold text-paper-foreground">{offer.price}</span> {offer.priceUnit}
                    </span>
                  </div>
                  <p className="mt-2 max-w-lg text-sm text-paper-muted">{offer.description}</p>
                  <p className="mt-3 text-xs text-[#8a5a34]">→ {offer.impact}</p>
                </div>
              </motion.button>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1} className="lg:sticky lg:top-28">
          <div className="border border-border bg-surface-2 p-6 sm:p-8">
            <Eyebrow>{advisory.contribution.eyebrow}</Eyebrow>
            <div className="mt-3 flex items-center gap-3.5">
              <span className="flex -space-x-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-surface-2 bg-accent-soft text-accent">
                  <UserIcon className="h-5 w-5" />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-surface-2 bg-accent-soft text-accent">
                  <UserIcon className="h-5 w-5" />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-surface-2 bg-accent-soft text-accent">
                  <UserIcon className="h-5 w-5" />
                </span>
              </span>
              <span className="text-xs text-muted">{advisory.contribution.roomsNote}</span>
            </div>
            <div className="mt-4 text-xl font-normal text-foreground">{selectedOffer.title}</div>
            <div className="mt-1 text-sm text-muted">{advisory.contribution.perUnit}</div>
            <div className="mt-4 flex items-baseline gap-1.5 border-t border-border pt-6">
              <span className="font-heading text-5xl font-semibold text-accent">{selectedOffer.price}</span>
              <span className="text-xs text-muted">{advisory.contribution.toTheCause}</span>
            </div>

            <div className="mt-5 border border-border bg-surface p-4">
              <div className="text-xs font-normal uppercase tracking-wide text-muted">
                {advisory.contribution.impactLabel}
              </div>
              <p className="mt-1 text-sm text-foreground">{selectedOffer.impact}</p>
            </div>

            <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
              {advisory.contribution.checklist.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => {
                setTier(selectedOffer.title);
                scrollToRequestForm();
              }}
              className="mt-6 inline-flex w-full items-center justify-center rounded-[5px] bg-accent px-6 py-4 text-sm font-normal text-accent-foreground transition-shadow hover:shadow-[0_14px_30px_-12px_rgba(201,154,102,0.55)]"
            >
              {advisory.contribution.ctaLabel}
            </motion.button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-overlay-muted">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0">
                <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {advisory.contribution.footnote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AdvisoryPartners() {
  return (
    <section className="border-y border-paper-border bg-paper pt-6 pb-12 sm:pt-7 sm:pb-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow light>{advisory.partners.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">
              {advisory.partners.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-paper-muted sm:text-base">{advisory.partners.intro}</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {advisory.partners.items.map((item) => (
            <motion.div key={item.tag} variants={revealItem} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <TiltCard className="overflow-hidden border border-paper-border bg-paper-surface transition-colors duration-300 ease-out hover:border-[#8a5a34]/40">
                <Photo src={item.image} alt={item.org} className="aspect-[435/190]" light />
                <div className="p-6">
                  <span className="text-[11px] font-normal uppercase tracking-wide text-[#8a5a34]">{item.tag}</span>
                  <h3 className="mt-2 text-lg font-normal text-paper-foreground">{item.org}</h3>
                  <p className="mt-2 text-sm text-paper-muted">{item.description}</p>
                  <p className="mt-4 flex items-center gap-1.5 border-t border-paper-border pt-4 text-xs text-[#8a5a34]">
                    {item.status}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function AdvisoryPrinciples() {
  return (
    <section className="border-y border-border bg-surface-2 py-12 sm:py-14">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-10">
        <PhotoReveal
          className="aspect-[4/3] w-full border border-border"
          caption={
            <span className="absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-normal uppercase tracking-wide text-muted backdrop-blur-sm">
              {advisory.partners.announcedLabel}
            </span>
          }
        >
          <Photo src="/images/advisory/cause.jpg" alt={advisory.principles.title} className="h-full w-full" />
        </PhotoReveal>

        <div>
          <Reveal>
            <Eyebrow>{advisory.principles.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{advisory.principles.title}</h2>
            <p className="mt-4 max-w-lg text-sm text-muted sm:text-base">{advisory.principles.body}</p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.06}>
            {advisory.principles.items.map((item) => (
              <motion.div key={item.title} variants={revealItem} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                <TiltCard className="border border-border bg-surface p-6 transition-colors duration-300 ease-out hover:border-accent/40 hover:bg-surface-2">
                  <h3 className="text-base font-normal">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-paper py-12 sm:py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
          {advisory.testimonials.map((t) => (
            <motion.figure key={t.name} variants={revealItem}>
              <TiltCard className="border border-paper-border bg-paper-surface p-11">
              <span className="text-3xl text-[#8a5a34]">&ldquo;</span>
              <blockquote className="text-lg font-normal leading-snug text-balance text-paper-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm text-paper-muted">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8a5a34]/10 text-xs font-normal text-[#8a5a34]">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span>
                  <span className="block font-normal text-paper-foreground">{t.name}</span>
                  <span className="block text-xs text-paper-muted">{t.meta}</span>
                </span>
              </figcaption>
              </TiltCard>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function AdvisoryForm() {
  const { topic, setTopic, tier, setTier } = useAdvisoryForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email doesn't look right.";
    if (!message.trim()) next.message = "Tell me what you're facing.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: `Advisory hour · ${topic} · ${tier}`, name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const fieldBase =
    "w-full rounded-xl border bg-paper px-4 py-3 text-sm text-paper-foreground placeholder:text-paper-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <section id="request" className="scroll-mt-24 border-t border-paper-border bg-paper py-12 sm:py-14">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <Reveal>
          <Eyebrow light>{advisory.form.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">
            {advisory.form.title}
          </h2>
          <p className="mt-4 max-w-md text-sm text-paper-muted sm:text-base">{advisory.form.body}</p>

          <PhotoReveal
            className="mt-8 aspect-[574/320] w-full border border-paper-border"
            caption={
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                <span className="text-sm font-normal text-foreground">{advisory.form.photoCaption}</span>
              </div>
            }
          >
            <Photo src="/images/advisory/form.jpg" alt={advisory.form.photoCaption} className="h-full w-full" light />
          </PhotoReveal>

          <div className="mt-6 flex flex-wrap gap-6 border-t border-paper-border pt-7">
            <div className="flex flex-col gap-2">
              <div className="text-sm font-normal text-paper-foreground">Email</div>
              <a href={`mailto:${site.email}`} className="text-sm text-paper-muted hover:text-accent">
                {site.email}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-normal text-paper-foreground">LinkedIn</div>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-paper-muted hover:text-accent">
                {site.linkedinHandle}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 space-y-6 border border-paper-border bg-paper-surface p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="adv-name" className="mb-1.5 block text-sm font-normal text-paper-foreground">
                  Name
                </label>
                <input
                  id="adv-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  className={`${fieldBase} ${errors.name ? "border-red-500" : "border-paper-border"}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="adv-email" className="mb-1.5 block text-sm font-normal text-paper-foreground">
                  Email
                </label>
                <input
                  id="adv-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  className={`${fieldBase} ${errors.email ? "border-red-500" : "border-paper-border"}`}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <span className="mb-2 block text-sm font-normal text-paper-foreground">{advisory.form.topicLabel}</span>
              <div className="flex flex-wrap gap-2">
                {advisory.categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setTopic(category)}
                    aria-pressed={topic === category}
                    className={`rounded-full border px-4 py-1.5 text-xs font-normal transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      topic === category
                        ? "border-[#8a5a34] bg-[#8a5a34]/10 text-[#8a5a34]"
                        : "border-paper-border text-paper-muted hover:text-paper-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-2 block text-sm font-normal text-paper-foreground">{advisory.form.contributionLabel}</span>
              <div className="flex flex-wrap gap-2">
                {advisory.offers.map((offer) => (
                  <button
                    key={offer.title}
                    type="button"
                    onClick={() => setTier(offer.title)}
                    aria-pressed={tier === offer.title}
                    className={`rounded-full border px-4 py-1.5 text-xs font-normal transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      tier === offer.title
                        ? "border-[#8a5a34] bg-[#8a5a34]/10 text-[#8a5a34]"
                        : "border-paper-border text-paper-muted hover:text-paper-foreground"
                    }`}
                  >
                    {offer.title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="adv-message" className="mb-1.5 block text-sm font-normal text-paper-foreground">
                {advisory.form.contextLabel}
              </label>
              <textarea
                id="adv-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={Boolean(errors.message)}
                className={`${fieldBase} resize-none ${errors.message ? "border-red-500" : "border-paper-border"}`}
                placeholder={advisory.form.contextPlaceholder}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            <p className="flex items-start gap-2 border border-[#8a5a34]/20 bg-[#8a5a34]/5 px-4 py-3 text-xs text-paper-muted">
              <HeartIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8a5a34]" />
              100% of the {tier.toLowerCase()} contribution is donated — nothing is retained as a fee.
            </p>

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-accent px-6 py-3.5 text-sm font-normal text-accent-foreground transition-shadow hover:shadow-[0_14px_30px_-12px_rgba(201,154,102,0.55)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? "Sending..." : advisory.form.submitLabel}
            </motion.button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="text-sm text-accent"
                >
                  Thanks — that&apos;s in. I&apos;ll reply from {site.email} within 48 hours.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="text-sm text-red-400"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function AdvisoryFaq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: advisory.faq.items
      .filter((item) => item.answer)
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
  };

  return (
    <section className="border-t border-paper-border bg-paper pt-12 pb-8 sm:pt-14 sm:pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.4fr_1fr] lg:gap-16 lg:px-10">
        <Reveal>
          <Eyebrow light>{advisory.faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">
            {advisory.faq.title}
          </h2>
        </Reveal>

        <RevealGroup className="divide-y divide-paper-border border-y border-paper-border" stagger={0.04}>
          {advisory.faq.items.map((item, i) => {
            const isOpen = open === i;
            const hasAnswer = Boolean(item.answer);
            return (
              <motion.div key={item.question} variants={revealItem}>
                <button
                  type="button"
                  disabled={!hasAnswer}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left disabled:cursor-default"
                >
                  <span className="text-lg font-normal text-paper-foreground">{item.question}</span>
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center text-[#8a5a34]">
                    <span className="absolute h-[1.5px] w-3.5 rounded-full bg-current" />
                    <motion.span
                      animate={{ scaleY: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute h-3.5 w-[1.5px] rounded-full bg-current"
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && hasAnswer && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-paper-muted sm:text-base">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
