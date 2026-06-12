// Brave Camp · For Parents page → "What Kids Get Out of Brave Camp" staggered
// tiles (Figma 669:1250–1262). Labels live in copy.ts keyed by BenefitId.
export type BenefitId = "confidence" | "community" | "outdoor" | "tools" | "reset";

export type Benefit = {
  id: BenefitId;
  color: "pink" | "blue" | "green" | "orange" | "yellow";
  /** Which column the tile sits in (desktop stagger). */
  side: "left" | "right";
};

// Order matches the design's top-to-bottom stagger (heading tile is separate).
export const benefits: Benefit[] = [
  { id: "confidence", color: "pink", side: "right" },
  { id: "community", color: "blue", side: "left" },
  { id: "outdoor", color: "green", side: "right" },
  { id: "tools", color: "orange", side: "left" },
  { id: "reset", color: "yellow", side: "right" },
];
