import React from 'react';

/* ── Distinct icons for each feature card ──────────────── */

/** Real-time monitoring — activity / pulse line */
const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline
      points="3 12 7 12 9 4 13 20 15 12 18 12 21 12"
      stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
);

/** Predictive faults — shield with exclamation */
const ShieldAlertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L3 7v5c0 5.25 3.83 10.16 9 11.25C17.17 22.16 21 17.25 21 12V7l-9-5z"
      stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    <line x1="12" y1="9" x2="12" y2="13" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="16.5" r="0.8" fill="#2563EB" />
  </svg>
);

/** Automated workflows — gear with circular arrows */
const GearArrowsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gear body */}
    <path
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      stroke="#2563EB" strokeWidth="1.8" fill="none"
    />
    <path
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06A1.65 1.65 0 0015 19.4V20a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005.6 15H4a2 2 0 010-4h.09A1.65 1.65 0 005.6 9.91a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 5.6V4a2 2 0 014 0v.09c.09.45.35.85.74 1.08a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82c.23.39.63.65 1.08.74H20a2 2 0 010 4h-.09c-.45.09-.85.35-1.08.74z"
      stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
);

/** Investor reporting — bar chart with trend line */
const ChartTrendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bars */}
    <rect x="3" y="14" width="4" height="7" rx="1" stroke="#2563EB" strokeWidth="1.8" fill="none" />
    <rect x="10" y="10" width="4" height="11" rx="1" stroke="#2563EB" strokeWidth="1.8" fill="none" />
    <rect x="17" y="6" width="4" height="15" rx="1" stroke="#2563EB" strokeWidth="1.8" fill="none" />
    {/* Trend line */}
    <polyline
      points="4 10 12 5 20 3"
      stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    <circle cx="20" cy="3" r="1.2" fill="#2563EB" />
  </svg>
);

const features = [
  {
    id: 'feature-realtime',
    title: 'Real-time monitoring',
    desc: 'Every site, every inverter, one view.',
    Icon: ActivityIcon,
  },
  {
    id: 'feature-predictive',
    title: 'Predictive faults',
    desc: 'AI flags the failure before it lands.',
    Icon: ShieldAlertIcon,
  },
  {
    id: 'feature-automated',
    title: 'Automated workflows',
    desc: 'Raises the work order, routes the crew.',
    Icon: GearArrowsIcon,
  },
  {
    id: 'feature-investor',
    title: 'Investor reporting',
    desc: 'Yield, PR, availability, IRR impact.',
    Icon: ChartTrendIcon,
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <p className="features-eyebrow">WHAT SOLARKEY DOES</p>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.id} id={f.id}>
              <div className="feature-icon">
                <f.Icon />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
