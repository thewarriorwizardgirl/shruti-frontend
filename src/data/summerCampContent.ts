import type { ImageCollectionItem } from "./galleryTypes";

export type SummerCampImageSection =
  | "Workshop Highlights"
  | "Hands-On Workshop Photography";

export const summerCampImageSections: {
  section: SummerCampImageSection;
  title: string;
  description: string;
  items: ImageCollectionItem[];
}[] = [
  {
    section: "Workshop Highlights",
    title: "Workshop Highlights",
    description:
      "Interactive activities, dance choreography, young entrepreneur stalls, and live music",
    items: [
      {
        title: "Glass Painting Workshop Activity",
        description: "Hands-on creative glass art & vibrant pigments",
        image: "/images/summer-camp/glass-painting.jpg",
        alt: "Glass painting workshop activity",
      },
      {
        title: "The Little Dancers Movement Lab",
        description: "Rhythm, stage confidence & joyful movement",
        image: "/images/summer-camp/dance-lab.jpg",
        alt: "Children at the Little Dancers movement lab",
      },
      {
        title: "Mango Festival & Young Entrepreneur Stalls",
        description: "Hands-on buying, selling & creative culinary booths",
        image: "/images/summer-camp/mango-festival.jpg",
        alt: "Mango festival and young entrepreneur stalls",
      },
      {
        title: "Sunflower Craft & Sunlit Creations",
        description: "Multi-medium papercraft & radiant floral designs",
        image: "/images/summer-camp/sunflower-craft.jpg",
        alt: "Sunflower craft and creative projects",
      },
      {
        title: "Camp Celebrations & Collaborative Murals",
        description: "Expressive team painting & joyous energy",
        image: "/images/summer-camp/collaborative-murals.jpg",
        alt: "Campers creating collaborative murals",
      },
      {
        title: "Game Zone & Saturday Fun",
        description: "Active team games, laughter & peer bonding",
        image: "/images/summer-camp/game-zone.jpg",
        alt: "Camp game zone and Saturday activities",
      },
      {
        title: "First Song Performance",
        description: "Musical vocals, group harmony & stage presence",
        image: "/images/summer-camp/song-performance.jpg",
        alt: "Students performing a song together",
      },
    ],
  },
  {
    section: "Hands-On Workshop Photography",
    title: "Hands-On Workshop Photography",
    description:
      "Tactile art experiments, thumb painting, scratch art, and joyful student celebrations",
    items: [
      {
        title: "Summer Color Palette & Play",
        description: "Bright papercrafts and artistic exploration",
        image: "/images/summer-camp/color-palette.jpg",
        alt: "Summer color palette and papercraft activity",
      },
      {
        title: "Thumb Painting & Leaf Printing",
        description: "Botanical printing & tactile sensory art",
        image: "/images/summer-camp/leaf-printing.jpg",
        alt: "Thumb painting and leaf printing activity",
      },
      {
        title: "Space Scratch Art & Printmaking",
        description: "Senior student scratchboards & junior prints",
        image: "/images/summer-camp/scratch-art.jpg",
        alt: "Space scratch art and printmaking",
      },
      {
        title: "The Little Artists Showcase",
        description: "Proud campers holding completed masterpieces",
        image: "/images/summer-camp/artists-showcase.jpg",
        alt: "Campers showcasing their artwork",
      },
      {
        title: "Camp Finale & Celebration Feast",
        description: "Awarding certificates, sharing food & memories",
        image: "/images/summer-camp/camp-finale.jpg",
        alt: "Camp finale celebration",
      },
      {
        title: "Our Creative Troupe Moments",
        description: "Playful spirit & classroom laughter",
        image: "/images/summer-camp/creative-troupe.jpg",
        alt: "Creative troupe moments in the classroom",
      },
    ],
  },
];
