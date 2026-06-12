import React from 'react';

const MixedFleets = () => {
  const tags = [
    'Multi-vendor',
    'Multi-contractor',
    'India & West Asia',
    'Start small, scale up',
  ];

  return (
    <section className="sol-mixed">
      <div className="sol-mixed-container">
        <h2 className="sol-mixed-h2">
          Mixed fleets, multiple contractors, two regions — no problem.
        </h2>
        <p className="sol-mixed-para">
          SolarKey is vendor-neutral and multi-site by design, with data-residency options for India
          and the Gulf. Run one site or a whole fund.
        </p>
        <div className="sol-tags">
          {tags.map((tag) => (
            <span key={tag} className="sol-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MixedFleets;
