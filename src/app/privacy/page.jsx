import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../components/legal/legal.css';

export const metadata = {
  title: 'Privacy Policy — SolarKey',
  description: 'Understand how SolarKey collects, processes, and protects operational telemetry and business data.',
  alternates: { canonical: '/privacy' },
  openGraph: { url: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-fade-in">
        {/* Hero */}
        <section className="legal-hero">
          <div className="legal-hero-container">
            <span className="legal-eyebrow">LEGAL</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-meta">Last Updated: June 13, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="legal-content-section">
          <div className="legal-container">
            <div className="legal-text">
              <p>
                SolarKey Advanced AI Solutions Pvt. Ltd. ("SolarKey", "we", "us", or "our") operates the SolarKey portfolio monitoring, predictive diagnostics, and automated operations platform. We are committed to protecting the privacy and security of your business and operational telemetry data.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                To provide our monitoring and predictive services, we collect operational data from the equipment integrated with our platform. This includes:
              </p>
              <ul>
                <li><strong>Operational Telemetry:</strong> Live metrics from SCADA systems, solar inverters, strings, trackers, meters, and weather stations (e.g., energy yield, performance ratio, ambient temperature, irradiance, and status flags).</li>
                <li><strong>Account Information:</strong> Name, professional email address, company name, phone number, and access credentials of authorized platform users.</li>
                <li><strong>Integration Credentials:</strong> Access keys, API tokens, or login credentials required to securely connect to your existing hardware vendors and cloud platforms.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the collected information to deliver and optimize our services:
              </p>
              <ul>
                <li>To analyze operational telemetry and predict inverter anomalies, tracker drifts, or string degradation.</li>
                <li>To generate owner-ready performance and availability reports.</li>
                <li>To trigger automated work orders and coordinate dispatch routing for O&amp;M technicians.</li>
                <li>To maintain, monitor, and improve the reliability and security of our platform.</li>
              </ul>

              <h2>3. Data Residency and Storage</h2>
              <p>
                We offer regional data-residency options. Your telemetry and account data can be stored in secure database instances located in India or the Gulf region (UAE/Saudi Arabia) according to your preferences and local regulatory requirements.
              </p>

              <h2>4. Security Protocols</h2>
              <p>
                SolarKey implements industry-standard security measures to safeguard your data:
              </p>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted in transit using secure TLS 1.2+ protocols and at rest using AES-256 encryption.</li>
                <li><strong>Access Control:</strong> We enforce granular, role-based access control (RBAC) so you decide which team members, O&amp;M crews, or investors have visibility into specific site metrics.</li>
              </ul>

              <h2>5. Sharing of Data</h2>
              <p>
                We do not sell your telemetry or business data. We only share information with:
              </p>
              <ul>
                <li>Authorized O&amp;M service providers and investors as configured and explicitly permitted by your account administrator.</li>
                <li>Trusted cloud infrastructure partners hosting our regional servers.</li>
                <li>Legal authorities if required to comply with regulatory obligations.</li>
              </ul>

              <h2>6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data processing practices, please contact us at:
              </p>
              <p>
                <strong>SolarKey Advanced AI Solutions Pvt. Ltd.</strong><br />
                Email: hello@solar-key.com<br />
                Phone: +91 96194 22279
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
