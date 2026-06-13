'use client';

import React, { useState } from 'react';
import '../../components/partners/partners.css';

export default function PartnersClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    portfolioSize: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company || !formData.message) {
      setError('Please fill in all required fields (*)');
      return;
    }
    setError('');

    // Construct the mailto URL
    const subject = encodeURIComponent(`Design Partner Program - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Portfolio Size: ${formData.portfolioSize ? `${formData.portfolioSize} MW` : 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:vikram@solar-key.com?subject=${subject}&body=${body}`;
    
    // Open standard mailto link
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="partners-page-container">
      
      {/* ── Left Side: Program Information ── */}
      <div className="partners-info-section">
        <h1 className="partners-info-title">Become a Design Partner</h1>
        <p className="partners-info-subtitle">
          Collaborate with us to shape the first operating system for solar asset management.
        </p>
        
        <div className="partnership-benefits">
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">01</div>
            <div className="benefit-content">
              <h3 className="benefit-title">Co-design features</h3>
              <p className="benefit-desc">
                Get direct access to our product and engineering team. Propose and influence roadmap features that resolve your actual operational friction.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-wrapper">02</div>
            <div className="benefit-content">
              <h3 className="benefit-title">Early access &amp; pilot rates</h3>
              <p className="benefit-desc">
                Deploy agentic solar monitoring on a subset of your portfolio with zero-risk pilot pricing and white-glove onboarding support.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-wrapper">03</div>
            <div className="benefit-content">
              <h3 className="benefit-title">Custom integrations</h3>
              <p className="benefit-desc">
                We will build custom connectors to your existing SCADA systems, inverter APIs, and asset management databases at no additional charge.
              </p>
            </div>
          </div>
        </div>

        {/* Reassurance Strip */}
        <div className="partners-reassurance-strip">
          <span className="reassurance-item">Deep product access</span>
          <span className="reassurance-dot">·</span>
          <span className="reassurance-item">Tailored deployment</span>
          <span className="reassurance-dot">·</span>
          <span className="reassurance-item">Priority technical support</span>
          <span className="reassurance-dot">·</span>
          <span className="reassurance-item">2-22, Evergreen Industrial Estate, Shakti Mill Lane, Mahalaxmi West, South Mumbai, Maharashtra, India 400011</span>
        </div>
      </div>

      {/* ── Right Side: Partnership Form ── */}
      <div className="partners-form-section">
        <div className="partners-form-card">
          {submitted ? (
            <div className="partners-success-message">
              <div className="success-icon-wrap">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none"/>
                  <path d="M8 12.5l3 3 5-6" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="success-title">Draft Created!</h2>
              <p className="success-desc">
                Your partnership details have been formatted and passed to your default email client. Please send the generated draft to <strong>vikram@solar-key.com</strong>.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: '', email: '', company: '', portfolioSize: '', message: '' });
                }}
                className="btn-primary success-btn"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <>
              <h2 className="partners-form-title">Join the Program</h2>
              
              {error && <div className="form-error-alert">{error}</div>}

              <form onSubmit={handleSubmit} className="partners-form">
                
                <div className="form-row-two-col">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name <span className="required-star">*</span></label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Vikram Shetty"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Work Email <span className="required-star">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@solar-key.com"
                    />
                  </div>
                </div>

                <div className="form-row-two-col">
                  <div className="form-group">
                    <label htmlFor="company">Company <span className="required-star">*</span></label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="SolarKey"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolioSize">Portfolio Size (MW)</label>
                    <input
                      type="number"
                      id="portfolioSize"
                      name="portfolioSize"
                      value={formData.portfolioSize}
                      onChange={handleChange}
                      placeholder="50"
                      min="0"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="required-star">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your portfolio and what features you are interested in co-designing..."
                    rows={5}
                  />
                </div>

                <button type="submit" className="submit-partners-btn">
                  Open Email Draft
                </button>
              </form>
            </>
          )}
        </div>
      </div>

    </div>
  );
}
