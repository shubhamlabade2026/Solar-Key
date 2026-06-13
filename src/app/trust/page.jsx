import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../components/trust/trust.css';

export const metadata = {
  title: 'Trust & Security — SolarKey | Data Protection & Residency',
  description:
    'How SolarKey protects your data: encryption, role-based access and data-residency options for India and the Gulf. SOC 2 Type II audit planned.',
  alternates: { canonical: '/trust' },
  openGraph: { url: '/trust' },
};

export default function TrustPage() {
  const securityFeatures = [
    {
      title: 'Encryption',
      description: 'Encryption in transit and at rest.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Access Control',
      description: 'Role-based access controls.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Data Residency',
      description: 'Data-residency options for India and the Gulf.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" stroke="currentColor" strokeWidth="2"/>
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Compliance',
      description: 'SOC 2 Type II audit planned.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <div className="app">
      <Navbar />
      
      <main>
        {/* ── Hero Section (Dark Theme) ── */}
        <section className="trust-hero">
          <div className="trust-hero-container">
            <span className="trust-eyebrow">Trust &amp; Security</span>
            <h1 className="trust-title">Your data, protected and in-region</h1>
            <p className="trust-desc">
              Your generation and financial data stay protected: encryption in transit and at rest, role-based access, and data-residency options for India and the Gulf.
            </p>
          </div>
        </section>

        {/* ── Grid Content Section (Light Theme) ── */}
        <section className="trust-content-section">
          <div className="trust-container">
            
            <div className="trust-grid">
              {securityFeatures.map((feat) => (
                <div key={feat.title} className="trust-card">
                  <div className="trust-card-icon-wrap">
                    {feat.icon}
                  </div>
                  <div className="trust-card-info">
                    <h3 className="trust-card-title">{feat.title}</h3>
                    <p className="trust-card-desc">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="trust-cta-section">
              <a href="/demo" className="trust-cta-btn">
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
