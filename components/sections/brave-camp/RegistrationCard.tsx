import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { getCopy } from "@/content/copy";
import { registration } from "@/content/braveCamp";

// Registration hero card (Figma 669:1467) — pink, full Container width.
// Sits over the pinned hero on load, scrolls away as the user scrolls.
export async function RegistrationCard() {
  const { braveCampForParents, braveCamp, common } = await getCopy();
  const { reg } = braveCampForParents;
  const chips = [reg.chips.dates, reg.chips.deposit, reg.chips.ages];

  return (
    <Container>
      <div className="pointer-events-auto flex min-h-[460px] flex-col items-center rounded-card bg-brand-pink px-7 py-12 text-center lg:h-[537px] lg:px-10 lg:pb-[55px] lg:pt-[87px]">
        <h2 className="whitespace-pre-line text-[clamp(2rem,6vw,56px)] font-bold leading-[1.05] tracking-[-1.68px] lg:leading-[55px]">
          {reg.title}
        </h2>
        <p className="mt-8 max-w-[573px] text-body font-medium leading-[25px] lg:mt-[54px]">
          {reg.body}
        </p>
        <div className="mt-auto flex flex-col items-center gap-6 pt-8 lg:gap-[28px] lg:pt-0">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-[28px]">
            {chips.map((chip) => (
              <span
                key={chip}
                className="flex h-11 items-center justify-center rounded-full bg-cream px-5 text-[15px] font-bold lg:h-[52px] lg:px-9 lg:text-body"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-[26px]">
            <Button variant="darkPink" href={registration.registerHref}>
              {braveCamp.register}
            </Button>
            <Button variant="darkPink" href="/brave-camp/about">
              {common.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
