import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Glossary — SolarKey | Renewable Energy Metrics & Operations',
  description: 'Definitions of core performance metrics, industrial protocols, and operational terms for solar and wind portfolios.',
  alternates: { canonical: '/resources/glossary' },
  openGraph: { url: '/resources/glossary' },
};

const glossaryItems = [
  {
    term: 'Performance ratio (PR)',
    definition: 'How well the plant itself performs, with weather stripped out — actual output divided by what it should have produced for the sunlight it received, as a percentage. A PR of 80% means 80% of the available energy was delivered.'
  },
  {
    term: 'Availability',
    definition: 'The share of time an asset could generate when it was supposed to — i.e. not down for a fault or maintenance. High availability means little generation lost to outages.'
  },
  {
    term: 'Capacity factor',
    definition: 'Actual energy produced over a period divided by the maximum possible if the plant ran at full rated power the whole time. For solar it is naturally limited by daylight and weather.'
  },
  {
    term: 'Irradiance',
    definition: 'The solar power hitting a surface, in watts per square metre (W/m²). It is the raw input that drives generation and the baseline performance is judged against.'
  },
  {
    term: 'Curtailment',
    definition: 'Deliberately holding output below what the plant could produce — usually because the grid can\'t take it, or for commercial or regulatory reasons. Curtailed energy is lost revenue, not a fault.'
  },
  {
    term: 'Energy yield',
    definition: 'The total energy a plant generates over a period, usually in MWh or GWh. The basic measure of how much a site or portfolio produced.'
  },
  {
    term: 'Inverter',
    definition: 'The device that converts the DC electricity from solar panels into the AC electricity the grid uses. Inverter faults are among the most common causes of lost generation.'
  },
  {
    term: 'String',
    definition: 'A series-connected group of solar panels. String-level monitoring spots underperformance down to an individual string rather than just the whole site.'
  },
  {
    term: 'Tracker',
    definition: 'A motorised mount that tilts panels to follow the sun across the day, lifting output. A stuck or drifting tracker quietly costs yield.'
  },
  {
    term: 'IRR (internal rate of return)',
    definition: 'The annualised return that makes a project\'s net present value zero — the headline number investors use to judge an asset. “IRR impact” is how an operational issue moves that return.'
  },
  {
    term: 'Predictive maintenance',
    definition: 'Acting on a fault before it causes failure, using data and models — instead of reacting after it breaks (reactive) or servicing on a fixed calendar (preventive).'
  },
  {
    term: 'O&M (operations & maintenance)',
    definition: 'The ongoing work of keeping a plant running: monitoring, inspections, repairs and cleaning, often handled by a specialist service provider.'
  },
  {
    term: 'SCADA',
    definition: 'Supervisory Control and Data Acquisition — the system that gathers data from and sends commands to field equipment like inverters, trackers and meters. The operational nervous system of a site.'
  },
  {
    term: 'Modbus / DNP3 / IEC 61850',
    definition: 'Common industrial protocols used to read data from inverters, meters and SCADA. A vendor-neutral platform supports several so it can connect to a mixed fleet.'
  },
  {
    term: 'Data residency',
    definition: 'The requirement that data is stored in a specific country or region, often for legal compliance — for example keeping Indian data in India and Gulf data in the Gulf.'
  }
];

export default function GlossaryPage() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ background: '#fff' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .glossary-hero {
            background: #f9fafb;
            border-bottom: 1px solid #e5e7eb;
            padding: 80px 24px 48px;
            text-align: center;
          }
          .glossary-hero-container {
            max-width: 800px;
            margin: 0 auto;
          }
          .glossary-eyebrow {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #2563EB;
            text-transform: uppercase;
            margin-bottom: 16px;
            display: block;
          }
          .glossary-title {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 850;
            color: #111827;
            letter-spacing: -1px;
            line-height: 1.15;
            margin-bottom: 16px;
          }
          .glossary-subtitle {
            font-size: 17px;
            color: #4b5563;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
          }
          .glossary-list {
            max-width: 800px;
            margin: 0 auto;
            padding: 60px 24px 100px;
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .glossary-item {
            border-bottom: 1px solid #f3f4f6;
            padding-bottom: 32px;
          }
          .glossary-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .glossary-term {
            font-size: 19px;
            font-weight: 750;
            color: #111827;
            margin-bottom: 8px;
            letter-spacing: -0.3px;
          }
          .glossary-definition {
            font-size: 15px;
            line-height: 1.65;
            color: #4b5563;
          }
        `}} />
        
        {/* Hero Section */}
        <section className="glossary-hero">
          <div className="glossary-hero-container">
            <span className="glossary-eyebrow">Resources</span>
            <h1 className="glossary-title">Renewable Operations Glossary</h1>
            <p className="glossary-subtitle">
              Clear, practical definitions of core performance metrics, industrial protocols, and operational terms.
            </p>
          </div>
        </section>

        {/* Glossary List */}
        <section className="glossary-list">
          {glossaryItems.map((item) => (
            <div key={item.term} className="glossary-item">
              <h2 className="glossary-term">{item.term}</h2>
              <p className="glossary-definition">{item.definition}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
