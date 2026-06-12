// Home page → Their Stories section. 4 cards (Figma 669:732). Each has a video.
// Each card has its own brand background color (cycling yellow/pink/green/blue).
import type { ImageRef, Video } from "./types";

export type Story = {
  name: string;
  role: string; // subtitle under name
  image: ImageRef;
  video: Video; // "Watch Now"
  color: "yellow" | "pink" | "green" | "blue";
};

export const stories: Story[] = [
  {
    name: "Ron Finley",
    role: "Gangsta Gardner",
    color: "yellow",
    image: "/images/stories/ron-finley.jpg",
    video: { type: "embed", provider: "youtube", id: "CrdHqAIMYGA" },
  },
  {
    name: "Hannah Fraser",
    role: "Performance Artist",
    color: "pink",
    image: "/images/stories/hannah-fraser.jpg",
    video: { type: "embed", provider: "youtube", id: "frITQRRVmQk" },
  },
  {
    name: "Rosie Perez",
    role: "Actor & Activist",
    color: "green",
    image: "/images/stories/rosie-perez.jpg",
    video: { type: "embed", provider: "youtube", id: "plhH4MKl92k" },
  },
  {
    name: "Breana Schroeder",
    role: "Tandem Surfer",
    color: "blue",
    image: "/images/stories/breana-schroeder.jpg",
    video: { type: "embed", provider: "youtube", id: "OY1YyrBuAJA" },
  },
];
