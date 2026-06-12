import { setRequestLocale } from "next-intl/server";
import { MediaBand } from "@/components/MediaBand";
import { ForParentsHero } from "@/components/sections/brave-camp/ForParentsHero";
import { RegistrationCard } from "@/components/sections/brave-camp/RegistrationCard";
import { KidsBenefitsHeading, KidsBenefitsCards } from "@/components/sections/brave-camp/KidsBenefits";
import { ActivitiesHeader, ActivityCardsList } from "@/components/sections/brave-camp/ActivityCards";
import { ScheduleTable } from "@/components/sections/brave-camp/ScheduleTable";
import { FaqHeader, FaqRows } from "@/components/sections/brave-camp/FaqSection";
import { FaqFadeLayer } from "@/components/sections/brave-camp/FaqFadeLayer";
import { ReadyCard, ContactCard } from "@/components/sections/brave-camp/ReadyContactCards";
import { Footer } from "@/components/Footer";
import type { Video } from "@/content/types";

// For Parents media band (Figma layer "06 2").
const campBand: Video = {
  type: "loop",
  sources: { mp4: "/video/brave-camp-07.mp4" },
  poster: "/images/brave-camp/brave-camp-07-poster.jpg",
};

export default async function ForParentsAndCampers({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      {/* Pinned hero: tabs + scroll cue. The pink registration card sits over
          its empty middle on load. */}
      <ForParentsHero />

      {/* Wrapper is click-through so the hero's tab links (behind it at z-0)
          stay clickable through the pulled-up registration layer; the modules
          below re-enable pointer events for their own buttons/links. */}
      <div className="relative z-10 pointer-events-none">
        {/* 1. Pink registration — pulled up over the hero so it's centered in
            the frame on load, pins there, and holds. */}
        <div className="pointer-events-none sticky top-0 z-10 -mt-[100vh] flex h-screen items-center">
          <RegistrationCard />
        </div>
        <div className="h-screen" aria-hidden />

        <div className="pointer-events-auto">
        {/* 2. Camp video band — scrolls up over the pinned card, pins, holds. */}
        <div className="sticky top-0 z-20 h-screen overflow-hidden">
          <MediaBand video={campBand} className="h-full" />
        </div>
        <div className="h-screen" aria-hidden />

        {/* 3a. What Kids Get heading — cream snaps to top, heading locks
            centered (left), holds while the cards scroll over it. */}
        <div className="sticky top-0 z-30 flex h-screen items-center bg-cream">
          <KidsBenefitsHeading />
        </div>

        {/* 3b. Colored tiles — transparent staggered cascade scrolling up over
            the pinned heading; holds on the yellow tile before the blue covers. */}
        <div className="relative z-[35]">
          <KidsBenefitsCards />
        </div>
        <div className="h-screen" aria-hidden />

        {/* 4. Blue Activities header pins at top; the cards scroll up over it. */}
        <ActivitiesHeader />
        <div className="relative z-50">
          <ActivityCardsList />
        </div>

        {/* 5. What to expect — scrolls up over the blue section, then locks,
            centered vertically + horizontally in the frame. */}
        <div className="sticky top-0 z-[60] flex h-screen w-full items-center justify-center bg-cream">
          <ScheduleTable />
        </div>
        <div className="h-screen" aria-hidden />

        {/* 6. Giant FAQ title — pins, rows scroll up over it, then the rows
            pin centered and hold for a beat before Ready rises. */}
        <FaqHeader />
        <div className="h-screen" aria-hidden />
        <FaqFadeLayer>
          <FaqRows />
        </FaqFadeLayer>
        {/* Beat: the FAQ holds before Ready rises. */}
        <div className="h-screen" aria-hidden />

        {/* 7. Ready to Register — inset green card on a transparent wrapper
            (like the home "Brave Camp Returns" module), pins; as it rises
            (data-faq-riser) the FAQ behind fades out. */}
        <div
          data-faq-riser
          className="sticky top-0 z-[90] flex h-screen items-center"
        >
          <ReadyCard />
        </div>
        <div className="h-screen" aria-hidden />

        {/* 8. Contact Us — inset yellow card on a transparent wrapper, pins over Ready. */}
        <div className="sticky top-0 z-[100] flex h-screen items-center">
          <ContactCard />
        </div>
        <div className="h-screen" aria-hidden />

        {/* 9. Footer — comes in over the pinned Contact module. */}
        <div className="relative z-[110]">
          <Footer />
        </div>
        </div>
      </div>
    </main>
  );
}
