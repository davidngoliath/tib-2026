import Image from "next/image";
import { Link } from "@/i18n/navigation";

// TIB logo mark (public/images/tib-logo.svg, Figma TIB_Logos-02).
// hoverPink: swaps to the pink variant on hover (nav only; footer is on pink).
export function Logo({
  className = "",
  hoverPink = false,
}: {
  className?: string;
  hoverPink?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Today, I'm Brave — home"
      className={`group relative inline-block ${className}`}
    >
      <Image
        src="/images/tib-logo.svg"
        alt="Today, I'm Brave"
        width={82}
        height={48}
        priority
        className={`h-12 w-auto ${
          hoverPink ? "transition-opacity duration-200 group-hover:opacity-0" : ""
        }`}
      />
      {hoverPink && (
        <Image
          src="/images/tib-logo-pink.svg"
          alt=""
          aria-hidden
          width={82}
          height={48}
          className="absolute left-0 top-0 h-12 w-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      )}
    </Link>
  );
}
