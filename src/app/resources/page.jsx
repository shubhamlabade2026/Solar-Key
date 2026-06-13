import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Resources — SolarKey | Guides & Insights for Renewable Operations',
  description:
    'Practical guides, playbooks and a glossary for running solar and wind portfolios better, from the team building SolarKey.',
  alternates: { canonical: '/resources' },
  openGraph: { url: '/resources' },
};

export default function ResourcesPage() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ 
        padding: '120px 24px', 
        textAlign: 'center', 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#fff'
      }}>
        <style dangerouslySetInnerHTML={{__html: `
          .resources-return-btn {
            background: #2563EB;
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
            transition: background 0.18s;
          }
          .resources-return-btn:hover {
            background: #1d4ed8;
          }
        `}} />
        <h1 style={{ 
          fontSize: 'clamp(28px, 3vw, 42px)', 
          fontWeight: '850', 
          color: '#111827', 
          marginBottom: '16px', 
          letterSpacing: '-1px',
          lineHeight: '1.2'
        }}>
          Resources Page Under Construction
        </h1>
        <p style={{ 
          fontSize: '17px', 
          color: '#4b5563', 
          maxWidth: '520px', 
          lineHeight: '1.65', 
          marginBottom: '32px' 
        }}>
          We are currently preparing deep-dives, playbooks, and industry guides to help you optimize and run your solar assets. Check back soon!
        </p>
        <a href="/" className="resources-return-btn">
          Return Home
        </a>
      </main>
      <Footer />
    </div>
  );
}
