'use client';
import React, { useState, useEffect } from 'react';


// Bar heights matching the reference image pattern (7 bars, varying heights)
const initialBarData = [
  { height: 42, active: false },
  { height: 68, active: false },
  { height: 58, active: false },
  { height: 80, active: false },
  { height: 52, active: false },
  { height: 74, active: false },
  { height: 96, active: true },
];

const DashboardPreview = () => {
  const [yieldVal, setYieldVal] = useState(189.4);
  const [prVal, setPrVal] = useState(88.4);
  const [availVal, setAvailVal] = useState(99.4);
  const [pulse, setPulse] = useState(false);
  const [bars, setBars] = useState(initialBarData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);

      setYieldVal((prev) => parseFloat((prev + Math.random() * 0.05 + 0.01).toFixed(2)));
      setPrVal(() => parseFloat((88.1 + Math.random() * 0.5).toFixed(1)));
      setAvailVal(() => parseFloat((99.35 + Math.random() * 0.15).toFixed(2)));

      setBars((prevBars) =>
        prevBars.map((bar) => {
          const delta = (Math.random() - 0.5) * 8;
          const minHeight = 25;
          const maxHeight = 100;
          let newHeight = bar.height + delta;
          if (newHeight < minHeight) newHeight = minHeight;
          if (newHeight > maxHeight) newHeight = maxHeight;
          return { ...bar, height: Math.round(newHeight) };
        })
      );

      setTimeout(() => {
        setPulse(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`dashboard-card${pulse ? ' dashboard-card--pulse' : ''}`}>

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
            <span className={`stat-num${pulse ? ' stat-num--glow' : ''}`}>{yieldVal}</span>
            <span className="stat-unit"> GWh</span>
          </p>
          <p className="stat-tag">sample</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Avg PR</p>
          <p className="stat-value">
            <span className={`stat-num${pulse ? ' stat-num--glow' : ''}`}>{prVal}</span>
            <span className="stat-unit">%</span>
          </p>
          <p className="stat-tag">sample</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Availability</p>
          <p className="stat-value">
            <span className={`stat-num${pulse ? ' stat-num--glow' : ''}`}>{availVal}</span>
            <span className="stat-unit">%</span>
          </p>
          <p className="stat-tag">sample</p>
        </div>
      </div>

      {/* ── Chart ──────────────────────────── */}
      <div className="dashboard-chart">
        <p className="chart-label">Monthly energy (GWh)</p>
        <div className="chart-bars">
          {bars.map((bar, i) => (
            <div
              key={i}
              className={`chart-bar${bar.active ? ' chart-bar--active' : ''}`}
              style={{ height: `${bar.height}px`, transition: 'height 0.8s ease-out' }}
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
