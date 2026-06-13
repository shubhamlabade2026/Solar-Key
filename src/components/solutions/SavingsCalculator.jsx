'use client';

import React, { useState } from 'react';

export default function SavingsCalculator() {
  const [portfolioSize, setPortfolioSize] = useState(100); // MW
  const [slaTime, setSlaTime] = useState(24); // Hours

  // Math models
  const annualGenPerMw = 1650; // MWh per MW annually in India/Gulf (approx 19% CUF)
  const annualPortfolioGen = portfolioSize * annualGenPerMw;
  
  // Longer SLA times mean more time wasted in underperformance.
  // SolarKey cuts this down to sub-10 minutes.
  const recoveryFactor = (slaTime / 24) * 0.0065; // Up to ~2% recovery at 72h SLA
  const yieldRecovered = Math.round(annualPortfolioGen * recoveryFactor);
  
  // IRR delta model
  const irrDelta = (0.15 + (slaTime / 24) * 0.12).toFixed(2);

  // Carbon Offset: approx 0.8 tonnes CO2 per MWh of solar
  const carbonOffset = Math.round(yieldRecovered * 0.82);

  return (
    <section className="sol-calc-section">
      <div className="sol-calc-container">
        <div className="sol-calc-header">
          <span className="sol-calc-eyebrow">Interactive Estimator</span>
          <h2 className="sol-calc-title">Quantify the SolarKey impact</h2>
          <p className="sol-calc-desc">
            Enter your portfolio size and current average fault response time to estimate 
            underperformance recovery and IRR improvements.
          </p>
        </div>

        <div className="sol-calc-grid">
          {/* Sliders Panel */}
          <div className="sol-calc-sliders-card">
            <div className="sol-calc-slider-group">
              <div className="sol-calc-slider-header">
                <label htmlFor="portfolio-slider">Portfolio Size</label>
                <span className="sol-calc-slider-value">{portfolioSize} MW</span>
              </div>
              <input
                id="portfolio-slider"
                type="range"
                min="10"
                max="500"
                step="10"
                value={portfolioSize}
                onChange={(e) => setPortfolioSize(Number(e.target.value))}
                className="sol-calc-range-input"
              />
              <div className="sol-calc-slider-limits">
                <span>10 MW</span>
                <span>500 MW</span>
              </div>
            </div>

            <div className="sol-calc-slider-group">
              <div className="sol-calc-slider-header">
                <label htmlFor="sla-slider">Current Avg Response SLA</label>
                <span className="sol-calc-slider-value">{slaTime} Hours</span>
              </div>
              <input
                id="sla-slider"
                type="range"
                min="2"
                max="72"
                step="2"
                value={slaTime}
                onChange={(e) => setSlaTime(Number(e.target.value))}
                className="sol-calc-range-input"
              />
              <div className="sol-calc-slider-limits">
                <span>2 Hours</span>
                <span>72 Hours</span>
              </div>
            </div>
            
            <p className="sol-calc-disclaimer">
              Estimates are based on average GHI in India & West Asia and a 19% baseline capacity utilization factor.
            </p>
          </div>

          {/* Results Panel */}
          <div className="sol-calc-results-card">
            <div className="sol-calc-result-item">
              <span className="sol-calc-result-label">Annual Yield Recovered</span>
              <span className="sol-calc-result-number">
                {yieldRecovered.toLocaleString()} <span className="sol-calc-unit">MWh</span>
              </span>
            </div>

            <div className="sol-calc-result-item">
              <span className="sol-calc-result-label">Estimated IRR Impact</span>
              <span className="sol-calc-result-number sol-calc-result-number--accent">
                +{irrDelta}% <span className="sol-calc-unit">Δ</span>
              </span>
            </div>

            <div className="sol-calc-result-item">
              <span className="sol-calc-result-label">Equivalent CO₂ Offset</span>
              <span className="sol-calc-result-number">
                {carbonOffset.toLocaleString()} <span className="sol-calc-unit">tonnes/yr</span>
              </span>
            </div>

            <a href="/demo" className="sol-calc-cta-btn btn-premium">
              Claim your recovery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
