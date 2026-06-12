/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/Container";
import { HeroHighlight } from "@/components/HeroHighlight";
import { getCopy } from "@/content/copy";

// Home hero (Figma "home-page-intro-text" 669:432). Text block centered, pinned.
export async function HomeHero() {
  const { hero } = await getCopy();
  return (
    <section className="sticky top-[119px] z-0 flex min-h-[calc(100vh-119px)] items-center bg-cream pb-[12vh]">
      <Container className="text-center">
        <h1 className="mx-auto max-w-[1088px] text-[60px] font-bold leading-[1.17] tracking-[-0.03em] [text-underline-position:from-font]">
          <img
            src="/images/tib-logo-blk.svg"
            alt="Today, I'm Brave"
            className="mr-2 inline-block h-[1.05em] w-auto align-[-0.18em]"
          />
          {hero.line1}
          <HeroHighlight
            color="blue"
            reveals={[
              {
                src: "/images/home/globe-smile.svg",
                alt: "",
                className: "-top-28 right-0 w-44 translate-x-1/4",
              },
            ]}
          >
            {hero.emphasis1}
          </HeroHighlight>
          {hero.line2}
          <HeroHighlight
            color="yellow"
            reveals={[
              {
                src: "/images/home/hover-pic-1.png",
                alt: "",
                className:
                  "left-1/2 top-full w-64 -translate-x-[72%] -rotate-3 rounded-[16px] shadow-xl",
              },
              {
                src: "/images/home/hover-pic-2.png",
                alt: "",
                className:
                  "left-1/2 top-full z-20 w-64 -translate-x-[18%] translate-y-20 rotate-3 rounded-[16px] shadow-xl",
              },
            ]}
          >
            {hero.emphasis2}
          </HeroHighlight>
          {hero.line3}
        </h1>
      </Container>

      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3">
        <p className="text-[16px] font-bold tracking-[-0.48px]">{hero.scroll}</p>
        <img src="/images/home/down-arrow.svg" alt="" className="size-5" />
      </div>
    </section>
  );
}
