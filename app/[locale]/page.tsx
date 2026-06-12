import { setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/components/sections/HomeHero";
import { BraveCampPromo } from "@/components/sections/BraveCampPromo";
import { MediaBand } from "@/components/MediaBand";
import { OurActionHeader } from "@/components/sections/OurActionHeader";
import { OurActionCards } from "@/components/sections/OurActionCards";
import { TheirStoriesHeader } from "@/components/sections/TheirStoriesHeader";
import { TheirStoriesCards } from "@/components/sections/TheirStoriesCards";
import { PressHeader } from "@/components/sections/PressHeader";
import { PressCards } from "@/components/sections/PressCards";
import { PartnersHeader } from "@/components/sections/PartnersHeader";
import { PartnerGrid } from "@/components/sections/PartnerGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/Footer";
import type { Video } from "@/content/types";

// Looping Brave Camp media band — self-hosted MP4/WebM.
const braveCampLoop: Video = {
  type: "loop",
  sources: { mp4: "/video/brave-camp.mp4" },
  poster: "/images/home/brave-camp-poster.jpg",
};

// Static full-bleed image band after the OUR ACTION section (two-youth portrait).
const youthPortraitBand: Video = {
  type: "embed",
  provider: "vimeo",
  id: "", // static image for now; add a video id later to make it playable
  poster: "/images/home/youth-portrait.jpg",
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      {/* Scroll-stack: each layer pins, the next scrolls up and covers it. */}
      <HomeHero />
      <div className="relative z-10 [timeline-scope:--lion]">
        {/* Brave camp green card — rises over hero, snaps center, then holds */}
        <BraveCampPromo />
        <div className="h-screen" aria-hidden />

        {/* Big image — pins; lion sticker rides with it, covered by OUR ACTION. */}
        <div className="sticky top-0 z-20 h-screen overflow-hidden">
          <MediaBand video={braveCampLoop} className="h-full" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/lion-sticker.svg"
            alt=""
            className="lion-sticker absolute bottom-[200px] right-[70px] w-36"
          />
        </div>
        <div className="lion-track h-[120vh]" aria-hidden />

        {/* OUR ACTION header — rises over the image, pins centered, then holds */}
        <OurActionHeader />
        <div className="h-screen" aria-hidden />

        {/* Action cards — scroll up over the header */}
        <div className="relative z-40">
          <OurActionCards />
        </div>

        {/* Youth portrait — pinned big image; covers the action cards */}
        <div className="sticky top-0 z-50 h-screen overflow-hidden">
          <MediaBand video={youthPortraitBand} className="h-full" />
        </div>
        <div className="h-screen" aria-hidden />

        {/* THE STORIES — white text overlays the portrait, holds, scrolls out */}
        <TheirStoriesHeader />

        {/* Stories cards — scroll up over the portrait (transparent) */}
        <div className="relative z-[70]">
          <TheirStoriesCards />
        </div>

        {/* PRESS header — pins centered, holds */}
        <PressHeader />
        <div className="h-screen" aria-hidden />

        {/* Press cards — scroll up over the header */}
        <div className="relative z-[90]">
          <PressCards />
        </div>

        {/* PARTNERS header — pins centered, holds */}
        <PartnersHeader />
        <div className="h-screen" aria-hidden />

        {/* Partners grid — scrolls up over the PARTNERS word */}
        <div className="relative z-[110]">
          <PartnerGrid />
        </div>

        {/* CTA — full-blue, pins over the partner logos, holds */}
        <CtaBand />
        <div className="h-screen" aria-hidden />

        {/* Footer — scrolls up over the pinned CTA */}
        <div className="relative z-[140]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
