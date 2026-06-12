import { getCopy } from "@/content/copy";

// THE STORIES header (Figma Group 164) — white text on a TRANSPARENT background
// so the pinned portrait shows through. Pins/holds, then scrolls out.
export async function TheirStoriesHeader() {
  const { theStories } = await getCopy();
  return (
    <section className="relative z-[60] h-[200vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center text-center text-paper">
        <p className="text-[96px] font-bold uppercase leading-none tracking-[-2.88px]">
          {theStories.eyebrow}
        </p>
        <h2 className="mt-[20px] text-[228px] font-bold uppercase leading-none tracking-[-6.84px]">
          {theStories.title}
        </h2>
      </div>
    </section>
  );
}
