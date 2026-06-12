import { defineRouting } from "next-intl/routing";

// Bilingual site: English (default) + Spanish, with the locale always in the URL.
export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
