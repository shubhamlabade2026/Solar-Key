'use client';
import React from 'react';
import useMagnetic from './hooks/useMagnetic';

const Hero = () => {
  const demoRef = useMagnetic();
  const seeRef = useMagnetic();

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Content */}
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
            <a 
              href="/demo" 
              className="btn-primary" 
              id="hero-request-demo"
              ref={demoRef}
              style={{ display: 'inline-block' }}
            >
              Request a demo
            </a>
            <a 
              href="/solutions#savings-calculator" 
              className="btn-secondary" 
              id="hero-see-savings"
              ref={seeRef}
              style={{ display: 'inline-block' }}
            >
              See your savings
            </a>
          </div>
          <p className="hero-footnote">Built for asset owners, O&amp;M providers and investors across India &amp; West Asia.</p>
        </div>

        {/* Right - Dashboard image */}
        <div className="hero-right">
          <img 
            src="/dashboard-screenshot.jpg" 
            alt="SolarKey O&M Platform Dashboard" 
            className="hero-dashboard-img"
            style={{ 
              width: '100%', 
              maxWidth: '720px', 
              height: 'auto', 
              borderRadius: '12px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)' 
            }}
          />
        </div>


      </div>
    </section>
  );
};


export default Hero;
