export function resolveSiteUrl() {
  const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");

  if (process.env.GITHUB_PAGES === "true" && owner && repository) {
    const isUserOrOrgPagesRepo =
      repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;

    if (isUserOrOrgPagesRepo) {
      return `https://${repository}`;
    }

    return `https://${owner}.github.io/${repository}`;
  }

  return "https://sujalgadhave.github.io";
}
