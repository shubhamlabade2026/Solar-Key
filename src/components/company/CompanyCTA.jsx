'use client';

import React from 'react';
import Link from 'next/link';

export default function CompanyCTA() {
  return (
    <section className="comp-cta-section">
      <div className="comp-cta-container">
        <h2 className="comp-cta-h2">Want to see what we've built?</h2>
        <p className="comp-cta-p">
          Book a walkthrough, or come in early as a design partner.
        </p>
        <div className="comp-cta-btns">
          <Link href="/demo" className="comp-cta-btn-primary">
            Request a demo
          </Link>
          <Link href="/partners" className="comp-cta-btn-secondary">
            Become a design partner
          </Link>
        </div>
      </div>
    </section>
  );
}
