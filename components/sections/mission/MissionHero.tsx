import { Container } from "@/components/Container";
import { EyebrowTitle } from "@/components/EyebrowTitle";
import { getCopy } from "@/content/copy";

// Our Mission hero (Figma 669:1018) — cream, "OUR / MISSION" centered. Pinned;
// the pink statement scrolls up and covers it.
export async function MissionHero() {
  const { mission } = await getCopy();
  return (
    <section className="sticky top-[90px] z-0 flex min-h-[calc(100svh-90px)] items-center bg-cream pb-[11vh] lg:top-[119px] lg:min-h-[calc(100vh-119px)] lg:pb-[12vh]">
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
