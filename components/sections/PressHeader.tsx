import { getCopy } from "@/content/copy";

// PRESS header (Figma 669:595) — pins centered while it holds.
export async function PressHeader() {
  const { press } = await getCopy();
  return (
    <section className="sticky top-0 z-[80] flex h-screen items-center justify-center bg-brand-orange text-paper">
      <h2 className="text-center text-[clamp(3.5rem,13vw,11rem)] font-bold uppercase leading-[0.85]">
        {press.title}
      </h2>
    </section>
  );
}
