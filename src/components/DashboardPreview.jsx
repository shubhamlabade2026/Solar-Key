'use client';
import React from 'react';


// Bar heights matching the reference image pattern (7 bars, varying heights)
const barData = [
  { height: 42, active: false },
  { height: 68, active: false },
  { height: 58, active: false },
  { height: 80, active: false },
  { height: 52, active: false },
  { height: 74, active: false },
  { height: 96, active: true },
];

const DashboardPreview = () => {
  return (
    <div className="dashboard-card">

      {/* ── Header ─────────────────────────── */}
      <div className="dashboard-header">
        <span className="dashboard-title">Product preview</span>
        <div className="dashboard-demo-badge">
          <span className="demo-dot" />
          <span>Demo data</span>
        </div>
      </div>

      {/* ── Stat cards ─────────────────────── */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <p className="stat-label">Energy yield</p>
          <p className="stat-value">
            <span className="stat-num">189.4</span>
            <span className="stat-unit"> GWh</span>
          </p>
          <p className="stat-tag">sample</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Avg PR</p>
          <p className="stat-value">
            <span className="stat-num">88.4</span>
            <span className="stat-unit">%</span>
          </p>
          <p className="stat-tag">sample</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Availability</p>
          <p className="stat-value">
            <span className="stat-num">99.4</span>
            <span className="stat-unit">%</span>
          </p>
          <p className="stat-tag">sample</p>
        </div>
      </div>

      {/* ── Chart ──────────────────────────── */}
      <div className="dashboard-chart">
        <p className="chart-label">Monthly energy (GWh)</p>
        <div className="chart-bars">
          {barData.map((bar, i) => (
            <div
              key={i}
              className={`chart-bar${bar.active ? ' chart-bar--active' : ''}`}
              style={{ height: `${bar.height}px` }}
            />
          ))}
        </div>
      </div>

      {/* ── Alert row ──────────────────────── */}
      <div className="dashboard-alert">
        <div className="alert-left">
          <span className="alert-dot alert-dot--pulse" />
          <span className="alert-text">Inverter anomaly predicted</span>
        </div>
        <span className="alert-right">Sweihan · 4h lead</span>
      </div>

      {/* ── Site cards ─────────────────────── */}
      <div className="dashboard-sites">
        {[
          { name: 'Bhadla',   mw: '52 MW' },
          { name: 'Pavagada', mw: '30 MW' },
          { name: 'Sweihan',  mw: '64 MW', active: true },
          { name: 'Sakaka',   mw: '45 MW' },
        ].map(({ name, mw, active }) => (
          <div key={name} className={`site-card${active ? ' site-card--active' : ''}`}>
            <p className="site-name">{name}</p>
            <p className="site-mw">{mw}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DashboardPreview;
