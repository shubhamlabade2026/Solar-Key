'use client';

import React from 'react';

export default function ResourcesCTA() {
  return (
    <section className="res-cta-section">
      <div className="res-cta-container">
        <h2 className="res-cta-h2">See SolarKey in action.</h2>
        <p className="res-cta-p">
          Book a walkthrough, or come in early as a design partner.
        </p>
        <div className="res-cta-btns">
          <a href="/demo" className="res-cta-btn-primary">
            Request a demo
          </a>
          <a href="/demo" className="res-cta-btn-secondary">
            Become a design partner
          </a>
        </div>
      </div>
    </section>
  );
}
