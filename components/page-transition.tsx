"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Cross-fades page content on route change.
 *
 * Deliberately CSS-driven rather than a Framer `motion.div`. A mounting motion
 * parent cascades its animation into descendant motion children, which fired
 * every `whileInView` scroll reveal on the page at load — so sections were
 * already visible before you ever scrolled to them (most obvious on mobile,
 * where the single-column layout puts everything below the fold). Using a plain
 * element with a CSS animation keeps the fade without hijacking those reveals.
 *
 * The `key` remounts on navigation so the fade replays per route.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
