/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

// An underlined hero phrase that reveals image(s) on hover and shifts color
// (Figma hero hover state: "global non-profit" → blue + globe; "challenges" →
// yellow + photos). Pure CSS group-hover. Full motion is the later anim pass.
type Reveal = { src: string; alt: string; className: string };

const HOVER_COLOR = {
  blue: "hover:text-brand-blue",
  yellow: "hover:text-brand-yellow",
} as const;

export function HeroHighlight({
  children,
  reveals,
  color = "blue",
}: {
  children: ReactNode;
  reveals: Reveal[];
  color?: keyof typeof HOVER_COLOR;
}) {
  return (
    <span
      className={`group relative inline-block cursor-default underline decoration-[5px] transition-colors duration-200 sm:whitespace-nowrap ${HOVER_COLOR[color]}`}
    >
      {children}
      {reveals.map((r, i) => (
        <img
          key={i}
          src={r.src}
          alt={r.alt}
          aria-hidden
          className={`pointer-events-none absolute z-10 hidden scale-90 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 lg:block ${r.className}`}
        />
      ))}
    </span>
  );
}
