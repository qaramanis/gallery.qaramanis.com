"use client";

import Image from "next/image";
import GalleryTitle from "../gallery-title";
import { visuals } from "@/data/visuals";
import Separator from "../seperator";
import { useRouter } from "next/navigation";

export default function VisualsSection() {
  const router = useRouter();
  return (
    <section id="visuals" className="w-full p-2">
      <div className="flex flex-col md:flex-row justify-between w-full mt-48">
        <div className="w-full md:w-1/2 relative flex self-center items-center justify-center bg-transparent order-2 md:order-1 z-30">
          {visuals[3] && (
            <div className="aspect-4/3 h-full md:h-100 rounded-sm overflow-hidden shadow-none hover:shadow-xl transition-all duration-300">
              <Image
                src={visuals[6].imagePath}
                alt={visuals[6].title}
                width={1440}
                height={1080}
                className="w-full  object-cover"
              />
            </div>
          )}
        </div>
        <div className="md:max-w-[50%] pr-2 sticky top-16 md:top-0 text-start md:text-end order-1 md:order-2 z-20">
          <GalleryTitle title="visuals" layers={3} />
        </div>
      </div>
      <div className="min-h-full pb-0 w-full mt-36">
        <div
          className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-6"
          style={{ columnGap: "1.5rem" }}
        >
          {visuals.map((visual) => (
            <div
              key={visual.id}
              className="bg-gray rounded-sm shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden mb-6 break-inside-avoid"
              style={{
                width: "100%",
                aspectRatio: `${visual.dimensions.width}/${visual.dimensions.height}`,
              }}
            >
              <Image
                src={visual.imagePath}
                alt={visual.title}
                width={visual.dimensions.width}
                height={visual.dimensions.height}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-16 mt-2">
        <div
          onClick={() => router.push("/visuals")}
          className="text-lg p-0 cursor-pointer relative hover:border-teal text-foreground hover:text-teal transition-all duration-300"
        >
          view all visuals
        </div>
      </div>
    </section>
  );
}
