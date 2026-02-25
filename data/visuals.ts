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
    title: "Vinyl",
    imagePath: "/visuals/landing-page/vinyl-1.jpg",
    dimensions: {
      width: 1750,
      height: 1167,
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
  {
    id: "8",
    title: "Star",
    imagePath: "/visuals/landing-page/star-1.jpeg",
    dimensions: {
      width: 1080,
      height: 1350,
    },
  },
  {
    id: "9",
    title: "Abstract2",
    imagePath: "/visuals/landing-page/abstract2.jpg",
    dimensions: {
      width: 1080,
      height: 1350,
    },
  },
  {
    id: "10",
    title: "Dog",
    imagePath: "/visuals/landing-page/dog.jpg",
    dimensions: {
      width: 1456,
      height: 816,
    },
  },
];
