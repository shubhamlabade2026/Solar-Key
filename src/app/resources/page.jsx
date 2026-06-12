'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ResourcesHero from '../../components/resources/ResourcesHero';
import FeaturedSection from '../../components/resources/FeaturedSection';
import LatestSection from '../../components/resources/LatestSection';
import PlaybooksSection from '../../components/resources/PlaybooksSection';
import GlossarySection from '../../components/resources/GlossarySection';
import NewsletterSection from '../../components/resources/NewsletterSection';
import ResourcesCTA from '../../components/resources/ResourcesCTA';
import '../../components/resources/resources.css';

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="app">
      <Navbar />
      <main>
        <ResourcesHero activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        {activeFilter === 'All' && <FeaturedSection />}
        <LatestSection activeFilter={activeFilter} />
        <PlaybooksSection />
        <GlossarySection />
        <NewsletterSection />
        <ResourcesCTA />
      </main>
      <Footer />
    </div>
  );
}
