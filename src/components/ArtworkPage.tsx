import { useEffect, useState } from "react";
import ImageCollection from "./ImageCollection";
import type { ImageCollectionItem } from "../data/galleryTypes";
import { artworkCollections } from "../data/artworkCollections";
import { getImageUrl } from "../data/imageUrl";
import { fetchPublishedContent } from "../data/publicApi";

type ArtworkType = "Handmade card" | "Digital Art" | "Pocket Painting" | "Pen & Ink";
type ArtworkRecord = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  type: ArtworkType;
  price?: number;
};

const collectionType: Record<string, ArtworkType> = {
  "artwork-handmade-cards": "Handmade card",
  "artwork-digital-art": "Digital Art",
  "artwork-pocket-paintings": "Pocket Painting",
  "artwork-pen-and-ink": "Pen & Ink",
};

export default function ArtworkPage() {
  const [records, setRecords] = useState<ArtworkRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPublishedContent<ArtworkRecord>("artwork-cards")
      .then(setRecords)
      .catch((requestError: unknown) => {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Could not load artwork.",
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="artwork-page">
      <section className="artwork-layout">
        <div className="artwork-gallery">
          <header className="artwork-heading">
            <p className="eyebrow">Made by hand, made with heart</p>
          </header>
          <div className="artwork-grid">
            {artworkCollections.map((collection) => (
              <button
                className="artwork-card"
                key={collection.id}
                type="button"
                aria-controls={collection.id}
                onClick={() =>
                  document
                    .getElementById(collection.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <img
                  className="artwork-image"
                  src={getImageUrl(collection.coverImage)}
                  alt={collection.coverAlt}
                />
                <h2>{collection.title}</h2>
              </button>
            ))}
          </div>
        </div>
        <aside className="artwork-note">
          <p className="eyebrow">The joy is in the making</p>
          <blockquote>
            Art takes many forms—sometimes it’s <b>oil on canvas</b>, sometimes{" "}
            <b>vector curves on a screen</b>, and other times{" "}
            <b>intricate henna design</b> or creative hands-on craft.
          </blockquote>
          <div className="quote-mark" aria-hidden="true">
            “
          </div>
        </aside>
      </section>

      <div className="artwork-collections" aria-label="Artwork collections">
        {error && <p className="gallery-status error" role="alert">{error}</p>}
        {artworkCollections.map((collection) => {
          const items: ImageCollectionItem[] = records
            .filter((record) => record.type === collectionType[collection.id])
            .map((record) => ({
              title: record.title,
              description: record.description,
              image: record.imageUrl,
              alt: record.imageAlt,
              price: record.price,
            }));

          return (
            <ImageCollection
              key={collection.id}
              id={collection.id}
              title={collection.title}
              description={collection.description}
              items={items}
              variant="filmstrip"
              orderable
            />
          );
        })}
        {!error && loading && <p className="gallery-status" role="status">Loading artwork…</p>}
        {!error && !loading && records.length === 0 && (
          <p className="gallery-status" role="status">No artwork is published yet.</p>
        )}
      </div>
    </div>
  );
}
