'use client';
import React from 'react';
import Link from 'next/link';
import useMagnetic from './hooks/useMagnetic';

const CTABanner = () => {
  const partnerRef = useMagnetic();

  return (
    <section className="cta-banner" id="cta-partner">
      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-text-group">
            <h2 className="cta-heading">We&apos;re onboarding our first design partners across India &amp; West Asia.</h2>
            <p className="cta-subheading">Be among the first portfolios on SolarKey.</p>
          </div>
          <div className="cta-buttons">
            <Link 
              href="/partners" 
              className="btn-primary" 
              id="cta-design-partner"
              ref={partnerRef}
              style={{ display: 'inline-block' }}
            >
              Become a partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
