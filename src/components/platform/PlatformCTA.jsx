'use client';
import React from 'react';
import Link from 'next/link';
import useMagnetic from '../hooks/useMagnetic';

const PlatformCTA = () => {
  const demoRef = useMagnetic();
  const partnerRef = useMagnetic();

  return (
    <section className="plat-cta" id="plat-cta">
      <div className="plat-cta-container">
        <h2 className="plat-cta-heading">See SolarKey on your own portfolio.</h2>
        <p className="plat-cta-sub">
          Book a walkthrough, or come in early as a design partner.
        </p>
        <div className="plat-cta-btns">
          <Link
            href="/demo"
            className="btn-primary"
            id="plat-cta-demo"
            ref={demoRef}
            style={{ display: 'inline-block' }}
          >
            Request a demo
          </Link>
          <Link
            href="/partners"
            className="btn-secondary"
            id="plat-cta-partner"
            ref={partnerRef}
            style={{ display: 'inline-block' }}
          >
            Become a design partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformCTA;
