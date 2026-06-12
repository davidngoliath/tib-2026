import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { getCopy } from "@/content/copy";
import { registration } from "@/content/braveCamp";

// Brave Camp registration promo (Figma 669:448). Pins centered. Exact spacing:
// card 623px, text top-left, image bottom-right (28px insets).
export async function BraveCampPromo() {
  const { braveCamp } = await getCopy();
  return (
    <section className="sticky top-0 z-10 flex h-screen items-center">
      <Container>
        <div className="flex h-[623px] items-start justify-between rounded-card bg-brand-green pb-[28px] pl-[50px] pr-[28px] pt-[56px]">
          <div>
            <h2 className="whitespace-pre-line text-[56px] font-bold leading-[1.0] tracking-[-1.68px]">
              {braveCamp.title}
            </h2>
            <p className="mt-[10px] max-w-[493px] text-body font-medium leading-[25px]">
              {braveCamp.body}
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="darkGreen" href={registration.registerHref}>
                {braveCamp.register}
              </Button>
              <Button variant="darkGreen">{braveCamp.learnMore}</Button>
            </div>
          </div>
          <div className="relative aspect-[653/437] w-[653px] shrink-0 self-end overflow-hidden rounded-media bg-ink/10">
            <Image
              src="/images/home/brave-camp-promo.jpg"
              alt="Brave Camp"
              fill
              className="object-cover"
              sizes="653px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
