import { Container } from "@/components/Container";
import { BraveCampTabs } from "@/components/BraveCampTabs";
import { getCopy } from "@/content/copy";

// About Brave Camp hero (Figma 669:1118) — pinned cream layer: sub-nav tabs at
// the top, big centered intro. The video band scrolls up and covers it.
export async function AboutHero() {
  const { braveCampAbout } = await getCopy();
  return (
    <section className="sticky top-[119px] z-0 flex min-h-[calc(100vh-119px)] flex-col bg-cream pb-[12vh]">
      <BraveCampTabs active="about" />
      <div className="flex flex-1 items-center">
        <Container className="text-center">
          <h1 className="mx-auto max-w-[1268px] text-[56px] font-bold leading-[57px] tracking-[-1.68px]">
            {braveCampAbout.intro}
          </h1>
        </Container>
      </div>
    </section>
  );
}
