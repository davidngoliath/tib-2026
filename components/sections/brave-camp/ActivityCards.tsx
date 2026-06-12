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
      <div className="mx-auto w-full max-w-[874px] px-5 sm:px-8 lg:px-0">
        <h2 className="max-w-[512px] text-[clamp(2rem,6vw,56px)] font-bold leading-none tracking-[-1.68px]">
          {section.title}
        </h2>
        <p className="mt-6 max-w-[431px] text-body font-medium tracking-[-0.54px] lg:mt-8">
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
    <section className="py-20 lg:py-[160px]">
      <div className="mx-auto w-full max-w-[874px] space-y-8 px-5 sm:px-8 lg:space-y-10 lg:px-0">
        {activities.map((activity) => {
          const text = section.items[activity.id];
          return (
            <article
              key={activity.id}
              className="flex flex-col gap-6 rounded-card bg-cream p-[26px] lg:h-[347px] lg:flex-row lg:gap-[33px]"
            >
              <div className="relative aspect-[420/295] w-full shrink-0 overflow-hidden rounded-media lg:aspect-auto lg:h-full lg:w-[420px]">
                <Image
                  src={activity.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 420px, 100vw"
                />
              </div>
              {/* Title pinned top, body bottom-aligned with the image (Figma
                  "Group 146": title y+38, body bottom flush with image). */}
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 lg:gap-0 lg:pt-[12px]">
                <h3 className="text-[clamp(2rem,5.5vw,56px)] font-bold leading-[1.05] tracking-[-1.68px] lg:leading-[59px]">
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
