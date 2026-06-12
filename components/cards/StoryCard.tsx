import Image from "next/image";
import type { ButtonVariant } from "@/components/Button";
import { WatchNowButton } from "@/components/WatchNowButton";
import { getCopy } from "@/content/copy";
import type { Story } from "@/content/stories";

// Their Stories card (Figma Group 110, 874×347): brand-color card, name 56px
// top-left, role 32px + Watch Now bottom-left, 420×295 image right.
const BG: Record<Story["color"], string> = {
  yellow: "bg-brand-yellow",
  pink: "bg-brand-pink",
  green: "bg-brand-green",
  blue: "bg-brand-blue",
};
const BTN: Record<Story["color"], ButtonVariant> = {
  yellow: "darkYellow",
  pink: "darkPink",
  green: "darkGreen",
  blue: "darkBlue",
};

export async function StoryCard({ story }: { story: Story }) {
  const { storyRoles, common } = await getCopy();
  const role = storyRoles[story.name] ?? story.role;
  return (
    <article
      className={`flex h-[347px] gap-10 rounded-[20px] p-[26px] ${BG[story.color]}`}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <h3 className="text-[56px] font-bold leading-[64px] tracking-[-1.68px]">
          {story.name}
        </h3>
        <div>
          <p className="text-[32px] font-bold leading-none tracking-[-0.96px]">
            {role}
          </p>
          <div className="mt-5">
            <WatchNowButton
              video={story.video}
              label={common.watchNow}
              variant={BTN[story.color]}
            />
          </div>
        </div>
      </div>
      <div className="relative h-full w-[420px] shrink-0 overflow-hidden rounded-[10px]">
        <Image
          src={story.image}
          alt={story.name}
          fill
          className="object-cover"
          sizes="420px"
        />
      </div>
    </article>
  );
}
