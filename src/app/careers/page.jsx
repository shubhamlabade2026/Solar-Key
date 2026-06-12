'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const rolesData = [
  {
    id: 'director-platform-ai',
    title: 'Director (Platform & AI)',
    location: 'Pune (On-site)',
    type: 'Full-time',
    experience: '7–10 years',
    emailSubject: 'Director (Platform & AI)',
    description: "A renewable plant produces an ocean of telemetry, and almost none of it is useful until something turns it into a decision. That \"something\" is the platform we're building at SolarKey — and we're looking for the person to own it, end to end.",
    tasks: [
      "Lead our brand-agnostic platform that runs renewable energy assets from edge ingestion to live dashboards",
      "Normalise data from any equipment or OEM",
      "Own the ML that catches faults before a client does, the reliability, the security posture, and the team that ships it"
    ],
    requirements: [
      "7–10 years in software / platform engineering, with 3+ years leading multi-disciplinary teams",
      "Shipped production IoT/edge platforms and ML / MLOps systems at scale",
      "Familiarity with renewable energy (inverter telemetry, PR, CUF) is a strong plus"
    ]
  },
  {
    id: 'technical-programme-manager',
    title: 'Technical Programme Manager',
    location: 'Pune (On-site)',
    type: 'Full-time',
    experience: '5–8 years',
    emailSubject: 'Technical Programme Manager',
    description: "This isn't a project management role with a new title. It's the bridge between our AI platform team and every stakeholder who depends on the platform working: O&M operations, business development, and our hardware vendor ecosystem.",
    tasks: [
      "Sit with O&M crews, understand why a technician is running the same manual check for the third time this week, and turn that into a platform feature request the engineering team can ship",
      "Walk into a client demo and run it yourself — architecture questions, security posture, integration readiness. No handing off to an SE",
      "Hold inverter and sensor vendors accountable on protocol documentation, firmware timelines, and SLAs — quarterly, not annually"
    ],
    requirements: [
      "5–8 years across renewable energy O&M, IoT/embedded systems, SaaS product management, or technical pre-sales",
      "You've written an RFP response, run a client demo, or negotiated a vendor SLA (at least two of those from firsthand experience)",
      "Strong execution focus reporting directly to our Director of Platform, Data & AI"
    ]
  },
  {
    id: 'senior-ml-engineer',
    title: 'Senior ML Engineer',
    location: 'Pune (On-site)',
    type: 'Full-time',
    experience: '4+ years',
    emailSubject: 'Senior ML Engineer',
    description: "Own the intelligence layer of our agentic AI platform for renewable energy project operations, enabling autonomous fault resolution and predictive analytics.",
    tasks: [
      "Fault prediction & anomaly detection on live solar data",
      "Fleet-wide performance baselines across sites",
      "Edge-constrained models running on-device at solar plants",
      "MLOps end-to-end — training, deployment, drift monitoring"
    ],
    requirements: [
      "~4 years in ML with strong time-series data experience",
      "Python expertise (PyTorch / XGBoost) and comfort with edge deployment",
      "Exposure to LLM/RAG is a strong plus"
    ]
  },
  {
    id: 'qa-frontend-engineer',
    title: 'QA + Frontend Engineer',
    location: 'Baner, Pune (On-site)',
    type: 'Full-time',
    experience: '4–5 years',
    emailSubject: 'QA + Frontend Engineer',
    description: "The Fleet Dashboard is the face of the platform. It's what renewable energy project operators look at every day — site performance, fault alerts, AI-generated insights. We're hiring a QA + Frontend Engineer to build it and hold it to a high standard.",
    tasks: [
      "Next.js frontend development — Fleet Dashboard, Site Detail, Alerts & LLM/RAG query interface",
      "End-to-end, integration & unit tests across the full codebase",
      "CI pipeline — automated test runs on every pull request",
      "Performance benchmarks — dashboard latency, WebSocket load & InfluxDB query tests"
    ],
    requirements: [
      "~4–5 years in JavaScript/TypeScript with strong Next.js experience",
      "Testing-first mindset (Jest, Playwright or equivalent)",
      "Code reviews that enforce maintainability, not just catch bugs"
    ]
  },
  {
    id: 'embedded-systems-engineer',
    title: 'Embedded Systems Engineer',
    location: 'Baner, Pune (On-site)',
    type: 'Full-time',
    experience: '4+ years',
    emailSubject: 'Embedded Systems Engineer',
    description: "Every renewable energy site we monitor runs an edge node. That node is the foundation of everything — data collection, protocol polling, local resilience, cloud sync. We're hiring an Embedded Systems Engineer to build it.",
    tasks: [
      "Raspberry Pi (or suitable) edge software stack — Modbus RTU/TCP polling, per-manufacturer device drivers",
      "SQLite outbox pattern, MQTT streaming to AWS IoT Core, offline buffering",
      "Hardware watchdog, graceful shutdown, OTA update mechanism",
      "On-site local web server for field engineer use — no internet required"
    ],
    requirements: [
      "~4 years in embedded Linux on ARM hardware",
      "Hands-on experience with Modbus + MQTT and Python for edge software",
      "Familiarity with hardware reliability patterns (watchdog, UPS, crash-safe storage)",
      "RS-485, IEC 61850 or DNP3 exposure is a strong plus"
    ]
  },
  {
    id: 'python-backend-developer',
    title: 'Python Backend Developer',
    location: 'Baner, Pune (On-site)',
    type: 'Full-time',
    experience: '2+ years',
    emailSubject: 'Python Backend Developer',
    description: "We're hiring a Python Backend Developer to join the SolarKey team in Baner, Pune. This is a core engineering role — the person who writes the API layer, builds the data ingestion pipeline, and sets the code quality bar for everything that follows.",
    tasks: [
      "FastAPI backend & InfluxDB query layer development",
      "AWS IoT Core ingestion pipeline management",
      "Multi-site data isolation, deduplication & schema validation",
      "Unit + integration testing implementation"
    ],
    requirements: [
      "~2 years of experience in backend development",
      "Strong, clean, maintainable Python (FastAPI, REST APIs)",
      "Experience with InfluxDB, AWS IoT Core, or MQTT is preferred"
    ]
  }
];

