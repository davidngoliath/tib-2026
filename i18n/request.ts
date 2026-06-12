import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Strings live in the typed `content/copy.ts` dictionary (keyed by locale), so
// next-intl is used only for locale routing/detection — messages stay empty.
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "en" | "es")) {
    locale = routing.defaultLocale;
  }
  return { locale, messages: {} };
});
