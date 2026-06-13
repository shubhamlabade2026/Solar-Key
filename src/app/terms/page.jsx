import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../components/legal/legal.css';

export const metadata = {
  title: 'Terms of Service — SolarKey',
  description: 'Review the terms and conditions governing the use of the SolarKey platform and operational services.',
  alternates: { canonical: '/terms' },
  openGraph: { url: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-fade-in">
        {/* Hero */}
        <section className="legal-hero">
          <div className="legal-hero-container">
            <span className="legal-eyebrow">LEGAL</span>
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-meta">Last Updated: June 13, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="legal-content-section">
          <div className="legal-container">
            <div className="legal-text">
              <p>
                Welcome to SolarKey. Please read these Terms of Service ("Terms") carefully. By accessing or using the platform, services, and website provided by SolarKey Advanced AI Solutions Pvt. Ltd. ("SolarKey", "we", "us", or "our"), you agree to be bound by these Terms.
              </p>

              <h2>1. Services Offered</h2>
              <p>
                SolarKey provides a cloud-based software-as-a-service (SaaS) platform designed to aggregate solar site telemetry, execute machine learning-based predictive diagnostics, generate performance reports, and automate crew routing and ticket management ("Services").
              </p>

              <h2>2. Account Registration and Access</h2>
              <p>
                To access the Services, you must register for an administrative account. You agree to provide accurate registration information and maintain the security of your login credentials. You are responsible for all activities occurring under your administrative and user accounts.
              </p>

              <h2>3. Integration and On-Site Equipment</h2>
              <p>
                Our Services require connecting to on-site RTUs, inverters, meters, SCADA gateways, or cloud services. You are solely responsible for:
              </p>
              <ul>
                <li>Ensuring the network connectivity, hardware maintenance, and security of your on-site gateways.</li>
                <li>Obtaining any necessary authorizations from hardware vendors or third-party platforms to permit SolarKey to query and stream site telemetry.</li>
              </ul>

              <h2>4. Intellectual Property Rights</h2>
              <p>
                All rights, titles, and interests in the Services, including our software, diagnostic algorithms, user interfaces, documentation, and the trained machine learning models, remain the exclusive property of SolarKey. You retain all ownership rights to the raw operational telemetry data uploaded from your sites.
              </p>

              <h2>5. Fees and Payment</h2>
              <p>
                Usage of the platform is subject to the subscription fees outlined in your signed Service Agreement. Unless specified otherwise, fees are billed annually or monthly, are non-refundable, and exclude applicable local taxes.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                While SolarKey utilizes advanced machine learning to predict site anomalies and calculate generation at risk, the Services are provided "as is." SolarKey does not guarantee that all faults will be predicted or that automated work orders will prevent operational outages. Under no circumstances will SolarKey be liable for lost energy yield, business interruption, or physical damage to on-site solar assets.
              </p>

              <h2>7. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, India.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have questions regarding these Terms, please contact us at:
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
