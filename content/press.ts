// Home page → Press section. 4 cards in the design (Figma 669:761).
import type { ImageRef } from "./types";

export type PressItem = {
  outlet: string;
  blurb: string;
  image: ImageRef;
  href: string; // "Learn More" target
};

export const press: PressItem[] = [
  {
    outlet: "NBC News",
    blurb:
      "Camp new to Saratoga County teaches bravery and coping skills to underserved youth.",
    image: "/images/press/nbc.jpg",
    href: "https://wnyt.com/wnyt-commit-to-kids/camp-new-to-saratoga-county-teaches-bravery/", // TODO
  },
  {
    outlet: "Forbes",
    blurb:
      "Purpose at work: How Today, I'm Brave rallies advertising agencies to support BIPOC youth.",
    image: "/images/press/forbes.jpg",
    href: "https://www.forbes.com/sites/simonmainwaring/2021/09/13/purpose-at-work-how-today-im-brave-rallies-media-companies-to-support-bipoc-youth/", // TODO
  },
  {
    outlet: "LBB Online",
    blurb:
      "Camp new to Saratoga County teaches bravery and coping skills to underserved youth.", // TODO real LBB copy (design shows placeholder)
    image: "/images/press/lbb.jpg",
    href: "https://lbbonline.com/news/the-torch-awards-shines-a-spotlight-on-the-2017-nonprofit-partner-today-im-brave", // TODO
  },
  {
    outlet: "CBS News",
    blurb:
      "Purpose at work: How Today, I'm Brave rallies advertising agencies to support BIPOC youth.", // TODO real CBS copy (design shows placeholder)
    image: "/images/press/cbs.jpg",
    href: "https://www.cbsnews.com/newyork/news/brave-camp-harlem/?intcid=CNM-00-10abd1h", // TODO
  },
];
