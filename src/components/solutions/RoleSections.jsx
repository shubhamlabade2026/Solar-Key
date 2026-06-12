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
    <div className="sol-mock-header">
      <span className="sol-mock-title">Portfolio view</span>
      <span className="sol-mock-badge">Demo data</span>
    </div>
    <div className="sol-mock-site-grid">
      {[
        { name: 'Bhadla', mw: '52 MW', pr: '88.4%', color: '#22c55e', highlight: false },
        { name: 'Pavagada', mw: '38 MW', pr: '91.2%', color: '#22c55e', highlight: false },
        { name: 'Sweihan', mw: '64 MW', pr: '79.3%', color: '#2563EB', highlight: true },
        { name: 'Sakaka', mw: '45 MW', pr: '93.1%', color: '#22c55e', highlight: false },
      ].map((site) => (
        <div key={site.name} className={`sol-mock-site-card${site.highlight ? ' sol-mock-site-card--active' : ''}`}>
          <div className="sol-mock-site-top">
            <span
              className="sol-mock-dot"
              style={{ background: site.highlight ? '#60a5fa' : site.color }}
            />
            <span className="sol-mock-site-name">{site.name}</span>
            <span className="sol-mock-site-mw">{site.mw}</span>
          </div>
          <div className="sol-mock-site-pr">{site.pr} PR</div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── O&M Providers Mock Card ─── */
const OMMock = () => (
  <div className="sol-mock-card">
    <div className="sol-mock-header">
      <span className="sol-mock-title">Work queue</span>
      <span className="sol-mock-badge">Demo data</span>
    </div>
    <div className="sol-mock-wo-list">
      {[
        { id: 'WO #1042', desc: 'Inverter 3', badge: 'Review', badgeClass: 'sol-badge--orange' },
        { id: 'WO #1045', desc: 'String drift', badge: 'Open', badgeClass: 'sol-badge--blue' },
        { id: 'WO #1261', desc: 'Tracker', badge: 'Closed', badgeClass: 'sol-badge--green' },
      ].map((wo) => (
        <div key={wo.id} className="sol-mock-wo-row">
          <div className="sol-mock-wo-left">
            <span className="sol-mock-wo-id">{wo.id}</span>
            <span className="sol-mock-wo-desc">{wo.desc}</span>
          </div>
          <span className={`sol-badge ${wo.badgeClass}`}>{wo.badge}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Investors Mock Card ─── */
const InvestorsMock = () => (
  <div className="sol-mock-card">
    <div className="sol-mock-header">
      <span className="sol-mock-title">Fund overview</span>
      <span className="sol-mock-badge">Demo data</span>
    </div>
    <table className="sol-mock-table">
      <thead>
        <tr>
          <th>Asset</th>
          <th>IRR</th>
          <th>Yield</th>
          <th>IRR Δ</th>
        </tr>
      </thead>
      <tbody>
        {[
          { asset: 'Rajasthan I', irr: '88%', yield: '80.3%', delta: '+0.4' },
          { asset: 'Gujarat II', irr: '86%', yield: '66.9%', delta: '+0.2' },
          { asset: 'Sakaka', irr: '90%', yield: '98.9%', delta: '+0.8' },
        ].map((row) => (
          <tr key={row.asset}>
            <td>{row.asset}</td>
            <td>{row.irr}</td>
            <td>{row.yield}</td>
            <td className="sol-mock-delta">{row.delta}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ─── Main component ─── */
const RoleSections = () => {
  return (
    <div className="sol-role-sections">

      {/* ── Asset Owners ── */}
      <section className="sol-role-section" id="asset-owners">
        <div className="sol-role-grid">
          <div className="sol-role-text">
            <p className="sol-role-eyebrow">For Asset Owners</p>
            <h2 className="sol-role-h2">Every site in one place, with reporting your board trusts.</h2>
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
      <section className="sol-role-section sol-role-section--alt" id="om-providers">
        <div className="sol-role-grid sol-role-grid--reverse">
          <div className="sol-role-visual">
            <OMMock />
          </div>
          <div className="sol-role-text">
            <p className="sol-role-eyebrow">For O&amp;M Providers</p>
            <h2 className="sol-role-h2">Fix faults before they escalate — cover more sites per tech.</h2>
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
      <section className="sol-role-section" id="investors">
        <div className="sol-role-grid">
          <div className="sol-role-text">
            <p className="sol-role-eyebrow">For Investors</p>
            <h2 className="sol-role-h2">Asset-level truth across the whole fund.</h2>
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
