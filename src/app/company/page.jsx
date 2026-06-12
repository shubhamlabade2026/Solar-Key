'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CompanyHero from '../../components/company/CompanyHero';
import WhyExist from '../../components/company/WhyExist';
import WhatWeBelieve from '../../components/company/WhatWeBelieve';
import TeamSection from '../../components/company/TeamSection';
import HiringBanner from '../../components/company/HiringBanner';
import CompanyCTA from '../../components/company/CompanyCTA';
import '../../components/company/company.css';

export default function CompanyPage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <CompanyHero />
        <WhyExist />
        <WhatWeBelieve />
        <TeamSection />
        <HiringBanner />
        <CompanyCTA />
      </main>
      <Footer />
    </div>
  );
}
