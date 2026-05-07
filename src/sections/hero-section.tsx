"use client";

import { ArrowRight, Code2, Link2, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticLink } from "@/components/magnetic-link";
import { ParticleField } from "@/components/particle-field";
import { useTypewriter } from "@/hooks/use-typewriter";
import type { GitHubSnapshot } from "@/types/portfolio";

interface HeroSectionProps {
  github: GitHubSnapshot;
}

const typedWords = [
  "Spring Boot Engineer",
  "Security-First Backend Builder",
  "Full-Stack Problem Solver",
  "Java + React Developer",
];

export function HeroSection({ github }: HeroSectionProps) {
  const typed = useTypewriter(typedWords, 80, 1300);

  return (
    <section id="home" className="section-anchor relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="hero-spotlight absolute inset-0 -z-20" />
      <ParticleField />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="flex-1"
        >
          <Badge variant="accent" className="mb-5">
            Open to Software Engineering Opportunities
          </Badge>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Sujal Gadhave
          </h1>

          <p className="mt-4 min-h-7 text-lg text-sky-100 sm:text-xl">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-sky-200 align-middle" />
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Building production-grade applications with clean architecture, robust authentication,
            and engineering discipline across backend and full-stack systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticLink href="#projects" className="inline-flex">
              <Button size="lg" className="gap-2">
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </MagneticLink>
            <MagneticLink href={github.profile.profileUrl} className="inline-flex">
              <Button variant="outline" size="lg" className="gap-2">
                <Code2 className="h-4 w-4" />
                GitHub
              </Button>
            </MagneticLink>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-300">
            <a
              href={github.profile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2 transition hover:border-sky-300/60 hover:text-sky-100"
              aria-label="GitHub"
            >
              <Code2 className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sujalgadhave"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2 transition hover:border-sky-300/60 hover:text-sky-100"
              aria-label="LinkedIn"
            >
              <Link2 className="h-4 w-4" />
            </a>
            <a
              href="mailto:sujalgadhave009@gmail.com"
              className="rounded-full border border-white/10 p-2 transition hover:border-sky-300/60 hover:text-sky-100"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_80px_rgba(14,116,144,0.2)] backdrop-blur-xl lg:w-[360px]"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-sky-200/80">GitHub Snapshot</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{github.profile.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{github.profile.bio}</p>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
              <p className="text-2xl font-semibold text-white">{github.profile.publicRepos}</p>
              <p className="text-xs text-slate-400">Repos</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
              <p className="text-2xl font-semibold text-white">{github.profile.followers}</p>
              <p className="text-xs text-slate-400">Followers</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
              <p className="text-2xl font-semibold text-white">{github.profile.following}</p>
              <p className="text-xs text-slate-400">Following</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

