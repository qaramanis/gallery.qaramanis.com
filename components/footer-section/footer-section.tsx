"use client";

import { Terminal } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export default function FooterSection() {
  const isMobile = useMobile();

  if (isMobile) {
    // Mobile view - to be filled
    return (
      <section id="footer" className="w-full z-30 select-none p-2 py-12 relative">
        <div className="flex flex-col gap-4 h-[calc(200%)] itesms-center justify-center">
          <div className="w-full">
            <div className="rounded-full py-3 border-2 border-foreground flex gap-4 items-center justify-center bg-background hover:bg-foreground text-2xl text-foreground hover:text-background transition-all duration-300 cursor-pointer">
              <Terminal size={24} className="self-center -mb-1" />
              Get In Touch
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-full py-1 border-2 border-foreground flex gap-4 items-center justify-center bg-background hover:bg-foreground text-2xl text-foreground hover:text-background transition-all duration-300 cursor-pointer">
              View All
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop view
  return (
    <section id="footer" className="w-full z-30 -mt-1 select-none">
      <div className="flex flex-col">
        {/*<div className="grid grid-cols-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border-[1.5] border-foreground"
            />
          ))}
        </div>*/}
        <div className="flex flex-row">
          <div className="grid grid-cols-1 w-1/8">
            {Array.from({ length: 1 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-[1.5] border-foreground"
              />
            ))}
          </div>
          <div className="w-4/8 border-[1.5] border-foreground overflow-hidden group bg-foreground hover:bg-background transition-all duration-300">
            <div className="rounded-full scale-105 border-2 border-y-px border-foreground flex gap-4 items-center justify-center bg-background hover:bg-foreground size-full text-6xl text-foreground hover:text-background transition-all duration-300 cursor-pointer">
              <Terminal size={60} className="self-center -mb-1" />
              Get In Touch
            </div>
          </div>
          <div className="grid grid-cols-3 w-3/8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-[1.5] border-foreground"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="grid grid-cols-3 w-3/8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-[1.5] border-foreground"
              />
            ))}
          </div>
          <div className="w-4/8 border-[1.5] border-foreground overflow-hidden group bg-foreground hover:bg-background transition-all duration-300">
            <div className="rounded-full scale-105 border-2 border-y-px border-foreground flex gap-4 items-center justify-center bg-background hover:bg-foreground size-full text-6xl text-foreground hover:text-background transition-all duration-300 cursor-pointer">
              View All
            </div>
          </div>
          <div className="grid grid-cols-1 w-1/8">
            {Array.from({ length: 1 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-[1.5] border-foreground"
              />
            ))}
          </div>
        </div>
        {/*<div className="grid grid-cols-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border-[1.5] border-foreground"
            />
          ))}
        </div>*/}
      </div>
    </section>
  );
}
