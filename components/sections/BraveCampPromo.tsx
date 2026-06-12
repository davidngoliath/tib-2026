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
    <section className="sticky top-0 z-10 flex min-h-screen items-center py-24 lg:py-0">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 rounded-card bg-brand-green p-7 lg:h-[623px] lg:flex-row lg:gap-0 lg:pb-[28px] lg:pl-[50px] lg:pr-[28px] lg:pt-[56px]">
          <div>
            <h2 className="whitespace-pre-line text-[clamp(2.25rem,8vw,56px)] font-bold leading-[1.0] tracking-[-1.68px]">
              {braveCamp.title}
            </h2>
            <p className="mt-[10px] max-w-[493px] text-body font-medium leading-[25px]">
              {braveCamp.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button variant="darkGreen" href={registration.registerHref}>
                {braveCamp.register}
              </Button>
              <Button variant="darkGreen" href="/brave-camp/about">{braveCamp.learnMore}</Button>
            </div>
          </div>
          <div className="relative aspect-[653/437] w-full shrink-0 self-end overflow-hidden rounded-media bg-ink/10 lg:w-[653px]">
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
