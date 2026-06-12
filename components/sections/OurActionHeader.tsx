import { Container } from "@/components/Container";
import { EyebrowTitle } from "@/components/EyebrowTitle";
import { getCopy } from "@/content/copy";

// Our Action header (Figma Group 142) — pins centered while it holds.
export async function OurActionHeader() {
  const { ourAction } = await getCopy();
  return (
    <section className="sticky top-0 z-30 flex h-screen items-center justify-center bg-brand-yellow">
      <Container>
        <EyebrowTitle
          eyebrow={ourAction.eyebrow}
          title={ourAction.title}
          subhead={ourAction.subhead}
          align="center"
          className="mx-auto"
        />
      </Container>
    </section>
  );
}
