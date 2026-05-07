"use client";

import type { ReactNode, RefObject } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function MagneticLink({ href, children, className }: MagneticLinkProps) {
  const ref = useMagnetic(0.15);

  return (
    <a
      ref={ref as RefObject<HTMLAnchorElement>}
      href={href}
      className={className}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

