import { stackWall } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";

export function StackWallSection() {
  return (
    <SectionShell
      id="stack-wall"
      title="Interactive Tech Stack Wall"
      subtitle="Core technologies used across backend-first systems, full-stack integrations, and deployment workflows."
    >
      <div className="stack-wall-grid rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 sm:p-7">
        {stackWall.map((item, index) => (
          <article
            key={item}
            className="group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
            style={{
              animationDelay: `${index * 40}ms`,
            }}
          >
            <span className="relative z-10 text-sm font-medium text-[var(--text-primary)]">{item}</span>
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-250 group-hover:opacity-100">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-soft)] to-transparent" />
            </span>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
