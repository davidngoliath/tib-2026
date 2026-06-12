// Brave Camp · For Parents page → "Activities Designed to Build Brave" cards
// (Figma 669:1344–1361). 3 cards; titles/bodies live in copy.ts by ActivityId.
import type { ImageRef } from "./types";

export type ActivityId = "meditation" | "art" | "growth";

export type Activity = {
  id: ActivityId;
  image: ImageRef;
};

// The design currently uses the same photo for all three cards (placeholder
// export) — swap in real photos when the designer provides them.
export const activities: Activity[] = [
  { id: "meditation", image: "/images/for-parents/activity.jpg" },
  { id: "art", image: "/images/for-parents/activity.jpg" },
  { id: "growth", image: "/images/for-parents/activity.jpg" },
];
