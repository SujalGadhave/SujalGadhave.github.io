"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Radio, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
}

const categoryLabel: Record<ProjectItem["category"], string> = {
  backend: "Backend Engineering",
  fullstack: "Full Stack System",
  ai: "AI + Backend Integration",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [light, setLight] = useState({ x: 50, y: 50 });

  const availability = useMemo(
    () =>
      project.status === "live"
        ? { label: "Live", icon: Radio, className: "text-emerald-200" }
        : { label: "Preview on Request", icon: Lock, className: "text-amber-200" },
    [project.status]
  );

  return (
    <motion.article
      className="project-card group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        setLight({ x: px * 100, y: py * 100 });
        setTilt({
          x: (px - 0.5) * 7,
          y: (0.5 - py) * 7,
        });
      }}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setLight({ x: 50, y: 50 });
      }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          `bg-gradient-to-br ${project.gradient}`
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(141,244,255,0.18), transparent 38%)`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge variant="accent">{categoryLabel[project.category]}</Badge>
          <span className={cn("inline-flex items-center gap-1 text-xs", availability.className)}>
            <availability.icon className="h-3.5 w-3.5" />
            {availability.label}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{project.summary}</p>

        <div className="mt-5 grid gap-3 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">Problem</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">Architecture</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.architectureSummary}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <AnimateExpanded expanded={expanded} project={project} />

        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild size="sm" className="gap-1.5">
            <a href={project.repo} target="_blank" rel="noreferrer" data-cursor="interactive">
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>

          {project.liveUrl ? (
            <Button asChild size="sm" variant="outline" className="gap-1.5">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" data-cursor="interactive">
                Live Preview
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="outline" disabled>
              Live Preview Soon
            </Button>
          )}

          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setExpanded((prev) => !prev)}
            data-cursor="interactive"
          >
            {expanded ? "Hide Details" : "View Details"}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function AnimateExpanded({ expanded, project }: { expanded: boolean; project: ProjectItem }) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: expanded ? "auto" : 0,
        opacity: expanded ? 1 : 0,
        marginTop: expanded ? 16 : 0,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="grid gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
            <Sparkles className="h-3.5 w-3.5" />
            Key Features
          </p>
          <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>- {feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Engineering Complexity
          </p>
          <p className="text-sm text-[var(--text-secondary)]">{project.complexity}</p>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Backend Capability
          </p>
          <p className="text-sm text-[var(--text-secondary)]">{project.backendStrength}</p>
        </div>

        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Security Highlights
          </p>
          <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
            {project.securityHighlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
