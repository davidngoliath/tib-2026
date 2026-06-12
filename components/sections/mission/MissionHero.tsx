import { Container } from "@/components/Container";
import { EyebrowTitle } from "@/components/EyebrowTitle";
import { getCopy } from "@/content/copy";

// Our Mission hero (Figma 669:1018) — cream, "OUR / MISSION" centered. Pinned;
// the pink statement scrolls up and covers it.
export async function MissionHero() {
  const { mission } = await getCopy();
  return (
    <section className="sticky top-[119px] z-0 flex min-h-[calc(100vh-119px)] items-center bg-cream pb-[12vh]">
      <Container className="text-center">
        <EyebrowTitle
          eyebrow={mission.eyebrow}
          title={mission.title}
          align="center"
          className="mx-auto"
        />
      </Container>
    </section>
  );
}
