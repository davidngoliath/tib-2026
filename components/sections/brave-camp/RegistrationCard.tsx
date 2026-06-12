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
      <div className="pointer-events-auto flex h-[537px] flex-col items-center rounded-card bg-brand-pink px-10 pb-[55px] pt-[87px] text-center">
        <h2 className="whitespace-pre-line text-[56px] font-bold leading-[55px] tracking-[-1.68px]">
          {reg.title}
        </h2>
        <p className="mt-[54px] max-w-[573px] text-body font-medium leading-[25px]">
          {reg.body}
        </p>
        <div className="mt-auto flex flex-col items-center gap-[28px]">
          <div className="flex items-center gap-[28px]">
            {chips.map((chip) => (
              <span
                key={chip}
                className="flex h-[52px] items-center justify-center rounded-full bg-cream px-9 text-body font-bold"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex gap-[26px]">
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
