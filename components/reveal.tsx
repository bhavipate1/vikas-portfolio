"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section";
};

export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.01 : 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : stagger, delayChildren: reduceMotion ? 0 : delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={`break-words ${className ?? ""}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: reduceMotion ? 0 : "110%", opacity: reduceMotion ? 1 : 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.65,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
