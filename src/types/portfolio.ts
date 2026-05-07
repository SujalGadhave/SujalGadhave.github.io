export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  level: string;
  items: string[];
}

export interface ProjectItem {
  name: string;
  repo: string;
  liveUrl?: string;
  status: "live" | "private-demo" | "in-progress";
  summary: string;
  problem: string;
  architectureSummary: string;
  complexity: string;
  backendStrength: string;
  securityHighlights: string[];
  keyFeatures: string[];
  stack: string[];
  category: "backend" | "fullstack" | "ai";
  gradient: string;
}

export interface JourneyMilestone {
  title: string;
  time: string;
  details: string;
}

export interface PhilosophyPoint {
  title: string;
  description: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatarUrl: string;
  followers: number;
  following: number;
  publicRepos: number;
  profileUrl: string;
}

export interface GitHubRepoSummary {
  name: string;
  htmlUrl: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
}

export interface GitHubSnapshot {
  profile: GitHubProfile;
  topRepos: GitHubRepoSummary[];
  languageShare: Array<{ name: string; value: number }>;
}

