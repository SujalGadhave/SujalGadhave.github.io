import { PortfolioPage } from "@/components/portfolio-page";
import { getGitHubSnapshot } from "@/lib/github";

export default async function Home() {
  const github = await getGitHubSnapshot("SujalGadhave");

  return <PortfolioPage github={github} />;
}

