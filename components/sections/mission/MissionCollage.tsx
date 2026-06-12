import Image from "next/image";
import { VideoLoop } from "@/components/VideoLoop";

// Our Mission photo collage (Figma 669:1097–1104) — 8 scattered frames placed
// at their exact coordinates (1440px reference width). Frames with a `video`
// render a silent loop (the still doubles as the poster).
const PHOTOS: {
  src: string;
  video?: string;
  l: number;
  t: number;
  w: number;
  h: number;
}[] = [
  { src: "/images/mission/05.jpg", video: "/video/mission-collage-05.mp4", l: 287, t: 0, w: 866, h: 488 },
  { src: "/images/mission/img-6727.jpg", l: 764, t: 677, w: 339, h: 452 },
  { src: "/images/mission/img-3367.jpg", l: 60, t: 714, w: 424, h: 752 },
  { src: "/images/mission/cs2a3216.jpg", l: 801, t: 1317, w: 530, h: 353 },
  { src: "/images/mission/03.jpg", video: "/video/mission-collage-03.mp4", l: 283, t: 1793, w: 870, h: 489 },
  { src: "/images/mission/img-2067.jpg", l: 730, t: 2474, w: 424, h: 366 },
  { src: "/images/mission/img-1438.jpg", l: 60, t: 2753, w: 424, h: 658 },
  { src: "/images/mission/img-4028.jpg", l: 730, t: 3135, w: 639, h: 360 },
];

export function MissionCollage() {
  return (
    <section className="overflow-hidden py-16 lg:py-[120px]">
      {/* Desktop: exact scattered collage on the 1440px reference canvas. */}
      <div className="relative mx-auto hidden h-[3495px] w-[1440px] lg:block">
        {PHOTOS.map((p) => (
          <div
            key={p.src}
            className="absolute overflow-hidden rounded-[20px] bg-ink/5"
            style={{ left: p.l, top: p.t, width: p.w, height: p.h }}
          >
            {p.video ? (
              <VideoLoop mp4={p.video} poster={p.src} className="h-full w-full" />
            ) : (
              <Image src={p.src} alt="" fill className="object-cover" sizes="60vw" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile/tablet: simple full-width vertical stack at each frame's ratio. */}
      <div className="mx-auto flex max-w-[520px] flex-col gap-5 px-5 sm:px-8 lg:hidden">
        {PHOTOS.map((p) => (
          <div
            key={p.src}
            className="relative overflow-hidden rounded-[20px] bg-ink/5"
            style={{ aspectRatio: `${p.w} / ${p.h}` }}
          >
            {p.video ? (
              <VideoLoop mp4={p.video} poster={p.src} className="h-full w-full" />
            ) : (
              <Image src={p.src} alt="" fill className="object-cover" sizes="100vw" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
