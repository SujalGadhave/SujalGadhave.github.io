"use client";

import { motion } from "framer-motion";

export function ParticleField() {
  const particles = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    left: `${(index * 7 + 11) % 100}%`,
    duration: 8 + (index % 6),
    delay: index * 0.3,
    scale: 0.6 + (index % 4) * 0.2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute top-[110%] block h-1.5 w-1.5 rounded-full bg-sky-200/35"
          style={{ left: particle.left }}
          animate={{ y: [-10, -920], opacity: [0, 1, 0], scale: [0.5, particle.scale, 0.4] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: particle.duration,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

