// Home page → Press section. 4 cards in the design (Figma 669:761).
import type { ImageRef } from "./types";

export type PressItem = {
  outlet: string;
  blurb: string;
  image: ImageRef;
  href: string; // "Learn More" target
  featured?: boolean; // shown on the homepage
};

export const press: PressItem[] = [
  {
    outlet: "NBC News",
    blurb:
      "Camp new to Saratoga County teaches bravery and coping skills to underserved youth.",
    image: "/images/press/nbc.jpg",
    href: "https://wnyt.com/wnyt-commit-to-kids/camp-new-to-saratoga-county-teaches-bravery/",
    featured: true,
  },
  {
    outlet: "Forbes",
    blurb:
      "Purpose at work: How Today, I'm Brave rallies advertising agencies to support BIPOC youth.",
    image: "/images/press/forbes.jpg",
    href: "https://www.forbes.com/sites/simonmainwaring/2021/09/13/purpose-at-work-how-today-im-brave-rallies-media-companies-to-support-bipoc-youth/",
    featured: true,
  },
  {
    outlet: "LBB Online",
    blurb:
      "The Torch Awards Shines a Spotlight on the 2017 Nonprofit Partner ‘Today, I’m Brave’.",
    image: "/images/press/lbb.jpg",
    href: "https://www.lbbonline.com/news/the-torch-awards-shines-a-spotlight-on-the-2017-nonprofit-partner-today-im-brave",
    featured: true,
  },
  {
    outlet: "CBS News",
    blurb:
      "Harlem kids brave the elements at Brave Camp in Upstate New York.",
    image: "/images/press/cbs.jpg",
    href: "https://www.cbsnews.com/newyork/news/brave-camp-harlem/?intcid=CNM-00-10abd1h",
    featured: true,
  },
  {
    outlet: "Ad Age",
    blurb: "David & Goliath brings back summer camp for underserved youth.",
    image: "/images/press/ad-age-brave-camp.jpg",
    href: "https://adage.com/article/agency-news/david-goliath-brings-back-summer-camp-underserved-youth/2426751",
  },
  {
    outlet: "Forbes",
    blurb: "Purpose At Work: How 100Roofs Built A New Philanthropic Model.",
    image: "/images/press/forbes-100roofs.jpg",
    href: "https://www.forbes.com/sites/simonmainwaring/2019/09/20/purpose-at-work-how-100roofs-built-a-new-philanthropic-model/?sh=240231d32b03",
  },
  {
    outlet: "Muse by Clio",
    blurb: "A Powerful Vision Brought to Life: The Making of ‘Today, I’m Brave’.",
    image: "/images/press/muse-by-clio.jpg",
    href: "https://musebycl.io/musings/powerful-vision-brought-life-making-today-im-brave",
  },
  {
    outlet: "KTLA 5",
    blurb: "Rosie Perez and Ramon Rodriguez help raise money for Puerto Rico.",
    image: "/images/press/ktla-5.jpg",
    href: "https://www.youtube.com/watch?v=XzaROFLETwc",
  },
  {
    outlet: "Ad Age",
    blurb: "Empathy is the driving force behind this mask safety initiative.",
    image: "/images/press/ad-age-empathy-masks.jpg",
    href: "https://adage.com/creativity/work/today-im-brave-empathy-masks/2281651",
  },
  {
    outlet: "NBC LA",
    blurb: "SoCal Nonprofit Raises Funds for Hurricane Maria Victims in Puerto Rico.",
    image: "/images/press/nbc-la.jpg",
    href: "https://www.nbclosangeles.com/news/socal-nonprofit-raises-funds-for-hurricane-maria-victims-in-puerto-rico/157398/",
  },
  {
    outlet: "CSQ",
    blurb: "Philanthropy 100: LA and NY Philanthropies You Should Know.",
    image: "/images/press/csq.jpg",
    href: "https://csq.com/2018/12/2018-philanthropy-100-la-and-ny-philanthropies-you-should-know/#.XnlJhdNKh26",
  },
  {
    outlet: "Hollywood Reporter",
    blurb: "Rosie Perez, Ramon Rodriguez Host Fundraiser for Hurricane Maria Victims.",
    image: "/images/press/hollywood-reporter.jpg",
    href: "https://www.hollywoodreporter.com/lifestyle/lifestyle-news/rosie-perez-ramon-rodriguez-host-fundraiser-hurricane-maria-victims-1146131/",
  },
];

export const featuredPress = press.filter((item) => item.featured);
