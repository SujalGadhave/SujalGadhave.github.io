export function resolveSiteUrl() {
  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

  if (process.env.GITHUB_PAGES === "true" && repository) {
    return `https://sujalgadhave.github.io/${repository}`;
  }

  return "https://sujalgadhave.github.io";
}

