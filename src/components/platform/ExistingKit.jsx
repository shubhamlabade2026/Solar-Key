import React from 'react';

const systems = [
  'Sungrow', 'Huawei FusionSolar', 'ABB/Fimer', 'SMA', 'Schneider Electric',
  'Delta', 'Fronius', 'GoodWe', 'Modbus RTU / TCP', 'DNP3', 'IEC 61850',
  'Campbell Scientific', 'Kipp & Zonen', 'Lufft', 'SEL', 'Siemens SCADA',
];

const ExistingKit = () => (
  <section className="existing-kit" id="integrations-teaser">
    <div className="kit-container">
      <div className="kit-text">
        <h2 className="kit-heading">Works with your existing kit</h2>
        <p className="kit-body">
          SolarKey is vendor-neutral. It reads from the inverters, SCADA, meters and weather stations already on your sites: no rip-and-replace, no new hardware to buy.
        </p>
        <a href="/integrations" className="kit-link" id="kit-see-systems">
          See supported systems →
        </a>
      </div>
      <div className="kit-badges">
        {systems.map((s) => (
          <span key={s} className="kit-badge">{s}</span>
        ))}
      </div>
    </div>
  </section>
);

export default ExistingKit;
