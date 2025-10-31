"use client";

import { useState } from "react";

const categories = [
  { id: 1, name: "posters" },
  { id: 2, name: "visuals" },
  { id: 3, name: "designs" },
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="flex gap-8 w-full justify-center text-background bg-background sticky -top-5 self-center z-45">
      <div className="w-full h-0.5 absolute -bottom-0.5 bg-foreground"></div>
      <div className="w-full h-0.5 absolute -top-0.5 bg-foreground"></div>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className="flex flex-col text-[3rem] cursor-pointer"
        >
          <div className="sticky top-16 text-stroke-1 text-stroke-foreground ">
            {category.name}
          </div>
          <div className="sticky top-16 -mt-12 text-stroke-1 text-stroke-foreground ">
            {category.name}
          </div>
          <div className="sticky top-16 -mt-12 text-stroke-1 text-stroke-foreground ">
            {category.name}
          </div>
          <div
            className={`sticky top-0 -mt-12 text-stroke-2 text-foreground transition-all duration-500 ${
              activeCategory === category.id
                ? "text-teal text-stroke-teal"
                : "text-stroke-foreground "
            }`}
          >
            {category.name}
          </div>
        </button>
      ))}
    </div>
  );
}
