import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Flagship Engineering Projects"
      subtitle="Backend-heavy, architecture-aware projects presented with implementation depth and system-level clarity."
    >
      <div className="grid gap-5 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
