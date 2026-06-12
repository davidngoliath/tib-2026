"use client";

import { useState } from "react";

// FAQ rows (Figma 669:1368–1382): black pills, cream 42px question, + icon.
// Expands to show the answer when one exists; rows without answers are static
// until the copy lands.
export type FaqEntry = { id: string; q: string; a: string };

export function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-[1182px] space-y-5 px-5 sm:px-8 lg:space-y-[42px] lg:px-6">
      {items.map((item) => {
        const open = openId === item.id;
        const expandable = item.a.length > 0;
        return (
          <div key={item.id} className="overflow-hidden rounded-card bg-ink text-cream">
            <button
              type="button"
              onClick={() => expandable && setOpenId(open ? null : item.id)}
              aria-expanded={expandable ? open : undefined}
              className={`relative flex min-h-[88px] w-full items-center justify-center px-14 text-center lg:min-h-[104px] lg:px-[120px] ${
                expandable ? "" : "cursor-default"
              }`}
            >
              <span className="text-[clamp(1.375rem,5vw,42px)] font-bold leading-[1.1] tracking-[-1.26px]">
                {item.q}
              </span>
              <span
                aria-hidden
                className={`absolute right-5 text-[40px] font-bold leading-none transition-transform duration-200 lg:right-[46px] lg:text-[54px] ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {expandable && open && (
              <p className="px-7 pb-10 text-center text-body font-medium lg:px-[120px]">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
