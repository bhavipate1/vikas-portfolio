"use client";

import { useReducedMotion } from "framer-motion";

export function LogoMarquee({
  items,
  light = false,
  direction = "ltr",
}: {
  items: string[];
  light?: boolean;
  direction?: "ltr" | "rtl";
}) {
  const reduceMotion = useReducedMotion();
  const textClass = light ? "text-paper-muted" : "text-muted";

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {items.map((item) => (
          <span key={item} className={`font-heading text-[13px] font-normal uppercase tracking-[2.07px] ${textClass}`}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  const duration = Math.max(items.length * 4, 18);

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex w-max items-center gap-16"
        style={{
          animation: `${direction === "rtl" ? "marquee-rtl" : "marquee-ltr"} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`shrink-0 font-heading text-[13px] font-normal uppercase tracking-[2.07px] ${textClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
