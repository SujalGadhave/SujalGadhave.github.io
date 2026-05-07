import { ShieldCheck, Workflow, Wrench } from "lucide-react";

import { aboutPoints } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";

const emphasisCards = [
  {
    icon: ShieldCheck,
    title: "Security & Auth Depth",
    text: "Strong attention on JWT flow design, role-based authorization, and encryption-aware backend implementation.",
  },
  {
    icon: Workflow,
    title: "Architecture Discipline",
    text: "Service-layer clarity, clean controller boundaries, and practical modularization across backend-heavy projects.",
  },
  {
    icon: Wrench,
    title: "Execution Mindset",
    text: "Focused on building complete systems that work in local environments, with clear setup and deployment intent.",
  },
];

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      title="Backend-Driven Engineering Identity"
      subtitle="A developer profile centered on production-ready backend systems with full-stack execution capability."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 sm:p-8">
          <div className="space-y-4 text-[var(--text-secondary)]">
            {aboutPoints.map((point) => (
              <p key={point} className="leading-relaxed">
                {point}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {emphasisCards.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-5 transition-colors hover:border-[var(--border-strong)]"
            >
              <Icon className="h-5 w-5 text-[var(--accent-primary)]" />
              <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
