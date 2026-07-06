import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    title: "BraveWear Coming Soon",
    description: "The BraveWear page is coming soon.",
  },
  es: {
    title: "BraveWear próximamente",
    description: "La página de BraveWear estará disponible próximamente.",
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
    pathname: "/bravewear",
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
    <div className="-mt-[90px] flex flex-1 flex-col bg-brand-pink pt-[90px] lg:-mt-[119px] lg:pt-[119px]">
      <ComingSoon className="bg-transparent" />
      <Footer />
    </div>
  );
}
