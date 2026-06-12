import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { MissionHero } from "@/components/sections/mission/MissionHero";
import { MissionStatement } from "@/components/sections/mission/MissionStatement";
import { MissionStory } from "@/components/sections/mission/MissionStory";
import { MediaBand } from "@/components/MediaBand";
import { MissionCollage } from "@/components/sections/mission/MissionCollage";
import { Footer } from "@/components/Footer";
import type { Video } from "@/content/types";

// Mission media band — looping video (Figma "Group 125", the dark hand shot).
const missionBand: Video = {
  type: "loop",
  sources: { mp4: "/video/mission-band.mp4" },
  poster: "/images/mission/media-band.jpg",
};

export default async function OurMission({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      {/* OUR MISSION title — pinned in place; the pink + yellow scroll over it
          and then out, revealing it again before Image 12 covers it. */}
      <MissionHero />

      <div className="relative z-10">
        {/* 1+2. Pink "We help people" pins (covers the title), holds, and STAYS
            pinned while the yellow story scrolls up over it. The pink is pinned
            only within this container, so it releases as the yellow clears —
            then the hero (OUR MISSION) is revealed. */}
        <div className="relative z-10">
          <MissionStatement />
          <div className="h-screen" aria-hidden />
          <div className="relative z-20">
            <MissionStory />
          </div>
        </div>

        {/* OUR MISSION revealed (pinned hero shows here) — hold */}
        <div className="h-screen" aria-hidden />

        {/* 3. Image 12 (dark shot) — pins, covers the revealed title */}
        <div className="sticky top-0 z-30 h-screen overflow-hidden">
          <MediaBand video={missionBand} className="h-full" />
        </div>
        <div className="h-screen" aria-hidden />

        {/* 4. Staggered photo collage — scrolls up over Image 12 */}
        <div className="relative z-40">
          <MissionCollage />
        </div>

        {/* 5. Image 13 (pink "I feel BRAVE" notes) — pins after the collage */}
        <div className="sticky top-0 z-50 h-screen overflow-hidden">
          <Image
            src="/images/mission/img-2393.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="h-screen" aria-hidden />

        {/* 6. Footer — scrolls up over Image 13 */}
        <div className="relative z-[60]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
