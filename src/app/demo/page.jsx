import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DemoClient from './DemoClient';

export const metadata = {
  title: 'Book a Demo — SolarKey | AI-Powered Solar Monitoring',
  description:
    'Request a demo of SolarKey\'s AI-powered solar monitoring platform. Speak with a solutions engineer and discover how we can optimize your solar asset performance.',
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
