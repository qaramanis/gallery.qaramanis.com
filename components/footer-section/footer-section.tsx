"use client";

import { Terminal, ScanEye } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";

export default function FooterSection() {
  const isMobile = useMobile();
  const router = useRouter();

  if (isMobile) {
    // Mobile view - to be filled
    return (
      <section
        id="footer"
        className="w-full z-30 select-none p-2 py-6 relative"
      >
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="self-start">
            <div className="rounded-full px-6 py-2 border-2 border-foreground flex gap-4 items-center justify-center bg-background hover:bg-foreground text-2xl text-foreground hover:text-background transition-all duration-300 cursor-pointer">
              <Terminal size={24} className="self-center -mb-1" />
              Say Hello
            </div>
          </div>
          <div className="self-end">
            <div
              onClick={() => {
                router.push("/view");
                window.scrollTo(0, 0);
              }}
              className="rounded-full px-6 py-2 border-2 border-foreground flex gap-4 items-center justify-center bg-background hover:bg-foreground text-2xl text-foreground hover:text-background transition-all duration-300 cursor-pointer"
            >
              View All
              <ScanEye size={24} className="self-center" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop view
  return (
    <section id="footer" className="w-full z-30 select-none">
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
                className="aspect-square border-[1.5] border-t-[0.5] border-foreground"
              />
            ))}
          </div>
          <div
            onClick={() => router.push("/contact")}
            className="w-4/8 border-[1.5] border-t-[0.5] border-foreground overflow-hidden group bg-background transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <div className="rounded-full h-full w-full md:scale-105 border-2 border-y-px border-foreground flex gap-4 items-center justify-center bg-background group-hover:bg-foreground text-6xl text-foreground group-hover:text-background transition-all duration-300 ">
              <Terminal size={60} className="self-center -mb-0.5" />
              Say Hello
            </div>
          </div>
          <div className="grid grid-cols-3 w-3/8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-[1.5] border-t-[0.5] border-foreground"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="grid grid-cols-3 w-3/8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-[1.5] border-b-[0.5] border-foreground"
              />
            ))}
          </div>
          <div
            onClick={() => router.push("/view-all")}
            className="w-4/8 border-[1.5] border-b-[0.5] border-foreground overflow-hidden group bg-background transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <div className="rounded-full h-full w-full md:scale-105 border-2 border-y-px border-foreground flex gap-4 items-center justify-center bg-background group-hover:bg-foreground text-6xl text-foreground group-hover:text-background transition-all duration-300 ">
              View All
              <ScanEye size={60} className="self-center" />
            </div>
          </div>
          <div className="grid grid-cols-1 w-1/8">
            {Array.from({ length: 1 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-[1.5] border-b-[0.5] border-foreground"
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
