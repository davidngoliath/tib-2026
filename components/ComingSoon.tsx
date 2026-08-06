import { getCopy } from "@/content/copy";

// Placeholder shown while real page designs are pending. Centered localized
// coming-soon messaging on the cream page background (Figma "Brave Camp |
// Partners", 20260601 page). Reused by every stub route so they swap out
// uniformly when designs land.
export async function ComingSoon({
  className = "bg-cream",
}: {
  className?: string;
}) {
  const { common } = await getCopy();

  return (
    <main className={`flex flex-1 flex-col items-center justify-center px-6 py-32 text-center text-black ${className}`}>
      <h1 className="contents">
        <span className="text-[48px] font-bold leading-none tracking-[-1.44px] sm:text-[72px] sm:tracking-[-2.16px] lg:text-[96px] lg:tracking-[-2.88px]">
          {common.coming}
        </span>
        {common.soon ? (
          <span className="text-[96px] font-bold leading-none tracking-[-2.88px] sm:text-[160px] sm:tracking-[-4.8px] lg:text-[228px] lg:tracking-[-6.84px]">
            {common.soon}
          </span>
        ) : null}
      </h1>
    </main>
  );
}
