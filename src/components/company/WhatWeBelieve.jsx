'use client';

import React from 'react';

const beliefs = [
  {
    id: 1,
    title: 'Built by operators',
    text: 'We have run sites, not just shipped dashboards.'
  },
  {
    id: 2,
    title: 'AI that acts',
    text: 'Agents that resolve the issue, not just raise an alert.'
  },
  {
    id: 3,
    title: 'Honest about our stage',
    text: 'Real about what we have built — and what is still coming.'
  }
];

export default function WhatWeBelieve() {
  return (
    <section className="comp-believe">
      <div className="comp-believe-container">
        <h2 className="comp-believe-h2">What we believe</h2>
        <div className="comp-believe-grid">
          {beliefs.map((b) => (
            <div key={b.id} className="comp-believe-card scroll-reveal">
              <div className="comp-believe-icon-box">
                {/* SVG Checkmark */}
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="comp-believe-title">{b.title}</h3>
              <p className="comp-believe-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
