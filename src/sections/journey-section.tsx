import { journey } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";

export function JourneySection() {
  return (
    <SectionShell
      id="journey"
      title="Journey"
      subtitle="A compact timeline of learning milestones and engineering direction."
    >
      <div className="relative ml-2 border-l border-white/15 pl-8">
        {journey.map((milestone, index) => (
          <article key={milestone.title} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(125,211,252,0.8)]" />
            <p className="text-xs uppercase tracking-[0.2em] text-sky-200/75">{milestone.time}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{milestone.title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{milestone.details}</p>
            {index < journey.length - 1 ? <div className="mt-6 h-px w-full bg-white/5" /> : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

