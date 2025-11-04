export interface Visual {
  id: string;
  title: string;
  imagePath: string;
  dimensions: {
    width: number;
    height: number;
  };
  description?: string;
}

export const visuals: Visual[] = [
  {
    id: "1",
    title: "Abstract",
    imagePath: "/visuals/landing-page/abstract.jpg",
    dimensions: {
      width: 1122,
      height: 1650,
    },
  },
  {
    id: "2",
    title: "Birds 1",
    imagePath: "/visuals/landing-page/birds-1.jpg",
    dimensions: {
      width: 1592,
      height: 2048,
    },
  },
  {
    id: "3",
    title: "Collage",
    imagePath: "/visuals/landing-page/collage.jpeg",
    dimensions: {
      width: 1202,
      height: 653,
    },
  },
  {
    id: "4",
    title: "Copy 1",
    imagePath: "/visuals/landing-page/copy-1.jpg",
    dimensions: {
      width: 2048,
      height: 1536,
    },
  },
  {
    id: "5",
    title: "Horse",
    imagePath: "/visuals/landing-page/horse.jpg",
    dimensions: {
      width: 2048,
      height: 1605,
    },
  },
  {
    id: "6",
    title: "Human",
    imagePath: "/visuals/landing-page/human.jpg",
    dimensions: {
      width: 960,
      height: 1200,
    },
  },
  {
    id: "7",
    title: "Stuck",
    imagePath: "/visuals/landing-page/stuck.jpg",
    dimensions: {
      width: 2048,
      height: 1536,
    },
  },
];
