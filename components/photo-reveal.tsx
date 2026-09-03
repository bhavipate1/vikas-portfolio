"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Signature image-reveal used across every hero/feature photo on the site:
 * a clip-path curtain wipe, a slow zoom-out, and a grayscale-to-color bloom
 * that lands just after the wipe completes — so the photo arrives and then
 * comes alive, rather than just fading in flat. Caption content rides along
 * with the wipe (clipped, not scaled/filtered) so text stays crisp.
 *
 * Driven by its own `useInView` observer with an explicit `animate` prop rather
 * than `whileInView`: nested inside another motion component, `whileInView`
 * gets hijacked by the parent and can never resolve — which left photos
 * permanently clipped (rendering as blank dark boxes).
 */
export function PhotoReveal({
  children,
  caption,
  className = "",
  style,
  delay = 0,
  from = "left",
  vignette = true,
}: {
  children: ReactNode;
  caption?: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  from?: "left" | "right";
  vignette?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px -60px 0px" });
  const clipHidden = from === "left" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { clipPath: clipHidden }}
      animate={reduceMotion ? undefined : { clipPath: inView ? "inset(0 0 0 0%)" : clipHidden }}
      transition={{ duration: reduceMotion ? 0.01 : 1.05, delay, ease: [0.76, 0, 0.24, 1] }}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <motion.div
        initial={reduceMotion ? false : { scale: 1.22 }}
        animate={reduceMotion ? undefined : { scale: inView ? 1 : 1.22 }}
        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
        whileTap={reduceMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: reduceMotion ? 0.01 : 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          initial={reduceMotion ? false : { filter: "grayscale(1) saturate(0.6) brightness(0.92)" }}
          animate={
            reduceMotion
              ? undefined
              : {
                  filter: inView
                    ? "grayscale(0) saturate(1) brightness(1)"
                    : "grayscale(1) saturate(0.6) brightness(0.92)",
                }
          }
          transition={{ duration: reduceMotion ? 0.01 : 1.1, delay: delay + 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </motion.div>
      {vignette && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(22,19,15,0.45) 0%, rgba(22,19,15,0) 26%, rgba(22,19,15,0.72) 100%)",
          }}
        />
      )}
      {caption}
    </motion.div>
  );
}
