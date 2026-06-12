import React from 'react';

const SolutionsHero = () => {
  return (
    <section className="sol-page-hero">
      <div className="ambient-glow-orb" style={{ top: '-150px', right: '-100px' }} />
      <div className="ambient-glow-orb" style={{ bottom: '-150px', left: '-150px' }} />
      <div className="sol-hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="sol-eyebrow">Solutions</p>
        <h1 className="sol-h1">Built for <span style={{ color: '#2563EB' }}>every role</span> in your<br />renewable portfolio.</h1>
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
        <a href="/demo" className="sol-hero-cta btn-premium" id="sol-hero-demo-btn">
          Request a demo
        </a>
      </div>
    </section>
  );
};

export default SolutionsHero;
