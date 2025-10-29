"use client";

import { useEffect, useState } from "react";

export default function GalleryTitle({
  title,
  layers = 4,
}: {
  title: string;
  layers?: number;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Mobile version
  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center text-[2rem] text-background bg-transparent -mb-1.5 select-none">
        <div className="sticky top-0 text-stroke-1 text-stroke-foreground tracking-wider">
          {title}
        </div>
        {Array.from({ length: layers - 1 }).map((_, index) => (
          <div
            key={index}
            className="sticky top-0 -mt-4 text-stroke-1 text-stroke-foreground tracking-wider"
          >
            {title}
          </div>
        ))}
        <div className="sticky top-0 text-foreground text-stroke-2 text-stroke-foreground -mt-4 tracking-wider hover:text-teal hover:text-stroke-teal transition-all duration-300">
          {title}
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="flex flex-col items-center justify-center text-[10rem] text-background bg-transparent -mb-9 select-none">
      <div className="sticky top-0 text-stroke-1 text-stroke-foreground tracking-wider">
        {title}
      </div>
      {Array.from({ length: layers - 1 }).map((_, index) => (
        <div
          key={index}
          className="sticky top-0 -mt-48 text-stroke-1 text-stroke-foreground tracking-wider"
        >
          {title}
        </div>
      ))}
      <div className="sticky top-0 text-foreground text-stroke-2 text-stroke-foreground -mt-48 tracking-wider hover:text-teal hover:text-stroke-teal transition-all duration-300">
        {title}
      </div>
    </div>
  );
}
