import { Container } from "@/components/Container";
import { DonateButton } from "@/components/DonateButton";
import { EmailButton } from "@/components/EmailButton";
import { getCopy } from "@/content/copy";
import { contact as siteContact } from "@/content/site";

// Partner/Donate CTA (Figma 669:625) — full-bleed blue, pins centered.
export async function CtaBand() {
  const { cta } = await getCopy();
  return (
    <section className="sticky top-0 z-[120] flex h-screen items-center justify-center bg-brand-blue">
      <Container>
        <p className="mx-auto max-w-[980px] whitespace-pre-line text-center text-[clamp(2rem,6vw,56px)] font-bold leading-[1.1]">
          {cta.heading}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <EmailButton href={siteContact.partnershipHref} variant="darkBlue">
            {cta.partner}
          </EmailButton>
          <DonateButton variant="darkBlue" label={cta.donate} />
        </div>
      </Container>
    </section>
  );
}