export default function CareersPage() {
  const [openRoleId, setOpenRoleId] = useState(null);

  const toggleRole = (id) => {
    if (openRoleId === id) {
      setOpenRoleId(null);
    } else {
      setOpenRoleId(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.car-value-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* ── Hero Section ── */}
        <section className="car-page-hero">
          <div className="ambient-glow-orb" style={{ top: '-150px', right: '-100px' }} />
          <div className="ambient-glow-orb" style={{ bottom: '-150px', left: '-150px' }} />
          <div className="car-hero-container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="car-eyebrow">Careers</span>
            <h1 className="car-h1">
              Join the team building the <span style={{ color: '#2563EB' }}>operating system</span> for renewables.
            </h1>
            <p className="car-sub">
              Help us replace manual monitoring and reactive maintenance with closed-loop agentic AI. 
              We are growing our engineering, data, and platform teams in Pune.
            </p>
          </div>
        </section>

        {/* ── Why Join Us Section ── */}
        <section className="car-values">
          <div className="car-values-container">
            <div className="car-section-header">
              <span className="car-section-eyebrow">Why SolarKey</span>
              <h2 className="car-section-title">Run renewables better, together</h2>
            </div>

            <div className="car-values-grid">
              <div className="car-value-card">
                <div className="car-value-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="car-value-title">Real Impact</h3>
                <p className="car-value-desc">
                  Every line of code you ship helps clean energy assets run at peak performance, 
                  proving and securing clean kWh across India and West Asia.
                </p>
              </div>

              <div className="car-value-card">
                <div className="car-value-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="car-value-title">Closed-loop AI</h3>
                <p className="car-value-desc">
                  Move beyond read-only dashboards. We are building systems that act—triggering 
                  commands, Modbus controls, and routing work orders autonomously.
                </p>
              </div>

              <div className="car-value-card">
                <div className="car-value-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="car-value-title">Operator Mindset</h3>
                <p className="car-value-desc">
                  We sit behind 150+ years of cumulative energy infrastructure experience. 
                  We respect the physical details of running solar and wind equipment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Open Roles Section ── */}
        <section className="car-roles">
          <div className="car-roles-container">
            <div className="car-section-header">
              <span className="car-section-eyebrow">Now Hiring</span>
              <h2 className="car-section-title">Open positions in Pune</h2>
            </div>

            <div className="car-roles-list">
              {rolesData.map((role) => {
                const isOpen = openRoleId === role.id;
                return (
                  <div key={role.id} className="car-role-item">
                    <button
                      className="car-role-summary"
                      onClick={() => toggleRole(role.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="car-role-title-box">
                        <h3 className="car-role-title">{role.title}</h3>
                        <div className="car-role-meta">
                          <span className="car-role-meta-item">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {role.location}
                          </span>
                          <span className="car-role-meta-item">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {role.experience}
                          </span>
                        </div>
                      </div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`car-role-chevron${isOpen ? ' car-role-chevron--open' : ''}`}
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div className={`car-role-details-wrapper ${isOpen ? 'car-role-details-wrapper--open' : ''}`}>
                      <div className="car-role-details-content">
                        <div className="car-role-details">
                          <p>{role.description}</p>

                          <div className="car-role-desc-section">
                            <h4>What the job looks like:</h4>
                            <ul>
                              {role.tasks.map((task, i) => (
                                <li key={i}>{task}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="car-role-desc-section">
                            <h4>Who this suits:</h4>
                            <ul>
                              {role.requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="car-role-apply-box">
                            <span className="car-role-apply-text">
                              Ready to build or refer someone? Get in touch.
                            </span>
                            <a
                              href={`mailto:sudesh@solar-key.com?subject=Application for ${role.emailSubject}`}
                              className="car-role-apply-btn"
                            >
                              Apply: sudesh@solar-key.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
