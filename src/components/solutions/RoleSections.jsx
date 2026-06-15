import React from 'react';

/* ─── Shared bullet list ─── */
const BulletList = ({ items }) => (
  <ul className="sol-role-bullets">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

/* ─── Asset Owners Mock Card ─── */
const AssetOwnersMock = () => (
  <div className="sol-mock-card">
    <div className="sol-mock-header" style={{ marginBottom: '16px' }}>
      <span className="sol-mock-title">Portfolio view</span>
      <span className="sol-mock-badge">preview</span>
    </div>
    <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <img 
        src="/site-details-overview.jpg" 
        alt="Portfolio view" 
        style={{ width: '100%', display: 'block', height: 'auto' }}
      />
    </div>
  </div>
);

/* ─── O&M Providers Mock Card ─── */
const OMMock = () => (
  <div className="sol-mock-card">
    <div className="sol-mock-header" style={{ marginBottom: '16px' }}>
      <span className="sol-mock-title">Work queue</span>
      <span className="sol-mock-badge">preview</span>
    </div>
    <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <img 
        src="/field-crew-operations.jpg" 
        alt="Work queue" 
        style={{ width: '100%', display: 'block', height: 'auto' }}
      />
    </div>
  </div>
);

/* ─── Investors Mock Card ─── */
const InvestorsMock = () => (
  <div className="sol-mock-card">
    <div className="sol-mock-header" style={{ marginBottom: '16px' }}>
      <span className="sol-mock-title">Fund overview</span>
      <span className="sol-mock-badge">preview</span>
    </div>
    <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <img 
        src="/equipment-registry.jpg" 
        alt="Fund overview" 
        style={{ width: '100%', display: 'block', height: 'auto' }}
      />
    </div>
  </div>
);

/* ─── Main component ─── */
const RoleSections = () => {
  return (
    <div className="sol-role-sections">

      {/* ── Asset Owners ── */}
      <section className="sol-role-section scroll-reveal" id="asset-owners">
        <div className="sol-role-grid">
          <div className="sol-role-text">
            <p className="sol-role-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              FOR ASSET OWNERS
            </p>
            <h2 className="sol-role-h2"><span style={{ color: '#2563EB' }}>Every site in one place</span>, with reporting your board trusts.</h2>
            <p className="sol-role-para">
              Stop stitching together vendor portals and spreadsheets. SolarKey unifies your whole
              portfolio into one live view and the numbers your board and lenders expect.
            </p>
            <BulletList items={[
              'One dashboard across all sites and vendors',
              'Underperformance flagged the day it starts',
              'Board- and lender-ready reports on schedule',
            ]} />
            <a href="/demo" className="sol-role-link">Request a demo →</a>
          </div>
          <div className="sol-role-visual">
            <AssetOwnersMock />
          </div>
        </div>
      </section>

      {/* ── O&M Providers ── */}
      <section className="sol-role-section sol-role-section--alt scroll-reveal" id="om-providers">
        <div className="sol-role-grid sol-role-grid--reverse">
          <div className="sol-role-visual">
            <OMMock />
          </div>
          <div className="sol-role-text">
            <p className="sol-role-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              FOR O&amp;M PROVIDERS
            </p>
            <h2 className="sol-role-h2"><span style={{ color: '#2563EB' }}>Fix faults</span> before they escalate — cover more sites per tech.</h2>
            <p className="sol-role-para">
              Move from reactive callouts to predictive maintenance. SolarKey spots the fault early,
              raises the work order with a diagnosis attached, and routes it to the right crew.
            </p>
            <BulletList items={[
              'Predictive alerts with lead time, not alarms',
              'Auto-generated, pre-diagnosed work orders',
              'Crew routing and SLA tracking in one place',
            ]} />
            <a href="/demo" className="sol-role-link">Request a demo →</a>
          </div>
        </div>
      </section>

      {/* ── Investors ── */}
      <section className="sol-role-section scroll-reveal" id="investors">
        <div className="sol-role-grid">
          <div className="sol-role-text">
            <p className="sol-role-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
              FOR INVESTORS
            </p>
            <h2 className="sol-role-h2"><span style={{ color: '#2563EB' }}>Asset-level truth</span> across the whole fund.</h2>
            <p className="sol-role-para">
              See how every asset is really performing, validate the IRR assumptions in your model,
              and pull diligence data without chasing the operator for it each quarter.
            </p>
            <BulletList items={[
              'Standardised performance across every holding',
              'IRR-impact view, not just raw generation',
              'Diligence-ready exports across the portfolio',
            ]} />
            <a href="/demo" className="sol-role-link">Request a demo →</a>
          </div>
          <div className="sol-role-visual">
            <InvestorsMock />
          </div>
        </div>
      </section>

    </div>
  );
};

export default RoleSections;
