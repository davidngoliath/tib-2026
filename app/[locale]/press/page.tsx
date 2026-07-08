import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { PressCard } from "@/components/cards/PressCard";
import { getCopy } from "@/content/copy";
import { press } from "@/content/press";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    title: "Press",
    description:
      "Read press coverage featuring Today, I'm Brave, Brave Camp, and stories about our work supporting youth bravery and impact.",
  },
  es: {
    title: "Prensa",
    description:
      "Lee la cobertura de prensa sobre Today, I'm Brave, Brave Camp y nuestro trabajo apoyando la valentía y el impacto en la juventud.",
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
    imagePath: "/images/press/nbc.jpg",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(resolveLocale(locale));
  const { press: pressCopy } = await getCopy();

  return (
    <>
      <main className="-mt-[90px] flex-1 bg-brand-orange pt-[90px] text-paper lg:-mt-[119px] lg:pt-[119px]">
        <section className="flex min-h-[520px] items-center justify-center pb-12 pt-10 lg:min-h-[700px] lg:pb-16 lg:pt-0">
          <Container>
            <h1 className="text-center text-[clamp(4rem,18vw,12rem)] font-bold uppercase leading-[0.85] text-cream">
              {pressCopy.title}
            </h1>
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {press.map((item) => (
                <PressCard key={item.href} item={item} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
