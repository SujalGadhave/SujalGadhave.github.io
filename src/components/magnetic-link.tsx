"use client";

import type { AnchorHTMLAttributes, ReactNode, RefObject } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";

interface MagneticLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}

export function MagneticLink({ href, children, className, ...rest }: MagneticLinkProps) {
  const ref = useMagnetic(0.15);

  return (
    <a
      ref={ref as RefObject<HTMLAnchorElement>}
      href={href}
      className={className}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}

