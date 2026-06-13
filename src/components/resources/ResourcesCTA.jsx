'use client';

import React from 'react';
import Link from 'next/link';

export default function ResourcesCTA() {
  return (
    <section className="res-cta-section">
      <div className="res-cta-container">
        <h2 className="res-cta-h2">See SolarKey in action.</h2>
        <p className="res-cta-p">
          Book a walkthrough, or come in early as a design partner.
        </p>
        <div className="res-cta-btns">
          <Link href="/demo" className="res-cta-btn-primary">
            Request a demo
          </Link>
          <Link href="/partners" className="res-cta-btn-secondary">
            Become a design partner
          </Link>
        </div>
      </div>
    </section>
  );
}
