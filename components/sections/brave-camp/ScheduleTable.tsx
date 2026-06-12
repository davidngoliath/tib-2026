import { getCopy } from "@/content/copy";

// "What to expect" schedule (Figma 669:1463) — heading + 5 hairline rows,
// pink day labels. The design embeds a screenshot; this is the real grid.
export async function ScheduleTable() {
  const { braveCampForParents } = await getCopy();
  const { schedule } = braveCampForParents;

  return (
    <section className="w-full px-5 sm:px-8 lg:px-6">
      <div className="mx-auto max-w-[1292px]">
        <h2 className="text-[clamp(2rem,6vw,56px)] font-bold leading-none tracking-[-1.68px]">
          {schedule.title}
        </h2>
        <div className="mt-8 lg:mt-12">
          {schedule.rows.map((row) => (
            <div
              key={row.day}
              className="grid grid-cols-1 gap-1 border-b border-ink/10 py-5 sm:grid-cols-[210px_1fr] sm:items-baseline lg:py-7"
            >
              <p className="text-[clamp(1rem,4.5vw,20px)] font-bold text-brand-pink">{row.day}</p>
              <p className="text-[clamp(1rem,4.5vw,20px)]">{row.activities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
