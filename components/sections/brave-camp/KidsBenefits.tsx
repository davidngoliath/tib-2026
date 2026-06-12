import { benefits } from "@/content/benefits";
import { getCopy } from "@/content/copy";

// "What Kids Get Out of Brave Camp" (Figma 669:1250–1262). Split into two
// layers: the heading text block pins (left, vertically centered), and the five
// colored tiles ride a transparent canvas that scrolls up over the pinned
// heading in their staggered two-column rhythm.
const TILE_BG: Record<(typeof benefits)[number]["color"], string> = {
  pink: "bg-brand-pink",
  blue: "bg-brand-blue",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
  yellow: "bg-brand-yellow",
};

// Tile top offsets within the cascade (1440px reference canvas).
const TOPS = [284, 536, 808, 1062, 1332];

// Pinned heading block — left-aligned (text at x=127, per design), placed
// inside a sticky h-screen wrapper on the page so it centers vertically.
export async function KidsBenefitsHeading() {
  const { braveCampForParents } = await getCopy();
  const { kids } = braveCampForParents;
  return (
    <div className="mx-auto w-full px-5 sm:px-8 lg:w-[1440px] lg:px-0 lg:pl-[127px]">
      <h2 className="whitespace-pre-line text-[clamp(2rem,6vw,56px)] font-bold leading-none tracking-[-1.68px]">
        {kids.title}
      </h2>
      <p className="mt-6 max-w-[431px] text-body font-medium tracking-[-0.54px] lg:mt-8">
        {kids.sub}
      </p>
    </div>
  );
}

// Transparent staggered cascade of colored tiles — scrolls up over the pinned
// heading (the cream heading shows through the gaps).
export async function KidsBenefitsCards() {
  const { braveCampForParents } = await getCopy();
  const { kids } = braveCampForParents;
  return (
    <section className="overflow-hidden">
      {/* Desktop: exact staggered two-column cascade on the 1440px canvas. */}
      <div className="relative mx-auto hidden h-[1675px] w-[1440px] lg:block">
        {benefits.map((benefit, i) => (
          <div
            key={benefit.id}
            className={`absolute flex h-[343px] w-[652px] items-center justify-center rounded-card px-[56px] text-center ${TILE_BG[benefit.color]} ${
              benefit.side === "left" ? "left-[57px]" : "left-[730px]"
            }`}
            style={{ top: TOPS[i] }}
          >
            <p className="text-[56px] font-bold leading-none tracking-[-1.68px]">
              {kids.tiles[benefit.id]}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile/tablet: single-column stack of the same colored tiles. */}
      <div className="mx-auto flex max-w-[520px] flex-col gap-5 px-5 py-16 sm:px-8 lg:hidden">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className={`flex min-h-[240px] items-center justify-center rounded-card px-8 py-10 text-center ${TILE_BG[benefit.color]}`}
          >
            <p className="text-[clamp(1.75rem,6vw,56px)] font-bold leading-none tracking-[-1.68px]">
              {kids.tiles[benefit.id]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
