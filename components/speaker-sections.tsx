"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  BuildingIcon,
  CapIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  GlobeIcon,
  MailIcon,
  MicIcon,
  PhoneIcon,
  LinkedInIcon,
} from "@/components/icons";
import { CountUp } from "@/components/count-up";
import { LogoMarquee } from "@/components/logo-marquee";
import { Photo } from "@/components/photo";
import { PhotoReveal } from "@/components/photo-reveal";
import { Reveal, RevealGroup, RevealWords, revealItem } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { Badge, Cta, Eyebrow } from "@/components/ui";
import { speaker } from "@/lib/content";

const fieldIcons = { Email: MailIcon, Mobile: PhoneIcon, LinkedIn: LinkedInIcon, "One-pager": DownloadIcon };
const formatIcons = { mic: MicIcon, globe: GlobeIcon, building: BuildingIcon, cap: CapIcon };

export function SpeakerHero() {
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
            <Badge>{speaker.badge}</Badge>
          </Reveal>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
            <RevealWords text={speaker.headline[0]} delay={0.12} />{" "}
            <RevealWords text={speaker.headline[1]} delay={0.2} className="text-accent font-light" />{" "}
            <RevealWords text={speaker.headline[2]} delay={0.28} />
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-4 max-w-lg text-balance text-base text-muted sm:text-lg">{speaker.body}</p>
          </Reveal>

          <Reveal delay={0.58}>
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="text-lg font-light italic text-foreground/90">&ldquo;{speaker.quote}&rdquo;</p>
            </div>
          </Reveal>

          <Reveal delay={0.66}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {speaker.ctas.map((cta) => (
                <Cta key={cta.href} href={cta.href} style={cta.style as "solid" | "outline"}>
                  {cta.label}
                </Cta>
              ))}
            </div>
          </Reveal>
        </div>

        <PhotoReveal delay={0.2} from="right" eager className="aspect-[922/663] w-full border border-border">
          <Photo src="/images/speaker/hero.jpg" alt="Vikas Surani speaking at TEDx" className="h-full w-full" priority />
        </PhotoReveal>
      </div>
    </section>
  );
}

