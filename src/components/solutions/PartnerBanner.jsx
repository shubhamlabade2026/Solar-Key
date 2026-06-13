import React from 'react';
import Link from 'next/link';

const PartnerBanner = () => {
  return (
    <section className="sol-partner-banner">
      <div className="sol-partner-container">
        <div className="sol-partner-text">
          <p className="sol-partner-bold">
            We&apos;re onboarding our first design partners across India &amp; West Asia.
          </p>
          <p className="sol-partner-sub">
            Shape the roadmap for your role — and get in before everyone else.
          </p>
        </div>
        <Link href="/partners" className="sol-partner-btn" id="sol-partner-cta-btn">
          Become a partner
        </Link>
      </div>
    </section>
  );
};

export default PartnerBanner;
