import Image from "next/image";
import GalleryTitle from "../gallery-title";
import { visuals } from "@/data/visuals";
import Separator from "../seperator";

export default function VisualsSection() {
  return (
    <section id="visuals" className="w-full p-2">
      <div className="flex flex-col md:flex-row justify-between w-full mt-48 ">
        <div className="w-full md:w-1/2 relative flex self-center items-center justify-center bg-transparent order-2 md:order-1">
          {visuals[3] && (
            <div className="aspect-4/3 h-100 rounded-sm overflow-hidden shadow-none hover:shadow-xl transition-all duration-300">
              <Image
                src={visuals[3].imagePath}
                alt={visuals[3].title}
                width={1440}
                height={1080}
                className="w-full h-[110%] object-cover"
              />
            </div>
          )}
        </div>
        <div className="md:max-w-[50%] pr-2 sticky top-16 md:top-0 text-start md:text-end order-1 md:order-2">
          <GalleryTitle title="visuals" layers={4} />
        </div>
      </div>
      <div className="min-h-screen w-full mt-36">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visuals.map((visual) => (
            <div
              key={visual.id}
              className="bg-gray rounded-sm shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden"
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
