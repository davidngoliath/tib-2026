import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { DonateButton } from "@/components/DonateButton";
import { getCopy } from "@/content/copy";

// Partner/Donate CTA (Figma 669:625) — full-bleed blue, pins centered.
export async function CtaBand() {
  const { cta } = await getCopy();
  return (
    <section className="sticky top-0 z-[120] flex h-screen items-center justify-center bg-brand-blue">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-display font-bold leading-[1.1]">
          {cta.heading}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="darkBlue" href="#">
            {cta.partner}
          </Button>
          <DonateButton variant="darkBlue" label={cta.donate} />
        </div>
      </Container>
    </section>
  );
}
