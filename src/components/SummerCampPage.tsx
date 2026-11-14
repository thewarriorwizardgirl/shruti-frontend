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

type SummerCampVideoRecord = {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
};

export default function SummerCampPage() {
  const [images, setImages] = useState<SummerCampImageRecord[]>([]);
  const [videos, setVideos] = useState<SummerCampVideoRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      fetchPublishedContent<SummerCampImageRecord>("summer-camp-images"),
      fetchPublishedContent<SummerCampVideoRecord>("summer-camp-videos"),
    ])
      .then(([campImages, campVideos]) => {
        setImages(campImages);
        setVideos(campVideos);
      })
      .catch((requestError: unknown) => {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Could not load summer camp content.",
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const videoItems: ImageCollectionItem[] = videos.map((video) => ({
    title: video.title,
    description: video.description,
    video: video.videoUrl,
    image: video.thumbnailUrl,
    alt: video.thumbnailAlt || video.title,
  }));

  return (
    <article className="editorial-page">
      <header className="editorial-intro">
        <p className="eyebrow">Glimpses of the previous summer camps</p>
      </header>

      <div className="editorial-content">
        {error && <p className="gallery-status error" role="alert">{error}</p>}
        <ImageCollection
          title="Workshop Videos & Live Highlights"
          description="Videos from interactive activities, dance, and camp performances"
          items={videoItems}
          variant="filmstrip"
        />
        {!error && !loading && videos.length === 0 && (
          <p className="gallery-status" role="status">No camp videos are published yet.</p>
        )}
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
        {!error && !loading && videos.length === 0 && images.length === 0 && (
          <p className="gallery-status" role="status">No summer camp content is published yet.</p>
        )}
      </div>
    </article>
  );
}
