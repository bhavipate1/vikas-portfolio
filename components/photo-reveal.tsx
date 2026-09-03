"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/**
 * Signature image-reveal used across every hero/feature photo on the site:
 * a clip-path curtain wipe, a slow zoom-out, and a grayscale-to-color bloom
 * that lands just after the wipe completes — so the photo arrives and then
 * comes alive, rather than just fading in flat. Caption content rides along
 * with the wipe (clipped, not scaled/filtered) so text stays crisp.
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
  const clipHidden = from === "left" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";

  return (
    <motion.div
      initial={reduceMotion ? false : { clipPath: clipHidden }}
      whileInView={{ clipPath: "inset(0 0 0 0%)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.01 : 1.05, delay, ease: [0.76, 0, 0.24, 1] }}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <motion.div
        initial={reduceMotion ? false : { scale: 1.22 }}
        whileInView={{ scale: 1 }}
        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduceMotion ? 0.01 : 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          initial={reduceMotion ? false : { filter: "grayscale(1) saturate(0.6) brightness(0.92)" }}
          whileInView={{ filter: "grayscale(0) saturate(1) brightness(1)" }}
          viewport={{ once: true, margin: "-80px" }}
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
