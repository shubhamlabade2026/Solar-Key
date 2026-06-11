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
                className={`step-btn${step.active ? ' step-btn--active' : ''}`}
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
      </div>
    </section>
  );
};

export default HowItWorks;
