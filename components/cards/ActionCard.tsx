import Image from "next/image";
import { WatchNowButton } from "@/components/WatchNowButton";
import { getCopy } from "@/content/copy";
import type { ActionItem } from "@/content/actions";

// Our Action card (Figma 669:702): cream card, image top, title, Watch Now
// (opens the video in a modal).
export async function ActionCard({ item }: { item: ActionItem }) {
  const { common } = await getCopy();
  return (
    <article className="flex flex-col rounded-card bg-cream p-6">
      <div className="relative aspect-[375/274] w-full overflow-hidden rounded-media bg-ink/5">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <h3 className="mt-5 text-display font-bold leading-[1.05]">{item.title}</h3>
      <div className="mt-auto pt-6">
        <WatchNowButton video={item.video} label={common.watchNow} variant="dark" />
      </div>
    </article>
  );
}
