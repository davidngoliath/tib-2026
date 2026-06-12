import Image from "next/image";
import type { ImageRef } from "@/content/types";

// Full-bleed feature image band (e.g. Our Mission, Brave Camp pages).
type Props = {
  src: ImageRef;
  alt: string;
  className?: string;
};

export function FeatureImage({ src, alt, className = "" }: Props) {
  return (
    <div className={`relative aspect-[1440/958] w-full ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
    </div>
  );
}
