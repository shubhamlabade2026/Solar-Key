'use client';

import React from 'react';

const articles = [
  {
    id: 1,
    tag: 'Maintenance',
    category: 'Predictive maintenance',
    title: 'Cutting truck rolls with predictive maintenance',
    readTime: '5 min read'
  },
  {
    id: 2,
    tag: 'Reporting',
    category: 'Investor reporting',
    title: 'What lenders actually want in a performance report',
    readTime: '5 min read'
  },
  {
    id: 3,
    tag: 'Integrations',
    category: 'Integrations',
    title: 'Connecting a mixed-vendor inverter fleet',
    readTime: '5 min read'
  },
  {
    id: 4,
    tag: 'Operations',
    category: 'Operations',
    title: 'PR vs availability: what to watch, and when',
    readTime: '5 min read'
  },
  {
    id: 5,
    tag: 'Field notes',
    category: 'Operations',
    title: 'Running O&M across India and the Gulf',
    readTime: '5 min read'
  },
  {
    id: 6,
    tag: 'Product',
    category: 'Operations',
    title: 'How SolarKey\'s agents open and close a work order',
    readTime: '5 min read'
  }
];

export default function LatestSection({ activeFilter }) {
  // Filter articles: if "All", show all. Otherwise match the category.
  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(art => art.category === activeFilter);

  return (
    <section className="res-latest">
      <div className="res-latest-container">
        <h2 className="res-latest-h2">Latest</h2>
        <div className="res-latest-grid">
          {filteredArticles.map((art) => (
            <article key={art.id} className="res-latest-card">
              <div className="res-card-img-placeholder" />
              <span className="res-card-eyebrow">{art.tag}</span>
              <h3 className="res-card-title">{art.title}</h3>
              <span className="res-card-readtime">{art.readTime}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
