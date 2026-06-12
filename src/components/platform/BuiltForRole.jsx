import React from 'react';

const roles = [
  {
    id: 'role-owners',
    title: 'Asset owners',
    desc: 'See your whole fleet, catch underperformance early, and get the yield and PR reports your lenders expect.',
    href: '/solutions/asset-owners',
    cta: 'See how →',
  },
  {
    id: 'role-om',
    title: 'O&M providers',
    desc: 'Smarter dispatch, pre-diagnosed work orders, and predictive maintenance — more sites per tech.',
    href: '/solutions/om-providers',
    cta: 'See how →',
  },
  {
    id: 'role-investors',
    title: 'Investors',
    desc: 'Due-diligence data, IRR impact modelling and SLA validation across the portfolio.',
    href: '/solutions/investors',
    cta: 'See how →',
  },
];

const BuiltForRole = () => (
  <section className="built-for-role" id="built-for-role">
    <div className="bfr-container">
      <p className="bfr-eyebrow">WHO IT'S FOR</p>
      <h2 className="bfr-heading">Built for your role</h2>

      <div className="bfr-cards">
        {roles.map((r) => (
          <div key={r.id} id={r.id} className="bfr-card">
            <h3 className="bfr-card-title">{r.title}</h3>
            <p className="bfr-card-desc">{r.desc}</p>
            <a href={r.href} className="bfr-card-link">{r.cta}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BuiltForRole;
