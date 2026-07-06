import type { MetadataRoute } from "next";
import { indexablePaths, getAbsoluteUrl, getLocalizedPath } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    indexablePaths.map((pathname) => ({
      url: getAbsoluteUrl(getLocalizedPath(locale, pathname)),
      lastModified,
      changeFrequency: pathname === "" ? "weekly" : "monthly",
      priority: pathname === "" ? 1 : 0.8,
    })),
  );
}