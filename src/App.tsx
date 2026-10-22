import { useEffect, useState } from "react";
import ArtworkPage from "./components/ArtworkPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import InstagramIcon from "./components/InstagramIcon";
import SiteNavigation, { type PageId } from "./components/SiteNavigation";
import SummerCampPage from "./components/SummerCampPage";
import TraditionalArtsPage from "./components/TraditionalArtsPage";

function getPageFromHash(): PageId {
  const page = window.location.hash.slice(1);
  const aliases: Record<string, PageId> = {
    "summer-camps": "summer-camp",
    "mehandi-makeup": "traditional-arts",
    contact: "say-hello",
  };
  if (page in aliases) return aliases[page];

  const pages: PageId[] = [
    "home",
    "summer-camp",
    "artwork",
    "traditional-arts",
    "say-hello",
  ];
  return pages.find((candidate) => candidate === page) ?? "home";
}

export default function App() {
  const [page, setPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const syncPage = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  return (
    <div className={`site-shell page-${page}`}>
      <a
        className="instagram-link"
        href="https://www.instagram.com/miii_art_gallery__/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Instagram"
      >
        <InstagramIcon />
      </a>

      <main id="main-content">
        {page === "home" && <HomePage />}
        {page === "summer-camp" && <SummerCampPage />}
        {page === "artwork" && <ArtworkPage />}
        {page === "traditional-arts" && <TraditionalArtsPage />}
        {page === "say-hello" && <ContactPage />}
      </main>

      <SiteNavigation activePage={page} />
    </div>
  );
}
