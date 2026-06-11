import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import BuiltBy from './components/BuiltBy';
import CTABanner from './components/CTABanner';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
