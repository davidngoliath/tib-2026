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
      className={`flex flex-col gap-6 rounded-[20px] p-[26px] lg:h-[347px] lg:flex-row lg:gap-10 ${BG[story.color]}`}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 lg:gap-0">
        <h3 className="text-[clamp(2.25rem,7vw,56px)] font-bold leading-[1.05] tracking-[-1.68px]">
          {story.name}
        </h3>
        <div>
          <p className="text-[clamp(1.5rem,4.5vw,32px)] font-bold leading-none tracking-[-0.96px]">
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
      <div className="relative aspect-[420/295] w-full shrink-0 overflow-hidden rounded-[10px] lg:aspect-auto lg:h-full lg:w-[420px]">
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
