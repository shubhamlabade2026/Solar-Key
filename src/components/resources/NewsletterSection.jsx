'use client';

import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <div className="res-newsletter-bar">
      <div className="res-newsletter-container">
        <div className="res-newsletter-box">
          <div className="res-newsletter-text">
            <h3 className="res-newsletter-h3">Get our monthly field notes.</h3>
            <p className="res-newsletter-p">One email a month on running renewables better. No spam.</p>
          </div>
          <form className="res-newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="you@company.com"
              className="res-newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="res-newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
