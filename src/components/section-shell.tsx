"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  title: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionShell({ id, title, subtitle, className, children }: SectionShellProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id={id} ref={ref} className={cn("section-anchor relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[1120px] px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="mb-12 flex flex-col gap-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-dim)]">
            Section
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
            {subtitle}
          </p>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
