import Image from "next/image";
import { features } from "@/content/features";
import { getCopy } from "@/content/copy";

// About page feature rows (Figma "Group 165/166/131", 669:1126–1139): a 650×463
// color card + a 650×463 photo per row, alternating sides, 60px page margins.
// The section is transparent so the cards (and the gaps between them) overlay
// the pinned video band behind, like the homepage cards. Card text is centered
// vertically; title 56px + medium 18px body with a blank line between paragraphs.
const CARD_BG: Record<(typeof features)[number]["color"], string> = {
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
};

export async function FeatureRows() {
  const { braveCampAbout } = await getCopy();
  return (
    <section className="py-[284px]">
      <div className="mx-auto w-full max-w-[1440px] px-[60px]">
        <div className="space-y-[284px]">
          {features.map((feature) => {
            const text = braveCampAbout.features[feature.id];
            const card = (
              <div
                className={`flex h-[463px] flex-col justify-center rounded-card px-[74px] ${CARD_BG[feature.color]}`}
              >
                <h2 className="whitespace-pre-line text-[56px] font-bold leading-[normal] tracking-[-1.68px]">
                  {text.title}
                </h2>
                <div className="mt-[19px] space-y-[22px] text-[18px] font-medium leading-[normal] tracking-[-0.54px]">
                  {text.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            );
            const photo = (
              <div className="relative h-[463px] overflow-hidden rounded-card bg-ink/5">
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="650px"
                />
              </div>
            );
            return (
              <div key={feature.id} className="grid grid-cols-2 gap-5">
                {feature.imageSide === "left" ? (
                  <>
                    {photo}
                    {card}
                  </>
                ) : (
                  <>
                    {card}
                    {photo}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
