'use client';

import React from 'react';

export default function HiringBanner() {
  return (
    <div className="comp-hiring">
      <div className="comp-hiring-container">
        <div className="comp-hiring-box">
          <div className="comp-hiring-text">
            <h3 className="comp-hiring-h3">We're hiring across engineering, data and field operations.</h3>
            <p className="comp-hiring-p">Help us build the operating system for renewables.</p>
          </div>
          <a href="#" className="comp-hiring-btn">
            See open roles
          </a>
        </div>
      </div>
    </div>
  );
}
