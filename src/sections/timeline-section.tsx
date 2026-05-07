import { timeline } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";

export function TimelineSection() {
  return (
    <SectionShell
      id="timeline"
      title="Experience Timeline"
      subtitle="A focused journey from Java fundamentals to backend architecture and production-minded full-stack engineering."
    >
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-[var(--accent-primary)]/60 via-[var(--border-subtle)] to-transparent sm:left-3" />
        <div className="space-y-6">
          {timeline.map((item) => (
            <article
              key={item.title}
              className="relative rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 sm:p-6"
            >
              <span className="absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full border border-[var(--border-strong)] bg-[var(--accent-primary)] shadow-[0_0_0_6px_rgba(141,244,255,0.12)] sm:-left-[2.05rem]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">{item.time}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
