import { setRequestLocale } from "next-intl/server";
import { MediaBand } from "@/components/MediaBand";
import { AboutHero } from "@/components/sections/brave-camp/AboutHero";
import { FeatureRows } from "@/components/sections/brave-camp/FeatureRows";
import { ConnectBand } from "@/components/sections/brave-camp/ConnectBand";
import { AboutCtaCards } from "@/components/sections/brave-camp/AboutCtaCards";
import { Footer } from "@/components/Footer";
import type { Video } from "@/content/types";

// Brave Camp media bands (Figma layers "06 1" and "06 3").
const campBand: Video = {
  type: "loop",
  sources: { mp4: "/video/brave-camp-06.mp4" },
  poster: "/images/brave-camp/brave-camp-06-poster.jpg",
};
const busBand: Video = {
  type: "loop",
  sources: { mp4: "/video/brave-camp-bus.mp4" },
  poster: "/images/brave-camp/brave-camp-bus-poster.jpg",
};

export default async function AboutBraveCamp({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      {/* Pinned hero: tabs + intro. The video band scrolls up and covers it. */}
      <AboutHero />

      <div className="relative z-10">
        {/* Camp video band — pins, then the feature rows scroll over it */}
        <div className="sticky top-0 z-10 h-screen overflow-hidden">
          <MediaBand video={campBand} className="h-full" />
        </div>
        <div className="h-screen" aria-hidden />

        {/* Feature rows — transparent; colored cards overlay the pinned band */}
        <div className="relative z-20">
          <FeatureRows />
        </div>

        {/* "We'd love to connect" — pins centered, holds */}
        <ConnectBand />
        <div className="h-screen" aria-hidden />

        {/* CTA cards — scroll up over the statement, pin centered, then hold */}
        <AboutCtaCards />
        <div className="h-screen" aria-hidden />

        {/* Bus band — scrolls up over the pinned CTA cards, then pins */}
        <div className="sticky top-0 z-50 h-screen overflow-hidden">
          <MediaBand video={busBand} className="h-full" />
        </div>
        <div className="h-screen" aria-hidden />

        {/* Footer — scrolls up over the pinned band */}
        <div className="relative z-[60]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
