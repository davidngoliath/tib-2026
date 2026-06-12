// Brave Camp · About page → alternating feature rows (Figma 669:1126–1139).
// Structural data only — titles/bodies live in copy.ts keyed by FeatureId.
import type { ImageRef } from "./types";

export type FeatureId = "braveCamp" | "different" | "aDay";

export type Feature = {
  id: FeatureId;
  image: ImageRef;
  color: "yellow" | "green" | "orange";
  /** Which side the photo sits on (desktop). */
  imageSide: "left" | "right";
};

export const features: Feature[] = [
  { id: "braveCamp", color: "yellow", imageSide: "right", image: "/images/about/feature-1.jpg" },
  { id: "different", color: "green", imageSide: "left", image: "/images/about/feature-2.jpg" },
  { id: "aDay", color: "orange", imageSide: "right", image: "/images/about/feature-3.jpg" },
];
