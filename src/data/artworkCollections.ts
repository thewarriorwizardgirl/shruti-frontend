import type { ImageCollectionItem } from "./galleryTypes";

export type ArtworkCollection = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  items: ImageCollectionItem[];
};

const handmadeCardNames = [
  [
    "Family Warmth Watercolor Card",
    "Watercolor on 300gsm cold-pressed sheet",
    "handmade_cards_CEE3mCzM5Gy-Bcnlmdf3.jpg",
  ],
  [
    "Pretty Floral Botanical Greeting",
    "Gouache & Acrylic blend on textured paper",
    "handmade_cards_CiKUkGmJvzZ-BibXQYLL.jpg",
  ],
  [
    "Ganesh Chaturthi Festive Card",
    "Acrylic & Gold leaf detailing",
    "handmade_cards_Ch7YLdPJAz--CnQPrRNT.jpg",
  ],
  [
    "Sunset Horizon Mini Card",
    "Gouache wash series",
    "handmade_cards_ChuNg7rpgsC-Z5CIimPL.jpg",
  ],
  [
    "Golden Meadow Greeting Card",
    "Watercolor on Brustro paper",
    "handmade_cards_Chw-r_lp1hT-6GjJytHe.jpg",
  ],
  [
    "Ocean Breeze Serenade Card",
    "Layered watercolor study",
    "handmade_cards_CFjEFAyMiii-B5jj5qyv.jpg",
  ],
  [
    "Autumn Whimsy Card",
    "Watercolors & ink linework",
    "handmade_cards_CFytjVmspju-DXTCqJ1M.jpg",
  ],
  [
    "Happy Accidents Watercolor Card",
    "Loose floral wash study",
    "handmade_cards_CEjNsmrsz5D-Bby--7Tu.jpg",
  ],
  [
    "Pastel Garden Card",
    "Watercolor & fine details",
    "handmade_cards_Cfox88PM5LU-BFYCy2uj.jpg",
  ],
  [
    "Starry Twilight Horizon",
    "Nightscape watercolor postcard",
    "handmade_cards_CGpaRRKMYw_-B4_spQgQ.jpg",
  ],
  [
    "Radiant Morning Blooms",
    "Camlin watercolors on Brustro sheet",
    "handmade_cards_ChWrz5EJ2qm-cPyHiSaK.jpg",
  ],
  [
    "Night Sky Glowing Silhouette",
    "Gouache acrylic challenge entry",
    "handmade_cards_CiPnGwDpb93-DyjeVU8I.jpg",
  ],
  [
    "Campfire Wilderness Greeting",
    "Gouache live painting series",
    "handmade_cards_CiadisZpU7J-D3EVscZ5.jpg",
  ],
  [
    "Aesthetic Sunset Silhouette",
    "Thoovi Arts challenge entry",
    "handmade_cards_CiHTocKvyRK-B_vz84IK.jpg",
  ],
  [
    "Magical Ferris Wheel Night",
    "Gouache on textured sheet",
    "handmade_cards_Ch-HqUDsMbd-Dk63NHgL.jpg",
  ],
] as const;

const handmadeCards: ImageCollectionItem[] = handmadeCardNames.map(
  ([title, description, image]) => ({
    title,
    description,
    image: `/images/artwork/handmade-cards/${image}`,
    alt: title,
  }),
);

export const artworkCollections: ArtworkCollection[] = [
  {
    id: "artwork-handmade-cards",
    title: "Handmade Cards",
    description: "Watercolor, gouache, and mixed-media greeting cards.",
    coverImage: "/images/artwork/handmade-cards.jpg",
    coverAlt: "Hand-painted flowers in baskets on a bicycle",
    items: handmadeCards,
  },
  {
    id: "artwork-digital-art",
    title: "Digital Art",
    description:
      "Vector tracing, digital character illustrations, and Photoshop portrait painting.",
    coverImage: "/images/artwork/digital-art.jpg",
    coverAlt: "Digital portrait illustration with vivid pink hair",
    items: [
      {
        title: "Virtual Dreams Digital Vector Art",
        description: "Created in Adobe Animate CC & Illustrator",
        image:
          "/images/artwork/digital-art/digital_art_COiihgEMG1Q-ytJLVR9A.jpg",
        alt: "Virtual Dreams digital vector art",
      },
      {
        title: "Digital Portrait Painting",
        description: "Adobe Photoshop digital brushwork",
        image: "/images/artwork/digital-art/digital_art_CEIzUnyMtS8-iz_1fKg6.jpg",
        alt: "Digital portrait painting",
      },
    ],
  },
  {
    id: "artwork-pocket-paintings",
    title: "Pocket Paintings",
    description: "Miniature plein-air canvases painted on location in the mountains.",
    coverImage: "/images/artwork/pocket-paintings.jpg",
    coverAlt: "Colorful framed miniature paintings",
    items: [
      {
        title: "Mountain Plein-Air Pocket Canvas",
        description: "Miniature canvas series painted in the hills",
        image:
          "/images/artwork/pocket-paintings/pocket_paintings_DEG1aUiSsOm-BUICdJs3.jpg",
        alt: "Mountain plein-air pocket canvas",
      },
    ],
  },
  {
    id: "artwork-pen-and-ink",
    title: "Pen & Ink",
    description:
      "Fine-line architectural and cityscape cross-hatching sketches.",
    coverImage: "/images/artwork/pen-and-ink.jpg",
    coverAlt: "Ink drawings of a city street and an onion sketch",
    items: [
      {
        title: "Cityscape & Architecture Sketch",
        description: "Brustro fineliner masterclass collection",
        image:
          "/images/artwork/pen-and-ink/pen_and_ink_CjCuxWlpQDY-aesrz1vI.jpg",
        alt: "Cityscape and architecture sketch in pen and ink",
      },
    ],
  },
];
