import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/ComingSoon";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    title: "Brave Camp Partners Coming Soon",
    description: "The Brave Camp Partners page is coming soon.",
  },
  es: {
    title: "Socios de Brave Camp próximamente",
    description: "La página de Socios de Brave Camp estará disponible próximamente.",
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
    pathname: "/brave-camp/partners",
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
