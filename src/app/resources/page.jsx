import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ResourcesHero from '../../components/resources/ResourcesHero';
import GlossarySection from '../../components/resources/GlossarySection';
import NewsletterSection from '../../components/resources/NewsletterSection';
import ResourcesCTA from '../../components/resources/ResourcesCTA';
import '../../components/resources/resources.css';

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
      <main>
        <ResourcesHero activeFilter="All" onFilterChange={() => {}} showTabs={false} />
        <GlossarySection />
        <NewsletterSection />
        <ResourcesCTA />
      </main>
      <Footer />
    </div>
  );
}
