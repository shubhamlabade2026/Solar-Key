import React from 'react';
import Link from 'next/link';
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
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f9fafb',
        padding: '80px 24px',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '520px',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '48px 36px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}>
          <div style={{
            background: '#eff6ff',
            color: '#2563eb',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          
          <h1 style={{
            fontSize: '28px',
            fontWeight: '800',
            color: '#111827',
            letterSpacing: '-0.5px',
            margin: 0
          }}>
            Page Under Construction
          </h1>
          
          <p style={{
            fontSize: '15px',
            color: '#4b5563',
            lineHeight: '1.6',
            margin: 0
          }}>
            We are currently crafting practical guides, operational playbooks, and key insights for running solar and wind portfolios better. Check back soon!
          </p>

          <Link href="/" style={{
            display: 'inline-block',
            background: '#2563eb',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '700',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            marginTop: '8px',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)'
          }}>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
