import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { defaultOgImage, getAbsoluteUrl, getLocaleAlternates, getLocalizedPath, siteUrl } from "@/lib/seo";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { ArrowKeyScroll } from "@/components/ArrowKeyScroll";

// Helvetica Neue LT Pro — licensed webfont, self-hosted.
const helvetica = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNeueLTPro-Roman.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueLTPro-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueLTPro-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const { locale } = await params;
  const currentLocale = routing.locales.includes(locale as "en" | "es")
    ? (locale as "en" | "es")
    : routing.defaultLocale;
  const localizedPath = getLocalizedPath(currentLocale);
  const canonical = getAbsoluteUrl(localizedPath);

  return {
    metadataBase: siteUrl,
    title: "Today, I'm Brave",
    description:
      "Today, I'm Brave is a global non-profit dedicated to unlocking bravery in today's youth.",
    alternates: {
      canonical,
      languages: getLocaleAlternates(),
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: googleSiteVerification
      ? {
          google: googleSiteVerification,
        }
      : undefined,
    openGraph: {
      title: "Today, I'm Brave",
      description:
        "Today, I'm Brave is a global non-profit dedicated to unlocking bravery in today's youth.",
      url: canonical,
      siteName: "Today, I'm Brave",
      locale: currentLocale,
      type: "website",
      images: [
        {
          url: getAbsoluteUrl(defaultOgImage.path),
          alt: defaultOgImage.alt,
          width: defaultOgImage.width,
          height: defaultOgImage.height,
          type: defaultOgImage.type,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Today, I'm Brave",
      description:
        "Today, I'm Brave is a global non-profit dedicated to unlocking bravery in today's youth.",
      images: [getAbsoluteUrl(defaultOgImage.path)],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "es")) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${helvetica.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <ArrowKeyScroll />
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
      {process.env.NODE_ENV === "production" && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
