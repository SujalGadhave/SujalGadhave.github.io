import Image from "next/image";
import { Calendar, GitBranch, Star } from "lucide-react";

import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { GitHubSnapshot } from "@/types/portfolio";

interface GitHubSectionProps {
  github: GitHubSnapshot;
}

export function GitHubSection({ github }: GitHubSectionProps) {
  return (
    <SectionShell
      id="github"
      title="GitHub"
      subtitle="Live profile intelligence plus repository activity and language footprint."
    >
      <div className="grid gap-5 xl:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <Image
              src={`https://ghchart.rshah.org/38bdf8/${github.profile.login}`}
              alt={`${github.profile.login} contribution chart`}
              width={1200}
              height={180}
              unoptimized
              className="h-auto w-full rounded-xl"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${github.profile.login}&show_icons=true&theme=transparent&hide_border=true&title_color=ffffff&text_color=cbd5e1&icon_color=7dd3fc`}
                alt="GitHub stats"
                width={640}
                height={320}
                unoptimized
                className="h-auto w-full rounded-xl"
              />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <Image
                src={`https://streak-stats.demolab.com?user=${github.profile.login}&theme=transparent&hide_border=true&ring=38bdf8&fire=38bdf8&currStreakLabel=ffffff`}
                alt="GitHub streak"
                width={640}
                height={320}
                unoptimized
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold text-white">Most Used Languages</h3>
            <div className="mt-4 space-y-3">
              {github.languageShare.map((language) => (
                <div key={language.name}>
                  <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                    <span>{language.name}</span>
                    <span>{language.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-300 to-cyan-400"
                      style={{ width: `${Math.max(14, language.value * 10)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold text-white">Highlighted Repositories</h3>
            <div className="mt-4 space-y-3">
              {github.topRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-white/10 bg-slate-900/60 p-3 transition hover:border-sky-300/40"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-medium text-white">{repo.name}</p>
                    <Badge>{repo.language}</Badge>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">{repo.description}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitBranch className="h-3.5 w-3.5" />
                      {repo.forks}
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

