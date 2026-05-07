"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { portfolioIdentity } from "@/data/portfolio";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--surface-base)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <div className="text-center">
            <motion.p
              className="text-xs uppercase tracking-[0.32em] text-[var(--text-dim)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Engineering Portfolio
            </motion.p>
            <motion.h1
              className="mt-4 text-2xl font-semibold text-[var(--text-primary)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              {portfolioIdentity.name}
            </motion.h1>
            <motion.div
              className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-[var(--surface-soft)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.12 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
