export default function ContactPage() {
  return (
    <article className="contact-page">
      <section className="contact-page-copy" aria-labelledby="contact-title">
        <h1 id="contact-title">Say Hello </h1>
        <p className="contact-intro">
          Have an inquiry for custom art, summer camps, workshops, or
          collaboration? Reach out directly via WhatsApp or email.
        </p>

        <div className="contact-options">
          <a
            className="contact-option"
            href="https://wa.me/919599755840"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-option-icon" aria-hidden="true">
              ↗
            </span>
            <span>
              <small>Quickest response · Chat on WhatsApp</small>
              <strong>+91 95997 55840</strong>
            </span>
          </a>
          <a className="contact-option" href="mailto:projects.twwg@gmail.com">
            <span className="contact-option-icon" aria-hidden="true">
              @
            </span>
            <span>
              <small>Email Studio</small>
              <strong>projects.twwg@gmail.com</strong>
            </span>
          </a>
        </div>
      </section>
    </article>
  );
}
