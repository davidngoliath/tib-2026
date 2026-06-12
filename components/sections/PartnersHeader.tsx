import { getCopy } from "@/content/copy";

// PARTNERS header — pins centered (cream), then the grid scrolls over the word.
export async function PartnersHeader() {
  const { partners } = await getCopy();
  return (
    <section className="sticky top-0 z-[100] flex h-screen items-center justify-center bg-cream">
      <h2 className="text-center text-[clamp(3.5rem,13vw,11rem)] font-bold uppercase leading-[0.85] text-ink">
        {partners.title}
      </h2>
    </section>
  );
}
