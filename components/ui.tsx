"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/icons";

export function Badge({ children, dark = true }: { children: ReactNode; dark?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${
        dark
          ? "border-accent/30 bg-accent-soft text-accent"
          : "border-paper-border bg-paper-surface text-paper-muted"
      }`}
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden>
        {!reduceMotion && (
          <motion.span
            animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-accent"
          />
        )}
        <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}

type CtaStyle = "solid" | "outline" | "outline-light";

export function Cta({
  href,
  children,
  style = "solid",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  style?: CtaStyle;
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[5px] px-7 py-3.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";
  const styles: Record<CtaStyle, string> = {
    solid: "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(201,154,102,0.55)]",
    outline: "border border-border text-foreground hover:-translate-y-0.5 hover:border-accent",
    "outline-light": "border border-paper-border text-paper-foreground hover:-translate-y-0.5 hover:border-accent",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${styles[style]} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`text-base font-bold uppercase tracking-[3.91px] ${
        light ? "text-[#8a5a34]" : "text-accent"
      }`}
    >
      {children}
    </span>
  );
}

export function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
        light ? "text-paper-foreground hover:text-accent" : "text-foreground hover:text-accent"
      }`}
    >
      {children}
      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
