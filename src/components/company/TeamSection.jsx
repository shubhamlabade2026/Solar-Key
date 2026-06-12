'use client';

import React from 'react';

const teamMembers = [
  {
    id: 1,
    initials: 'VS',
    name: 'Vikram Shetty',
    role: 'Co-founder & CEO',
    linkedin: '#'
  },
  {
    id: 2,
    initials: 'SB',
    name: 'Dr. Sudesh Bhagwat',
    role: 'Role to confirm',
    linkedin: '#'
  },
  {
    id: 3,
    initials: 'KC',
    name: 'Kunal Chandra',
    role: 'Co-founder',
    linkedin: '#'
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
              </div>
              {/* Skeleton bio representation */}
              <div className="comp-team-bio-skeleton">
                <div className="comp-team-bio-line" />
                <div className="comp-team-bio-line comp-team-bio-line--short" />
              </div>
              {/* LinkedIn icon link */}
              <div className="comp-team-social-box">
                <a
                  href={member.linkedin}
                  className="comp-team-linkedin-btn"
                  title={`${member.name}'s LinkedIn`}
                >
                  in
                </a>
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
