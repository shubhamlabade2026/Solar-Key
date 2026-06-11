import React from 'react';
import './Features.css';

const features = [
  {
    id: 'feature-realtime',
    title: 'Real-time monitoring',
    desc: 'Every site, every inverter, one view.',
  },
  {
    id: 'feature-predictive',
    title: 'Predictive faults',
    desc: 'AI flags the failure before it lands.',
  },
  {
    id: 'feature-automated',
    title: 'Automated workflows',
    desc: 'Raises the work order, routes the crew.',
  },
  {
    id: 'feature-investor',
    title: 'Investor reporting',
    desc: 'Yield, PR, availability, IRR impact.',
  },
];

/* Target/signal icon — matches the small circle icon in reference */
const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8.5" stroke="#2563EB" strokeWidth="1.6" fill="none"/>
    <circle cx="10" cy="10" r="4.5" stroke="#2563EB" strokeWidth="1.4" fill="none"/>
    <circle cx="10" cy="10" r="1.5" fill="#2563EB"/>
  </svg>
);

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <p className="features-eyebrow">WHAT SOLARKEY DOES</p>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.id} id={f.id}>
              <div className="feature-icon">
                <TargetIcon />
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
