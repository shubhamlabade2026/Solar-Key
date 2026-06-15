'use client';
import React from 'react';
import useMagnetic from '../hooks/useMagnetic';

const PlatformHero = () => {
  const demoRef = useMagnetic();
  const seeRef = useMagnetic();

  return (
    <section className="plat-hero">
      <div className="plat-hero-container">
        {/* Left */}
        <div className="plat-hero-left">
          <p className="plat-eyebrow">THE PLATFORM</p>
          <h1 className="plat-h1">
            Monitor, diagnose and run your whole portfolio, from one platform.
          </h1>
          <p className="plat-sub">
            SolarKey connects to the kit already on your sites, watches every asset in real time, predicts faults before they cut output, and lets AI agents handle the routine response.
          </p>
          <div className="plat-hero-cta">
            <a
              href="/demo"
              className="btn-primary"
              id="plat-hero-demo"
              ref={demoRef}
              style={{ display: 'inline-block' }}
            >
              Request a demo
            </a>
            <a
              href="#plat-how-it-works"
              className="btn-secondary"
              id="plat-hero-see"
              ref={seeRef}
              style={{ display: 'inline-block' }}
            >
              See how it works
            </a>
          </div>
          <p className="plat-hero-footnote">
            Built for asset owners, O&amp;M providers and investors across India &amp; West Asia.
          </p>
        </div>

        {/* Right — Dashboard Panel */}
        <div className="plat-hero-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/energy-loss-cascade.jpg" 
            alt="SolarKey Energy Loss Cascade Dashboard" 
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

export default PlatformHero;
