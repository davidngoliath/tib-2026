import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { EyebrowTitle } from "@/components/EyebrowTitle";
import { Footer } from "@/components/Footer";
import { StoryCard } from "@/components/cards/StoryCard";
import { stories } from "@/content/stories";
import { getCopy } from "@/content/copy";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    title: "Their Stories",
    description:
      "Discover real stories from people facing fear, pushing forward, and inspiring others to live more bravely.",
    subhead:
      "Real stories of people facing fear and pushing forward.\nShared to inspire others to do the same—no matter the challenge.",
  },
  es: {
    title: "Sus Historias",
    description:
      "Descubre historias reales de personas que enfrentan el miedo, siguen adelante e inspiran a otros a vivir con más valentía.",
    subhead:
      "Historias reales de personas que enfrentan el miedo y siguen adelante.\nCompartidas para inspirar a otros a hacer lo mismo, sin importar el desafío.",
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
    title: PAGE_SEO[currentLocale].title,
    description: PAGE_SEO[currentLocale].description,
    pathname: "/stories",
    locale: currentLocale,
    imagePath: "/images/stories/ron-finley.jpg",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  setRequestLocale(currentLocale);
  const { theStories } = await getCopy();

  return (
    <>
      <main className="-mt-[90px] flex-1 bg-brand-blue pt-[90px] lg:-mt-[119px] lg:pt-[119px]">
        <section className="flex min-h-[520px] items-center justify-center pb-12 pt-10 lg:min-h-[700px] lg:pb-16 lg:pt-0">
          <Container>
            <EyebrowTitle
              eyebrow={theStories.eyebrow}
              title={theStories.title}
              subhead={PAGE_SEO[currentLocale].subhead}
              align="center"
              headingLevel="h1"
              className="mx-auto"
            />
          </Container>
        </section>

        <section className="pb-24">
          <div className="mx-auto flex max-w-[874px] flex-col gap-[25px] px-5 sm:px-8">
            {stories.map((story) => (
              <StoryCard key={story.name} story={story} variant="cream" headingLevel="h2" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
