import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { EyebrowTitle } from "@/components/EyebrowTitle";
import { Footer } from "@/components/Footer";
import { StoryCard } from "@/components/cards/StoryCard";
import { stories } from "@/content/stories";
import { createPageMetadata, resolveLocale } from "@/lib/seo";

const PAGE_SEO = {
  en: {
    metadataTitle: "Brave Mentors",
    eyebrow: "Brave",
    title: "Mentors",
    description:
      "Empowering the next generation through mentorship, guidance, and encouragement. Helping young people build confidence, overcome challenges, and discover their own bravery.",
    subhead:
      "Empowering the next generation through mentorship, guidance, and encouragement. Helping young people build confidence, overcome challenges, and discover their own bravery.",
  },
  es: {
    metadataTitle: "Mentores valientes",
    eyebrow: "Mentores",
    title: "Valientes",
    description:
      "Empoderamos a la próxima generación mediante mentoría, orientación y apoyo. Ayudamos a los jóvenes a desarrollar confianza, superar desafíos y descubrir su propia valentía.",
    subhead:
      "Empoderamos a la próxima generación mediante mentoría, orientación y apoyo. Ayudamos a los jóvenes a desarrollar confianza, superar desafíos y descubrir su propia valentía.",
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
    title: PAGE_SEO[currentLocale].metadataTitle,
    description: PAGE_SEO[currentLocale].description,
    pathname: "/brave-mentors",
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

  return (
    <>
      <main className="-mt-[90px] flex-1 bg-brand-blue pt-[90px] lg:-mt-[119px] lg:pt-[119px]">
        <section className="flex min-h-[520px] items-center justify-center pb-12 pt-10 lg:min-h-[700px] lg:pb-16 lg:pt-0">
          <Container>
            <EyebrowTitle
              eyebrow={PAGE_SEO[currentLocale].eyebrow}
              title={PAGE_SEO[currentLocale].title}
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