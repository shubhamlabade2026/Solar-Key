import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DemoClient from './DemoClient';

export const metadata = {
  title: 'Book a Demo — SolarKey | AI Solar Monitoring Platform',
  description:
    'Request a tailored walkthrough of SolarKey. See real-time monitoring, predictive faults and automated operations on a portfolio like yours.',
  alternates: { canonical: '/demo' },
  openGraph: { url: '/demo' },
};

export default function DemoPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="demo-page-main">
        <DemoClient />
      </main>
      <Footer />
    </div>
  );
}
