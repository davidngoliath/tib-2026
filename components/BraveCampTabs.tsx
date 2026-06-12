import { Link } from "@/i18n/navigation";
import { getCopy } from "@/content/copy";

// Brave Camp sub-nav (Figma 669:1121/1234): two centered text tabs under the
// main nav; the active page is underlined.
export async function BraveCampTabs({ active }: { active: "about" | "forParents" }) {
  const { braveCampTabs } = await getCopy();
  const tabs = [
    { key: "about" as const, label: braveCampTabs.about, href: "/brave-camp/about" },
    { key: "forParents" as const, label: braveCampTabs.forParents, href: "/brave-camp/for-parents" },
  ];

  return (
    // pt baked in here (not per-page) so the tabs sit at the same spot on both
    // Brave Camp pages and don't jump when navigating between them.
    <nav className="flex items-center justify-center gap-[120px] pt-[16px] text-[22px] font-bold tracking-[-0.66px]">
      {tabs.map((tab) =>
        tab.key === active ? (
          <span
            key={tab.key}
            aria-current="page"
            className="underline decoration-[3px] [text-underline-position:from-font]"
          >
            {tab.label}
          </span>
        ) : (
          <Link key={tab.key} href={tab.href} className="transition-colors hover:text-brand-pink">
            {tab.label}
          </Link>
        ),
      )}
    </nav>
  );
}
