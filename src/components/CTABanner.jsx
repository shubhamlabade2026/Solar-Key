import React from 'react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="cta-banner" id="cta-partner">
      <div className="cta-inner">
        <h2 className="cta-heading">See SolarKey on your own portfolio.</h2>
        <p className="cta-subheading">Book a walkthrough, or come in early as a design partner.</p>
        <div className="cta-buttons">
          <Link href="/demo" className="btn-primary" id="cta-request-demo">
            Request a demo
          </Link>
          <Link href="/partners" className="btn-secondary" id="cta-design-partner">
            Become a design partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
