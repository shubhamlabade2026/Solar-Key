import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CareersClient from './CareersClient';

export const metadata = {
  title: 'Careers — SolarKey | Build the Operating System for Renewables',
  description:
    'Join SolarKey across engineering, data and field operations and help build agentic AI for renewable portfolios.',
  alternates: { canonical: '/careers' },
  openGraph: { url: '/careers' },
};

export default function CareersPage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <CareersClient />
      </main>
      <Footer />
    </div>
  );
}
