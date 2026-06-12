import { Container } from "@/components/Container";
import { getCopy } from "@/content/copy";

// Our Mission story (Figma 669:1032/1033) — yellow block, long 56px copy.
export async function MissionStory() {
  const { mission } = await getCopy();
  return (
    <section className="pt-[120px]">
      <Container>
        <div className="rounded-card bg-brand-yellow px-[145px] py-[120px]">
          <div className="space-y-10 text-[56px] font-bold leading-[1.12] tracking-[-1.68px]">
            {mission.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
