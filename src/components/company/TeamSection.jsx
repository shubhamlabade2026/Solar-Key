'use client';

import React from 'react';

const teamMembers = [
  {
    id: 1,
    initials: 'VS',
    name: 'Vikram Shetty',
    role: 'Co-founder & CEO',
    linkedin: 'https://www.linkedin.com/in/rainmakervik'
  },
  {
    id: 2,
    initials: 'SB',
    name: 'Dr. Sudesh Bhagwat',
    role: 'Role to confirm',
    linkedin: 'https://www.linkedin.com/in/dr-sudesh-bhagwat'
  },
  {
    id: 3,
    initials: 'KC',
    name: 'Kunal Chandra',
    role: 'Co-founder',
    linkedin: 'https://www.linkedin.com/company/solarkey-ai/'
  }
];

export default function TeamSection() {
  return (
    <section className="comp-team">
      <div className="comp-team-container">
        <div className="comp-team-header">
          <div className="comp-team-title-box">
            <span className="comp-team-eyebrow">Who's behind it</span>
            <h2 className="comp-team-h2">The team</h2>
          </div>
          <span className="comp-team-sub-right">
            Investors back people — this is our strongest signal right now
          </span>
        </div>

        <div className="comp-team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="comp-team-card">
              <div className="comp-team-avatar-box">
                <span className="comp-team-avatar-initials">{member.initials}</span>
              </div>
              <div className="comp-team-info">
                <h3 className="comp-team-name">{member.name}</h3>
                <span className="comp-team-role">{member.role}</span>
                <a
                  href={member.linkedin}
                  className="comp-team-linkedin-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
              {/* Skeleton bio representation */}
              <div className="comp-team-bio-skeleton">
                <div className="comp-team-bio-line" />
                <div className="comp-team-bio-line comp-team-bio-line--short" />
              </div>
            </div>
          ))}
        </div>

        <span className="comp-team-footer-caption">
          Short bios pending — team to add prior companies and domain experience.
        </span>
      </div>
    </section>
  );
}
