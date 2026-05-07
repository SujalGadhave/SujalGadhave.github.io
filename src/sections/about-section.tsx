import { BrainCircuit, Gamepad2, ShieldCheck } from "lucide-react";

import { aboutPoints } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";

const cards = [
  {
    icon: ShieldCheck,
    title: "Security-Oriented",
    text: "Authentication, authorization, and backend reliability are core priorities in real project work.",
  },
  {
    icon: BrainCircuit,
    title: "Engineering Mindset",
    text: "Focus on maintainability, architecture clarity, and practical tradeoffs over flashy-but-fragile code.",
  },
  {
    icon: Gamepad2,
    title: "Curiosity Driven",
    text: "Gaming and problem-solving habits fuel systems thinking, performance awareness, and iterative improvement.",
  },
];

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      title="About"
      subtitle="An engineer focused on secure backend systems and full-stack execution."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 text-slate-300">
          {aboutPoints.map((point) => (
            <p key={point} className="leading-relaxed">
              {point}
            </p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {cards.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-300/40 hover:bg-white/[0.05]"
            >
              <Icon className="h-5 w-5 text-sky-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

