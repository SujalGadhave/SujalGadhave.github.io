import type { GitHubRepoSummary, GitHubSnapshot } from "@/types/portfolio";

interface GitHubUserApi {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

interface GitHubRepoApi {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  size: number;
}

const fallback: GitHubSnapshot = {
  profile: {
    login: "SujalGadhave",
    name: "Sujal Gadhave",
    bio: "Full-Stack Java Developer building security-first backend systems with Spring Boot and modern frontend workflows.",
    avatarUrl: "https://avatars.githubusercontent.com/u/183296797?v=4",
    followers: 0,
    following: 0,
    publicRepos: 0,
    profileUrl: "https://github.com/SujalGadhave",
  },
  topRepos: [],
  languageShare: [
    { name: "Java", value: 45 },
    { name: "JavaScript", value: 20 },
    { name: "TypeScript", value: 15 },
    { name: "Python", value: 10 },
    { name: "SQL", value: 10 },
  ],
};

async function fetchJson<T>(url: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${url}`);
  }

  return response.json() as Promise<T>;
}

export async function getGitHubSnapshot(username: string): Promise<GitHubSnapshot> {
  try {
    const [user, repos] = await Promise.all([
      fetchJson<GitHubUserApi>(`https://api.github.com/users/${username}`),
      fetchJson<GitHubRepoApi[]>(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
      ),
    ]);

    const filteredRepos = repos.filter((repo) => !repo.fork);

    const topRepos: GitHubRepoSummary[] = [...filteredRepos]
      .sort((a, b) => {
        const scoreA = a.stargazers_count * 10 + a.forks_count * 5 + a.size;
        const scoreB = b.stargazers_count * 10 + b.forks_count * 5 + b.size;
        return scoreB - scoreA;
      })
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        htmlUrl: repo.html_url,
        description: repo.description ?? "No description provided.",
        language: repo.language ?? "Mixed",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
      }));

    const languageCounts = filteredRepos.reduce<Record<string, number>>((acc, repo) => {
      const language = repo.language ?? "Other";
      acc[language] = (acc[language] ?? 0) + 1;
      return acc;
    }, {});

    const languageShare = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, value]) => ({ name, value }));

    return {
      profile: {
        login: user.login,
        name: user.name ?? user.login,
        bio: user.bio ?? fallback.profile.bio,
        avatarUrl: user.avatar_url,
        followers: user.followers,
        following: user.following,
        publicRepos: user.public_repos,
        profileUrl: user.html_url,
      },
      topRepos,
      languageShare: languageShare.length ? languageShare : fallback.languageShare,
    };
  } catch {
    return fallback;
  }
}