export function SpeakerStats() {
  return (
    <section className="border-y border-overlay-border bg-background py-12">
      <RevealGroup className="mx-auto grid max-w-8xl grid-cols-2 gap-8 px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
        {speaker.stats.map((stat) => (
          <motion.div key={stat.label} variants={revealItem}>
            <CountUp value={stat.value} className="text-3xl font-semibold text-accent tabular-nums sm:text-4xl" />
            <div className="mt-1.5 max-w-[180px] text-xs leading-snug text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}

export function SpeakerLogos() {
  return (
    <section className="border-b border-paper-border bg-paper py-8">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <LogoMarquee items={speaker.logos} light />
      </div>
    </section>
  );
}

export function SpeakerEngagements() {
  return (
    <section className="bg-paper pt-8 sm:pt-10">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow light>{speaker.engagements.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-paper-foreground sm:text-5xl">
              {speaker.engagements.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm font-semibold text-paper-muted sm:text-base">{speaker.engagements.intro}</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 divide-y divide-paper-border border-y border-paper-border" stagger={0.05}>
          {speaker.engagements.items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="group -mx-5 flex items-center gap-5 rounded-xl px-5 py-5 text-paper-foreground transition-colors duration-300 ease-out hover:bg-paper-surface active:bg-paper-surface sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
            >
              {/* Fixed width: the body sets font-feature-settings, which stops
                  `tabular-nums` from applying, so digits are proportional and
                  "01" vs "04" would otherwise shift each title by a few px. */}
              <span className="mr-5 w-5 shrink-0 text-xs font-normal tabular-nums text-paper-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-normal sm:text-2xl">{item.title}</h3>
                <p className="mt-0.5 text-xs text-paper-muted sm:text-sm">{item.meta}</p>
              </div>
              <span className="hidden shrink-0 rounded-full border border-paper-border px-3 py-1 text-[11px] font-normal uppercase tracking-wide text-[#8a5a34] transition-colors duration-300 group-hover:border-[#8a5a34] group-active:border-[#8a5a34] sm:inline-flex">
                {item.tag}
              </span>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-[#8a5a34] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5" />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function SpeakerVideos() {
  return (
    <section className="bg-paper pb-12">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <Eyebrow light>{speaker.videos.eyebrow}</Eyebrow>
            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-paper-foreground sm:text-5xl">
              {speaker.videos.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Previous talks"
              disabled
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper-border text-paper-muted transition-colors disabled:opacity-40"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="More talks"
              disabled
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper-border text-paper-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-40"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
          {speaker.videos.items.map((video) => (
            <motion.div key={video.title} variants={revealItem} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <TiltCard className="group overflow-hidden border border-paper-border bg-paper-surface">
                <div className="relative">
                  <Photo src={video.image} alt={video.title} className="aspect-[16/9]" light />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 to-background/40"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/70 px-3 py-1 text-[11px] font-normal uppercase tracking-wide text-foreground">
                    {video.tag}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-background/70 px-3 py-1 text-[11px] font-normal text-muted">
                    {video.duration}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-[22px] w-[22px]">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.span>
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-normal text-paper-foreground sm:text-xl">{video.title}</h3>
                  <p className="mt-1 text-xs text-paper-muted sm:text-sm">{video.meta}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>

        <div className="mt-8 flex items-center justify-center gap-2" aria-hidden>
          {speaker.videos.items.map((video, i) => (
            <span
              key={video.title}
              className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-accent" : "w-1.5 bg-paper-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpeakerFormats() {
  return (
    <section id="formats" className="scroll-mt-24 border-y border-border bg-surface-2 py-12">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow>{speaker.formats.eyebrow}</Eyebrow>
            <h2 className="mt-8 max-w-lg text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {speaker.formats.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-muted sm:text-base">{speaker.formats.intro}</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {speaker.formats.items.map((format) => {
            const Icon = formatIcons[format.icon as keyof typeof formatIcons];
            return (
              <motion.div
                key={format.title}
                variants={revealItem}
                whileHover={{ y: -4, borderColor: "var(--accent)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="border border-border bg-surface"
              >
                <TiltCard className="h-full overflow-hidden p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[3px] bg-[#8a5a34] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-10 text-lg font-normal">{format.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{format.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export function SpeakerBackground() {
  return (
    <section className="border-b border-paper-border bg-paper py-12">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-start gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-10">
        <div>
          <PhotoReveal className="aspect-[616/483] w-full border border-paper-border">
            <Photo src="/images/speaker/background.jpg" alt={speaker.background.photoCaption.name} className="h-full w-full" light />
          </PhotoReveal>
          <div className="mt-5 flex items-center justify-between gap-4 border-t border-paper-border pt-4">
            <span className="text-sm font-normal text-paper-foreground">{speaker.background.photoCaption.name}</span>
            <span className="text-xs text-paper-muted">{speaker.background.photoCaption.role}</span>
          </div>
        </div>

        <Reveal delay={0.1}>
          <Eyebrow light>{speaker.background.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-paper-foreground sm:text-5xl">
            {speaker.background.title}
          </h2>
          <p className="mt-4 text-sm text-paper-muted sm:text-base">{speaker.background.body}</p>

          <div className="mt-12 divide-y divide-paper-border border-t border-paper-border">
            {speaker.background.table.map((row) => (
              <div key={row.label} className="grid grid-cols-[minmax(0,140px)_1fr] gap-4 py-4">
                <span className="text-xs font-normal uppercase tracking-wide text-paper-muted">{row.label}</span>
                <div>
                  <div className="text-sm font-normal text-paper-foreground sm:text-base">{row.org}</div>
                  <div className="mt-1.5 text-xs text-paper-muted sm:text-sm">{row.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SpeakerContact() {
  return (
    <section className="bg-paper pt-12">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="bg-background p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>{speaker.contact.eyebrow}</Eyebrow>
                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  {speaker.contact.title}
                </h2>
                <p className="mt-4 max-w-md text-sm text-muted sm:text-base">{speaker.contact.body}</p>
              </Reveal>

              <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.06}>
                {speaker.contact.fields.map((field) => {
                  const Icon = fieldIcons[field.label as keyof typeof fieldIcons];
                  return (
                    <motion.a
                      key={field.label}
                      href={field.href}
                      target={field.href.startsWith("http") || field.href.endsWith(".pdf") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      variants={revealItem}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className={`rounded-2xl border px-12 py-4 transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                        field.highlight
                          ? "border-accent/30 bg-accent-soft hover:border-accent"
                          : "border-border bg-surface hover:border-accent"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      <div className="mt-3 text-[11px] font-normal uppercase tracking-wide text-muted">
                        {field.label}
                      </div>
                      <div className="mt-1 text-sm font-normal text-foreground">{field.value}</div>
                    </motion.a>
                  );
                })}
              </RevealGroup>
            </div>

            <PhotoReveal delay={0.15} from="right" className="aspect-[612/529] w-full border border-border">
              <Photo src="/images/speaker/contact.jpg" alt="Vikas Surani in conversation" className="h-full w-full" />
            </PhotoReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
