import React from 'react';

const SolutionsHero = () => {
  return (
    <section className="sol-page-hero">
      <div className="sol-hero-container">
        <p className="sol-eyebrow">Solutions</p>
        <h1 className="sol-h1">Built for every role in your<br />renewable portfolio.</h1>
        <p className="sol-sub">
          Asset owners, O&amp;M providers and investors use SolarKey differently.
          Pick your role to see what it does for you.
        </p>

        {/* Role tabs */}
        <div className="sol-tabs" role="tablist">
          <a href="#asset-owners" className="sol-tab sol-tab--active" role="tab">Asset owners</a>
          <a href="#om-providers" className="sol-tab" role="tab">O&amp;M providers</a>
          <a href="#investors" className="sol-tab" role="tab">Investors</a>
        </div>

        {/* CTA */}
        <a href="/demo" className="sol-hero-cta" id="sol-hero-demo-btn">
          Request a demo
        </a>
      </div>
    </section>
  );
};

export default SolutionsHero;
