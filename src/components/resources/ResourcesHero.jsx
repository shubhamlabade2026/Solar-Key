'use client';

import React from 'react';

const categories = [
  'All',
  'Operations',
  'Predictive maintenance',
  'Investor reporting',
  'Integrations'
];

export default function ResourcesHero({ activeFilter, onFilterChange }) {
  return (
    <section className="res-page-hero">
      <div className="res-hero-container">
        <span className="res-eyebrow">Resources</span>
        <h1 className="res-h1">Guides and insights for <span style={{ color: '#2563EB' }}>running renewables better</span>.</h1>
        <p className="res-sub">
          Practical playbooks, product notes and field experience — from the team building SolarKey.
        </p>
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
      </div>
    </section>
  );
}
