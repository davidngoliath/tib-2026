// Shared content primitives used across all collections.

/** Path under /public (e.g. "/images/press/nbc.jpg") or a Blob/CDN URL. */
export type ImageRef = string;

/** A link target — internal route ("/brave-camp") or external URL. */
export type Link = {
  label: string;
  href: string;
};

/**
 * Video carries a `type` so each consumer knows how to render it:
 * - "loop"  → silent, autoplaying background loop, self-hosted MP4/WebM
 * - "embed" → click-to-play feature video on Vimeo/YouTube (facade-loaded)
 */
export type Video =
  | {
      type: "loop";
      sources: { mp4: string; webm?: string };
      poster: ImageRef;
    }
  | {
      type: "embed";
      provider: "vimeo" | "youtube";
      id: string;
      poster?: ImageRef;
    };
