"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-lg backdrop-blur focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:bottom-8 sm:right-8"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
