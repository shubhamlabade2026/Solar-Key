import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
      <main style={{ 
        padding: '120px 24px', 
        textAlign: 'center', 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#fff'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '700', 
          color: '#111827' 
        }}>
          welcome to privacy
        </h1>
      </main>
      <Footer />
    </div>
  );
}
