import type { Metadata } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { copy } from "@/content/copy";
import { routing, type Locale } from "@/i18n/routing";
import "./globals.css";

const helvetica = localFont({
  src: [
    { path: "../public/fonts/HelveticaNeueLTPro-Roman.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/HelveticaNeueLTPro-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/HelveticaNeueLTPro-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 | Today, I'm Brave",
  description: "The page you are looking for could not be found.",
};

export default async function GlobalNotFound() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = routing.locales.includes(cookieLocale as Locale)
    ? (cookieLocale as Locale)
    : routing.defaultLocale;
  const t = copy[locale].notFound;

  return (
    <html lang={locale} className={`${helvetica.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <NextIntlClientProvider locale={locale} messages={{}}>
          <Nav />
          <main className="-mt-[90px] flex-1 bg-cream pt-[90px] lg:-mt-[119px] lg:pt-[119px]">
            <section className="flex min-h-[calc(100svh-90px)] items-center py-16 lg:min-h-[calc(100vh-119px)] lg:py-24">
              <Container>
                <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16">
                  <div className="flex min-h-[320px] items-center justify-center rounded-card bg-brand-yellow px-8 py-10 text-center lg:min-h-[520px] lg:px-12 lg:py-14">
                    <p className="text-[clamp(5rem,18vw,228px)] font-bold leading-[0.82] tracking-[-0.06em] text-ink">
                      404
                    </p>
                  </div>

                  <div className="max-w-[620px] text-center lg:text-left">
                    <h1 className="text-[clamp(2.5rem,7vw,72px)] font-bold leading-[0.95] tracking-[-0.04em] text-ink">
                      {t.title}
                    </h1>
                    <p className="mt-6 max-w-[540px] text-body font-medium leading-[25px] text-ink lg:mt-8">
                      {t.body}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 lg:mt-10 lg:justify-start">
                      <a
                        href={`/${locale}`}
                        className="inline-flex h-10 items-center justify-center rounded-[10px] bg-ink px-5 text-sm font-bold leading-none whitespace-nowrap text-paper transition-colors duration-200 hover:bg-brand-pink hover:text-ink"
                      >
                        {t.home}
                      </a>
                      <a
                        href={`/${locale}/brave-camp/about`}
                        className="inline-flex h-10 items-center justify-center rounded-[10px] bg-brand-yellow px-5 text-sm font-bold leading-none whitespace-nowrap text-ink transition-colors duration-200 hover:bg-ink hover:text-brand-yellow"
                      >
                        {t.braveCamp}
                      </a>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}