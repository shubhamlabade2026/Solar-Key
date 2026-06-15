'use client';
import React from 'react';
import Link from 'next/link';
import useMagnetic from '../hooks/useMagnetic';

const SolutionsCTA = () => {
  const demoRef = useMagnetic();
  const partnerRef = useMagnetic();

  return (
    <section className="sol-solutions-cta">
      <div className="sol-cta-container">
        <h2 className="sol-cta-h2">Find the SolarKey fit for your role.</h2>
        <p className="sol-cta-sub">
          Book a walkthrough, or come in early as a design partner.
        </p>
        <div className="sol-cta-btns">
          <Link 
            href="/demo" 
            className="sol-cta-btn-primary" 
            id="sol-cta-demo-btn"
            ref={demoRef}
            style={{ display: 'inline-block' }}
          >
            Request a demo
          </Link>
          <Link 
            href="/partners" 
            className="sol-cta-btn-secondary" 
            id="sol-cta-partner-btn"
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

export default SolutionsCTA;
