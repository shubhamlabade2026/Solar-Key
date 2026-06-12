'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'Can SolarKey handle a mixed-technology, multi-vendor portfolio?',
    a: 'Yes. SolarKey normalises data across inverter brands, SCADA vendors and meter types. You connect what you already have — we handle the translation.',
  },
  {
    q: 'We work with several O&M contractors — does that still work?',
    a: 'Absolutely. You can assign sites or work orders to different contractors, each with their own login and view restricted to their scope.',
  },
  {
    q: "What's the difference between what owners and investors see?",
    a: 'Owners get operational dashboards and fault management. Investors get portfolio-level performance, IRR-impact summaries and diligence-ready exports — without access to day-to-day ops.',
  },
  {
    q: 'Do you support sites across both India and the Gulf?',
    a: 'Yes. Data residency options are available for both regions, so your Indian and Gulf portfolios stay in-region.',
  },
  {
    q: 'Can we start with a few sites before rolling out the whole portfolio?',
    a: "Yes. Most customers start with 2–5 sites and expand. There's no minimum fleet size.",
  },
];

const ChevronIcon = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sol-faq-chevron${open ? ' sol-faq-chevron--open' : ''}`}
    aria-hidden="true"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="#6b7280"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQItem = ({ q, a, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sol-faq-item">
      <button
        className="sol-faq-q"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-q-${id}`}
      >
        <span>{q}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="sol-faq-a" id={`faq-a-${id}`}>
          {a}
        </div>
      )}
    </div>
  );
};

const SolutionsFAQ = () => {
  return (
    <section className="sol-faq-section">
      <div className="sol-faq-container">
        <p className="sol-eyebrow">FAQ</p>
        <h2 className="sol-faq-h2">Questions, answered</h2>
        <div className="sol-faq-list">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} id={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsFAQ;
