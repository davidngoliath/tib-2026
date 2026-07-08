// Home page → Our Action section. 6 cards (Figma 669:701). Each has a video.
// YouTube ids verified against clip titles.
import type { ImageRef, Video } from "./types";

export type ActionItem = {
  title: string;
  image: ImageRef;
  video: Video; // "Watch Now"
  featured?: boolean; // shown on the homepage grid
};

export const actions: ActionItem[] = [
  {
    title: "Project Angel Food",
    image: "/images/action/project-angel-food.jpg",
    video: { type: "embed", provider: "youtube", id: "XI6TZrgMLC8" },
    featured: true,
  },
  {
    title: "100 Roofs Project",
    image: "/images/action/100-roofs.jpg",
    video: { type: "embed", provider: "youtube", id: "BIR3yOPkrmA" },
    featured: true,
  },
  {
    title: "Brave Day at CHLA",
    image: "/images/action/brave-day-chla.jpg",
    video: { type: "embed", provider: "youtube", id: "jTVLMRYz8vw" },
    featured: true,
  },
  {
    title: "Shine On Sierra Leone",
    image: "/images/action/shine-on-sierra-leone.jpg",
    video: { type: "embed", provider: "youtube", id: "rfBoARJsPqE" },
    featured: true,
  },
  {
    title: "Healing Night of Comedy",
    image: "/images/action/healing-night-comedy.jpg",
    video: { type: "embed", provider: "youtube", id: "XnIgZx9C-t0" },
    featured: true,
  },
  {
    title: "Brave Speaker Series",
    image: "/images/action/brave-speaker-series.jpg",
    video: { type: "embed", provider: "youtube", id: "Ef5GdSO1g88" },
    featured: true,
  },
  {
    title: "Brave Camp",
    image: "/images/action/brave-camp.jpg",
    video: { type: "embed", provider: "youtube", id: "rssaX0Px0Zk" },
  },
  {
    title: "Champion Boxers Inspire Their Alma",
    image: "/images/action/champion-boxers-inspire-their-alma.jpg",
    video: { type: "embed", provider: "youtube", id: "-tOAg5c8dqA" },
  },
];

export const featuredActions = actions.filter((item) => item.featured);
