"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  className?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function SectionShell({ id, className, title, subtitle, children }: SectionShellProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id={id} ref={ref} className={cn("section-anchor relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-sky-200/70">Section</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            {subtitle ? <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p> : null}
          </div>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

