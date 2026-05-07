"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}

