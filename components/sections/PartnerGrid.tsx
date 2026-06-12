import { Container } from "@/components/Container";
import { PartnerLogo } from "@/components/cards/PartnerLogo";
import { partners } from "@/content/partners";

// Partners grid (Figma 669:605) — a full-width BLUE band of cream logo tiles
// that scrolls up over the pinned PARTNERS header. Cream tail below into the CTA.
export function PartnerGrid() {
  return (
    <div className="bg-brand-blue py-[120px]">
      <Container>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => (
            <PartnerLogo key={partner.logo} partner={partner} />
          ))}
        </div>
      </Container>
    </div>
  );
}
