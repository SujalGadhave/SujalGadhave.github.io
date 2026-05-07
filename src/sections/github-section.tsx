import Image from "next/image";
import { Calendar, GitCommitHorizontal, GitFork, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/section-shell";
import { formatDate } from "@/lib/utils";
import type { GitHubSnapshot } from "@/types/portfolio";

interface GitHubSectionProps {
  github: GitHubSnapshot;
}

export function GitHubSection({ github }: GitHubSectionProps) {
  return (
    <SectionShell
      id="github"
      title="GitHub Activity"
      subtitle="Repository pulse, contribution consistency, and language distribution aligned with a backend-first profile."
    >
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4">
            <Image
              src={`https://ghchart.rshah.org/8df4ff/${github.profile.login}`}
              alt={`${github.profile.login} contribution graph`}
              width={1200}
              height={180}
              unoptimized
              className="h-auto w-full rounded-[var(--radius-lg)]"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${github.profile.login}&show_icons=true&theme=transparent&hide_border=true&title_color=e2eeff&text_color=9fb0ce&icon_color=8df4ff`}
                alt="GitHub overview stats"
                width={680}
                height={320}
                unoptimized
                className="h-auto w-full rounded-[var(--radius-md)]"
              />
            </div>
            <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4">
              <Image
                src={`https://streak-stats.demolab.com?user=${github.profile.login}&theme=transparent&hide_border=true&ring=8df4ff&fire=8df4ff&currStreakLabel=e2eeff`}
                alt="GitHub contribution streak"
                width={680}
                height={320}
                unoptimized
                className="h-auto w-full rounded-[var(--radius-md)]"
              />
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Language Distribution</h3>
            <div className="mt-4 space-y-3">
              {github.languageShare.map((language) => (
                <div key={language.name}>
                  <div className="mb-1 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                    <span>{language.name}</span>
                    <span>{language.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                      style={{ width: `${Math.max(16, language.value * 7)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Highlighted Repositories</h3>
            <div className="mt-4 space-y-3">
              {github.topRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-3 transition-colors hover:border-[var(--border-strong)]"
                  data-cursor="interactive"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{repo.name}</p>
                    <Badge>{repo.language}</Badge>
                  </div>
                  <p className="max-h-14 overflow-hidden text-xs leading-relaxed text-[var(--text-secondary)]">
                    {repo.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-[var(--text-dim)]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitCommitHorizontal className="h-3.5 w-3.5" />
                      Updated
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(repo.updatedAt)}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
