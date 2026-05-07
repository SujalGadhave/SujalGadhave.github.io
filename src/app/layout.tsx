import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { resolveSiteUrl } from "@/utils/site";

import "./globals.css";

const siteUrl = resolveSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sujal Gadhave | Full-Stack Java Developer",
  description:
    "Portfolio of Sujal Gadhave - Java, Spring Boot, React, and security-first full-stack engineering.",
  keywords: [
    "Sujal Gadhave",
    "Spring Boot Developer",
    "Java Developer",
    "Full Stack Developer",
    "React Developer",
    "Backend Engineer",
  ],
  openGraph: {
    title: "Sujal Gadhave | Full-Stack Java Developer",
    description:
      "Building production-grade backend and full-stack systems with Java, Spring Boot, React, and strong engineering discipline.",
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
    title: "Sujal Gadhave | Full-Stack Java Developer",
    description:
      "Premium developer portfolio focused on backend architecture and full-stack execution.",
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
