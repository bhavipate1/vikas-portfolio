"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import { CapIcon, CheckIcon, ChatIcon, ClockIcon, CoffeeIcon, MailIcon, MicIcon, PhoneIcon, LinkedInIcon, PinIcon } from "@/components/icons";
import { LogoMarquee } from "@/components/logo-marquee";
import { Photo } from "@/components/photo";
import { PhotoReveal } from "@/components/photo-reveal";
import { Reveal, RevealGroup, RevealWords, revealItem } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { Badge, Eyebrow } from "@/components/ui";
import { contact, site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const initialValues = { topic: contact.form.topics[0], name: "", email: "", organisation: "", date: "", message: "" };
const reasonIcons = { mic: MicIcon, coffee: CoffeeIcon, cap: CapIcon, chat: ChatIcon };

const heroFields = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin },
  { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { label: "Based in", value: site.location, href: undefined },
];
const heroFieldIcons = { Email: MailIcon, LinkedIn: LinkedInIcon, Phone: PhoneIcon, "Based in": PinIcon };

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-28 sm:pb-14 sm:pt-32 lg:min-h-[85vh] lg:flex lg:flex-col lg:justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, var(--accent-soft), transparent 70%)" }}
      />
      <div className="mx-auto w-full max-w-8xl grid grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <Reveal delay={0}>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{contact.hero.badge}</Badge>
              <span className="text-xs font-normal uppercase tracking-wide text-muted">{contact.hero.replyNote}</span>
            </div>
          </Reveal>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <RevealWords text={contact.hero.headline[0]} delay={0.12} />
            <br />
            <RevealWords text={contact.hero.headline[1]} delay={0.2} className="font-light text-accent" />
          </h1>
          <Reveal delay={0.42}>
            <p className="mt-6 max-w-lg text-balance text-base text-muted">{contact.hero.body}</p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2" stagger={0.06} delayChildren={0.52}>
            {heroFields.map((field) => {
              const Icon = heroFieldIcons[field.label as keyof typeof heroFieldIcons];
              const content = (
                <>
                  {Icon && (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon className="h-[15px] w-[15px]" />
                    </span>
                  )}
                  <div>
                    <div className="text-xs font-normal uppercase tracking-wide text-muted">{field.label}</div>
                    <div className="mt-1 text-sm font-normal text-foreground">{field.value}</div>
                  </div>
                </>
              );
              return field.href ? (
                <motion.a
                  key={field.label}
                  href={field.href}
                  target={field.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  variants={revealItem}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="block focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <TiltCard className="flex items-center gap-3.5 border border-border bg-surface px-5 py-5 transition-colors hover:border-accent">
                    {content}
                  </TiltCard>
                </motion.a>
              ) : (
                <motion.div key={field.label} variants={revealItem}>
                  <TiltCard className="flex items-center gap-3.5 border border-border bg-surface px-5 py-5">
                    {content}
                  </TiltCard>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>

        <PhotoReveal
          delay={0.2}
          from="right"
          className="aspect-[609/600] w-full border border-border"
          caption={
            <div className="absolute inset-x-4 bottom-4 border border-white/15 bg-background/75 px-6 py-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ClockIcon className="h-4 w-4" />
                </span>
                <div className="text-sm font-semibold text-foreground">{contact.hero.photoCard.title}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{contact.hero.photoCard.body}</p>
            </div>
          }
        >
          <Photo src="/images/contact/hero.jpg" alt={contact.hero.photoCard.title} className="h-full w-full" priority />
        </PhotoReveal>
      </div>
    </section>
  );
}

export function ContactCategoryLabels() {
  return (
    <section className="border-y border-paper-border bg-paper py-8">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <LogoMarquee items={contact.categoryLabels} light />
      </div>
    </section>
  );
}

export function ContactReasons() {
  return (
    <section className="border-y border-paper-border bg-paper py-12 sm:py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <Eyebrow light>{contact.reasons.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-paper-foreground sm:text-5xl">
            {contact.reasons.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-px overflow-hidden border-y border-paper-border bg-paper-border sm:grid-cols-2 lg:grid-cols-4">
          {contact.reasons.items.map((item) => {
            const Icon = reasonIcons[item.icon as keyof typeof reasonIcons];
            return (
              <motion.div key={item.title} variants={revealItem} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="group">
                <TiltCard className="flex h-full flex-col bg-paper-surface px-7 pt-8 pb-9 transition-colors duration-300 ease-out hover:bg-accent-soft/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-[#8a5a34] text-white transition-colors duration-300 group-hover:bg-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-12 text-lg font-normal text-paper-foreground">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-paper-muted">{item.body}</p>
                  <div className="mt-4">
                    {item.link ? (
                      <Link href={item.link.href} className="text-xs font-normal text-[#8a5a34] hover:underline">
                        {item.link.label} ↗
                      </Link>
                    ) : (
                      <span className="text-xs text-paper-muted">{item.note}</span>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate() {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "That email doesn't look right.";
    if (!values.message.trim()) next.message = "Tell me about the event.";
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
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const fieldBase =
    "w-full rounded-xl border bg-paper px-4 py-3 text-sm text-paper-foreground placeholder:text-xs placeholder:text-paper-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <section id="write-to-me" className="scroll-mt-24 bg-paper pt-8 pb-0 sm:pt-10">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <Reveal>
          <Eyebrow light>{contact.formSection.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-paper-foreground sm:text-5xl">
            {contact.formSection.headline[0]}
            <br />
            {contact.formSection.headline[1]}
          </h2>
          <p className="mt-5 max-w-md text-sm text-paper-muted sm:text-base">{contact.formSection.body}</p>

          <PhotoReveal
            className="mt-8 aspect-[4/3] w-full border border-paper-border"
            caption={
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                <span className="text-xl font-normal text-foreground">{contact.formSection.photoCaption}</span>
              </div>
            }
          >
            <Photo src="/images/contact/write-to-me.png" alt={contact.formSection.photoCaption} className="h-full w-full" />
          </PhotoReveal>

          <ul className="mt-5 flex flex-col gap-3.5 border-t border-paper-border pt-7">
            {contact.trustNotes.map((note) => (
              <li key={note} className="flex items-center gap-3 text-sm text-paper-muted">
                <CheckIcon className="h-4 w-4 shrink-0 text-[#8a5a34]" />
                {note}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-6 border border-paper-border bg-paper-surface p-6 sm:p-8">
            <div>
              <span className="mb-3 block text-[9.86px] font-normal text-paper-foreground">What&apos;s this about?</span>
              <div className="flex flex-wrap gap-2">
                {contact.form.topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setValues((v) => ({ ...v, topic }))}
                    aria-pressed={values.topic === topic}
                    className={`rounded-full border px-4 py-1.5 text-xs font-normal transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      values.topic === topic
                        ? "border-[#8a5a34] bg-[#8a5a34] text-white"
                        : "border-paper-border text-paper-muted hover:text-paper-foreground"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-3 block text-[9.86px] font-normal text-paper-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  className={`${fieldBase} ${errors.name ? "border-red-500" : "border-paper-border"}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-3 block text-[9.86px] font-normal text-paper-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  className={`${fieldBase} ${errors.email ? "border-red-500" : "border-paper-border"}`}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="organisation" className="mb-3 block text-[9.86px] font-normal text-paper-foreground">
                  Organisation
                </label>
                <input
                  id="organisation"
                  type="text"
                  value={values.organisation}
                  onChange={(e) => setValues((v) => ({ ...v, organisation: e.target.value }))}
                  className={`${fieldBase} border-paper-border`}
                  placeholder="Company or institution"
                />
              </div>
              <div>
                <label htmlFor="date" className="mb-3 block text-[9.86px] font-normal text-paper-foreground">
                  Date, if you have one
                </label>
                <input
                  id="date"
                  type="text"
                  value={values.date}
                  onChange={(e) => setValues((v) => ({ ...v, date: e.target.value }))}
                  className={`${fieldBase} border-paper-border`}
                  placeholder="e.g. March 2027"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-3 block text-[9.86px] font-normal text-paper-foreground">
                About the keynote
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                aria-invalid={Boolean(errors.message)}
                className={`${fieldBase} resize-none ${errors.message ? "border-red-500" : "border-paper-border"}`}
                placeholder="Event, audience, theme, and what you want them to leave with..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            <div className="flex items-center gap-3 border border-[#8a5a34]/20 bg-[#8a5a34]/5 px-4 py-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8a5a34]/16 text-[#8a5a34]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M12 7v5l3 3M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-xs text-paper-muted">{contact.form.note}</p>
            </div>

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-[#8a5a34] px-6 py-3.5 text-xs font-normal text-white transition-shadow hover:shadow-[0_14px_30px_-12px_rgba(138,90,52,0.55)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
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
