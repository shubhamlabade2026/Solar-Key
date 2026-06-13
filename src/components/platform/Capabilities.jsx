'use client';
import React from 'react';

/* ── Mouse Spotlight Tracking helper ── */
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
};

/* ── Mini product visuals inline (dark panel previews) ── */

const LiveDashboardVisual = () => (
  <div className="cap-visual" onMouseMove={handleMouseMove}>
    <div className="cap-visual-header">
      <span className="cap-visual-label">Live dashboard</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-live-row-layout">
      <div className="cap-live-box">
        <span className="cap-live-dot cap-live-dot--green" />
        <div className="cap-live-line cap-live-line--short" />
      </div>
      <div className="cap-live-box">
        <span className="cap-live-dot cap-live-dot--green" />
        <div className="cap-live-line cap-live-line--medium" />
      </div>
      <div className="cap-live-box cap-live-box--warn">
        <span className="cap-live-dot cap-live-dot--warn" />
        <div className="cap-live-line cap-live-line--short" />
      </div>
      <div className="cap-live-box">
        <span className="cap-live-dot cap-live-dot--green" />
        <div className="cap-live-line cap-live-line--long" />
      </div>
    </div>
  </div>
);

const FaultForecastVisual = () => (
  <div className="cap-visual" onMouseMove={handleMouseMove}>
    <div className="cap-visual-header">
      <span className="cap-visual-label">Fault forecast</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-fault-chart-container">
      <div className="cap-fault-chart-bars">
        <div className="cap-fault-chart-bar" style={{ height: '35%' }} />
        <div className="cap-fault-chart-bar" style={{ height: '55%' }} />
        <div className="cap-fault-chart-bar" style={{ height: '45%' }} />
        <div className="cap-fault-chart-bar" style={{ height: '75%' }} />
        <div className="cap-fault-chart-bar cap-fault-chart-bar--active" style={{ height: '95%' }} />
      </div>
      <div className="cap-fault-chart-badge">
        <span className="cap-fault-badge-dot" />
        Fault in 48h
      </div>
    </div>
  </div>
);

const WorkOrderVisual = () => (
  <div className="cap-visual" onMouseMove={handleMouseMove}>
    <div className="cap-visual-header">
      <span className="cap-visual-label">Auto work order</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-wo-flow">
      <div className="cap-wo-steps-row">
        <span className="cap-wo-step-btn">Detect</span>
        <span className="cap-wo-step-line" />
        <span className="cap-wo-step-btn cap-wo-step-btn--active">Diagnose</span>
        <span className="cap-wo-step-line" />
        <span className="cap-wo-step-btn">Dispatch</span>
      </div>
      <div className="cap-wo-status-box">
        Work order #1242 · routed
      </div>
    </div>
  </div>
);

const ReportVisual = () => (
  <div className="cap-visual" onMouseMove={handleMouseMove}>
    <div className="cap-visual-header">
      <span className="cap-visual-label">Owner report</span>
      <span className="cap-visual-badge">preview</span>
    </div>
    <div className="cap-report-layout">
      <div className="cap-report-inner-card">
        <span className="cap-report-inner-title">Portfolio report</span>
        <div className="cap-report-chart">
          <div className="cap-report-chart-bar" style={{ height: '40%' }} />
          <div className="cap-report-chart-bar" style={{ height: '80%' }} />
          <div className="cap-report-chart-bar" style={{ height: '60%' }} />
        </div>
      </div>
      <div className="cap-report-actions">
        <div className="cap-report-btn">Export PDF</div>
        <div className="cap-report-btn">Scheduled</div>
      </div>
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
    body: 'Pull every inverter, string, tracker and meter into a single dashboard, normalised across vendors and sites. Live output is compared to weather-adjusted expectations.',
    bullets: [
      'Multi-vendor, multi-site in one view',
      'Weather-adjusted performance baselines',
      'Alerts by site, asset or threshold',
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
    body: 'The models watch each asset\'s data stream and flag the fault that\'s coming — with enough lead-time to act before generation drops.',
    bullets: [
      'Early warning on inverters, strings, trackers',
      'Lead-time estimates, not just alarms',
      'Ranked by lost-generation impact',
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
    body: 'When a fault is confirmed, the AI agent opens the work order, routes it to the right crew with the diagnosis attached, and tracks it to closure.',
    bullets: [
      'Auto-generated, pre-diagnosed work orders',
      'Crew routing and SLA tracking',
      'Closed-loop: confirms recovered output',
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
    body: 'Produce the metrics owners and lenders ask for — yield, performance ratio, availability, IRR impact — on schedule and branded to your fund.',
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
          <div key={cap.id} id={cap.id} className={`cap-item scroll-reveal${cap.flip ? ' cap-item--flip' : ''}`}>

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
