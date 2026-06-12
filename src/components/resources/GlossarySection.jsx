'use client';

import React from 'react';

const terms = [
  'PR',
  'Availability',
  'Capacity factor',
  'Curtailment',
  'IRR impact',
  'SCADA',
  'Performance ratio'
];

export default function GlossarySection() {
  return (
    <div className="res-glossary-bar">
      <div className="res-glossary-container">
        <div className="res-glossary-box">
          <div className="res-glossary-left">
            <span className="res-glossary-title">New to the metrics? Start with the glossary.</span>
            <div className="res-glossary-terms">
              {terms.map((term) => (
                <span key={term}>{term}</span>
              ))}
            </div>
          </div>
          <a href="#" className="res-glossary-link">
            Open the glossary →
          </a>
        </div>
      </div>
    </div>
  );
}
