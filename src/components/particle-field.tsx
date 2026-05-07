"use client";

import { motion } from "framer-motion";

export function ParticleField() {
  const particles = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    left: `${(index * 13 + 7) % 100}%`,
    duration: 12 + (index % 6),
    delay: index * 0.45,
    size: index % 3 === 0 ? "h-2 w-2" : "h-1.5 w-1.5",
  }));

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute top-[108%] block rounded-full bg-[var(--accent-soft)] ${particle.size}`}
          style={{ left: particle.left }}
          animate={{
            y: [0, -980],
            opacity: [0, 0.9, 0],
            scale: [0.7, 1.2, 0.55],
          }}
          transition={{
            duration: particle.duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
