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

export async function StoryCard({
  story,
  variant = "brand",
  headingLevel = "h3",
}: {
  story: Story;
  variant?: "brand" | "cream";
  headingLevel?: "h2" | "h3";
}) {
  const { storyRoles, common } = await getCopy();
  const role = storyRoles[story.name] ?? story.role;
  const background = variant === "cream" ? "bg-cream" : BG[story.color];
  const buttonVariant = variant === "cream" ? "dark" : BTN[story.color];
  const HeadingTag = headingLevel;

  return (
    <article
      className={`flex flex-col gap-6 rounded-[20px] p-[26px] lg:h-[347px] lg:flex-row lg:gap-10 ${background}`}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 lg:gap-0">
        <HeadingTag className="text-[clamp(2.25rem,7vw,56px)] font-bold leading-[1.05] tracking-[-1.68px]">
          {story.name}
        </HeadingTag>
        <div>
          <p className="break-words text-[clamp(1.5rem,4.5vw,32px)] font-bold leading-none tracking-[-0.96px]">
            {role}
          </p>
          <div className="mt-5">
            <WatchNowButton
              video={story.video}
              label={common.watchNow}
              variant={buttonVariant}
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
          sizes="(min-width:1024px) 420px, (min-width:640px) calc(100vw - 64px - 52px), calc(100vw - 40px - 52px)"
        />
      </div>
    </article>
  );
}
