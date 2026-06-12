import Image from "next/image";
import { Button } from "@/components/Button";
import { getCopy } from "@/content/copy";
import type { PressItem } from "@/content/press";

// Press card (Figma 669:762): outlet + Learn More top row, image, blurb below.
export async function PressCard({ item }: { item: PressItem }) {
  const { pressBlurbs, common } = await getCopy();
  const blurb = pressBlurbs[item.outlet] ?? item.blurb;
  return (
    <article className="flex flex-col rounded-card bg-cream p-6 text-ink">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.05]">
          {item.outlet}
        </h3>
        <Button variant="dark" href={item.href}>
          {common.learnMore}
        </Button>
      </div>
      <div className="relative mt-5 aspect-[585/331] w-full overflow-hidden rounded-media bg-ink/5">
        <Image src={item.image} alt={item.outlet} fill className="object-cover" />
      </div>
      {/* Clamp to 2 lines so card height is locale-independent (ES text is
          longer) — keeps the scroll identical between /en and /es. */}
      {blurb && (
        <p className="mt-5 line-clamp-2 min-h-[3.6rem] text-body font-bold">
          {blurb}
        </p>
      )}
    </article>
  );
}
