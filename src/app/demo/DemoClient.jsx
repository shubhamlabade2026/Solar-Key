'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../components/demo/demo.css';

export default function DemoClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [state, handleSubmitFormspree, resetFormspree] = useForm('mjgdlkjy');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields (*)');
      return;
    }
    setError('');
    handleSubmitFormspree(e);
  };

  return (
    <div className="demo-page-container">
      
      {/* ── Left Side: What to Expect ── */}
      <div className="demo-info-section">
        <h1 className="demo-info-title">What to Expect</h1>
        
        <div className="expectation-steps">
          <div className="expectation-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3 className="step-title">Discovery call (10 min)</h3>
              <p className="step-desc">
                We'll ask about your portfolio size, current tooling, and the top 3 problems you want to solve.
              </p>
            </div>
          </div>

          <div className="expectation-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3 className="step-title">Tailored walkthrough (25 min)</h3>
              <p className="step-desc">
                A solutions engineer walks you through the features most relevant to your use case — not a generic product tour.
              </p>
            </div>
          </div>

          <div className="expectation-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3 className="step-title">Q&A + next steps (10 min)</h3>
              <p className="step-desc">
                Ask anything. We'll propose a proof-of-concept scope if the fit looks right.
              </p>
            </div>
          </div>
        </div>

        {/* Reassurance Strip */}
        <div className="demo-reassurance-strip">
          <span className="reassurance-item">Built by operators &amp; AI engineers</span>
          <span className="reassurance-dot">·</span>
          <span className="reassurance-item">Vendor-neutral, works with your existing kit</span>
          <span className="reassurance-dot">·</span>
          <span className="reassurance-item">SOC 2 Type II audit planned</span>
          <span className="reassurance-dot">·</span>
          <span className="reassurance-item">2-22, Evergreen Industrial Estate, Shakti Mill Lane, Mahalaxmi West, South Mumbai, Maharashtra, India 400011</span>
        </div>
      </div>

      {/* ── Right Side: Booking Form ── */}
      <div className="demo-form-section">
        <div className="demo-form-card">
          {state.succeeded ? (
            <div className="demo-success-message">
              <div className="success-icon-wrap">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none"/>
                  <path d="M8 12.5l3 3 5-6" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="success-title">Thank You!</h2>
              <p className="success-desc">
                Your demo request has been successfully submitted. Our team will contact you at <strong>{formData.email}</strong> within 24 hours.
              </p>
              <button 
                onClick={() => {
                  resetFormspree();
                  setFormData({ fullName: '', email: '', company: '', role: '', message: '' });
                }}
                className="btn-primary success-btn"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <h2 className="demo-form-title">Book Your Demo</h2>
              
              {error && <div className="form-error-alert">{error}</div>}
              {state.errors && (
                <div className="form-error-alert">
                  {state.errors.message || 'Submission failed. Please check your fields and try again.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="demo-booking-form">
                
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
                      placeholder="Alex Johnson"
                    />
                    <ValidationError 
                      prefix="Full Name" 
                      field="fullName" 
                      errors={state.errors} 
                      style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '600' }}
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
                      placeholder="alex@company.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email" 
                      errors={state.errors} 
                      style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '600' }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Renewables Ltd."
                  />
                  <ValidationError 
                    prefix="Company" 
                    field="company" 
                    errors={state.errors} 
                    style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '600' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role">I am a...</label>
                  <div className="select-wrapper">
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="">Select your role</option>
                      <option value="Asset Owner / Fund Manager">Asset Owner / Fund Manager</option>
                      <option value="O&M Service Provider">O&M Service Provider</option>
                      <option value="Investor (PE / VC / IPP)">Investor (PE / VC / IPP)</option>
                      <option value="EPC Contractor">EPC Contractor</option>
                      <option value="Project Developer">Project Developer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <ValidationError 
                    prefix="Role" 
                    field="role" 
                    errors={state.errors} 
                    style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '600' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="required-star">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your portfolio and what you're looking to solve..."
                    rows={4}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message" 
                    errors={state.errors} 
                    style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '600' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-demo-btn"
                  disabled={state.submitting}
                  style={{ opacity: state.submitting ? 0.7 : 1, cursor: state.submitting ? 'not-allowed' : 'pointer' }}
                >
                  {state.submitting ? 'Submitting...' : 'Request My Demo'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

    </div>
  );
}
