'use client';
import React from 'react';
import Link from 'next/link';
import useMagnetic from './hooks/useMagnetic';

const CTABanner = () => {
  const demoRef = useMagnetic();
  const partnerRef = useMagnetic();

  return (
    <section className="cta-banner" id="cta-partner">
      <div className="cta-inner">
        <h2 className="cta-heading">See SolarKey on your own portfolio.</h2>
        <p className="cta-subheading">Book a walkthrough, or come in early as a design partner.</p>
        <div className="cta-buttons">
          <Link 
            href="/demo" 
            className="btn-primary" 
            id="cta-request-demo"
            ref={demoRef}
            style={{ display: 'inline-block' }}
          >
            Request a demo
          </Link>
          <Link 
            href="/partners" 
            className="btn-secondary" 
            id="cta-design-partner"
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

export default CTABanner;
