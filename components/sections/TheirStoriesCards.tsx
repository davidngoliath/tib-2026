import { Button } from "@/components/Button";
import { StoryCard } from "@/components/cards/StoryCard";
import { stories } from "@/content/stories";
import { getCopy } from "@/content/copy";

// Their Stories cards — 874px wide, centered, scroll over the pinned portrait.
export async function TheirStoriesCards() {
  const { common } = await getCopy();
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-[874px] flex-col gap-[25px]">
        {stories.map((story) => (
          <StoryCard key={story.name} story={story} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button variant="dark" href="/stories">
          {common.viewAll}
        </Button>
      </div>
    </section>
  );
}
