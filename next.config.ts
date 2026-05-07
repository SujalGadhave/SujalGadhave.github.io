import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const [owner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const isUserOrOrgPagesRepo =
  Boolean(owner) &&
  Boolean(repositoryName) &&
  repositoryName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const basePath =
  isGitHubPages && repositoryName && !isUserOrOrgPagesRepo ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
