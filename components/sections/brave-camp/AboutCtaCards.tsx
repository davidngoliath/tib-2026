import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { getCopy } from "@/content/copy";

// About page CTA pair (Figma 669:1143): yellow Parents & Campers card + blue
// Partner card. Scrolls up over the pinned connect statement, then pins itself
// centered in the frame and holds until the bus video band covers it.
export async function AboutCtaCards() {
  const { braveCampAbout, common } = await getCopy();
  const cards = [
    {
      ...braveCampAbout.ctas.parents,
      bg: "bg-brand-yellow",
      button: "darkYellow" as const,
      href: "/brave-camp/for-parents",
    },
    {
      ...braveCampAbout.ctas.partners,
      bg: "bg-brand-blue",
      button: "darkBlue" as const,
      href: "#", // TODO partner URL
    },
  ];

  return (
    <section className="sticky top-0 z-40 flex h-screen items-center">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.href}
              className={`flex min-h-[300px] flex-col items-center rounded-card px-7 pb-10 pt-12 text-center lg:h-[520px] lg:px-10 lg:pb-[69px] lg:pt-[79px] ${card.bg}`}
            >
              <p className="max-w-[470px] text-[clamp(1.25rem,4.5vw,32px)] font-bold tracking-[-0.96px]">
                {card.kicker}
              </p>
              <h2 className="mt-8 whitespace-pre-line text-[clamp(2rem,5.5vw,56px)] font-bold leading-[1.15] tracking-[-1.68px] lg:mt-[50px] lg:leading-[64px]">
                {card.title}
              </h2>
              <div className="mt-auto">
                <Button variant={card.button} href={card.href}>
                  {common.learnMore}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
