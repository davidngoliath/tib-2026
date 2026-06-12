import Image from "next/image";
import type { Partner } from "@/content/partners";

// Single partner logo tile in the Friends/Partners grid (Figma 669:605).
export function PartnerLogo({ partner }: { partner: Partner }) {
  const tile = (
    <div className="flex aspect-square items-center justify-center rounded-card bg-cream p-6">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={160}
        height={120}
        className="max-h-full w-auto object-contain"
      />
    </div>
  );
  return partner.href ? (
    <a href={partner.href} aria-label={partner.name} className="block">
      {tile}
    </a>
  ) : (
    tile
  );
}
