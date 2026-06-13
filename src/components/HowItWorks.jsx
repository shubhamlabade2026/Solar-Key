import React from 'react';

const steps = [
  { label: 'Connect',  active: false },
  { label: 'Monitor',  active: false },
  { label: 'Predict',  active: true  },
  { label: 'Act',      active: true  },
  { label: 'Report',   active: false },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="hiw-container">
        <p className="hiw-eyebrow">HOW IT WORKS</p>
        <h2 className="hiw-heading">From raw site data to clear action</h2>

        <div className="hiw-steps">
          {steps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <button
                className={`step-btn scroll-reveal${step.active ? ' step-btn--active' : ''}`}
                id={`step-${step.label.toLowerCase()}`}
              >
                {step.label}
              </button>
              {idx < steps.length - 1 && (
                <span className="step-arrow" aria-hidden="true">&gt;</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Integrations Card */}
        <div className="hiw-integrations-card">
          <h3 className="hiw-int-heading">Works with the equipment you already own</h3>
          <p className="hiw-int-desc">
            Vendor-neutral. SolarKey reads from the inverters, SCADA, meters and weather stations already on your sites — no rip-and-replace.
          </p>
          <div className="hiw-int-footer">
            <div className="hiw-int-logos">
              <span className="hiw-logo-placeholder" />
              <span className="hiw-logo-placeholder" />
              <span className="hiw-logo-placeholder" />
              <span className="hiw-logo-placeholder" />
              <span className="hiw-logo-placeholder" />
            </div>
            <a href="/integrations" className="hiw-int-link" id="hiw-see-supported">
              See supported systems <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Security Banner */}
        <div className="hiw-security-banner">
          <div className="hiw-sec-left">
            <span className="hiw-sec-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <div className="hiw-sec-info">
              <h4 className="hiw-sec-title">Your data, protected and in-region</h4>
              <p className="hiw-sec-desc">
                Encryption in transit and at rest, role-based access, and data-residency options for India and the Gulf. SOC 2 Type II audit planned.
              </p>
            </div>
          </div>
          <a href="/trust" className="hiw-sec-link" id="hiw-read-trust">
            Read more on Trust & Security <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
