"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";

/**
 * Wraps a card in a subtle mouse-tracked 3D tilt, with a soft light sheen
 * that follows the pointer — the kind of tactile response that rewards a
 * user for hovering instead of a flat, static card.
 */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springConfig = { stiffness: 220, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), springConfig);
  const sheenX = useSpring(useTransform(x, [0, 1], [0, 100]), springConfig) as MotionValue<number>;
  const sheenY = useSpring(useTransform(y, [0, 1], [0, 100]), springConfig) as MotionValue<number>;
  const sheenBackground = useTransform(
    [sheenX, sheenY],
    ([sx, sy]) => `radial-gradient(circle at ${sx}% ${sy}%, var(--accent-soft), transparent 60%)`
  );

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className={`relative ${className}`}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ background: sheenBackground }}
        />
      )}
      {children}
    </motion.div>
  );
}
