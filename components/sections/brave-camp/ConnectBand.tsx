import { Container } from "@/components/Container";
import { getCopy } from "@/content/copy";

// "We'd love to connect" statement (Figma 669:1140) — pins centered, then the
// CTA cards scroll up over it.
export async function ConnectBand() {
  const { braveCampAbout } = await getCopy();
  return (
    <section className="sticky top-0 z-30 flex h-screen items-center bg-cream">
      <Container className="text-center">
        <p className="mx-auto max-w-[874px] whitespace-pre-line text-[56px] font-bold leading-[64px] tracking-[-1.68px]">
          {braveCampAbout.connect}
        </p>
      </Container>
    </section>
  );
}
