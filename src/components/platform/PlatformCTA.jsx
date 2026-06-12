import React from 'react';

const PlatformCTA = () => (
  <section className="plat-cta" id="plat-cta">
    <div className="plat-cta-container">
      <h2 className="plat-cta-heading">See SolarKey on your own portfolio.</h2>
      <p className="plat-cta-sub">
        Book a walkthrough, or come in early as a design partner.
      </p>
      <div className="plat-cta-btns">
        <a
          href="/demo"
          className="btn-primary"
          id="plat-cta-demo"
        >
          Request a demo
        </a>
        <a
          href="mailto:hello@solar-key.com?subject=Design%20Partner"
          className="btn-secondary"
          id="plat-cta-partner"
        >
          Become a design partner
        </a>
      </div>
    </div>
  </section>
);

export default PlatformCTA;
