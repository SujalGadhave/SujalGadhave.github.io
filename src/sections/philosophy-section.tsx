import { philosophy } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";

export function PhilosophySection() {
  return (
    <SectionShell
      id="philosophy"
      title="Engineering Philosophy"
      subtitle="Principles that shape code quality, architecture decisions, and long-term maintainability."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {philosophy.map((point) => (
          <article
            key={point.title}
            className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {point.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
