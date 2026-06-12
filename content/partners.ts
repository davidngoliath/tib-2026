// Home page → Friends/Partners logo grid (Figma 669:605).
import type { ImageRef } from "./types";

export type Partner = {
  name: string;
  logo: ImageRef;
  href?: string;
};

export const partners: Partner[] = [
  { name: "CSQ", logo: "/images/partners/csq.png" },
  { name: "Children's Hospital LA", logo: "/images/partners/childrenshospitalla.png" },
  { name: "Partner logo", logo: "/images/partners/group.png" },
  { name: "Partner logo", logo: "/images/partners/group-2.png" },
  { name: "Partner logo", logo: "/images/partners/group-3.png" },
  { name: "GG", logo: "/images/partners/gg.png" },
  { name: "Partner logo", logo: "/images/partners/group-4.png" },
  { name: "COSI", logo: "/images/partners/cosi.png" },
  { name: "Jamm", logo: "/images/partners/jamm.png" },
  { name: "Merrill Lynch", logo: "/images/partners/merryill-lynch.png" },
  { name: "UTA", logo: "/images/partners/uta.png" },
  { name: "Silver Lining", logo: "/images/partners/silver-lining.png" },
  { name: "IAVA", logo: "/images/partners/iava.png" },
  { name: "Union", logo: "/images/partners/union.png" },
  { name: "Heart 911", logo: "/images/partners/heart-911.png" },
  { name: "Project Angel Food", logo: "/images/partners/project-angel-food.png" },
  { name: "Crohn's & Colitis Foundation", logo: "/images/partners/crohns-colitis-foundation.png" },
  { name: "Canvas", logo: "/images/partners/canvas.png" },
  { name: "Human", logo: "/images/partners/human.png" },
  { name: "Bigger Picture", logo: "/images/partners/bigger-picture.png" },
  { name: "Sanctuary", logo: "/images/partners/sancturary.png" },
  { name: "Partner logo", logo: "/images/partners/img.png" },
  { name: "Ameriprise", logo: "/images/partners/ameriprise.png" },
  { name: "iHeartMedia", logo: "/images/partners/i-heart-media.png" },
  { name: "Margarita Mix", logo: "/images/partners/margarita-mix.png" },
  { name: "Arts & Science", logo: "/images/partners/artsandscience.png" },
  { name: "Universal Orlando", logo: "/images/partners/universal-orlando.png" },
  { name: "NBCUniversal", logo: "/images/partners/nbc-universal.png" },
  { name: "The Lab", logo: "/images/partners/the-lab.png" },
  { name: "Barking Owl", logo: "/images/partners/barking-owl.png" },
  { name: "GGG Promotions", logo: "/images/partners/ggg-promotions.png" },
  { name: "Native", logo: "/images/partners/nativelogo.png" },
  { name: "Therapy Studios", logo: "/images/partners/therapy-studios.png" },
  { name: "Golden Boy", logo: "/images/partners/goldon-boy.png" },
  { name: "Fell FX", logo: "/images/partners/fell-fx.png" },
  { name: "Shine On Sierra Leone", logo: "/images/partners/shine-on-sierra-leone.png" },
];
