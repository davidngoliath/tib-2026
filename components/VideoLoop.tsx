"use client";

import { useState } from "react";

// Silent autoplaying background loop with a load spinner — the same cream +
// ink spinner treatment as the EN/ES locale-switch loader, scoped to the
// video's frame. Fades out once playback starts (or errors, leaving the poster).
export function VideoLoop({
  mp4,
  webm,
  poster,
  className = "",
}: {
  mp4: string;
  webm?: string;
  poster?: string;
  className?: string;
}) {
  const [ready, setReady] = useState(false);

  // Ref callback: if the video buffered before React hydrated (fast cache),
  // the canplay event already fired — check readyState directly, and try to
  // kick off autoplay in case the browser deferred it.
  const attach = (el: HTMLVideoElement | null) => {
    if (!el) return;
    if (el.readyState >= 3) setReady(true);
    el.play().catch(() => {});
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={attach}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        onCanPlay={() => setReady(true)}
        onError={() => setReady(true)}
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
      </video>
      <div
        aria-hidden
        className={`absolute inset-0 flex items-center justify-center bg-cream transition-opacity duration-300 ${
          ready ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-ink/20 border-t-ink" />
      </div>
    </div>
  );
}
