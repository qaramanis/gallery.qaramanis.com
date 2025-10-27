"use client";

import Image from "next/image";
import GalleryTitle from "../gallery-title";
import { designs } from "@/data/designs";
import RotatingText from "../rotating-text";

export default function DesignsSection() {
  return (
    <section id="designs" className="w-full">
      <div className="flex justify-between w-full mt-48">
        <div className="max-w-1/2 pl-2 sticky top-0">
          <GalleryTitle title="designs" layers={4} />
        </div>
        <div className="w-1/2 relative flex items-center justify-center bg-transparent text-4xl font-bold">
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
      <div className="min-h-screen w-full p-2 mt-36">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {designs.map((design) => (
            <div
              key={design.id}
              className="bg-gray rounded-sm shadow-xl overflow-hidden"
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
