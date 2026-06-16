import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import BuiltBy from '../components/BuiltBy';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export const metadata = {
  title: 'SolarKey — AI Monitoring & Operations Platform for Solar Portfolios',
  description:
    'SolarKey connects to the inverters, SCADA and meters you already run, monitors every site in real time, and flags faults with AI before they cut your output.',
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

export default function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <BuiltBy />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

