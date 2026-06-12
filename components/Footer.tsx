/* eslint-disable @next/next/no-img-element */
import { footer, type SocialLink } from "@/content/site";
import { getCopy } from "@/content/copy";

// Footer (Figma "Group 86" 669:639) — full-height pink, centered column.
const SOCIAL_LABELS: Record<SocialLink["platform"], string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
};

export async function Footer() {
  const t = await getCopy();
  return (
    <footer className="relative flex min-h-screen flex-col items-center justify-center gap-8 bg-brand-pink px-6 py-24 text-center text-ink sm:px-[60px]">
      <img
        src="/images/tib-logo-blk.svg"
        alt="Today, I'm Brave"
        className="h-12 w-auto"
      />

      <ul className="flex items-center gap-3">
        {footer.socials.map((s) => (
          <li key={s.platform}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={SOCIAL_LABELS[s.platform]}
              className="block transition-opacity hover:opacity-70"
            >
              <img src={s.icon} alt="" className="h-12 w-12" />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-body font-bold">{footer.address}</p>

      <p className="text-body font-bold">
        {t.footer.tel} <span className="underline">{footer.phone}</span>
        <span className="mx-3">|</span>
        {t.footer.fax} <span className="underline">{footer.fax}</span>
      </p>

      <img src={footer.badge} alt="CSQ award" className="h-[91px] w-auto" />

      <p className="absolute inset-x-0 bottom-8 px-8 text-xs">{t.footer.legal}</p>
    </footer>
  );
}
