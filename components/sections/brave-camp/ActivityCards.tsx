import Image from "next/image";
import { activities } from "@/content/activities";
import { getCopy } from "@/content/copy";

// "Activities Designed to Build Brave" (Figma 669:1342–1361). Split into a
// pinned blue header that snaps to the top of the frame, and the cream cards
// that scroll up over it.
export async function ActivitiesHeader() {
  const { braveCampForParents } = await getCopy();
  const section = braveCampForParents.activities;
  return (
    <section className="sticky top-0 z-40 flex h-screen items-center bg-brand-blue">
      <div className="mx-auto w-[874px]">
        <h2 className="max-w-[512px] text-[56px] font-bold leading-none tracking-[-1.68px]">
          {section.title}
        </h2>
        <p className="mt-8 max-w-[431px] text-body font-medium tracking-[-0.54px]">
          {section.intro}
        </p>
      </div>
    </section>
  );
}

// Activity cards — transparent section that scrolls up over the pinned blue
// header (the blue shows through the gaps between the cream cards).
export async function ActivityCardsList() {
  const { braveCampForParents } = await getCopy();
  const section = braveCampForParents.activities;
  return (
    <section className="py-[160px]">
      <div className="mx-auto w-[874px] space-y-10">
        {activities.map((activity) => {
          const text = section.items[activity.id];
          return (
            <article
              key={activity.id}
              className="flex h-[347px] gap-[33px] rounded-card bg-cream p-[26px]"
            >
              <div className="relative h-full w-[420px] shrink-0 overflow-hidden rounded-media">
                <Image
                  src={activity.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="420px"
                />
              </div>
              {/* Title pinned top, body bottom-aligned with the image (Figma
                  "Group 146": title y+38, body bottom flush with image). */}
              <div className="flex min-w-0 flex-1 flex-col justify-between pt-[12px]">
                <h3 className="text-[56px] font-bold leading-[59px] tracking-[-1.68px]">
                  {text.title}
                </h3>
                <p className="text-[18px] font-medium leading-[1.3] tracking-[-0.54px]">
                  {text.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
