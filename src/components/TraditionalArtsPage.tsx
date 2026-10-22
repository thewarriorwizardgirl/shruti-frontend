import ImageCollection, { type ImageCollectionItem } from "./ImageCollection";

const rangoliArt: ImageCollectionItem[] = [
  {
    title: "Festive Peacock Feather Floor Rangoli",
    description:
      "Elaborate symmetrical floor art featuring radiant peacock plumage, turquoise and magenta sand dyes, illuminated with festive clay oil lamps.",
    image: "/images/traditional-arts/peacock-rangoli.jpg",
    alt: "Festive peacock feather floor rangoli",
  },
  {
    title: "Traditional Floral Mandala Rangoli",
    description:
      "Symmetrical sacred geometric mandala celebrating Indian welcoming rituals, layered with fresh marigolds and glowing brass lamps.",
    image: "/images/traditional-arts/floral-mandala-rangoli.jpg",
    alt: "Traditional floral mandala rangoli",
  },
];

const mehandiArt: ImageCollectionItem[] = [
  {
    title: "Intricate Bridal Mehndi Adornment",
    description:
      "Detailed symmetrical paisley, peacock, and floral jaali patterns on palms and wrists with deep mahogany stains.",
    image: "/images/traditional-arts/bridal-mehndi.jpg",
    alt: "Intricate bridal mehndi design",
  },
  {
    title: "Indo-Arabic Festive Henna Trail",
    description:
      "Modern flowing floral trail with shaded petals and delicate mandalas, perfect for festive events and weddings.",
    image: "/images/traditional-arts/bridal-mehndi.jpg",
    alt: "Flowing festive henna trail",
  },
];

export default function TraditionalArtsPage() {
  return (
    <article className="editorial-page">
      <header className="editorial-intro">
        <p className="eyebrow">Traditional & Festive Arts</p>
      </header>

      <div className="editorial-content">
        <ImageCollection
          title="Rangoli Collection"
          description="Elaborate symmetrical floor rangoli designs created for festivals, welcoming entrances, and celebratory occasions with organic powdered pigments and flower petals."
          items={rangoliArt}
          variant="filmstrip"
        />
        <ImageCollection
          title="Mehandi Collection"
          description="Handcrafted 100% natural organic henna pastes ensuring rich dark stains. Specializing in intricate bridal mehndi, Indo-Western patterns, and festive event bookings."
          items={mehandiArt}
          variant="filmstrip"
        />
      </div>

      <aside className="editorial-cta">
        <p className="eyebrow">Let’s collaborate</p>
        <h2>Ready to bring your creative ideas to life?</h2>
        <p>
          Whether you’re interested in custom canvas art, summer camp
          registration, school project coaching, or wedding mehandi—I’d love to
          connect.
        </p>
        <a className="home-link" href="#say-hello">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </article>
  );
}
