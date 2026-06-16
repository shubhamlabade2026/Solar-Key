import React from 'react';

/* ── SVGs for Capability Icons ── */

const LiveViewIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h3L10 4l4 16 3-8h4" />
  </svg>
);

const FailureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ResolvedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const TrustIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const BulletCheckIcon = () => (
  <svg className="bullet-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Features = () => {
  return (
    <section className="features-section" id="capabilities">
      <div className="features-container">
        
        {/* Section Header */}
        <div className="features-header">
          <p className="features-eyebrow">CAPABILITIES</p>
          <h2 className="features-heading">Everything you need to run a portfolio</h2>
        </div>

        {/* Capabilities Grid Rows */}
        <div className="features-list">

          {/* Row 1: One Live View of Every Site */}
          <div className="feature-row">
            <div className="feature-info">
              <div className="feature-title-row">
                <span className="feature-row-icon"><LiveViewIcon /></span>
                <h3 className="feature-row-title">One live view of every site</h3>
              </div>
              <p className="feature-row-desc">
                Pull every inverter, string, tracker and meter into a single dashboard, normalised across vendors and sites. Live output is compared to weather-adjusted expectations.
              </p>
              <ul className="feature-row-bullets">
                <li><BulletCheckIcon /> <span>Multi-vendor, multi-site in one view</span></li>
                <li><BulletCheckIcon /> <span>Weather-adjusted performance baselines</span></li>
                <li><BulletCheckIcon /> <span>Alerts by site, asset or threshold</span></li>
              </ul>
            </div>
            
            <div className="feature-preview-container">
              {/* Temporarily removed preview card and screenshot */}
            </div>
          </div>

          {/* Row 2: Catch the failure before it costs you */}
          <div className="feature-row feature-row--reverse">
            <div className="feature-info">
              <div className="feature-title-row">
                <span className="feature-row-icon"><FailureIcon /></span>
                <h3 className="feature-row-title">Catch the failure before it costs you</h3>
              </div>
              <p className="feature-row-desc">
                The models watch each asset's data stream and flag the fault that's coming — with enough lead-time to act before generation drops.
              </p>
              <ul className="feature-row-bullets">
                <li><BulletCheckIcon /> <span>Early warning on inverters, strings, trackers</span></li>
                <li><BulletCheckIcon /> <span>Lead-time estimates, not just alarms</span></li>
                <li><BulletCheckIcon /> <span>Ranked by lost-generation impact</span></li>
              </ul>
            </div>
            
            <div className="feature-preview-container">
              <div className="preview-card card-dark">
                <div className="preview-header">
                  <span className="preview-title">Fault forecast</span>
                  <span className="preview-tag">preview</span>
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <img 
                    src="/energy-loss-cascade.jpg" 
                    alt="Fault forecast preview" 
                    style={{ width: '100%', display: 'block', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: From alert to resolved, on its own */}
          <div className="feature-row">
            <div className="feature-info">
              <div className="feature-title-row">
                <span className="feature-row-icon"><ResolvedIcon /></span>
                <h3 className="feature-row-title">From alert to resolved, on its own</h3>
              </div>
              <p className="feature-row-desc">
                When a fault is confirmed, the AI agent opens the work order, routes it to the right crew with the diagnosis attached, and tracks it to closure.
              </p>
              <ul className="feature-row-bullets">
                <li><BulletCheckIcon /> <span>Auto-generated, pre-diagnosed work orders</span></li>
                <li><BulletCheckIcon /> <span>Crew routing and SLA tracking</span></li>
                <li><BulletCheckIcon /> <span>Closed-loop: confirms recovered output</span></li>
              </ul>
            </div>
            
            <div className="feature-preview-container">
              <div className="preview-card card-dark">
                <div className="preview-header">
                  <span className="preview-title">Auto work order</span>
                  <span className="preview-tag">preview</span>
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <img 
                    src="/maintenance-schedule.jpg" 
                    alt="Auto work order preview" 
                    style={{ width: '100%', display: 'block', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Numbers your owners trust */}
          <div className="feature-row feature-row--reverse">
            <div className="feature-info">
              <div className="feature-title-row">
                <span className="feature-row-icon"><TrustIcon /></span>
                <h3 className="feature-row-title">Numbers your owners trust</h3>
              </div>
              <p className="feature-row-desc">
                Produce the metrics owners and lenders ask for — yield, performance ratio, availability, IRR impact — on schedule and branded to your fund.
              </p>
              <ul className="feature-row-bullets">
                <li><BulletCheckIcon /> <span>Yield, PR, availability, IRR impact</span></li>
                <li><BulletCheckIcon /> <span>Scheduled, branded, exportable</span></li>
                <li><BulletCheckIcon /> <span>Asset-level drill-down for diligence</span></li>
              </ul>
            </div>
            
            <div className="feature-preview-container">
              <div className="preview-card card-dark">
                <div className="preview-header">
                  <span className="preview-title">Owner report</span>
                  <span className="preview-tag">preview</span>
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <img 
                    src="/equipment-registry.jpg" 
                    alt="Owner report preview" 
                    style={{ width: '100%', display: 'block', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
