import React from 'react';

const Security = () => (
  <section className="security" id="security">
    <div className="sec-container">
      <div className="sec-icon-wrap" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="9 12 11 14 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="sec-body">
        <h2 className="sec-heading">Your data, protected and in-region</h2>
        <p className="sec-text">
          Encryption in transit and at rest, role-based access, and data-residency options for India and the Gulf. SOC 2 Type II audit planned.
        </p>
        <a href="/trust" className="sec-link" id="sec-trust-link">
          Read more on Trust &amp; Security →
        </a>
      </div>
    </div>
  </section>
);

export default Security;
