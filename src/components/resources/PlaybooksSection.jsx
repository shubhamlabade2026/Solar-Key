'use client';

import React from 'react';

const playbooks = [
  {
    id: 1,
    title: "The asset owner's guide to portfolio monitoring",
    linkText: "Free download →"
  },
  {
    id: 2,
    title: "A predictive-maintenance playbook for solar O&M",
    linkText: "Free download →"
  },
  {
    id: 3,
    title: "What investors should measure in a renewable portfolio",
    linkText: "Free download →"
  }
];

export default function PlaybooksSection() {
  return (
    <section className="res-guides">
      <div className="res-guides-container">
        <div className="res-guides-header">
          <h2 className="res-guides-h2">Guides & playbooks</h2>
          <span className="res-guides-sub-right">Free, in exchange for your email</span>
        </div>
        <div className="res-guides-grid">
          {playbooks.map((playbook) => (
            <div key={playbook.id} className="res-guide-card">
              <div className="res-guide-icon-box" />
              <h3 className="res-guide-title">{playbook.title}</h3>
              <a href="#" className="res-guide-link">
                {playbook.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
