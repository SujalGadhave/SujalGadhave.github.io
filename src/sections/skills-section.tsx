import { Code2, Database, Hammer, Languages, ServerCog, Waypoints } from "lucide-react";

import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

const icons = [Code2, ServerCog, Database, Hammer, Languages, Waypoints];

const skillLevelScore: Record<string, number> = {
  Advanced: 88,
  Intermediate: 72,
  Learning: 56,
};

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Capability Matrix"
      subtitle="A categorized technical profile across frontend, backend, data, tools, and delivery fundamentals."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = icons[index % icons.length];
          const progress = skillLevelScore[skill.level] ?? 60;

          return (
            <article
              key={skill.title}
              className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[var(--accent-primary)]" />
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">{skill.title}</h3>
                </div>
                <Badge>{skill.level}</Badge>
              </div>

              <div className="mb-4 h-2 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
