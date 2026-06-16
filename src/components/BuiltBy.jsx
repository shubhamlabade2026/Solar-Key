import React from 'react';
import './BuiltBy.css';

const founders = [
  { id: 'founder-vs', initials: 'VS', name: 'Vikram Shetty',  role: 'Co-founder & CEO' },
  { id: 'founder-sb', initials: 'SB', name: 'Dr. Sudesh Bhagwat', role: 'Director [Technology Innovation]' },
  { id: 'founder-kc', initials: 'KC', name: 'Kunal Chandra',  role: 'Co-founder' },
];

const BuiltBy = () => {
  return (
    <section className="built-by" id="team">
      <div className="builtby-container">
        <p className="builtby-eyebrow">BUILT BY</p>
        <h2 className="builtby-heading">
          Operators and AI engineers — not just a dashboard vendor
        </h2>

        <div className="founders-grid">
          {founders.map((f) => (
            <div className="founder-card" key={f.id} id={f.id}>
              <div className="founder-avatar">{f.initials}</div>
              <div className="founder-info">
                <p className="founder-name">{f.name}</p>
                <p className="founder-role">{f.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="founders-footnote">
          Add real founder bios + prior experience here — with no clients yet, the team is your strongest trust signal.
        </p>
      </div>
    </section>
  );
};

export default BuiltBy;
