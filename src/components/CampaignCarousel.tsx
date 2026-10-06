"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderPhoto from "./PlaceholderPhoto";

export type CampaignSlide = {
  /** What the real banner image shows — shown as a caption until the asset is swapped in. */
  pendingLabel: string;
  /** Path under /public once the real banner is saved, e.g. "/banners/home-hero.webp". */
  src?: string;
};

export default function CampaignCarousel({ slides }: { slides: CampaignSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <div className="relative bg-off-white">
      {slide.src ? (
        <div className="relative aspect-[8/3] w-full">
          <Image
            src={slide.src}
            alt={slide.pendingLabel}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <PlaceholderPhoto
          label={`Banner pending: ${slide.pendingLabel}`}
          className="aspect-[8/3] w-full"
        />
      )}
      <div className="absolute inset-y-0 left-3 flex items-center">
        <button
          type="button"
          aria-label="Previous banner"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-navy shadow hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-3 flex items-center">
        <button
          type="button"
          aria-label="Next banner"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-navy shadow hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((s, i) => (
          <span
            key={s.pendingLabel}
            className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-navy" : "bg-navy/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
