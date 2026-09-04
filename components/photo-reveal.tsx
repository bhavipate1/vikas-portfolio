"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Signature image-reveal used across every hero/feature photo on the site:
 * a clip-path curtain wipe, a slow zoom-out, and a dark tint that fades away
 * just after the wipe completes — so the photo arrives and then comes alive,
 * rather than just fading in flat. Caption content rides along with the wipe
 * (clipped, not scaled) so text stays crisp.
 *
 * The "comes alive" beat used to be an animated `filter` (grayscale → color).
 * Animating `filter` forces the browser to repaint every frame instead of just
 * compositing — one of the most common causes of janky scroll animations on
 * phones, even when it looks perfectly smooth on a fast desktop. Replaced with
 * an opacity fade on a plain tint overlay: opacity is the cheapest property to
 * animate (compositor-only, no repaint), so this keeps the same visual beat at
 * a fraction of the render cost, on any device.
 *
 * Driven by its own `useInView` observer with an explicit `animate` prop rather
 * than `whileInView`: nested inside another motion component, `whileInView`
 * gets hijacked by the parent and can never resolve — which left photos
 * permanently clipped (rendering as blank dark boxes).
 *
 * Pass `eager` for a photo that's guaranteed to be above the fold on load
 * (every page's hero image — the ones also marked `priority` on the inner
 * `Photo`). Those don't need scroll-triggered detection at all: they're
 * already visible the instant the page mounts. Gating them on an
 * IntersectionObserver adds a race with no upside — if that observer's first
 * callback doesn't land before the element settles into its final position
 * (which is common for content that starts at the very top of the page,
 * since there's no subsequent scroll to re-trigger it), `inView` sticks at
 * false forever and the photo stays permanently clipped. `eager` skips the
 * observer and just animates on mount, the same way the rest of the hero
 * (headline, badges) already does.
 */
export function PhotoReveal({
  children,
  caption,
  className = "",
  style,
  delay = 0,
  from = "left",
  vignette = true,
  eager = false,
}: {
  children: ReactNode;
  caption?: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  from?: "left" | "right";
  vignette?: boolean;
  eager?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const observedInView = useInView(ref, { once: true, margin: "-60px 0px -60px 0px" });
  const inView = eager || observedInView;
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
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0.55 }}
        animate={reduceMotion ? undefined : { opacity: inView ? 0 : 0.55 }}
        transition={{ duration: reduceMotion ? 0.01 : 1.1, delay: delay + 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 bg-background"
      />
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
