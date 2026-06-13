import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PartnersClient from './PartnersClient';

export const metadata = {
  title: 'Become a Partner — SolarKey | Build the Operating System for Renewables',
  description:
    'Join SolarKey as a design partner. Collaborate with our product team, shape the agentic solar monitoring roadmap, and deploy customized integrations on your portfolio.',
  alternates: { canonical: '/partners' },
  openGraph: { url: '/partners' },
};

export default function PartnersPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="partners-page-main">
        <PartnersClient />
      </main>
      <Footer />
    </div>
  );
}
