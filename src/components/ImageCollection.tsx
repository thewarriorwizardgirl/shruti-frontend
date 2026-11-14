import { useEffect, useRef, useState } from "react";
import { getImageUrl } from "../data/imageUrl";
import type { ImageCollectionItem } from "../data/galleryTypes";
export type { ImageCollectionItem } from "../data/galleryTypes";

const WHATSAPP_NUMBER = "919599755840";

type ImageCollectionProps = {
  title: string;
  description: string;
  items: ImageCollectionItem[];
  id?: string;
  variant?: "grid" | "filmstrip";
  orderable?: boolean;
};

export default function ImageCollection({
  title,
  description,
  items,
  id,
  variant = "grid",
  orderable = false,
}: ImageCollectionProps) {
  const collectionRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeCardRef = useRef<HTMLButtonElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<ImageCollectionItem | null>(null);

  const scrollCollection = (direction: -1 | 1) => {
    const collection = collectionRef.current;
    if (collection) {
      collection.scrollLeft += direction * collection.clientWidth * 0.8;
    }
  };

  useEffect(() => {
    if (!selectedItem) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      activeCardRef.current?.focus();
    };
  }, [selectedItem]);

  const orderLink = selectedItem
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi, I’m interested in "${selectedItem.title}"${
          selectedItem.price === undefined ? "" : ` (₹${selectedItem.price})`
        }.`,
      )}`
    : "";

  return (
    <>
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
          {items.map((item, index) => (
            <button
              aria-label={`View ${item.title}`}
              className="image-collection-card"
              key={`${item.title}-${index}`}
              onClick={(event) => {
                activeCardRef.current = event.currentTarget;
                setSelectedItem(item);
              }}
              type="button"
            >
              {item.video ? (
                item.image ? (
                  <img src={getImageUrl(item.image)} alt="" loading="lazy" />
                ) : (
                  <span className="video-card-placeholder" aria-hidden="true">
                    ▶
                  </span>
                )
              ) : item.image ? (
                <img src={getImageUrl(item.image)} alt={item.alt} loading="lazy" />
              ) : null}
              <span className="image-collection-caption">
                <span className="image-collection-title">{item.title}</span>
                <span className="image-collection-description">{item.description}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
      {selectedItem && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedItem(null)}
          role="presentation"
        >
          <section
            aria-labelledby="lightbox-title"
            aria-modal="true"
            className="lightbox-card"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close details"
              className="lightbox-close"
              onClick={() => setSelectedItem(null)}
              ref={closeButtonRef}
              type="button"
            >
              ×
            </button>
            <div className="lightbox-media">
              {selectedItem.video ? (
                <video
                  aria-label={selectedItem.alt}
                  controls
                  poster={selectedItem.image ? getImageUrl(selectedItem.image) : undefined}
                  src={selectedItem.video}
                />
              ) : selectedItem.image ? (
                <img src={getImageUrl(selectedItem.image)} alt={selectedItem.alt} />
              ) : null}
            </div>
            <div className="lightbox-details">
              <p className="eyebrow">{title}</p>
              <h2 id="lightbox-title">{selectedItem.title}</h2>
              <p className="lightbox-description">{selectedItem.description}</p>
              {orderable && (
                <>
                  <p className="lightbox-price">
                    {selectedItem.price === undefined
                      ? "Price on request"
                      : `₹${selectedItem.price.toLocaleString("en-IN")}`}
                  </p>
                  <a
                    className="lightbox-order"
                    href={orderLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Order via WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
