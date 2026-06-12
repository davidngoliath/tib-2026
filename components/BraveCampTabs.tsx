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
    <nav className="flex items-center justify-center gap-6 whitespace-nowrap px-4 pt-[16px] text-[clamp(0.875rem,3.4vw,22px)] font-bold tracking-[-0.66px] sm:gap-[120px] sm:px-0">
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
