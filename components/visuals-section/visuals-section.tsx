import Image from "next/image";
import GalleryTitle from "../gallery-title";
import { visuals } from "@/data/visuals";
import Separator from "../seperator";

export default function VisualsSection() {
  return (
    <section id="visuals" className="w-full">
      <div className="flex justify-between w-full mt-48">
        <div className="w-1/2 relative flex items-center justify-center bg-transparent">
          {visuals[3] && (
            <div className="aspect-4/3 h-100 rounded-sm overflow-hidden shadow-xl">
              <Image
                src={visuals[3].imagePath}
                alt={visuals[3].title}
                width={1440}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="max-w-1/2 pr-2 sticky top-0 text-end">
          <GalleryTitle title="visuals" layers={4} />
        </div>
      </div>
      <div className="min-h-screen w-full p-2 mt-36">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visuals.map((visual) => (
            <div
              key={visual.id}
              className="bg-gray rounded-sm shadow-xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={visual.imagePath}
                alt={visual.title}
                width={1080}
                height={1440}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
