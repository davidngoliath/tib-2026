import { getCopy } from "@/content/copy";

// "What to expect" schedule (Figma 669:1463) — heading + 5 hairline rows,
// pink day labels. The design embeds a screenshot; this is the real grid.
export async function ScheduleTable() {
  const { braveCampForParents } = await getCopy();
  const { schedule } = braveCampForParents;

  return (
    <section className="w-full px-6">
      <div className="mx-auto max-w-[1292px]">
        <h2 className="text-[56px] font-bold leading-none tracking-[-1.68px]">
          {schedule.title}
        </h2>
        <div className="mt-12">
          {schedule.rows.map((row) => (
            <div
              key={row.day}
              className="grid grid-cols-[210px_1fr] items-baseline border-b border-ink/10 py-7"
            >
              <p className="text-[20px] font-bold text-brand-pink">{row.day}</p>
              <p className="text-[20px]">{row.activities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
