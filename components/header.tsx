"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

const backdropVariants = {
  hidden: { opacity: 0, transition: { duration: 0.25 } },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

const panelVariants = {
  hidden: {
    x: "100%",
    transition: { when: "afterChildren", staggerChildren: 0.025, staggerDirection: -1, type: "spring" as const, stiffness: 320, damping: 32 },
  },
  visible: {
    x: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.06, delayChildren: 0.15, type: "spring" as const, stiffness: 320, damping: 32 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

function isNavActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-5 py-[14px] sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-[17px] font-semibold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
        >
          {site.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {nav.map((item) => {
            const isActive = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm transition-colors rounded-full focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                  isActive ? "text-foreground font-medium" : "text-muted font-normal hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2 border border-border"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[5px] bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(201,154,102,0.6)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Invite Vikas to speak
          </Link>
        </div>

        <motion.button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <span className="relative block h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-5 bg-foreground"
              animate={menuOpen ? { rotate: 45, top: "7px" } : { rotate: 0, top: "0px" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-foreground"
              animate={menuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute left-0 bottom-0 h-0.5 w-5 bg-foreground"
              animate={menuOpen ? { rotate: -45, bottom: "7px" } : { rotate: 0, bottom: "0px" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            />
          </span>
        </motion.button>
      </div>
    </header>

    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            aria-hidden
          />
          <motion.div
            id="mobile-menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-y-0 right-0 z-[45] flex w-[82%] max-w-[360px] flex-col overflow-y-auto border-l border-border bg-background shadow-[0_0_60px_rgba(0,0,0,0.35)] lg:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8 pb-20 pt-24" aria-label="Mobile">
              {nav.map((item) => {
                const isActive = isNavActive(pathname, item.href);
                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center gap-2.5 py-3 text-xl font-medium transition-colors ${
                        isActive ? "text-accent" : "text-foreground/90 hover:text-accent"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full bg-accent transition-all duration-200 ${
                          isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-60"
                        }`}
                        aria-hidden
                      />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={itemVariants} className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center rounded-[5px] bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-transform active:scale-95"
                >
                  Invite Vikas to speak
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
