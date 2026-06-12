import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Nav } from "@/components/Nav";

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

export const metadata: Metadata = {
  title: "Today, I'm Brave",
  description:
    "Today, I'm Brave is a global non-profit dedicated to unlocking bravery in today's youth.",
};

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
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "es")) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${helvetica.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
