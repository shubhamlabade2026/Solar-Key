import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../components/integrations/integrations.css';

export const metadata = {
  title: 'Integrations — SolarKey | Works with Your Inverters, SCADA & Meters',
  description:
    'Vendor-neutral by design. SolarKey connects to Sungrow, Huawei, SMA, Modbus, IEC 61850 and more, with no rip-and-replace.',
  alternates: { canonical: '/integrations' },
  openGraph: { url: '/integrations' },
};

export default function IntegrationsPage() {
  const categories = [
    {
      title: 'Inverters',
      description: 'Monitor and analyze inverter performance data across your portfolio.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="7" x2="8" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="16" y1="7" x2="16" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M7 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'SCADA',
      description: 'Connect site monitoring and operational data into a single platform.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M10 7h4M10 17h4M7 10v4M17 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Meters',
      description: 'Collect and analyze meter data for performance monitoring and reporting.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Weather Stations',
      description: 'Use weather and irradiance data to compare actual performance against expected generation.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="app">
      <Navbar />
      
      <main>
        {/* ── Hero Section (Dark Theme) ── */}
        <section className="int-hero">
          <div className="int-hero-container">
            <span className="int-eyebrow">Integrations</span>
            <h1 className="int-title">Works with your existing kit</h1>
            <p className="int-desc">
              SolarKey is vendor-neutral. It reads from the inverters, SCADA, meters and weather stations already on your sites: no rip-and-replace, no new hardware to buy.
            </p>
          </div>
        </section>

        {/* ── Grid Content Section (Light Theme) ── */}
        <section className="int-content-section">
          <div className="int-container">
            
            <div className="int-grid">
              {categories.map((cat) => (
                <div key={cat.title} className="int-card">
                  <div className="int-card-icon-wrap">
                    {cat.icon}
                  </div>
                  <div className="int-card-info">
                    <h3 className="int-card-title">{cat.title}</h3>
                    <p className="int-card-desc">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Text Banner */}
            <div className="int-supporting-banner">
              <p className="int-supporting-text">
                SolarKey normalizes data across vendors and geographies, helping teams monitor every asset from a single platform.
              </p>
            </div>

            {/* CTA section */}
            <div className="int-cta-section">
              <a href="/demo" className="int-cta-btn">
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
