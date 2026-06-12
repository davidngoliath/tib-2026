/* eslint-disable @next/next/no-img-element */
import { BraveCampTabs } from "@/components/BraveCampTabs";
import { getCopy } from "@/content/copy";

// For Parents hero (Figma 669:1231) — pinned cream layer: tabs + scroll cue.
// The pink registration card sits over it (covering the empty middle), pins,
// and holds; then the video band covers everything.
export async function ForParentsHero() {
  const { braveCampForParents } = await getCopy();
  return (
    <section className="sticky top-[119px] z-0 flex h-[calc(100vh-119px)] flex-col bg-cream">
      <BraveCampTabs active="forParents" />
      <div className="flex-1" aria-hidden />
      <div className="flex flex-col items-center gap-3 pb-10">
        <p className="text-[16px] font-bold tracking-[-0.48px]">
          {braveCampForParents.scroll}
        </p>
        <img src="/images/home/down-arrow.svg" alt="" className="size-5" />
      </div>
    </section>
  );
}
