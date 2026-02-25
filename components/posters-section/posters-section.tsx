"use client";

import Image from "next/image";
import GalleryTitle from "../gallery-title";
import GalleryModal, { useGallery } from "../gallery-modal";
import { posters } from "@/data/posters";
import { useRouter } from "next/navigation";

export default function PostersSection() {
  const router = useRouter();
  const gallery = useGallery();
  const allImages = posters.slice(0, 12).map((p) => p.imagePath);

  const openAtIndex = (index: number) => {
    gallery.openGallery(allImages, index);
  };

  return (
    <section id="posters" className="w-full relative z-30 p-2">
      <div className="flex flex-col md:flex-row justify-between w-full mt-48">
        <div className="w-full md:max-w-[50%] sticky top-0 flex z-20">
          <GalleryTitle title="posters" layers={3} />
        </div>
        <div className="w-full md:w-1/2 relative flex self-center items-center justify-center min-h-[200px] z-30">
          {posters[0] && (
            <div
              onClick={() => openAtIndex(8)}
              className="absolute -bottom-24 md:-bottom-36 left-0 md:w-75 w-35 rounded-sm shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-98"
            >
              <Image
                src={posters[8].imagePath}
                alt={posters[8].title}
                width={1080}
                height={1440}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {posters[1] && (
            <div
              onClick={() => openAtIndex(6)}
              className="absolute top-6 md:-top-64 right-0 md:w-75 w-35 rounded-sm shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-98"
            >
              <Image
                src={posters[6].imagePath}
                alt={posters[6].title}
                width={1080}
                height={1920}
                className="w-full h-full object-fit"
              />
            </div>
          )}
        </div>
      </div>
      <div className="min-h-full w-full mt-36">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-6">
          {posters.slice(0, 12).map((poster, index) => (
            <div
              key={poster.id}
              onClick={() => openAtIndex(index)}
              className="bg-gray rounded-sm shadow-none hover:shadow-xl overflow-hidden transition-all duration-300 cursor-pointer hover:scale-95"
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
      <div className="flex items-center justify-center w-full h-16 mt-2">
        <div className="text-lg text-foreground">and more</div>
        {/*<div
          onClick={() => router.push("/posters")}
          className="text-lg p-0 cursor-pointer relative hover:border-teal text-foreground hover:text-teal transition-all duration-300"
        >
          view all posters
        </div>*/}
      </div>

      <GalleryModal {...gallery} />
    </section>
  );
}
