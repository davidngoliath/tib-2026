import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

const FALLBACK_SITE_URL = "https://tib-2026.vercel.app";
const DEFAULT_OG_IMAGE_PATH = "/images/home/youth-portrait.jpg";

export const indexablePaths = [
  "",
  "/action",
  "/our-mission",
  "/press",
  "/brave-camp/about",
  "/brave-camp/for-parents",
  "/stories",
] as const;

function normalizeSiteUrl(value?: string) {
  if (!value) return null;
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

const resolvedSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  FALLBACK_SITE_URL;

export const siteUrl = new URL(resolvedSiteUrl);

export const defaultOgImage = {
  path: DEFAULT_OG_IMAGE_PATH,
  alt: "Today, I'm Brave",
  width: 1440,
  height: 1023,
  type: "image/jpeg",
} as const;

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") return "";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/$/, "");
}

export function getLocalizedPath(locale: Locale, pathname = "") {
  const normalizedPathname = normalizePathname(pathname);
  return `/${locale}${normalizedPathname}`;
}

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function resolveLocale(locale: string): Locale {
  return routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;
}

export function getLocaleAlternates(pathname = "") {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, getAbsoluteUrl(getLocalizedPath(locale, pathname))]),
  ) as Record<Locale, string>;
}

export function createPageMetadata({
  title,
  description,
  pathname = "",
  locale,
  imagePath = defaultOgImage.path,
  imageAlt = defaultOgImage.alt,
  noIndex = false,
}: {
  title: string;
  description: string;
  pathname?: string;
  locale: Locale;
  imagePath?: string;
  imageAlt?: string;
  noIndex?: boolean;
}): Metadata {
  const localizedPath = getLocalizedPath(locale, pathname);
  const canonical = getAbsoluteUrl(localizedPath);
  const fullTitle = `Today, I'm Brave - ${title}`;
  const openGraphImage = {
    url: getAbsoluteUrl(imagePath),
    alt: imageAlt,
    width: defaultOgImage.width,
    height: defaultOgImage.height,
    type: defaultOgImage.type,
  };

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: getLocaleAlternates(pathname),
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: "Today, I'm Brave",
      locale,
      type: "website",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [openGraphImage.url],
    },
  };
}
