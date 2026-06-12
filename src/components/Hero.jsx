import React from 'react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <p className="hero-eyebrow">AI MONITORING &amp; OPERATIONS PLATFORM</p>
          <h1 className="hero-headline">
            See every site.<br />
            Catch every fault.<br />
            Prove every kWh.
          </h1>
          <p className="hero-description">
            SolarKey connects to the inverters, SCADA and meters you already run, monitors every site in real time, and flags faults with AI before they cut your output.
          </p>
          <div className="hero-cta">
            <a href="mailto:hello@solar-key.com?subject=Demo%20Request" className="btn-primary" id="hero-request-demo">Request a demo</a>
          </div>
          <p className="hero-footnote">Built for asset owners, O&amp;M providers and investors across India &amp; West Asia.</p>
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
