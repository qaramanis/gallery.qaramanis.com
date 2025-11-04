import CategoryTabs from "@/components/category-tabs";
import GalleryTitle from "@/components/gallery-title";
import Navigation from "@/components/navigation";
import PostersSection from "@/components/posters-section/posters-section";
import Separator from "@/components/seperator";
import VisualsSection from "@/components/visuals-section/visuals-section";
import DesignsSection from "@/components/designs-section/designs-section";
import { Footprints } from "lucide-react";
import FooterSection from "@/components/footer-section/footer-section";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      {/*<CategoryTabs />*/}
      <PostersSection />
      <Separator />
      <VisualsSection />
      <Separator />
      <DesignsSection />
      <Separator />
      <FooterSection />
      <Separator />
    </div>
  );
}
