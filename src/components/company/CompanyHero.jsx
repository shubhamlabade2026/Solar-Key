'use client';

import React from 'react';

export default function CompanyHero() {
  return (
    <section className="comp-page-hero">
      <div className="comp-hero-container">
        <span className="comp-eyebrow">Company</span>
        <h1 className="comp-h1">Building the <span style={{ color: '#2563EB' }}>operating system</span> for renewable portfolios.</h1>
        <p className="comp-sub">
          SolarKey is a Mumbai-based team building agentic AI for the people who run
          solar and wind — the asset owners, operators and investors across India and the Gulf.
        </p>
      </div>
    </section>
  );
}
