"use client";

import { useMemo } from "react";

import { navItems, portfolioIdentity } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { GitHubSection } from "@/sections/github-section";
import { HeroSection } from "@/sections/hero-section";
import { PhilosophySection } from "@/sections/philosophy-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import { StackWallSection } from "@/sections/stack-wall-section";
import { TimelineSection } from "@/sections/timeline-section";
import { CustomCursor } from "@/components/custom-cursor";
import { Navigation } from "@/components/navigation";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import type { GitHubSnapshot } from "@/types/portfolio";

interface PortfolioPageProps {
  github: GitHubSnapshot;
}

export function PortfolioPage({ github }: PortfolioPageProps) {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--surface-base)] text-[var(--text-primary)]">
      <PageLoader />
      <div className="page-gradient-bg" />
      <ScrollProgress />
      <CustomCursor />
      <Navigation activeSection={activeSection} items={navItems} />

      <main>
        <HeroSection github={github} />
        <AboutSection />
        <PhilosophySection />
        <SkillsSection />
        <StackWallSection />
        <ProjectsSection />
        <GitHubSection github={github} />
        <TimelineSection />
        <ContactSection />
      </main>

      <footer className="border-t border-[var(--border-subtle)] px-4 py-10 text-center text-sm text-[var(--text-dim)] sm:px-6">
        <p>
          (c) {new Date().getFullYear()} {portfolioIdentity.name}. Crafted with intentional motion,
          system-first UI architecture, and backend engineering focus.
        </p>
      </footer>
    </div>
  );
}

