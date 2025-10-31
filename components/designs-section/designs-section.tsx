"use client";

import Image from "next/image";
import GalleryTitle from "../gallery-title";
import { designs } from "@/data/designs";
import RotatingText from "../rotating-text";

export default function DesignsSection() {
  return (
    <section id="designs" className="w-full z-30 p-2">
      <div className="flex flex-col md:flex-row justify-between w-full mt-48">
        <div className="md:max-w-[50%] sticky top-0 mb-1.5 z-20">
          <GalleryTitle title="designs" layers={4} />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col md:flex-row items-center justify-center bg-background md:bg-transparent text-2xl md:text-4xl font-bold z-30">
          <span>Expertise in:&nbsp;</span>
          <RotatingText
            texts={[
              "Creative design work",
              "Modern aesthetics",
              "Results-driven design",
              "Creative components",
              "Visual storytelling",
              "Compelling graphics",
              "Smooth animations",
              "High converting pages",
            ]}
            rotationInterval={5000}
            staggerDuration={0.03}
            className="bg-foreground p-2 rounded-md hover:bg-teal transition-all duration-300"
            elementLevelClassName="text-background"
          />
        </div>
      </div>
      <div className="min-h-full w-full mt-36">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {designs.map((design) => (
            <div
              key={design.id}
              className="bg-gray rounded-sm shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={design.imagePath}
                alt={design.title}
                width={1440}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
