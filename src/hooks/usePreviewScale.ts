"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function usePreviewScale(containerRef: RefObject<HTMLDivElement | null>) {
  const [scale, setScale] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const availableWidth = entry.contentRect.width;
        const newScale = Math.min(1, availableWidth / 1200);

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          setScale(newScale);
        });
      }
    });

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  return scale;
}
