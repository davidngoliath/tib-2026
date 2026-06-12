"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Pinned FAQ rows layer that fades out as the next section (marked
// `data-faq-riser`) rises to cover it — so the FAQ doesn't read through the
// edges of the green "Ready to Register" card. Driven by a scroll listener for
// reliability across browsers.
export function FaqFadeLayer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const riser = document.querySelector<HTMLElement>("[data-faq-riser]");
    if (!el || !riser) return;

    // Cheap (one rect read + style set), so run it straight off scroll.
    const update = () => {
      const top = riser.getBoundingClientRect().top;
      const vh = window.innerHeight;
      // riser top: vh (just below viewport) → 0 (covering). Fade the FAQ over
      // the first 60% of its rise so it's gone before the card fully covers.
      const opacity = Math.min(1, Math.max(0, (top - vh * 0.4) / (vh * 0.6)));
      el.style.opacity = String(opacity);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="sticky top-0 z-[80] flex min-h-screen items-center">
      {children}
    </div>
  );
}
