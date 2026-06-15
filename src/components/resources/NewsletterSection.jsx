'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [state, handleSubmitFormspree] = useForm('mjgdlkjy');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitFormspree(e);
  };

  if (state.succeeded) {
    return (
      <div className="res-newsletter-bar">
        <div className="res-newsletter-container">
          <div className="res-newsletter-box" style={{ justifyContent: 'center' }}>
            <div className="res-newsletter-text" style={{ alignItems: 'center', textAlign: 'center' }}>
              <h3 className="res-newsletter-h3">Thanks for subscribing!</h3>
              <p className="res-newsletter-p">You've been added to our monthly newsletter list.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="res-newsletter-bar">
      <div className="res-newsletter-container">
        <div className="res-newsletter-box">
          <div className="res-newsletter-text">
            <h3 className="res-newsletter-h3">Get our monthly field notes.</h3>
            <p className="res-newsletter-p">One email a month on running renewables better. No spam.</p>
          </div>
          <form className="res-newsletter-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="res-newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="res-newsletter-btn"
                disabled={state.submitting}
                style={{ opacity: state.submitting ? 0.7 : 1, cursor: state.submitting ? 'not-allowed' : 'pointer' }}
              >
                {state.submitting ? 'Signing up...' : 'Subscribe'}
              </button>
            </div>
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors} 
              style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '600', textAlign: 'left' }}
            />
            {state.errors && !state.errors.field && (
              <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '600', textAlign: 'left' }}>
                Subscription failed. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
