"use client";

import { useEffect, useRef } from "react";

export function useMagnetic(intensity = 0.2) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const move = (event: Event) => {
      const pointer = event as globalThis.MouseEvent;
      const rect = node.getBoundingClientRect();
      const x = (pointer.clientX - rect.left - rect.width / 2) * intensity;
      const y = (pointer.clientY - rect.top - rect.height / 2) * intensity;

      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const leave = () => {
      node.style.transform = "translate3d(0px, 0px, 0)";
    };

    node.addEventListener("mousemove", move);
    node.addEventListener("mouseleave", leave);

    return () => {
      node.removeEventListener("mousemove", move);
      node.removeEventListener("mouseleave", leave);
    };
  }, [intensity]);

  return ref;
}

