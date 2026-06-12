// Placeholder shown while real page designs are pending. Centered "COMING SOON"
// on the cream page background (Figma "Brave Camp | Partners", 20260601 page).
// Reused by every stub route so they swap out uniformly when designs land.
export function ComingSoon() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center text-black">
      <p className="text-[48px] font-bold leading-none tracking-[-1.44px] sm:text-[72px] sm:tracking-[-2.16px] lg:text-[96px] lg:tracking-[-2.88px]">
        COMING
      </p>
      <p className="text-[96px] font-bold leading-none tracking-[-2.88px] sm:text-[160px] sm:tracking-[-4.8px] lg:text-[228px] lg:tracking-[-6.84px]">
        SOON
      </p>
    </main>
  );
}
