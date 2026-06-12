"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

// Tablet/mobile nav (<1024px). Collapses the desktop nav into two floating
// capsules — [logo + hamburger] on the left, [Donate + EN/ES] always-visible on
// the right — and opens a full-screen cream overlay with the page links and the
// Register CTA. Desktop (lg+) hides this and shows the full <Nav> cluster.
const CAPSULE =
  "flex h-[74px] items-center gap-[18px] rounded-[20px] bg-white/50 px-[18px] backdrop-blur";

type NavLink = { label: string; href: string };

export function MobileNav({
  logo,
  links,
  registerLabel,
  rightControls,
}: {
  logo: React.ReactNode;
  links: NavLink[];
  registerLabel: string;
  rightControls: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  // Escape to close + body scroll lock + focus trap while the overlay is open.
  useEffect(() => {
    if (!open) return;

    const overlay = overlayRef.current;
    const focusables = () =>
      Array.from(
        overlay?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Move focus into the overlay once it's open.
    focusables()[0]?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Return focus to the hamburger that opened the menu.
      openerRef.current?.focus();
    };
  }, [open]);

  return (
    <div className="flex w-full items-center lg:hidden">
      {/* Left capsule: logo + hamburger */}
      <div className={CAPSULE}>
        {logo}
        <button
          ref={openerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ink text-paper transition-colors hover:bg-brand-pink hover:text-ink"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden fill="none">
            <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Right capsule: Donate + EN/ES — always visible, never collapsed. */}
      <div className="ml-auto">{rightControls}</div>

      {/* Full-screen overlay menu */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[150] flex flex-col bg-cream transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex justify-end px-[24px] pt-[45px]">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-ink text-xl font-bold leading-none text-cream transition-colors hover:bg-brand-pink hover:text-ink"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-5 px-6 pb-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex h-16 w-full max-w-[360px] items-center justify-center rounded-[16px] bg-ink text-2xl font-bold text-paper transition-colors hover:bg-brand-pink hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-16 w-full max-w-[360px] items-center justify-center rounded-[16px] bg-brand-yellow px-6 text-2xl font-bold text-ink transition-colors hover:bg-ink hover:text-brand-yellow"
          >
            {registerLabel}
          </button>
        </nav>
      </div>
    </div>
  );
}
