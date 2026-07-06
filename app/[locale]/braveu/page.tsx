import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    title: "BraveU Coming Soon",
    description: "The BraveU page is coming soon.",
  },
  es: {
    title: "BraveU próximamente",
    description: "La página de BraveU estará disponible próximamente.",
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
    pathname: "/braveu",
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

  return (
    <>
      <ComingSoon className="min-h-[calc(100svh-90px)] lg:min-h-[calc(100vh-119px)]" />
      <Footer />
    </>
  );
}
