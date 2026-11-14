import { useEffect, useState } from "react";
import ImageCollection from "./ImageCollection";
import type { ImageCollectionItem } from "../data/galleryTypes";
import {
  summerCampImageSections,
  type SummerCampImageSection,
} from "../data/summerCampContent";
import { fetchPublishedContent } from "../data/publicApi";

type SummerCampImageRecord = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  section: SummerCampImageSection;
};

export default function SummerCampPage() {
  const [images, setImages] = useState<SummerCampImageRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPublishedContent<SummerCampImageRecord>("summer-camp-images")
      .then(setImages)
      .catch((requestError: unknown) => {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Could not load summer camp content.",
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <article className="editorial-page">
      <header className="editorial-intro">
        <p className="eyebrow">Glimpses of the previous summer camps</p>
      </header>

      <div className="editorial-content">
        {error && <p className="gallery-status error" role="alert">{error}</p>}
        {summerCampImageSections.map((section) => {
          const items: ImageCollectionItem[] = images
            .filter((image) => image.section === section.section)
            .map((image) => ({
              title: image.title,
              description: image.description,
              image: image.imageUrl,
              alt: image.imageAlt,
            }));

          return (
            <ImageCollection
              key={section.section}
              title={section.title}
              description={section.description}
              items={items}
              variant="filmstrip"
            />
          );
        })}
        {!error && loading && <p className="gallery-status" role="status">Loading summer camp content…</p>}
        {!error && !loading && images.length === 0 && (
          <p className="gallery-status" role="status">No summer camp content is published yet.</p>
        )}
      </div>
    </article>
  );
}
