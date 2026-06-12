'use client';
import React, { useState } from 'react';

const faqs = [
  {
    id: 'faq-1',
    q: 'What does SolarKey monitor, and how is it different from my inverter\'s own portal?',
    a: 'SolarKey aggregates data from every asset on every site — inverters, strings, trackers, meters and weather stations — into a single, vendor-neutral view. Your inverter portal shows one brand in isolation; SolarKey normalises output against weather-adjusted expectations across your whole portfolio, so you see fleet-wide performance and anomalies the moment they appear, not in a report next month.',
  },
  {
    id: 'faq-2',
    q: 'Which inverters, meters and SCADA does it support?',
    a: 'SolarKey reads from Sungrow, Huawei FusionSolar, ABB/Fimer, SMA, Schneider Electric, Delta, Fronius, GoodWe and more, plus standard protocols including Modbus RTU/TCP, DNP3 and IEC 61850. See the full integrations list for SCADA and weather station compatibility.',
  },
  {
    id: 'faq-3',
    q: 'How much lead time does predictive detection give?',
    a: 'Lead time varies by fault type and asset condition, but we typically surface inverter overtemperature trends 24–72 hours before they cause a trip, and string degradation patterns 3–7 days ahead of a significant output drop. Every alert includes a lead-time estimate so your O&M team can prioritise by urgency.',
  },
  {
    id: 'faq-4',
    q: 'What does "agentic AI / automated operations" actually mean here?',
    a: 'When a fault is confirmed, SolarKey\'s AI agent automatically creates a pre-diagnosed work order, routes it to the right crew based on location and SLA rules, and tracks the job to closure. It then verifies that the expected generation has recovered. You\'re notified at each step, but the routine coordination happens without you having to action it.',
  },
  {
    id: 'faq-5',
    q: 'How long does onboarding a multi-site portfolio take?',
    a: 'For sites with existing SCADA or cloud-connected inverters, onboarding typically takes 1–2 weeks. We handle the integration configuration; you don\'t need to buy new hardware or change anything on-site. Larger portfolios with complex SCADA setups can take 3–4 weeks.',
  },
  {
    id: 'faq-6',
    q: 'Where is my data stored?',
    a: 'Data residency is configurable. We offer in-region storage for India and the Gulf. All data is encrypted in transit (TLS 1.2+) and at rest (AES-256), with role-based access controls so you decide who sees what.',
  },
];

const PlatformFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="plat-faq" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <div className="faq-container">
        <p className="faq-eyebrow">FAQ</p>
        <h2 className="faq-heading">Questions, answered</h2>

        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div key={faq.id} id={faq.id} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformFAQ;
