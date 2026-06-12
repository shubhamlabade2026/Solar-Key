import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import '../../../components/solutions/solutions.css';

export const metadata = {
  title: 'Asset Owners — SolarKey',
  description:
    'See your whole fleet, catch underperformance early, and get the yield and PR reports your lenders expect.',
};

export default function AssetOwnersPage() {
  const points = [
    'See your whole fleet',
    'Catch underperformance early',
    'Yield reporting',
    'PR reporting'
  ];

  return (
    <div className="app">
      <Navbar />
      
      <main>
        {/* ── Hero Section (Dark Theme) ── */}
        <section className="sol-hero">
          <div className="sol-hero-container">
            <span className="sol-eyebrow">Solutions / Use Case</span>
            <h1 className="sol-title">Asset Owners</h1>
            <p className="sol-desc">
              See your whole fleet, catch underperformance early, and get the yield and PR reports your lenders expect.
            </p>
          </div>
        </section>

        {/* ── Content Section (Light Theme) ── */}
        <section className="sol-content-section">
          <div className="sol-container">
            
            <div className="sol-points-grid">
              {points.map((point) => (
                <div key={point} className="sol-point-card">
                  <div className="sol-point-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="sol-point-title">{point}</h3>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="sol-cta-section">
              <a href="/demo" className="sol-cta-btn">
                Request a Demo
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
