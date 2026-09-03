"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import {
  ArrowUpRightIcon,
  BarsIcon,
  CheckIcon,
  ChipIcon,
  GlobeIcon,
  LightbulbIcon,
  LinkedInIcon,
  MicIcon,
  SparkleIcon,
  UserIcon,
  WrenchIcon,
} from "@/components/icons";
import { LogoMarquee } from "@/components/logo-marquee";
import { Photo } from "@/components/photo";
import { PhotoReveal } from "@/components/photo-reveal";
import { Reveal, RevealGroup, RevealWords, revealItem } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { ArrowLink, Badge, Cta, Eyebrow } from "@/components/ui";
import { articles, home, site } from "@/lib/content";

const statIcons = {
  mic: MicIcon,
  sparkle: SparkleIcon,
  user: UserIcon,
  bars: BarsIcon,
  chip: ChipIcon,
  bulb: LightbulbIcon,
  wrench: WrenchIcon,
  globe: GlobeIcon,
};
const formatIcons = [MicIcon, UserIcon, BarsIcon];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:min-h-[calc(100dvh-0px)] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:py-24 lg:pt-24 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge>{home.badge}</Badge>
          </motion.div>

          <h1 className="mt-4 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[76px] lg:leading-[74.48px] lg:tracking-[-3.04px]">
            <RevealWords text={home.headline[0]} delay={0.1} />
            <br />
            <RevealWords text={home.headline[1].split(" ").slice(0, -1).join(" ")} delay={0.145} />{" "}
            <RevealWords
              text={home.headline[1].split(" ").slice(-1).join(" ")}
              delay={0.19}
              className="font-light text-accent"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[480px] text-base text-muted sm:text-lg"
          >
            {home.sub}
          </motion.p>

          <RevealGroup className="mt-8 grid max-w-[518px] grid-cols-2 gap-3" stagger={0.08}>
            {home.stats.map((stat) => {
              const Icon = statIcons[stat.icon as keyof typeof statIcons];
              return (
                <motion.div
                  key={stat.title}
                  variants={revealItem}
                  className="flex items-center gap-3 rounded-md bg-overlay-soft px-4 py-[14px] outline outline-1 outline-overlay-border"
                >
                  <Icon className="h-5 w-5 shrink-0 text-accent" />
                  <div className="min-w-0">
                    <div className="font-heading text-[13.5px] leading-tight text-overlay">{stat.title}</div>
                    <div className="mt-[3px] text-[11.5px] leading-tight text-overlay-muted">{stat.meta}</div>
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {home.ctas.map((cta) => (
              <Cta key={cta.href} href={cta.href} style={cta.style as "solid" | "outline"}>
                {cta.label}
              </Cta>
            ))}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vikas Surani on LinkedIn"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[5px] border border-border text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="relative min-h-[50vh] lg:min-h-0">
          <PhotoReveal delay={0.15} from="right" className="absolute inset-0 h-full w-full">
            <Photo src="/images/home/hero-bg.jpg" alt="Vikas Surani speaking on a panel" className="h-full w-full" priority />
          </PhotoReveal>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, #16130f 0%, rgba(22,19,15,0.5) 20%, rgba(22,19,15,0) 48%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export function LogoStrip() {
  return (
    <section className="border-y border-paper-border bg-paper py-8">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <LogoMarquee items={home.logos} light direction="rtl" />
      </div>
    </section>
  );
}

export function SpeakAbout() {
  return (
    <section className="bg-paper pt-16 pb-0">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow light>{home.speakAbout.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-paper-foreground sm:text-4xl lg:text-[44px] lg:leading-tight">
            {home.speakAbout.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {home.speakAbout.topics.map((topic, i) => {
            const TopicIcon = statIcons[topic.icon as keyof typeof statIcons];
            return (
            <motion.div key={topic.title} variants={revealItem} whileHover={{ y: -4 }} className="group">
              <TiltCard
                className="overflow-hidden border border-paper-border bg-paper-surface p-8 text-paper-foreground transition-colors duration-300 ease-out hover:border-transparent hover:bg-surface-2 hover:text-foreground sm:p-[37px]"
              >
                <div className="relative flex items-center gap-[26px]">
                  <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[3px] bg-[#8a5a34] text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <TopicIcon className="h-6 w-6" />
                  </span>
                  <h3 className="flex-1 text-xl font-normal">{topic.title}</h3>
                  <span className="text-xs text-paper-muted/70 transition-colors duration-300 group-hover:text-muted/70">
                    0{i + 1}
                  </span>
                </div>
                <p className="relative mt-3 text-sm text-paper-muted transition-colors duration-300 group-hover:text-muted">
                  {topic.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-paper-border pt-5 transition-colors duration-300 group-hover:border-border">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs text-paper-muted outline outline-1 outline-stone-900/10 transition-colors duration-300 group-hover:text-stone-300 group-hover:outline-[#F4EDE3]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="relative mt-3 text-[11px] tracking-wide text-paper-muted/70 transition-opacity duration-300 group-hover:opacity-0">
                  Sample talk titles
                </p>
              </TiltCard>
            </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section className="bg-paper pt-20 sm:pt-28 pb-14">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow light>{home.about.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl lg:text-[44px] lg:leading-tight">{home.about.title}</h2>
          <p className="max-w-lg text-sm leading-relaxed text-paper-muted sm:text-base">{home.about.body}</p>
          <Link
            href={home.about.link.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            {home.about.link.label.toUpperCase()} <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <PhotoReveal
          delay={0.1}
          from="right"
          vignette={false}
          style={{ aspectRatio: "697 / 560" }}
          className="w-full border border-paper-border"
          caption={
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(22,19,15,0.4) 0%, rgba(22,19,15,0) 34%, rgba(22,19,15,0.9) 100%)",
                }}
              />
              <span className="absolute left-6 top-6 rounded-full bg-background/80 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted backdrop-blur-sm">
                {home.about.photoBadge}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex gap-5 border-t border-foreground/25 bg-gradient-to-t from-background to-background/70 px-7 pt-6 pb-7 backdrop-blur-sm">
                {home.about.photoStats.map((stat) => (
                  <div key={stat.label} className="flex-1 text-left">
                    <div className="font-heading text-5xl font-semibold text-accent">{stat.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-wide text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </>
          }
        >
          <Photo src="/images/home/about-teaser.jpg" alt="Vikas Surani at IIM Ahmedabad" className="h-full w-full" />
        </PhotoReveal>
      </div>
    </section>
  );
}

export function FourAreas() {
  return (
    <section className="bg-paper pb-2">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="border border-paper-border bg-paper-surface p-6 sm:px-12 sm:pt-12 sm:pb-10">
          <Reveal className="flex flex-col justify-between gap-4 pb-7 sm:flex-row sm:items-end">
            <Eyebrow light>{home.fourAreas.eyebrow}</Eyebrow>
            <p className="text-sm text-paper-muted">{home.fourAreas.subtitle}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2">
            {home.fourAreas.items.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.06} className="flex items-start gap-4 border-t border-paper-border pt-6">
                <span className="font-heading text-3xl font-semibold text-paper-foreground/10 shrink-0">{item.n}</span>
                <div>
                  <h3 className="text-xl font-normal text-paper-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-paper-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function InTheRoom() {
  return (
    <section className="bg-paper pt-0 pb-10">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-lg">
            <Eyebrow light>{home.inTheRoom.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-paper-foreground sm:text-4xl">
              {home.inTheRoom.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm text-paper-muted sm:text-base">{home.inTheRoom.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-[1.6fr_1fr]">
          <PhotoReveal
            delay={0.1}
            vignette={false}
            className="group aspect-[4/3] w-full border border-paper-border sm:aspect-auto"
            caption={
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.span>
              </span>
            }
          >
            <Photo src="/images/home/on-stage.jpg" alt="Vikas Surani on stage at TEDx" className="h-full w-full" />
          </PhotoReveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-rows-[1fr_1fr]">
            <PhotoReveal delay={0.15} from="right" vignette={false} className="col-span-2 aspect-[517/230] w-full border border-paper-border">
              <Photo src="/images/home/on-stage-panel.jpg" alt="Vikas Surani on a panel discussion" className="h-full w-full" />
            </PhotoReveal>
            <PhotoReveal delay={0.2} from="right" vignette={false} className="aspect-[250/230] w-full border border-paper-border">
              <Photo src="/images/home/on-stage-award.jpg" alt="Vikas Surani receiving an award" className="h-full w-full" />
            </PhotoReveal>
            <PhotoReveal delay={0.25} from="right" vignette={false} className="aspect-[250/230] w-full border border-paper-border">
              <Photo src="/images/home/on-stage-audience.jpg" alt="Vikas Surani in conversation at an event" className="h-full w-full" />
            </PhotoReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuoteStats() {
  return (
    <section className="border-y border-border bg-surface-2 pt-14 pb-14 sm:pb-16">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[400px_1fr] lg:items-center lg:gap-20 lg:px-10">
        <PhotoReveal
          vignette={false}
          className="mx-auto aspect-[496/384] w-full max-w-[400px] rounded-xs border border-border lg:mx-0"
          caption={
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(22,19,15,0) 55%, rgba(22,19,15,0.75) 100%)",
                }}
              />
              <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {home.quote.watchLabel}
              </span>
            </>
          }
        >
          <Photo src="/images/home/quote.jpg" alt={site.name} className="h-full w-full" />
        </PhotoReveal>

        <div>
          <Reveal delay={0.1}>
            <span className="text-5xl leading-none text-accent">&ldquo;</span>
            <p className="text-balance text-2xl font-light leading-snug tracking-tight sm:text-[28px] lg:text-3xl">
              {home.quote.text}
            </p>
            <div className="mt-9 flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                <Photo src="/images/home/quote-avatar.jpg" alt={site.name} className="h-full w-full" />
              </div>
              <div>
                <div className="text-sm font-normal text-foreground">{site.name}</div>
                <div className="text-xs text-muted">TEDx · Narayana Business School</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Formats() {
  return (
    <section id="formats" className="scroll-mt-24 bg-paper pt-10 pb-10">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <Eyebrow light>{home.formats.eyebrow}</Eyebrow>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {home.formats.items.map((format, i) => {
            const FormatIcon = formatIcons[i % formatIcons.length];
            return (
            <motion.div
              key={format.title}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col overflow-hidden border border-paper-border bg-paper-surface p-[34px] text-paper-foreground transition-colors duration-300 ease-out hover:border-border hover:bg-background hover:text-foreground"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-semibold text-paper-border transition-colors duration-300 group-hover:text-muted/15"
              >
                0{i + 1}
              </span>

              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <FormatIcon className="h-[19px] w-[19px]" />
                </span>
                <span className="inline-flex w-fit items-center rounded-full border border-paper-border px-3 py-1 text-xs uppercase tracking-wide text-accent transition-colors duration-300 group-hover:border-border">
                  {format.duration}
                </span>
              </div>

              <h3 className="relative mt-[30px] text-xl font-normal">{format.title}</h3>
              <p className="relative mt-4 text-sm text-paper-muted transition-colors duration-300 group-hover:text-muted">
                {format.description}
              </p>
              <ul className="relative mt-7 space-y-2.5">
                {format.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-paper-foreground/90 transition-colors duration-300 group-hover:text-foreground/90"
                  >
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="relative mt-auto flex items-center gap-1.5 border-t border-paper-border pt-5 text-xs text-paper-muted transition-colors duration-300 group-hover:border-border group-hover:text-muted">
                {format.bestFor}
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </span>
            </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export function Perspectives() {
  return (
    <section className="bg-paper pt-14 pb-0 sm:pt-16">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <Eyebrow light>{home.perspectives.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">
              {home.perspectives.title}
            </h2>
          </div>
          <ArrowLink href="/write" light>
            All writing
          </ArrowLink>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {articles.filter((a) => a.homeFeatured).map((article) => (
            <motion.div
              key={article.title}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="overflow-hidden border border-paper-border bg-paper-surface"
            >
              <div className="relative">
                <Photo src={article.image} alt={article.title} className="aspect-[24/11]" light />
                <span className="absolute left-3 top-3 rounded-full bg-paper-surface/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  {article.tag === "Field note" ? "Note" : article.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-normal leading-snug text-paper-foreground">{article.title}</h3>
                <p className="mt-3 text-sm text-paper-muted">{article.description}</p>
                <div className="mt-4 border-t border-paper-border pt-4 text-xs text-paper-muted">
                  {article.meta.includes("·") ? article.meta.split("·").pop()?.trim() : article.meta}
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="border-t border-paper-border bg-paper pt-20 sm:pt-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
          {home.testimonials.map((t) => (
            <motion.figure key={t.name} variants={revealItem}>
              <TiltCard className="border border-paper-border bg-paper-surface p-10">
              <div className="flex gap-0.5 text-[#8a5a34] tracking-[2.60px]" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="mt-7 text-xl font-normal leading-snug text-balance text-paper-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 text-sm text-paper-muted">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
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

type HomeContactStatus = "idle" | "submitting" | "success" | "error";

export function HomeContact() {
  const [ask, setAsk] = useState(home.homeContact.askOptions[0]);
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<HomeContactStatus>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !details.trim()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: ask, name, email, organisation, message: details }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setOrganisation("");
      setEmail("");
      setDetails("");
    } catch {
      setStatus("error");
    }
  }

  const fieldBase =
    "w-full rounded-xl border border-paper-border bg-paper-surface px-4 py-3 text-sm text-paper-foreground placeholder:text-paper-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <section className="bg-paper pt-16 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow light>{home.homeContact.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">{home.homeContact.title}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.05}>
            <PhotoReveal
              vignette={false}
              className="aspect-[71/40] w-full border border-paper-border sm:aspect-[71/40]"
              caption={
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(60,36,20,0.05) 0%, rgba(60,36,20,0.6) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg font-normal text-foreground">
                      {home.homeContact.photoCard.title}
                      <br />
                      {home.homeContact.photoCard.titleLine2}
                    </h3>
                  </div>
                  <span className="absolute bottom-[26px] right-[26px] flex h-[46px] w-[46px] items-center justify-center rounded-full border border-foreground/40 text-foreground">
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </>
              }
            >
              <Photo src="/images/speaker/video1.jpg" alt={home.homeContact.photoCard.title} className="h-full w-full" />
            </PhotoReveal>
            <p className="mt-10 text-sm text-paper-muted sm:text-base">{home.homeContact.photoCard.body}</p>
            <div className="mt-6 flex flex-wrap gap-8 border-t border-paper-border pt-6">
              <div>
                <div className="text-sm font-semibold text-paper-foreground">Email</div>
                <a href={`mailto:${home.homeContact.email}`} className="text-sm text-paper-muted hover:text-accent">
                  {home.homeContact.email}
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-paper-foreground">LinkedIn</div>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-paper-muted hover:text-accent">
                  {home.homeContact.linkedinHandle}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5 border border-paper-border bg-paper-surface p-7 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="hc-name" className="mb-1.5 block text-sm font-medium text-paper-foreground">
                    Name
                  </label>
                  <input id="hc-name" value={name} onChange={(e) => setName(e.target.value)} className={fieldBase} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="hc-org" className="mb-1.5 block text-sm font-medium text-paper-foreground">
                    Organisation
                  </label>
                  <input
                    id="hc-org"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    className={fieldBase}
                    placeholder="Company or institution"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hc-email" className="mb-1.5 block text-sm font-medium text-paper-foreground">
                  Email
                </label>
                <input
                  id="hc-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldBase}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <span className="mb-2 block text-sm font-medium text-paper-foreground">What&apos;s the ask?</span>
                <div className="flex flex-wrap gap-2">
                  {home.homeContact.askOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setAsk(option)}
                      aria-pressed={ask === option}
                      className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                        ask === option ? "border-[#8a5a34] bg-[#8a5a34] text-white" : "border-paper-border text-paper-muted hover:text-paper-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="hc-details" className="mb-1.5 block text-sm font-medium text-paper-foreground">
                  Details
                </label>
                <textarea
                  id="hc-details"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={`${fieldBase} resize-none`}
                  placeholder={home.homeContact.detailsPlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex w-full items-center justify-center rounded-[5px] bg-[#8a5a34] px-6 py-3.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_14px_30px_-12px_rgba(138,90,52,0.55)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Sending..." : home.homeContact.submitLabel}
              </motion.button>

              {status === "success" && <p className="text-sm text-accent">Thanks — that&apos;s in. I&apos;ll reply within 48 hours.</p>}
              {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
