import React from 'react';

const CTABanner = () => {
  return (
    <section className="cta-banner" id="cta-partner">
      <div className="cta-inner">
        <h2 className="cta-heading">See SolarKey on your own portfolio.</h2>
        <p className="cta-subheading">Book a walkthrough, or come in early as a design partner.</p>
        <div className="cta-buttons">
          <a href="/demo" className="btn-primary" id="cta-request-demo">
            Request a demo
          </a>
          <a href="mailto:vikram@solar-key.com?subject=Design%20Partner%20Programme" className="btn-secondary" id="cta-design-partner">
            Become a design partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
