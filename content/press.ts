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
    href: "#", // TODO
  },
  {
    outlet: "Forbes",
    blurb:
      "Purpose at work: How Today, I'm Brave rallies advertising agencies to support BIPOC youth.",
    image: "/images/press/forbes.jpg",
    href: "#", // TODO
  },
  {
    outlet: "LBB Online",
    blurb:
      "Camp new to Saratoga County teaches bravery and coping skills to underserved youth.", // TODO real LBB copy (design shows placeholder)
    image: "/images/press/lbb.jpg",
    href: "#", // TODO
  },
  {
    outlet: "CBS News",
    blurb:
      "Purpose at work: How Today, I'm Brave rallies advertising agencies to support BIPOC youth.", // TODO real CBS copy (design shows placeholder)
    image: "/images/press/cbs.jpg",
    href: "#", // TODO
  },
];
