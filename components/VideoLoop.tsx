"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { placeholderDataUrl } from "@/lib/imagePlaceholders";

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
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (ready) return;

    const timer = window.setTimeout(() => setShowLoader(true), 180);
    return () => window.clearTimeout(timer);
  }, [ready]);

  // Ref callback: if the video buffered before React hydrated (fast cache),
  // the canplay event already fired — check readyState directly, and try to
  // kick off autoplay in case the browser deferred it.
  const attach = (el: HTMLVideoElement | null) => {
    if (!el) return;
    if (el.readyState >= 3) setReady(true);
    el.play().catch(() => {});
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          aria-hidden
          className={`object-cover transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
          placeholder="blur"
          blurDataURL={placeholderDataUrl("#E9E2D4")}
          sizes="100vw"
        />
      )}
      <video
        ref={attach}
        className={`h-full w-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onCanPlay={() => setReady(true)}
        onError={() => setReady(true)}
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
      </video>
      <div
        aria-hidden
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          ready || !showLoader ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/88 shadow-sm backdrop-blur-sm">
          <span className="h-8 w-8 animate-spin rounded-full border-4 border-ink/20 border-t-ink" />
        </span>
      </div>
    </div>
  );
}
