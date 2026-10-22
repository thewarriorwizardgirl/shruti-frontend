export default function HomePage() {
  return (
    <section className="home-layout" aria-labelledby="studio-title">
      <div className="home-copy">
        <p className="eyebrow">A little space for making</p>
        <h1 id="studio-title">
          Shruti’s
          <br />
          Studio
        </h1>
        <div className="home-rule" aria-hidden="true" />
        <p className="home-intro">
          Art, imagination, and handmade things — made with heart and shared
          with you.
        </p>
        <a className="home-link" href="#artwork">
          Explore my artwork <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="home-portrait-wrap">
        <div className="portrait-accent" aria-hidden="true" />
        <img
          className="home-portrait"
          src="/images/shruti-and-cat.png"
          alt="Shruti holding a ginger cat wearing a handmade crocheted hat"
        />
        <p className="portrait-caption">Making a little magic, every day.</p>
      </div>
    </section>
  );
}
