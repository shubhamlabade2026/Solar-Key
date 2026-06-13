import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
          welcome to terms
        </h1>
      </main>
      <Footer />
    </div>
  );
}
