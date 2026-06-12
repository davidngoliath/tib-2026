"use client";

import { useEffect, useState, useSyncExternalStore, useTransition } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// EN/ES toggle (Figma 669:812): active = black, inactive = grey, green on hover.
// Switches locale on the CURRENT page and shows a brief centered loader so the
// cross-locale swap fades instead of jumping.
export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  // true on the client, false during SSR — the portal target (document.body)
  // only exists on the client. No effect/setState, so no cascading render.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  function switchTo(loc: string) {
    if (loc === locale) return;
    setLoading(true);
    // Hold the loader briefly so it's clearly visible before the (instant)
    // static-page swap, then navigate.
    setTimeout(() => {
      startTransition(() => router.replace(pathname, { locale: loc }));
    }, 550);
  }

  // Fade the overlay out shortly after the navigation settles.
  useEffect(() => {
    if (!isPending && loading) {
      const t = setTimeout(() => setLoading(false), 450);
      return () => clearTimeout(t);
    }
  }, [isPending, loading]);

  return (
    <>
      <div className="flex items-center">
        {routing.locales.map((loc) => {
          const active = loc === locale;
          return (
            <button
              key={loc}
              type="button"
              onClick={() => switchTo(loc)}
              aria-current={active ? "true" : undefined}
              className={`flex h-10 w-[54px] items-center justify-center rounded-[10px] text-[14px] font-bold uppercase tracking-[-0.28px] transition-colors ${
                active
                  ? "bg-ink text-cream"
                  : "bg-black/10 text-ink hover:bg-brand-green hover:text-ink"
              }`}
            >
              {loc}
            </button>
          );
        })}
      </div>

      {/* Loader portaled to <body> so it centers in the viewport (escaping the
          nav capsule's backdrop-blur containing block). */}
      {mounted &&
        createPortal(
          <div
            aria-hidden
            className={`fixed inset-0 z-[300] flex items-center justify-center bg-cream transition-opacity duration-300 ${
              loading ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span className="h-12 w-12 animate-spin rounded-full border-4 border-ink/20 border-t-ink" />
          </div>,
          document.body,
        )}
    </>
  );
}
