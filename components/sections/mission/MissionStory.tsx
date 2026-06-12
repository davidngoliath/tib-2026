import { Container } from "@/components/Container";
import { getCopy } from "@/content/copy";

// Our Mission story (Figma 669:1032/1033) — yellow block, long 56px copy.
export async function MissionStory() {
  const { mission } = await getCopy();
  return (
    <section className="pt-16 lg:pt-[120px]">
      <Container>
        <div className="rounded-card bg-brand-yellow px-7 py-16 sm:px-12 lg:px-[145px] lg:py-[120px]">
          <div className="space-y-8 text-[clamp(2rem,6vw,56px)] font-bold leading-[1.12] tracking-[-1.68px] lg:space-y-10">
            {mission.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
