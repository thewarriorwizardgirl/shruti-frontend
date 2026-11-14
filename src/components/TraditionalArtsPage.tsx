import { useEffect, useState } from "react";
import ImageCollection from "./ImageCollection";
import type { ImageCollectionItem } from "../data/galleryTypes";
import {
  traditionalArtCollections,
  type TraditionalArtType,
} from "../data/traditionalArt";
import { fetchPublishedContent } from "../data/publicApi";

type TraditionalArtRecord = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  type: TraditionalArtType;
  price?: number;
};

export default function TraditionalArtsPage() {
  const [records, setRecords] = useState<TraditionalArtRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPublishedContent<TraditionalArtRecord>("traditional-art-cards")
      .then(setRecords)
      .catch((requestError: unknown) => {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Could not load traditional art.",
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <article className="editorial-page">
      <header className="editorial-intro">
        <p className="eyebrow">Traditional & Festive Arts</p>
      </header>

      <div className="editorial-content">
        {error && <p className="gallery-status error" role="alert">{error}</p>}
        {traditionalArtCollections.map((collection) => {
          const items: ImageCollectionItem[] = records
            .filter((record) => record.type === collection.type)
            .map((record) => ({
              title: record.title,
              description: record.description,
              image: record.imageUrl,
              alt: record.imageAlt,
              price: record.price,
            }));

          return (
            <ImageCollection
              key={collection.type}
              title={collection.title}
              description={collection.description}
              items={items}
              variant="filmstrip"
              orderable
            />
          );
        })}
        {!error && loading && <p className="gallery-status" role="status">Loading traditional art…</p>}
        {!error && !loading && records.length === 0 && (
          <p className="gallery-status" role="status">No traditional art is published yet.</p>
        )}
      </div>

      <aside className="editorial-cta">
        <p className="eyebrow">Let’s collaborate</p>
        <h2>Ready to bring your creative ideas to life?</h2>
        <p>
          Whether you’re interested in custom canvas art, summer camps,
          school project coaching, or wedding mehandi—I’d love to connect.
        </p>
        <a className="home-link" href="#say-hello">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </article>
  );
}
