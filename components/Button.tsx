import { Link } from "@/i18n/navigation";

// Pill buttons with the brand's color-inversion hover convention.
// Nav CTAs use a brand fill; in-section buttons are dark pills that invert.
export type ButtonVariant =
  | "register" // nav: yellow ↔ ink
  | "donate" // nav: blue ↔ ink
  | "nav" // nav links: ink ↔ pink
  | "dark" // in-section (Watch Now / Learn More / View All): ink ↔ paper
  | "darkYellow" // ink + yellow text
  | "darkGreen" // ink + green text
  | "darkPink" // ink + pink text
  | "darkBlue"; // ink + blue text

export const VARIANTS: Record<ButtonVariant, string> = {
  register: "bg-brand-yellow text-ink hover:bg-ink hover:text-brand-yellow",
  donate: "bg-brand-blue text-ink hover:bg-ink hover:text-brand-blue",
  nav: "bg-ink text-paper hover:bg-brand-pink hover:text-ink",
  // Dark pill in-section buttons share a hover: black @ 50% + cream text.
  dark: "bg-ink text-paper hover:bg-black/50 hover:text-cream",
  darkYellow: "bg-ink text-brand-yellow hover:bg-black/50 hover:text-cream",
  darkGreen: "bg-ink text-brand-green hover:bg-black/50 hover:text-cream",
  darkPink: "bg-ink text-brand-pink hover:bg-black/50 hover:text-cream",
  darkBlue: "bg-ink text-brand-blue hover:bg-black/50 hover:text-cream",
};

export const BASE =
  "inline-flex items-center justify-center rounded-[10px] px-5 h-10 text-sm font-bold leading-none transition-colors duration-200 whitespace-nowrap";

type Props = {
  variant: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export function Button({ variant, children, href, className = "" }: Props) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;
  // "#" placeholders render as non-navigating buttons until real URLs land.
  if (href && href !== "#") {
    if (/^https?:\/\//.test(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
