"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) {
      return;
    }

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden h-7 w-7 rounded-full border border-sky-200/60 bg-sky-300/10 blur-[0.3px] md:block"
      animate={{ x: position.x - 14, y: position.y - 14 }}
      transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.4 }}
    />
  );
}
