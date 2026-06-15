'use client';
import React from 'react';
import useMagnetic from './hooks/useMagnetic';

const Hero = () => {
  const demoRef = useMagnetic();
  const seeRef = useMagnetic();

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
              href="#how-it-works" 
              className="btn-secondary" 
              id="hero-see-how"
              ref={seeRef}
              style={{ display: 'inline-block' }}
            >
              See how it works
            </a>
          </div>
          <p className="hero-footnote">Built for asset owners, OEM providers and investors across India &amp; West Asia.</p>
        </div>

        {/* Right - Dashboard Preview */}
        <div className="hero-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/site-details-overview.jpg" 
            alt="SolarKey Site Details Overview" 
            style={{ 
              width: '100%', 
              maxWidth: '680px', 
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
