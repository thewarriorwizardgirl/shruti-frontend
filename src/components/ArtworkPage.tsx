import ImageCollection from "./ImageCollection";
import { artworkCollections } from "../data/artworkCollections";

export default function ArtworkPage() {
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
                  src={collection.coverImage}
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
        {artworkCollections.map((collection) => (
          <ImageCollection
            key={collection.id}
            id={collection.id}
            title={collection.title}
            description={collection.description}
            items={collection.items}
            variant="filmstrip"
          />
        ))}
      </div>
    </div>
  );
}
