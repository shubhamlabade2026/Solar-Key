'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * SolarKeyLogo — exact recreation from the high-resolution uploaded image.
 *
 * ┌─ Precise analysis ────────────────────────────────────────────────┐
 * │  viewBox: 0 0 100 100   ·  center (50,50)  ·  radius 33          │
 * │                                                                    │
 * │  GAP: ±30° from 12-o'clock  (total 60° opening)                  │
 * │    Left-gap  240° SVG  →  (33.5, 21.4)                           │
 * │    Right-gap 300° SVG  →  (66.5, 21.4)                           │
 * │                                                                    │
 * │  COLOR SPLIT at horizontal midline:                                │
 * │    9-o'clock  (180°)  →  (17, 50)                                │
 * │    3-o'clock  (  0°)  →  (83, 50)                                │
 * │    6-o'clock  (270°)  →  (50, 83)                                │
 * │                                                                    │
 * │  ARC COLORS:                                                       │
 * │    BLACK arcs:  left 55° + right 55°   stroke="#222222"           │
 * │    BLUE  arc:   bottom 180° (two 90°)  stroke="#2563EB"           │
 * │                                                                    │
 * │  STEM + BRACKET (KEY DETAIL — sharp right-angle, NOT a curve):    │
 * │    Stem:       (50,4)  →  (50,52)   vertical downward            │
 * │    Turn RIGHT: (50,52) →  (64,52)   horizontal rightward          │
 * │    Drop DOWN:  (64,52) →  (64,67)   vertical downward             │
 * │    strokeLinejoin="miter" for sharp 90° corners                   │
 * └───────────────────────────────────────────────────────────────────┘
 */

const SolarKeyLogo = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SolarKey logo"
  >
    {/* ── BLACK top-left arc: 9-o'clock (17,50) → left-gap (33.5,21.4) ── */}
    <path
      d="M 17 50 A 33 33 0 0 1 33.5 21.4"
      stroke="#222222"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />

    {/* ── BLACK top-right arc: right-gap (66.5,21.4) → 3-o'clock (83,50) ── */}
    <path
      d="M 66.5 21.4 A 33 33 0 0 1 83 50"
      stroke="#222222"
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

    {/*
      ── STEM + SQUARE-BRACKET TERMINAL ─────────────────────────────────
      The bottom of the stem is NOT a curved hook — it is a sharp
      right-angle bracket (⌐ shape), as clearly visible in the
      high-res reference image:

        │  ← stem goes straight down
        └──  ← sharp 90° turn RIGHT
           │  ← sharp 90° turn DOWN

      Using strokeLinejoin="miter" to get sharp 90° corners.
      Using strokeLinecap="round" for rounded open ends (top & bottom).
    */}
    <path
      d="M 50 4 L 50 52 L 64 52"
      stroke="#222222"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="miter"
      fill="none"
    />
  </svg>
);

/* ──────────────────────────────────────────────────────────────── */

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ── Logo ── */}
        <a href="/" className="navbar-logo">
          <SolarKeyLogo size={32} />
          <span className="logo-text">
            Solar<span className="logo-key">Key</span>
          </span>
        </a>

        {/* ── Nav links (desktop) ── */}
        <ul className="navbar-links">
          <li>
            <a href="/platform" className={pathname === '/platform' ? 'active' : ''}>
              Platform
            </a>
          </li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#company">Company</a></li>
        </ul>

        {/* ── CTA (desktop) ── */}
        <a href="mailto:hello@solar-key.com?subject=Demo%20Request" className="btn-demo btn-demo-desktop" id="nav-request-demo">
          Request a demo
        </a>

        {/* ── Hamburger toggle (mobile) ── */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--active' : ''}`}
          id="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

      </div>

      {/* ── Mobile menu overlay ── */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <ul className="mobile-menu-links">
          <li>
            <a
              href="/platform"
              className={pathname === '/platform' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Platform
            </a>
          </li>
          <li><a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a></li>
          <li><a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a></li>
          <li><a href="#company" onClick={() => setMenuOpen(false)}>Company</a></li>
        </ul>
        <a href="mailto:hello@solar-key.com?subject=Demo%20Request" className="btn-demo btn-demo-mobile" id="nav-request-demo-mobile" onClick={() => setMenuOpen(false)}>
          Request a demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
