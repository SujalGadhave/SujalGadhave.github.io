"use client";

import { useEffect, useState } from "react";

interface TypewriterState {
  index: number;
  subIndex: number;
  deleting: boolean;
}

export function useTypewriter(words: string[], speed = 70, pause = 1200) {
  const [state, setState] = useState<TypewriterState>({
    index: 0,
    subIndex: 0,
    deleting: false,
  });

  useEffect(() => {
    if (!words.length) {
      return;
    }

    const currentWord = words[state.index % words.length];
    let delay = state.deleting ? speed / 2 : speed;

    if (!state.deleting && state.subIndex === currentWord.length) {
      delay = pause;
    }

    const timeout = setTimeout(() => {
      setState((prev) => {
        const word = words[prev.index % words.length];

        if (!prev.deleting && prev.subIndex === word.length) {
          return { ...prev, deleting: true };
        }

        if (prev.deleting && prev.subIndex === 0) {
          return { index: (prev.index + 1) % words.length, subIndex: 0, deleting: false };
        }

        return {
          ...prev,
          subIndex: prev.subIndex + (prev.deleting ? -1 : 1),
        };
      });
    }, delay);

    return () => clearTimeout(timeout);
  }, [pause, speed, state.deleting, state.index, state.subIndex, words]);

  return words[state.index % words.length]?.slice(0, state.subIndex) ?? "";
}
