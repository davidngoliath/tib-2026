"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BASE, VARIANTS, type ButtonVariant } from "./Button";
import type { Video } from "@/content/types";

// A "Watch Now" pill that opens a fullscreen modal player (YouTube/Vimeo) on
// click. Closes on the backdrop, the ✕, or Escape. No-op if no video id yet.
function embedUrl(video: Extract<Video, { type: "embed" }>) {
  const params = "autoplay=1&rel=0";
  return video.provider === "vimeo"
    ? `https://player.vimeo.com/video/${video.id}?${params}`
    : `https://www.youtube-nocookie.com/embed/${video.id}?${params}`;
}

export function WatchNowButton({
  video,
  label,
  variant = "dark",
}: {
  video: Video;
  label: string;
  variant?: ButtonVariant;
}) {
  const [open, setOpen] = useState(false);
  const playable = video.type === "embed" && video.id.length > 0;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const dialog = dialogRef.current;
    const focusables = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
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

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => playable && setOpen(true)}
        aria-disabled={!playable}
        aria-haspopup={playable ? "dialog" : undefined}
        className={`${BASE} ${VARIANTS[variant]}`}
      >
        {label}
      </button>

      {open &&
        video.type === "embed" &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/85 p-6"
          >
            <div
              className="relative aspect-video w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="h-full w-full rounded-media"
                src={embedUrl(video)}
                title="Video"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-same-origin allow-scripts allow-presentation"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute -top-11 right-0 text-3xl font-bold leading-none text-paper transition-opacity hover:opacity-70"
              >
                ✕
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
