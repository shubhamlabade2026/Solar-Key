import React from 'react';

const categories = [
  'All',
  'Operations',
  'Predictive maintenance',
  'Investor reporting',
  'Integrations'
];

export default function ResourcesHero({ activeFilter, onFilterChange, showTabs = true }) {
  return (
    <section className="res-page-hero">
      <div className="ambient-glow-orb" style={{ top: '-150px', right: '-100px' }} />
      <div className="ambient-glow-orb" style={{ bottom: '-150px', left: '-150px' }} />
      <div className="res-hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="res-eyebrow">Resources</span>
        <h1 className="res-h1">Guides and insights for <span style={{ color: '#2563EB' }}>running renewables better</span>.</h1>
        <p className="res-sub">
          Practical playbooks, product notes and field experience — from the team building SolarKey.
        </p>
        {showTabs && (
          <div className="res-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`res-tab ${activeFilter === cat ? 'res-tab--active' : ''}`}
                onClick={() => onFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
