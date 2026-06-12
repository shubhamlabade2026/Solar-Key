import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-container">

        {/* ── Top row: brand + contact ── */}
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-company-name">SolarKey Advanced Ai Solutions Pvt. Ltd.</p>
          </div>
          <div className="footer-contact">
            <a href="tel:+919619422279" className="footer-phone" id="footer-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.35a2 2 0 01-.45 2.11L8.09 9.43a16 16 0 006.49 6.49l1.25-1.25a2 2 0 012.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0122 16.92z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              +91-9619422279
            </a>
            <a href="mailto:hello@solar-key.com" className="footer-email" id="footer-email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <polyline points="2 4 12 13 22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              hello@solar-key.com
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom row: copyright ── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} SolarKey Advanced Ai Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
