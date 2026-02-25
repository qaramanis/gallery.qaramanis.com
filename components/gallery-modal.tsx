"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function useGallery() {
  const [galleryMounted, setGalleryMounted] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (images: string[], startIndex = 0) => {
    setGalleryImages(images);
    setGalleryIndex(startIndex);
    setGalleryMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setGalleryVisible(true);
      });
    });
  };

  const closeGallery = () => {
    setGalleryVisible(false);
    setTimeout(() => {
      setGalleryMounted(false);
    }, 300);
  };

  const goNext = useCallback(() => {
    setGalleryIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : prev,
    );
  }, [galleryImages.length]);

  const goPrev = useCallback(() => {
    setGalleryIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (!galleryMounted) return;

    document.body.style.overflow = "hidden";
    (window as any).lenis?.stop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      (window as any).lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryMounted, goNext, goPrev]);

  return {
    galleryMounted,
    galleryVisible,
    galleryImages,
    galleryIndex,
    setGalleryIndex,
    openGallery,
    closeGallery,
    goNext,
    goPrev,
  };
}

interface GalleryModalProps {
  galleryMounted: boolean;
  galleryVisible: boolean;
  galleryImages: string[];
  galleryIndex: number;
  setGalleryIndex: (index: number) => void;
  closeGallery: () => void;
  goNext: () => void;
  goPrev: () => void;
}

export default function GalleryModal({
  galleryMounted,
  galleryVisible,
  galleryImages,
  galleryIndex,
  setGalleryIndex,
  closeGallery,
  goNext,
  goPrev,
}: GalleryModalProps) {
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isSwiping = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    const threshold = 50;
    if (touchDeltaX.current < -threshold) {
      goNext();
    } else if (touchDeltaX.current > threshold) {
      goPrev();
    }
  };

  if (!galleryMounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[101] bg-black/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
        galleryVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeGallery}
    >
      {/* Close button */}
      <button
        onClick={closeGallery}
        className="absolute top-6 right-6 text-white cursor-pointer hover:opacity-70 transition-opacity duration-200"
        aria-label="Close gallery"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      {/* Previous arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        disabled={galleryIndex === 0}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} strokeWidth={1.5} />
      </button>

      {/* Image carousel + Dots */}
      <div
        className="flex flex-col items-center gap-4 max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="overflow-hidden rounded-md touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${galleryIndex * 100}%)`,
            }}
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="w-full shrink-0 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="max-w-[90vw] max-h-[75vh] w-auto h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setGalleryIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === galleryIndex
                  ? "bg-white w-6 h-1.5"
                  : "bg-white/40 w-1.5 h-1.5 hover:bg-white/70"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Next arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        disabled={galleryIndex === galleryImages.length - 1}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-200"
        aria-label="Next image"
      >
        <ChevronRight size={36} strokeWidth={1.5} />
      </button>
    </div>,
    document.body,
  );
}
