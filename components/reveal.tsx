"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Touch devices get no hover animation at all, so the scroll reveal is the only
 * motion a phone user ever sees. Give it more travel and a touch of scale there
 * so it actually reads as an animation, while leaving desktop exactly as designed.
 */
function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => setIsPhone(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return isPhone;
}

/**
 * Scroll reveals are driven by their own `useInView` observer and an explicit
 * `animate` prop, rather than by `whileInView`.
 *
 * Why: `whileInView` on a component nested inside another motion component gets
 * hijacked by the parent — the child either fires as soon as the ancestor
 * mounts (revealing whole pages before they're scrolled to) or never resolves
 * at all (leaving photos permanently clipped). Owning the observer per element
 * makes each reveal independent of its ancestry.
 */

const VIEWPORT = { once: true, margin: "-60px 0px -60px 0px" } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section";
};

export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const isPhone = useIsPhone();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);

  const travel = isPhone ? Math.max(y, 40) : y;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : travel, scale: reduceMotion || !isPhone ? 1 : 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduceMotion ? 0.01 : isPhone ? 0.7 : 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Component = motion[as];

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
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

// `revealItem` is a plain exported object (28 card grids pass it as
// `variants={revealItem}`), unlike `Reveal` it isn't a component and can't use
// the `useIsPhone` hook. An earlier version read `window.matchMedia` at module
// load to boost it on phones, but that value differs between the server (no
// `window`, always "desktop") and an actual phone client — React hydration
// then finds mismatched inline styles between server and client HTML and
// throws. Kept as one fixed set of values, safe on both render passes; the
// phone-specific boost lives only in `Reveal`, which defers it to a post-mount
// effect instead of baking it into the first render.
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
        // Word gap via margin, not a trailing space character: each word sits
        // alone in a single-line inline-block (needed for the clip-mask
        // reveal), and browsers trim trailing whitespace at the end of an
        // inline box's own line when sizing it — so a " " character here
        // contributed zero width and the words rendered with no visible gap.
        <span
          key={i}
          className={`inline-block overflow-hidden pb-[0.1em] align-bottom ${i < words.length - 1 ? "mr-[0.25em]" : ""}`}
          aria-hidden
        >
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
          </motion.span>
        </span>
      ))}
    </span>
  );
}
