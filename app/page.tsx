import CategoryTabs from "@/components/category-tabs";
import GalleryTitle from "@/components/gallery-title";
import Navigation from "@/components/navigation";
import PostersSection from "@/components/posters-section/posters-section";
import Separator from "@/components/seperator";
import VisualsSection from "@/components/visuals-section/visuals-section";
import DesignsSection from "@/components/designs-section/designs-section";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <GalleryTitle title="digital gallery" layers={8} />
      <Navigation />
      {/*<CategoryTabs />*/}
      <PostersSection />
      <Separator />
      <VisualsSection />
      <Separator />
      <DesignsSection />
      <Separator />
    </div>
  );
}
