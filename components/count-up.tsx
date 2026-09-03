"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function zeroed(value: string) {
  const match = value.match(/[0-9][0-9.,]*/);
  if (!match || match.index === undefined) return value;
  const isInt = Number.isInteger(parseFloat(match[0].replace(/,/g, "")));
  return value.slice(0, match.index) + (isInt ? "0" : "0.0") + value.slice(match.index + match[0].length);
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => zeroed(value));

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const match = value.match(/[0-9][0-9.,]*/);
    if (!match || match.index === undefined) return;

    const target = parseFloat(match[0].replace(/,/g, ""));
    const isInt = Number.isInteger(target);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[0].length);

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        const formatted = isInt ? Math.round(v).toString() : v.toFixed(1);
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={`font-heading ${className ?? ""}`}>
      {reduceMotion ? value : display}
    </span>
  );
}
