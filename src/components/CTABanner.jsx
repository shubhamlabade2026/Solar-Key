import React from 'react';

const CTABanner = () => {
  return (
    <section className="cta-banner" id="cta-partner">
      <div className="cta-inner">
        <div className="cta-text">
          <p className="cta-main">
            We're onboarding our{' '}
            <strong>first design partners</strong>{' '}
            across India &amp; West Asia.
          </p>
          <p className="cta-sub">Be among the first portfolios on SolarKey.</p>
        </div>
        <a href="mailto:hello@solar-key.com?subject=Partnership%20Inquiry" className="cta-btn" id="cta-become-partner">
          Become a partner
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
