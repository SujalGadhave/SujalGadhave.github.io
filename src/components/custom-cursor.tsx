"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );
  const [interactive, setInteractive] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });

    const updateInteractive = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }
      setInteractive(Boolean(target.closest("a,button,input,textarea,[data-cursor='interactive']")));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", updateInteractive, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", updateInteractive);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-[80] hidden md:block"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", stiffness: 540, damping: 36, mass: 0.25 }}
    >
      <motion.div
        className="absolute -left-4 -top-4 rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] backdrop-blur-sm"
        animate={{
          width: interactive ? 38 : 24,
          height: interactive ? 38 : 24,
          opacity: interactive ? 0.9 : 0.75,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-[var(--accent-primary)]"
        animate={{ scale: interactive ? 1.25 : 1 }}
        transition={{ duration: 0.14 }}
      />
    </motion.div>
  );
}
