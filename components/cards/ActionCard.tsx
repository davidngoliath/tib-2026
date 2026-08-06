import Image from "next/image";
import { WatchNowButton } from "@/components/WatchNowButton";
import { getCopy } from "@/content/copy";
import type { ActionItem } from "@/content/actions";

// Our Action card (Figma 669:702): cream card, image top, title, Watch Now
// (opens the video in a modal).
export async function ActionCard({
  item,
  headingLevel = "h3",
}: {
  item: ActionItem;
  headingLevel?: "h2" | "h3";
}) {
  const { common } = await getCopy();
  const HeadingTag = headingLevel;
  return (
    <article className="flex flex-col rounded-card bg-cream p-6">
      <div className="relative aspect-[375/274] w-full overflow-hidden rounded-media bg-ink/5">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 380px, (min-width:640px) calc((100vw - 64px - 24px) / 2), calc(100vw - 40px)"
        />
      </div>
      <HeadingTag className="mt-5 text-[clamp(2rem,5vw,56px)] font-bold leading-[1.05]">{item.title}</HeadingTag>
      <div className="mt-auto pt-6">
        <WatchNowButton video={item.video} label={common.watchNow} variant="dark" />
      </div>
    </article>
  );
}
