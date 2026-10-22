export type PageId =
  | "home"
  | "summer-camp"
  | "artwork"
  | "traditional-arts"
  | "say-hello";

const navigationItems: { label: string; page: PageId }[] = [
  { label: "Home", page: "home" },
  { label: "Summer Camp", page: "summer-camp" },
  { label: "Artwork", page: "artwork" },
  { label: "Traditional Arts", page: "traditional-arts" },
  { label: "Say Hello", page: "say-hello" },
];

type SiteNavigationProps = {
  activePage: PageId;
};

export default function SiteNavigation({ activePage }: SiteNavigationProps) {
  return (
    <nav className="site-navigation" aria-label="Main navigation">
      {navigationItems.map(({ label, page }) => (
        <a
          aria-current={activePage === page ? "page" : undefined}
          className={`navigation-link${activePage === page ? " is-active" : ""}`}
          href={`#${page}`}
          key={page}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
