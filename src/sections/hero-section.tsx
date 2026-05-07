"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Mail, Mouse, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

import { heroStats, portfolioIdentity } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/use-typewriter";
import { MagneticLink } from "@/components/magnetic-link";
import { ParticleField } from "@/components/particle-field";
import { Button } from "@/components/ui/button";
import type { GitHubSnapshot } from "@/types/portfolio";

const typedWords = [
  "Spring Boot Engineer",
  "Security-First Backend Builder",
  "Full-Stack System Developer",
  "Clean Architecture Practitioner",
];

const floatingStack = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "React",
  "TypeScript",
  "MySQL",
  "JWT",
];

interface HeroSectionProps {
  github: GitHubSnapshot;
}

export function HeroSection({ github }: HeroSectionProps) {
  const typed = useTypewriter(typedWords, 78, 1350);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.65]);

  const quickStats = useMemo(
    () => [
      { label: "Followers", value: String(github.profile.followers) },
      { label: "Repositories", value: String(github.profile.publicRepos) },
      { label: "Top Domain", value: "Java / Spring" },
    ],
    [github.profile.followers, github.profile.publicRepos]
  );

  return (
    <section
      id="home"
      className="section-anchor relative overflow-hidden pb-20 pt-36 sm:pt-44"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setSpotlight({ x, y });
      }}
    >
      <motion.div className="absolute inset-0 -z-20" style={{ y: heroY, opacity: heroOpacity }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(77,192,255,0.18),transparent_42%),radial-gradient(circle_at_78%_38%,rgba(129,140,248,0.16),transparent_44%),linear-gradient(145deg,#060914_0%,#070d1a_50%,#090f1f_100%)]" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(141,244,255,0.22), transparent 28%)`,
          }}
        />
      </motion.div>

      <ParticleField />

      <div className="mx-auto grid w-full max-w-[1120px] items-end gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--text-muted)]">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            Open to software engineering opportunities
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            Sujal Gadhave
          </h1>

          <p className="mt-4 min-h-8 text-lg text-[var(--accent-secondary)] sm:text-2xl">
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[var(--accent-primary)] align-middle sm:h-6" />
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Backend-focused engineer building secure, maintainable systems with Java and Spring
            Boot while delivering full-stack experiences through modern React and TypeScript
            workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticLink href="#projects" className="inline-flex" data-cursor="interactive">
              <Button size="lg" className="gap-2">
                View Core Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </MagneticLink>
            <MagneticLink href={portfolioIdentity.github} className="inline-flex" data-cursor="interactive">
              <Button size="lg" variant="outline" className="gap-2">
                <Code2 className="h-4 w-4" />
                GitHub Profile
              </Button>
            </MagneticLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {floatingStack.map((tech) => (
              <motion.span
                key={tech}
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--text-muted)]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-elevated)]"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-dim)]">Quick Snapshot</p>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">{github.profile.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{github.profile.bio}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {quickStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-3 text-center"
              >
                <p className="text-lg font-semibold text-[var(--text-primary)]">{item.value}</p>
                <p className="text-[11px] text-[var(--text-dim)]">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-2"
              >
                <span>{item.label}</span>
                <span className="font-medium text-[var(--text-primary)]">{item.value}</span>
              </div>
            ))}
          </div>

          <a
            href={portfolioIdentity.email}
            className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--accent-secondary)] hover:text-[var(--text-primary)]"
            data-cursor="interactive"
          >
            <Mail className="h-4 w-4" />
            sujalgadhave009@gmail.com
          </a>
        </motion.aside>
      </div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-xs uppercase tracking-[0.24em] text-[var(--text-dim)]"
          data-cursor="interactive"
        >
          Scroll
          <Mouse className="h-4 w-4 text-[var(--accent-secondary)]" />
        </a>
      </motion.div>
    </section>
  );
}
