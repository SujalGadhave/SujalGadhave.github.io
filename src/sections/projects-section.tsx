import { ArrowUpRight, Boxes, Sparkles } from "lucide-react";

import { projects } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";

const categoryLabel = {
  backend: "Backend",
  fullstack: "Full Stack",
  frontend: "Frontend",
  ai: "AI",
};

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Repository-backed showcase with architecture, features, and engineering focus areas."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-sky-300/50"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-sky-500/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between gap-2">
                <Badge variant="accent">{categoryLabel[project.category]}</Badge>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-sky-200 hover:text-white"
                >
                  Source
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>

              <div className="mt-5">
                <p className="mb-2 flex items-center gap-2 text-sm font-medium text-sky-200">
                  <Boxes className="h-4 w-4" />
                  Architecture Highlights
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  {project.architecture.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-medium text-sky-200">
                  <Sparkles className="h-4 w-4" />
                  Features
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  {project.features.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

