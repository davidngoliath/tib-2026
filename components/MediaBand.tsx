import Image from "next/image";
import { VideoLoop } from "@/components/VideoLoop";
import type { Video } from "@/content/types";

// Full-width media band (the "Brave Camp GIF" sections, Figma 669:457 / 669:592).
// - loop  → silent autoplaying self-hosted MP4/WebM (modern GIF replacement)
// - embed → renders the poster image only (used here as a static image band).
//   Background bands are normally loops; card "Watch Now" videos open in a modal.
type Props = {
  video: Video;
  className?: string;
};

export function MediaBand({ video, className = "" }: Props) {
  return (
    <section className={`relative aspect-[1440/1023] w-full overflow-hidden ${className}`}>
      {video.type === "loop" ? (
        <VideoLoop
          mp4={video.sources.mp4}
          webm={video.sources.webm}
          poster={video.poster}
          className="h-full w-full"
        />
      ) : (
        video.poster && (
          <Image src={video.poster} alt="" fill className="object-cover" sizes="100vw" />
        )
      )}
    </section>
  );
}
