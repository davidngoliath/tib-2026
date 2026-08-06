"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "next-intl";
import { registration } from "@/content/braveCamp";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { BASE, VARIANTS, type ButtonVariant } from "./Button";

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function RegisterButton({
  label,
  variant = "register",
  className = "",
  onNavigate,
}: {
  label: string;
  variant?: ButtonVariant;
  className?: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const actionable = registration.isOpen && registration.registerHref !== "#";
  const closedCopy = registration.closedCopy[locale] ?? registration.closedCopy.en;
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const dialog = dialogRef.current;
    const focusables = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
    focusables()[0]?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  if (actionable) {
    if (isExternalHref(registration.registerHref)) {
      return (
        <a href={registration.registerHref} onClick={onNavigate} className={cls}>
          {label}
        </a>
      );
    }

    return (
      <Link href={registration.registerHref} onClick={onNavigate} className={cls}>
        {label}
      </Link>
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className={cls}
      >
        {label}
      </button>

      {open &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={closedCopy.title}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[250] flex items-center justify-center bg-ink/80 p-6"
          >
            <div
              className="flex w-full max-w-[560px] flex-col overflow-hidden rounded-card bg-cream"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-end px-5 py-4 lg:px-7 lg:py-5">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={closedCopy.closeLabel}
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ink text-lg font-bold leading-none text-cream transition-colors hover:bg-brand-pink hover:text-ink"
                >
                  ✕
                </button>
              </div>

              <div className="px-5 pb-5 pt-1 text-center lg:px-7 lg:pb-7">
                <p className="mx-auto max-w-[430px] text-[clamp(1.5rem,4.5vw,32px)] font-bold leading-[1.12] tracking-[-0.96px] text-ink">
                  {closedCopy.message}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={`${BASE} ${VARIANTS.register} mt-8 h-12 px-6 text-base`}
                >
                  {closedCopy.closeButton}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}