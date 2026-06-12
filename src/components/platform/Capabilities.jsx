'use client';
import React from 'react';

/* ── Mini product visuals inline (dark panel previews) ── */

const LiveDashboardVisual = () => (
  <div className="cap-visual">
    <div className="cap-visual-header">
      <span className="cap-visual-label">Live dashboard</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-live-grid">
      {[
        { name: 'Bhadla', mw: '52 MW', pr: '87.2%', ok: true },
        { name: 'Pavagada', mw: '38 MW', pr: '89.1%', ok: true },
        { name: 'Sweihan', mw: '64 MW', pr: '74.3%', ok: false },
        { name: 'Sakaka', mw: '45 MW', pr: '91.0%', ok: true },
      ].map((s) => (
        <div key={s.name} className={`cap-site-row${s.ok ? '' : ' cap-site-row--warn'}`}>
          <div className="cap-site-dot" style={{ background: s.ok ? '#22c55e' : '#f59e0b' }} />
          <span className="cap-site-name">{s.name}</span>
          <span className="cap-site-mw">{s.mw}</span>
          <span className="cap-site-pr">{s.pr}</span>
        </div>
      ))}
    </div>
  </div>
);

const FaultForecastVisual = () => (
  <div className="cap-visual">
    <div className="cap-visual-header">
      <span className="cap-visual-label">Fault forecast</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-fault-list">
      {[
        { asset: 'INV-04 · Sweihan', type: 'Overtemp trend', lead: '36h', impact: '4.2 MWh', high: true },
        { asset: 'String B-12 · Bhadla', type: 'Degradation', lead: '72h', impact: '1.8 MWh', high: false },
        { asset: 'Tracker row 7 · Sakaka', type: 'Drift detected', lead: '18h', impact: '0.9 MWh', high: false },
      ].map((f, i) => (
        <div key={i} className={`cap-fault-item${f.high ? ' cap-fault-item--high' : ''}`}>
          <div className="cap-fault-top">
            <span className="cap-fault-asset">{f.asset}</span>
            <span className="cap-fault-lead">{f.lead} lead</span>
          </div>
          <div className="cap-fault-bottom">
            <span className="cap-fault-type">{f.type}</span>
            <span className="cap-fault-impact">{f.impact} at risk</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WorkOrderVisual = () => (
  <div className="cap-visual">
    <div className="cap-visual-header">
      <span className="cap-visual-label">Auto work order</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-wo-body">
      <div className="cap-wo-id">Work order #41942 · <span className="cap-wo-status">resolved</span></div>
      <div className="cap-wo-steps">
        <span className="cap-wo-step cap-wo-step--done">Created</span>
        <span className="cap-wo-arrow">›</span>
        <span className="cap-wo-step cap-wo-step--done">Dispatched</span>
        <span className="cap-wo-arrow">›</span>
        <span className="cap-wo-step cap-wo-step--active">Closed</span>
      </div>
      <div className="cap-wo-detail">INV-04 Sweihan · Recovered 4.1 MWh</div>
    </div>
  </div>
);

const ReportVisual = () => (
  <div className="cap-visual">
    <div className="cap-visual-header">
      <span className="cap-visual-label">Owner report</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-report-body">
      <div className="cap-report-row">
        <span className="cap-report-metric">Energy yield</span>
        <span className="cap-report-bar"><span style={{ width: '82%' }} className="cap-report-fill" /></span>
        <span className="cap-report-val">189 GWh</span>
      </div>
      <div className="cap-report-row">
        <span className="cap-report-metric">PR</span>
        <span className="cap-report-bar"><span style={{ width: '88%' }} className="cap-report-fill" /></span>
        <span className="cap-report-val">88.4%</span>
      </div>
      <div className="cap-report-row">
        <span className="cap-report-metric">Availability</span>
        <span className="cap-report-bar"><span style={{ width: '99%' }} className="cap-report-fill cap-report-fill--green" /></span>
        <span className="cap-report-val">99.4%</span>
      </div>
      <div className="cap-report-tag">Scheduled · Exportable</div>
    </div>
  </div>
);

const capabilities = [
  {
    id: 'cap-live',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h3M19 12h3M12 2v3M12 19v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    heading: 'One live view of every site',
    body: 'Pull every inverter, string, tracker and meter into a single dashboard, normalised across vendors and geographies. SolarKey compares live output against weather-adjusted expectations, so underperformance surfaces the moment it starts, not in next month\'s report.',
    bullets: [
      'Multi-vendor, multi-site in one view',
      'Weather-adjusted performance baselines',
      'Alerts configurable by site, asset or threshold',
    ],
    Visual: LiveDashboardVisual,
    flip: false,
  },
  {
    id: 'cap-predict',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
    heading: 'Catch the failure before it costs you',
    body: 'The models watch each asset\'s data stream and flag the fault that\'s coming — a failing inverter, a tracker drifting off-point, a string trending down — with enough lead time to act before generation drops.',
    bullets: [
      'Early warning on inverters, strings and trackers',
      'Lead-time estimates, not just alarms',
      'Ranked by lost-generation impact, so the costly ones come first',
    ],
    Visual: FaultForecastVisual,
    flip: true,
  },
  {
    id: 'cap-auto',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
    heading: 'From alert to resolved, on its own',
    body: 'This is where SolarKey goes past monitoring. When a fault is confirmed, the AI agent opens the work order, routes it to the right crew with the diagnosis attached, tracks it to closure, then confirms the recovered output.',
    bullets: [
      'Auto-generated, pre-diagnosed work orders',
      'Crew routing and SLA tracking',
      'Closed-loop: confirms the generation it won back',
    ],
    Visual: WorkOrderVisual,
    flip: false,
  },
  {
    id: 'cap-report',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Numbers your owners trust',
    body: 'Produce the metrics owners and lenders ask for — energy yield, performance ratio, availability, IRR impact — on schedule, branded to your fund, and exportable.',
    bullets: [
      'Yield, PR, availability, IRR impact',
      'Scheduled, branded, exportable',
      'Asset-level drill-down for diligence',
    ],
    Visual: ReportVisual,
    flip: true,
  },
];

const Capabilities = () => (
  <section className="capabilities" id="capabilities">
    <div className="cap-container">
      <p className="cap-eyebrow">CAPABILITIES</p>
      <h2 className="cap-heading">Everything you need to run a portfolio</h2>

      <div className="cap-list">
        {capabilities.map((cap) => (
          <div key={cap.id} id={cap.id} className={`cap-item${cap.flip ? ' cap-item--flip' : ''}`}>

            {/* Text side */}
            <div className="cap-text">
              <div className="cap-icon-wrap">{cap.icon}</div>
              <h3 className="cap-item-heading">{cap.heading}</h3>
              <p className="cap-item-body">{cap.body}</p>
              <ul className="cap-bullets">
                {cap.bullets.map((b) => (
                  <li key={b}><span className="cap-check">✓</span>{b}</li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <div className="cap-visual-side">
              <cap.Visual />
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
