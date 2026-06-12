'use client';
import React from 'react';
import DashboardPreview from '../DashboardPreview';

const PlatformHero = () => {
  return (
    <section className="plat-hero">
      <div className="plat-hero-container">
        {/* Left */}
        <div className="plat-hero-left">
          <p className="plat-eyebrow">THE PLATFORM</p>
          <h1 className="plat-h1">
            Monitor, diagnose and run your whole portfolio from one platform.
          </h1>
          <p className="plat-sub">
            SolarKey connects to the kit already on your sites, watches every asset in real time, predicts faults before they cut output, and lets AI agents handle the routine response — so a small team can run a large portfolio.
          </p>
          <div className="plat-hero-cta">
            <a
              href="mailto:hello@solar-key.com?subject=Demo%20Request"
              className="btn-primary"
              id="plat-hero-demo"
            >
              Request a demo
            </a>
            <a
              href="#plat-how-it-works"
              className="btn-secondary"
              id="plat-hero-see"
            >
              See it in action
            </a>
          </div>
          <p className="plat-hero-footnote">
            Built for asset owners, O&amp;M providers and investors across India &amp; West Asia.
          </p>
        </div>

        {/* Right — Dashboard Panel */}
        <div className="plat-hero-right">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
