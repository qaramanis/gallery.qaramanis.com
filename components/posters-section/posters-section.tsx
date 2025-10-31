import Image from "next/image";
import GalleryTitle from "../gallery-title";
import { posters } from "@/data/posters";

export default function PostersSection() {
  return (
    <section id="posters" className="w-full relative z-30 p-2">
      <div className="flex flex-col md:flex-row justify-between w-full mt-48">
        <div className="w-full md:max-w-[50%] sticky top-0 flex z-20">
          <GalleryTitle title="posters" layers={4} />
        </div>
        <div className="w-full md:w-1/2 relative flex self-center items-center justify-center min-h-[200px] z-30">
          {posters[0] && (
            <div className="absolute -bottom-24 md:-bottom-36 left-0 md:w-75 w-35 rounded-sm shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden">
              <Image
                src={posters[1].imagePath}
                alt={posters[1].title}
                width={1080}
                height={1440}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {posters[1] && (
            <div className="absolute top-6 md:-top-64 right-0 md:w-75 w-35 rounded-sm shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden">
              <Image
                src={posters[0].imagePath}
                alt={posters[0].title}
                width={1080}
                height={1920}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <div className="min-h-full w-full mt-36">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="bg-gray rounded-sm shadow-none hover:shadow-xl overflow-hidden transition-all duration-300"
              style={{ aspectRatio: "1080/1350" }}
            >
              <Image
                src={poster.imagePath}
                alt={poster.title}
                width={1080}
                height={1350}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
