'use client';

import React, { useState, useEffect, useRef } from 'react';

const initialLogs = [
  { type: 'info', text: 'Initializing SolarKey Edge Stack on ARMv8 architecture...' },
  { type: 'info', text: 'Loading device drivers: Modbus RTU, Modbus TCP, OPC-UA, MQTT.' },
  { type: 'success', text: 'Connected to RS-485 Modbus Gateway at 192.168.1.150:502' },
  { type: 'success', text: 'AWS IoT Core MQTT Connection established. Quality of Service (QoS): 1' },
  { type: 'info', text: 'Local SQLite outbox database active. Cache limit: 24h offline buffer.' },
  { type: 'info', text: 'Device list loaded: Inverter_1, Inverter_2, Inverter_3, Main_Meter.' },
  { type: 'success', text: 'SolarKey Edge Node active. Telemetry streaming at 1.0s interval.' }
];

export default function TerminalEmulator() {
  const [logs, setLogs] = useState(initialLogs);
  const [isTyping, setIsTyping] = useState(false);
  const logsEndRef = useRef(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLogWithDelay = async (newLogs) => {
    setIsTyping(true);
    for (let i = 0; i < newLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setLogs((prev) => [...prev, newLogs[i]]);
    }
    setIsTyping(false);
  };

  const handleSimulateAnomaly = () => {
    if (isTyping) return;
    const anomalyLogs = [
      { type: 'warn', text: '[WARNING] Inverter_3: Performance Ratio dropped below 75% threshold (Current PR: 71.4%)' },
      { type: 'info', text: '[INFO] Local diagnostics running... Analyzing active power vs solar irradiance...' },
      { type: 'warn', text: '[WARNING] Diagnosis: String drift detected on DC inputs string #4 & #5' },
      { type: 'info', text: '[INFO] Triggering SolarKey Cloud Orchestration Agent...' },
      { type: 'info', text: '[INFO] Auto-generating Work Order WO #1043: "DC String Drift Resolution - Inverter 3"' },
      { type: 'success', text: '[SUCCESS] WO #1043 dispatched. Status: Routed to Pune Field Team A. SLA: 2h' }
    ];
    addLogWithDelay(anomalyLogs);
  };

  const handleModbusPoll = () => {
    if (isTyping) return;
    const pollLogs = [
      { type: 'info', text: 'solarkey-edge:~$ modbus-poll --all-devices' },
      { type: 'info', text: 'Querying devices via RS-485 gateway...' },
      { type: 'info', text: 'Inverter_1: Active Power 48.2 kW, Temp 42.1°C, PR 88.4% (Normal)' },
      { type: 'info', text: 'Inverter_2: Active Power 47.9 kW, Temp 41.8°C, PR 88.2% (Normal)' },
      { type: 'warn', text: 'Inverter_3: Active Power 32.1 kW, Temp 44.5°C, PR 71.4% (Warning - DC String Drift)' },
      { type: 'info', text: 'Main_Meter: Grid Frequency 50.02 Hz, Voltage L1-L2 415.2 V, Current 82.5 A' },
      { type: 'success', text: 'Polling cycle completed. All telemetry synced to AWS IoT Core.' }
    ];
    addLogWithDelay(pollLogs);
  };

  const handleClearLogs = () => {
    if (isTyping) return;
    setLogs([]);
  };

  return (
    <section className="plat-terminal-section">
      <div className="plat-terminal-container">
        <div className="plat-terminal-header-text">
          <span className="plat-terminal-eyebrow">Interactive Demo</span>
          <h2 className="plat-terminal-title">Watch the Edge Node in action</h2>
          <p className="plat-terminal-desc">
            SolarKey runs locally on your sites. Use the interactive shell below to simulate 
            Modbus polling cycles and see how agentic AI catches anomalies.
          </p>
        </div>

        <div className="plat-terminal-box">
          {/* Title Bar */}
          <div className="plat-terminal-bar">
            <div className="plat-terminal-dots">
              <span className="plat-dot plat-dot--red" />
              <span className="plat-dot plat-dot--yellow" />
              <span className="plat-dot plat-dot--green" />
            </div>
            <div className="plat-terminal-title-text">
              solarkey-edge-node:~ (MQTT Active)
            </div>
            <div style={{ width: '52px' }} /> {/* spacer */}
          </div>

          {/* Terminal Logs */}
          <div className="plat-terminal-logs">
            {logs.map((log, index) => (
              <div key={index} className={`plat-log-line plat-log-line--${log.type}`}>
                <span className="plat-log-prefix">&gt;</span>
                <span className="plat-log-text">{log.text}</span>
              </div>
            ))}
            {isTyping && (
              <div className="plat-log-line plat-log-line--typing">
                <span className="plat-log-cursor">█</span>
                <span className="plat-log-text" style={{ marginLeft: '4px', opacity: 0.7 }}>Agent thinking...</span>
              </div>
            )}
            <div ref={logsEndRef} />
          </div>

          {/* User Controls Panel */}
          <div className="plat-terminal-controls">
            <span className="plat-terminal-prompt">solarkey-edge:~$</span>
            <div className="plat-terminal-btns">
              <button
                onClick={handleSimulateAnomaly}
                disabled={isTyping}
                className="plat-term-btn plat-term-btn--warn"
              >
                Simulate Anomaly
              </button>
              <button
                onClick={handleModbusPoll}
                disabled={isTyping}
                className="plat-term-btn"
              >
                Run Modbus Poll
              </button>
              <button
                onClick={handleClearLogs}
                disabled={isTyping}
                className="plat-term-btn plat-term-btn--clear"
              >
                Clear Screen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
