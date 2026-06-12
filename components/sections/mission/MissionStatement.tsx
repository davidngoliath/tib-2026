import { Container } from "@/components/Container";
import { getCopy } from "@/content/copy";

// Our Mission statement (Figma 669:1026) — pink card, centered 32px text.
// Transparent (like the home Brave Camp module) so only the pink card scrolls
// over the pinned hero — no separate cream layer/seam. Holds, then the yellow
// story scrolls over it.
export async function MissionStatement() {
  const { mission } = await getCopy();
  return (
    <section className="sticky top-0 z-10 flex h-screen items-center">
      <Container className="w-full">
        <div className="flex h-[634px] items-center justify-center rounded-card bg-brand-pink px-6 text-center">
          <p className="max-w-[640px] whitespace-pre-line text-[32px] font-bold leading-[1.25] tracking-[-0.96px]">
            {mission.statement}
          </p>
        </div>
      </Container>
    </section>
  );
}
