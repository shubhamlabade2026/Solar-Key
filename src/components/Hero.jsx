import React from 'react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <p className="hero-eyebrow">THE PLATFORM</p>
          <h1 className="hero-headline">
            Monitor, diagnose and run your whole portfolio, from one platform.
          </h1>
          <p className="hero-description">
            SolarKey connects to the kit already on your sites, watches every asset in real time, predicts faults before they cut output, and lets AI agents handle the routine response.
          </p>
          <div className="hero-cta">
            <a href="/demo" className="btn-primary" id="hero-request-demo">Request a demo</a>
            <a href="#how-it-works" className="btn-secondary" id="hero-see-how">See how it works</a>
          </div>
          <p className="hero-footnote">Built for asset owners, OEM providers and investors across India &amp; West Asia.</p>
        </div>

        {/* Right - Dashboard Preview */}
        <div className="hero-right">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
