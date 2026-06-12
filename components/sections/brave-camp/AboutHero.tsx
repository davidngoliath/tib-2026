import { Container } from "@/components/Container";
import { BraveCampTabs } from "@/components/BraveCampTabs";
import { getCopy } from "@/content/copy";

// About Brave Camp hero (Figma 669:1118) — pinned cream layer: sub-nav tabs at
// the top, big centered intro. The video band scrolls up and covers it.
export async function AboutHero() {
  const { braveCampAbout } = await getCopy();
  return (
    <section className="sticky top-[90px] z-0 flex min-h-[calc(100svh-90px)] flex-col bg-cream pb-[12vh] lg:top-[119px] lg:min-h-[calc(100vh-119px)]">
      <BraveCampTabs active="about" />
      <div className="flex flex-1 items-center">
        <Container className="text-center">
          <h1 className="mx-auto max-w-[1268px] text-[clamp(1.75rem,5.5vw,56px)] font-bold leading-[1.15] tracking-[-1.68px] lg:leading-[57px]">
            {braveCampAbout.intro}
          </h1>
        </Container>
      </div>
    </section>
  );
}
