import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/ComingSoon";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    title: "Press Coming Soon",
    description: "The Press page is coming soon.",
  },
  es: {
    title: "Prensa próximamente",
    description: "La página de Prensa estará disponible próximamente.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);

  return createPageMetadata({
    ...PAGE_SEO[currentLocale],
    pathname: "/press",
    locale: currentLocale,
    noIndex: true,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(resolveLocale(locale));

  return <ComingSoon />;
}
