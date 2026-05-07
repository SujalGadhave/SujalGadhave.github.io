import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { resolveSiteUrl } from "@/utils/site";

import "./globals.css";

const siteUrl = resolveSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sujal Gadhave | Backend-Focused Full-Stack Engineer",
  description:
    "Portfolio of Sujal Gadhave - Java, Spring Boot, secure backend systems, and full-stack engineering execution.",
  keywords: [
    "Sujal Gadhave",
    "Java Backend Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Secure API Engineer",
    "Full Stack Engineer",
    "Authentication Systems",
  ],
  openGraph: {
    title: "Sujal Gadhave | Backend-Focused Full-Stack Engineer",
    description:
      "Building production-grade backend and full-stack systems with Java, Spring Boot, React, and architecture-first engineering discipline.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "https://opengraph.githubassets.com/1/SujalGadhave/SujalGadhave",
        width: 1200,
        height: 630,
        alt: "Sujal Gadhave GitHub preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujal Gadhave | Backend-Focused Full-Stack Engineer",
    description:
      "Premium developer portfolio focused on backend architecture, secure APIs, and full-stack execution.",
    images: ["https://opengraph.githubassets.com/1/SujalGadhave/SujalGadhave"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sujal Gadhave",
              url: "https://sujalgadhave.github.io",
              sameAs: [
                "https://github.com/SujalGadhave",
                "https://www.linkedin.com/in/sujalgadhave",
              ],
              jobTitle: "Backend-Focused Full-Stack Engineer",
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "REST API Architecture",
                "Authentication Systems",
                "React",
                "TypeScript",
              ],
            }),
          }}
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
