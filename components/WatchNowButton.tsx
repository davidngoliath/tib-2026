"use client";

import { useEffect, useState } from "react";
import { BASE, VARIANTS, type ButtonVariant } from "./Button";
import type { Video } from "@/content/types";

// A "Watch Now" pill that opens a fullscreen modal player (YouTube/Vimeo) on
// click. Closes on the backdrop, the ✕, or Escape. No-op if no video id yet.
function embedUrl(video: Extract<Video, { type: "embed" }>) {
  const params = "autoplay=1&rel=0";
  return video.provider === "vimeo"
    ? `https://player.vimeo.com/video/${video.id}?${params}`
    : `https://www.youtube.com/embed/${video.id}?${params}`;
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
      <button
        type="button"
        onClick={() => playable && setOpen(true)}
        aria-disabled={!playable}
        className={`${BASE} ${VARIANTS[variant]}`}
      >
        {label}
      </button>

      {open && video.type === "embed" && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-6"
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
        </div>
      )}
    </>
  );
}
