import React from 'react';

const SolutionsCTA = () => {
  return (
    <section className="sol-solutions-cta">
      <div className="sol-cta-container">
        <h2 className="sol-cta-h2">Find the SolarKey fit for your role.</h2>
        <p className="sol-cta-sub">
          Book a walkthrough, or come in early as a design partner.
        </p>
        <div className="sol-cta-btns">
          <a href="/demo" className="sol-cta-btn-primary" id="sol-cta-demo-btn">
            Request a demo
          </a>
          <a href="/demo" className="sol-cta-btn-secondary" id="sol-cta-partner-btn">
            Become a design partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
