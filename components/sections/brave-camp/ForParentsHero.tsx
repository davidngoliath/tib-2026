/* eslint-disable @next/next/no-img-element */
import { BraveCampTabs } from "@/components/BraveCampTabs";
import { getCopy } from "@/content/copy";

// For Parents hero (Figma 669:1231) — pinned cream layer: tabs + scroll cue.
// The pink registration card sits over it (covering the empty middle), pins,
// and holds; then the video band covers everything.
export async function ForParentsHero() {
  const { braveCampForParents } = await getCopy();
  return (
    // Mobile: a short sticky bar holding just the sub-nav, so the tabs stay
    // pinned (like the About page) until the scroll-stack covers them; the
    // registration card pins just below. Desktop: full-height pinned cream layer
    // (tabs + scroll cue) that the pulled-up registration card overlays.
    <section className="sticky top-[90px] z-0 flex flex-col bg-cream lg:top-[119px] lg:h-[calc(100vh-119px)]">
      <BraveCampTabs active="forParents" />
      <div className="hidden flex-1 lg:block" aria-hidden />
      <div className="hidden flex-col items-center gap-3 pb-10 lg:flex">
        <p className="text-[16px] font-bold tracking-[-0.48px]">
          {braveCampForParents.scroll}
        </p>
        <img src="/images/home/down-arrow.svg" alt="" className="size-5" />
      </div>
    </section>
  );
}
