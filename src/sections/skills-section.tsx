import { Code2, Database, Hammer, Layers, ServerCog, Workflow } from "lucide-react";

import { skills } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";

const iconMap = [Code2, ServerCog, Database, Hammer, Layers, Workflow];

const levelMap: Record<string, number> = {
  Advanced: 88,
  Intermediate: 72,
  Learning: 52,
};

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills"
      subtitle="Stack grouped by practical usage across frontend, backend, and system-oriented work."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const progress = levelMap[skill.level] ?? 60;
          const Icon = iconMap[index % iconMap.length];

          return (
            <article
              key={skill.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-sky-300/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-sky-300" />
                  <h3 className="text-base font-semibold text-white">{skill.title}</h3>
                </div>
                <Badge>{skill.level}</Badge>
              </div>

              <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-300 to-cyan-400 transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
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

