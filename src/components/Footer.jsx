import React from 'react';

const SolarKeyLogoWhite = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SolarKey logo"
  >
    {/* ── WHITE top-left arc: 9-o'clock (17,50) → left-gap (33.5,21.4) ── */}
    <path
      d="M 17 50 A 33 33 0 0 1 33.5 21.4"
      stroke="#ffffff"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />

    {/* ── WHITE top-right arc: right-gap (66.5,21.4) → 3-o'clock (83,50) ── */}
    <path
      d="M 66.5 21.4 A 33 33 0 0 1 83 50"
      stroke="#ffffff"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />

    {/* ── BLUE bottom arc: 3 → 6 → 9 o'clock (two unambiguous 90° arcs) ── */}
    <path
      d="M 83 50 A 33 33 0 0 1 50 83 A 33 33 0 0 1 17 50"
      stroke="#2563EB"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />

    {/* ── STEM + SQUARE-BRACKET TERMINAL ── */}
    <path
      d="M 50 4 L 50 52 L 64 52"
      stroke="#ffffff"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="miter"
      fill="none"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-container">

        {/* ── Main section grid ── */}
        <div className="footer-main-grid">

          {/* Left Column: Brand Name & Address */}
          <div className="footer-brand-column">
            <a href="/" className="footer-logo">
              <SolarKeyLogoWhite size={28} />
              <span className="footer-logo-text">
                Solar<span className="footer-logo-key">Key</span>
              </span>
            </a>
            <div className="footer-address-info">
              <p>SolarKey Advanced AI Solutions Pvt. Ltd.</p>
              <p>2-22, Evergreen Industrial Estate, Shakti Mill Lane,</p>
              <p>Mahalaxmi West, South Mumbai, Maharashtra, India - 400011</p>
              <p>+91 96194 22279</p>
            </div>

          </div>

          {/* Right Columns: Structured links */}
          <div className="footer-links-columns">
            <div className="footer-links-col">
              <h4>Platform</h4>
              <ul>
                <li><a href="/platform">Capabilities</a></li>
                <li><a href="/platform#how-it-works">How it works</a></li>
                <li><a href="/integrations">Integrations</a></li>
                <li><a href="/platform#security">Security</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/company">About</a></li>
                <li><a href="/company#leadership">Leadership</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/company#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="/resources">Blog</a></li>
                <li><a href="/trust">Trust & Security</a></li>
                <li><a href="/demo">Request a demo</a></li>
                <li><a href="mailto:vikram@solar-key.com?subject=Design%20Partner%20Programme">Become a partner</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom metadata bar ── */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 SolarKey Advanced AI Solutions Pvt. Ltd.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy</a>
            <span>·</span>
            <a href="/terms">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
