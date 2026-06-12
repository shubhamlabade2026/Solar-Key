'use client';

import React from 'react';

export default function FeaturedSection() {
  return (
    <section className="res-featured">
      <div className="res-featured-container">
        <div className="res-featured-card">
          {/* Left Dark Column */}
          <div className="res-featured-dark-box">
            <span className="featured-lbl">Featured</span>
            <h3>Why monitoring isn't enough anymore</h3>
          </div>
          {/* Right Content Column */}
          <div className="res-featured-content">
            <span className="res-featured-meta">Operations · 6 Min Read</span>
            <h2 className="res-featured-title">From dashboards to decisions</h2>
            <p className="res-featured-desc">
              Most platforms show you a problem and stop there. The next step — diagnosing it,
              acting on it, and proving the recovery — is where the real savings are. Here's how
              agentic operations change the maths.
            </p>
            <a href="#" className="res-featured-link">
              Read the article →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
