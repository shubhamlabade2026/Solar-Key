'use client';

import React from 'react';

export default function CompanyCTA() {
  return (
    <section className="comp-cta-section">
      <div className="comp-cta-container">
        <h2 className="comp-cta-h2">Want to see what we've built?</h2>
        <p className="comp-cta-p">
          Book a walkthrough, or come in early as a design partner.
        </p>
        <div className="comp-cta-btns">
          <a href="/demo" className="comp-cta-btn-primary">
            Request a demo
          </a>
          <a href="/demo" className="comp-cta-btn-secondary">
            Become a design partner
          </a>
        </div>
      </div>
    </section>
  );
}
