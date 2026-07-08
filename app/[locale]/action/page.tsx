import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { EyebrowTitle } from "@/components/EyebrowTitle";
import { Footer } from "@/components/Footer";
import { ActionCard } from "@/components/cards/ActionCard";
import { getCopy } from "@/content/copy";
import { actions } from "@/content/actions";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    title: "Our Action",
    description:
      "Explore Today, I'm Brave initiatives turning courage into impact through community programs, relief efforts, and youth-centered action.",
  },
  es: {
    title: "Nuestra Acción",
    description:
      "Explora las iniciativas de Today, I'm Brave que convierten la valentía en impacto a través de programas comunitarios, ayuda y acción centrada en la juventud.",
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
    pathname: "/action",
    locale: currentLocale,
    imagePath: "/images/action/project-angel-food.jpg",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(resolveLocale(locale));
  const { ourAction } = await getCopy();

  return (
    <>
      <main className="-mt-[90px] flex-1 bg-brand-yellow pt-[90px] lg:-mt-[119px] lg:pt-[119px]">
        <section className="flex min-h-[520px] items-center justify-center pb-12 pt-10 lg:min-h-[720px] lg:pb-16 lg:pt-0">
          <Container>
            <EyebrowTitle
              eyebrow={ourAction.eyebrow}
              title={ourAction.title}
              subhead={ourAction.subhead}
              align="center"
              headingLevel="h1"
              className="mx-auto"
            />
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {actions.map((item) => (
                <ActionCard key={item.title} item={item} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
