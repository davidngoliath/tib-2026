"use client";

import { useEffect } from "react";

// Site-wide "next/previous section" paging: ↓ advances one viewport height,
// ↑ goes back one. Sections/holds in the sticky-stack are ~100vh each, so a
// single viewport-height jump lines up with the scroll choreography without
// needing per-section markers. Held-down repeats are ignored so one key press
// == one page; typing in a field or an open dialog (video/donate modal, the
// mobile menu) is left alone so it doesn't hijack normal scrolling there.
export function ArrowKeyScroll() {
  useEffect(() => {
    function isTextInput(el: Element | null) {
      if (!el) return false;
      const tag = el.tagName;
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        (el as HTMLElement).isContentEditable
      );
    }

    function isInteractiveElement(el: Element | null) {
      if (!el) return false;
      const interactiveSelector = [
        "a[href]",
        "button",
        "summary",
        "details",
        '[role="button"]',
        '[role="link"]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(",");

      return el.closest(interactiveSelector) !== null;
    }

    function isDialogOpen() {
      return Array.from(document.querySelectorAll('[role="dialog"]')).some((el) => {
        const style = window.getComputedStyle(el);
        return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
      });
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (isTextInput(document.activeElement)) return;
      if (isInteractiveElement(document.activeElement)) return;
      if (isDialogOpen()) return;

      e.preventDefault();
      const direction = e.key === "ArrowDown" ? 1 : -1;
      window.scrollBy({ top: direction * window.innerHeight, behavior: "smooth" });
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
