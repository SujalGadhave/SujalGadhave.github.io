"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 0.95,
      smoothWheel: true,
      touchMultiplier: 1.1,
      lerp: 0.1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}

