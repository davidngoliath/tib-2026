import { Container } from "@/components/Container";
import { getCopy } from "@/content/copy";

// "We'd love to connect" statement (Figma 669:1140) — pins centered, then the
// CTA cards scroll up over it.
export async function ConnectBand() {
  const { braveCampAbout } = await getCopy();
  return (
    <section className="sticky top-0 z-30 flex h-screen items-center bg-cream">
      <Container className="text-center">
        <p className="mx-auto max-w-[874px] whitespace-pre-line text-[clamp(2rem,6vw,56px)] font-bold leading-[1.15] tracking-[-1.68px] lg:leading-[64px]">
          {braveCampAbout.connect}
        </p>
      </Container>
    </section>
  );
}
