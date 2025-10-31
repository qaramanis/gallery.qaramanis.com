"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for nav

      // Check if we're before the first section
      const firstSection = sections[0] as HTMLElement;
      if (firstSection && scrollPosition < firstSection.offsetTop) {
        setActiveSection("");
        return;
      }

      // Check which section we're in
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(element.id);
        }
      });
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-16 py-4 w-full bg-background sticky top-0 flex items-center z-50">
      <div className="w-full h-0.5 absolute -top-0.5 bg-foreground"></div>
      <div className="w-full h-0.5 absolute -bottom-0.5 bg-foreground"></div>
      <div className="flex flex-row text-center justify-center md:justify-between w-full px-2">
        <div className="">
          APOSTOLOS KARAMANIS <br className="block md:hidden" /> DIGITAL GALLERY
        </div>
        <div className="hidden absolute left-1/2 -translate-x-1/2 md:flex md:flex-row gap-3">
          <div
            onClick={() => scrollToSection("posters")}
            className={`hover:text-teal transition-colors duration-300 cursor-pointer ${
              activeSection === "posters" ? "text-teal" : ""
            }`}
          >
            POSTERS
          </div>
          <div className="select-none">|</div>
          <div
            onClick={() => scrollToSection("visuals")}
            className={`hover:text-teal transition-colors duration-300 cursor-pointer ${
              activeSection === "visuals" ? "text-teal" : ""
            }`}
          >
            VISUALS
          </div>
          <div className="select-none">|</div>
          <div
            onClick={() => scrollToSection("designs")}
            className={`hover:text-teal transition-colors duration-300 cursor-pointer ${
              activeSection === "designs" ? "text-teal" : ""
            }`}
          >
            DESIGNS
          </div>
        </div>
        <div className="hidden md:flex md:flex-row gap-3">
          <div className="hover:text-teal transition-colors duration-300 cursor-pointer">
            ABOUT
          </div>
          <div className="select-none">|</div>
          <div className="hover:text-teal transition-colors duration-300 cursor-pointer">
            MORE
          </div>
        </div>
      </div>
    </div>
  );
}
