// Home page → Our Action section. 6 cards (Figma 669:701). Each has a video.
// YouTube ids verified against clip titles.
import type { ImageRef, Video } from "./types";

export type ActionItem = {
  title: string;
  image: ImageRef;
  video: Video; // "Watch Now"
};

export const actions: ActionItem[] = [
  { title: "Project Angel Food", image: "/images/action/project-angel-food.jpg", video: { type: "embed", provider: "youtube", id: "XI6TZrgMLC8" } },
  { title: "100 Roofs Project", image: "/images/action/100-roofs.jpg", video: { type: "embed", provider: "youtube", id: "BIR3yOPkrmA" } },
  { title: "Brave Day at CHLA", image: "/images/action/brave-day-chla.jpg", video: { type: "embed", provider: "youtube", id: "jTVLMRYz8vw" } },
  { title: "Shine On Sierra Leone", image: "/images/action/shine-on-sierra-leone.jpg", video: { type: "embed", provider: "youtube", id: "rfBoARJsPqE" } },
  { title: "Healing Night of Comedy", image: "/images/action/healing-night-comedy.jpg", video: { type: "embed", provider: "youtube", id: "XnIgZx9C-t0" } },
  { title: "Brave Speaker Series", image: "/images/action/brave-speaker-series.jpg", video: { type: "embed", provider: "youtube", id: "Ef5GdSO1g88" } },
];
