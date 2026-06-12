import React from 'react';

const steps = [
  { label: 'Connect',  desc: 'Pull data from every inverter, meter and SCADA on your sites.', active: false },
  { label: 'Monitor',  desc: 'Live performance dashboard, normalised across all vendors.',      active: false },
  { label: 'Predict',  desc: 'ML models flag faults before generation drops.',                  active: true  },
  { label: 'Act',      desc: 'AI agents open work orders and route to the right crew.',         active: true  },
  { label: 'Report',   desc: 'Owner-ready yield, PR and availability reports on schedule.',     active: false },
];

const PlatformHowItWorks = () => (
  <section className="plat-hiw" id="plat-how-it-works">
    <div className="plat-hiw-container">
      <p className="plat-hiw-eyebrow">HOW IT WORKS</p>
      <h2 className="plat-hiw-heading">From raw site data to clear action</h2>

      <div className="plat-hiw-steps">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className={`plat-step${step.active ? ' plat-step--active' : ''}`} id={`plat-step-${step.label.toLowerCase()}`}>
              <div className="plat-step-pill">{step.label}</div>
              <p className="plat-step-desc">{step.desc}</p>
            </div>
            {idx < steps.length - 1 && (
              <span className="plat-step-arrow" aria-hidden="true">›</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformHowItWorks;
