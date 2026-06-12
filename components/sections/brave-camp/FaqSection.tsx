import { faqIds } from "@/content/faq";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getCopy } from "@/content/copy";

// FAQ rows that scroll up over the pinned giant "FAQ" title.
export async function FaqRows() {
  const { braveCampForParents } = await getCopy();
  const items = faqIds.map((id) => ({ id, ...braveCampForParents.faq.items[id] }));
  return (
    <section className="w-full">
      <FaqAccordion items={items} />
    </section>
  );
}

// Giant pinned FAQ title (Figma 669:1249) — same pattern as PARTNERS header.
export async function FaqHeader() {
  const { braveCampForParents } = await getCopy();
  return (
    <section className="sticky top-0 z-[70] flex h-screen items-center justify-center bg-cream">
      <h2 className="text-center text-[clamp(3.5rem,18vw,228px)] font-bold leading-none tracking-[-6.84px] lg:text-[228px]">
        {braveCampForParents.faq.title}
      </h2>
    </section>
  );
}
