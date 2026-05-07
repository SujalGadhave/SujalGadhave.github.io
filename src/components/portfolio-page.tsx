"use client";

import { useMemo } from "react";

import { navItems, portfolioIdentity } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { SkillsSection } from "@/sections/skills-section";
import { ProjectsSection } from "@/sections/projects-section";
import { GitHubSection } from "@/sections/github-section";
import { JourneySection } from "@/sections/journey-section";
import { ContactSection } from "@/sections/contact-section";
import type { GitHubSnapshot } from "@/types/portfolio";

interface PortfolioPageProps {
  github: GitHubSnapshot;
}

export function PortfolioPage({ github }: PortfolioPageProps) {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070b16] text-slate-100">
      <div className="page-gradient-bg" />
      <ScrollProgress />
      <CustomCursor />
      <Navigation activeSection={activeSection} items={navItems} />

      <main>
        <HeroSection github={github} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection github={github} />
        <JourneySection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <p>
          (c) {new Date().getFullYear()} {portfolioIdentity.name}. Crafted with Next.js,
          TypeScript, Tailwind, Framer Motion, and engineering intent.
        </p>
      </footer>
    </div>
  );
}
