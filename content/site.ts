// Global site content: nav, footer, social links. Used on every page.
import type { Link, ImageRef } from "./types";

export const nav = {
  // Confirmed from design (nav node 669:808):
  links: [
    { label: "Our Mission", href: "/our-mission" },
    { label: "Brave Camp", href: "/brave-camp/about" },
    { label: "BraveU", href: "/braveu" }, // TODO confirm route
    { label: "BraveWear", href: "/bravewear" }, // TODO confirm route (shop?)
  ] satisfies Link[],
  register: { label: "Register for Brave Camp", href: "#" }, // TODO registration URL
  donate: { label: "Donate", href: "#" }, // TODO donate URL
  // Site is bilingual — EN/ES language toggle in the nav. i18n not yet implemented.
  languages: ["EN", "ES"] as const,
};

export type SocialLink = {
  platform: "facebook" | "instagram" | "youtube";
  href: string;
  icon: ImageRef;
};

export const footer = {
  // Confirmed from design (Group 86):
  phone: "310 445 5200",
  fax: "310 445 5201",
  address: "909 N. Pacific Coast Highway, Ste. 700 El Segundo, California 90245",
  legal:
    "Today, I'm Brave® is a registered 501(c)(3) nonprofit organization | Tax ID number: 81-4843811  Contributions to Today, I'm Brave are tax-deductible to the extent permitted by law. CFC #10715.",
  badge: "/images/footer/csq-award.svg",
  // X was removed from the social set.
  socials: [
    { platform: "facebook", href: "#", icon: "/images/footer/facebook.svg" },
    { platform: "instagram", href: "#", icon: "/images/footer/instagram.svg" },
    { platform: "youtube", href: "#", icon: "/images/footer/youtube.svg" },
  ] satisfies SocialLink[],
};

export const logos: { primary: ImageRef } = {
  primary: "/images/tib-logo.svg", // export from Figma node TIB_Logos-02
};
