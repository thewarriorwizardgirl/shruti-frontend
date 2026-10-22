import { useRef } from "react";

export type ImageCollectionItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type ImageCollectionProps = {
  title: string;
  description: string;
  items: ImageCollectionItem[];
  id?: string;
  variant?: "grid" | "filmstrip";
};

export default function ImageCollection({
  title,
  description,
  items,
  id,
  variant = "grid",
}: ImageCollectionProps) {
  const collectionRef = useRef<HTMLDivElement>(null);

  const scrollCollection = (direction: -1 | 1) => {
    const collection = collectionRef.current;
    if (collection) {
      collection.scrollLeft += direction * collection.clientWidth * 0.8;
    }
  };

  return (
    <section
      className={`image-collection${variant === "filmstrip" ? " is-filmstrip" : ""}`}
      id={id}
    >
      <header className="image-collection-heading">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {variant === "filmstrip" && (
          <div className="filmstrip-controls" aria-label={`${title} controls`}>
            <button
              type="button"
              aria-label={`Scroll ${title} left`}
              onClick={() => scrollCollection(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label={`Scroll ${title} right`}
              onClick={() => scrollCollection(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </header>
      <div
        className={`image-collection-grid${variant === "filmstrip" ? " is-filmstrip" : ""}`}
        ref={collectionRef}
        tabIndex={variant === "filmstrip" ? 0 : undefined}
        aria-label={variant === "filmstrip" ? `${title} filmstrip` : undefined}
      >
        {items.map((item) => (
          <article className="image-collection-card" key={item.title}>
            <img src={item.image} alt={item.alt} loading="lazy" />
            <div className="image-collection-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
