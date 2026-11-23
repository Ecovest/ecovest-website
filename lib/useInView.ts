"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the element has scrolled into view (fires once).
 * Sections pass it to `data-in` so the .ev-* scroll-in animations in globals.css play.
 */
export function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/** Inline style for a staggered animation delay. */
export const delay = (ms: number) => ({ ["--d" as string]: `${ms}ms` }) as React.CSSProperties;
