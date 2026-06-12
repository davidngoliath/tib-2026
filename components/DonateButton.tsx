"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";
import { BASE, VARIANTS, type ButtonVariant } from "./Button";

// Donate pill that opens the Donorbox campaign in a modal (same shell as the
// WatchNow video modal: backdrop, ✕, Escape, body scroll lock).
const DONORBOX_EMBED = "https://donorbox.org/embed/brave-camp-2026-donations?";

export function DonateButton({
  label,
  variant = "donate",
}: {
  label: string;
  variant?: ButtonVariant;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`${BASE} ${VARIANTS[variant]}`}>
        {label}
      </button>

      {/* Portaled to <body> — the nav capsule's backdrop-blur is a containing
          block that would otherwise trap this fixed overlay. */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/80 p-6"
          >
            {/* Cream card shell hugging the form's natural 500px width, so the
                white form body fills it edge-to-edge under a cream title bar —
                no uneven cream frame around the iframe. */}
            <div
              className="flex max-h-[90vh] w-full max-w-[430px] flex-col overflow-hidden rounded-card bg-cream"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <p className="text-[22px] font-bold tracking-[-0.66px]">{label}</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close donation form"
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ink text-lg font-bold leading-none text-cream transition-colors hover:bg-brand-pink hover:text-ink"
                >
                  ✕
                </button>
              </div>
              {/* widget.js auto-resizes the iframe to the form's height. */}
              <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" />
              <div className="flex min-h-0 flex-1 justify-center overflow-y-auto bg-paper">
                <iframe
                  src={DONORBOX_EMBED}
                  name="donorbox"
                  title={label}
                  allow="payment"
                  className="mx-auto h-[min(780px,72vh)] w-full bg-paper"
                  scrolling="yes"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
