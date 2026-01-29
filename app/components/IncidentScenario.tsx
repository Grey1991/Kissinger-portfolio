'use client';

import { useState, useEffect } from 'react';
import styles from './IncidentScenario.module.css';

export const IncidentScenario = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<Array<{ time: string; message: string }>>([]);
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set(['mop']));
  const [activeSignals, setActiveSignals] = useState<Set<string>>(new Set());

  const log = (message: string) => {
    const time = new Date().toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setLogs(prev => [...prev, { time, message }]);
  };

  const activateNode = (id: string) => {
    setActiveNodes(prev => new Set([...prev, id]));
  };

  const drawLine = (id: string, duration: number = 1000) => {
    setActiveSignals(prev => new Set([...prev, id]));
    return new Promise(resolve => setTimeout(resolve, duration));
  };

  const startScenario = async () => {
    setIsRunning(true);
    setLogs([]);
    setActiveNodes(new Set(['mop']));
    setActiveSignals(new Set());

    // Step 1: MOP Call
    log("Priority 1 Call Initiated (000)...");
    await new Promise(r => setTimeout(r, 500));
    
    // Signal MOP -> Police
    await drawLine('sig-1', 1000);
    
    // Step 2: Police Receive
    activateNode('police');
    log("POLICE: Incident acknowledged. Creating ICEMS room.");
    await new Promise(r => setTimeout(r, 800));

    // Step 3: Police Invite SLS
    log("POLICE: Inviting Surf Life Saving (SLSNSW)...");
    await drawLine('sig-2', 1000);
    activateNode('sls');
    log("SLSNSW: Connected to incident room.");
    await new Promise(r => setTimeout(r, 800));

    // Step 4: SLS Invite Ambulance
    log("SLSNSW: Requesting Ambulance support via ICEMS link...");
    await drawLine('sig-3', 1000);
    activateNode('ambo');
    log("AMBULANCE: Connected. Dispatching units.");
    await new Promise(r => setTimeout(r, 800));

    // Step 5: Simultaneous Dispatch
    log("ICEMS: All agencies synced. Executing response.");
    
    drawLine('sig-4a', 1500);
    drawLine('sig-4b', 1500);
    
    await new Promise(r => setTimeout(r, 500));
    activateNode('club');
    log("SLSNSW: Informing closest clubhouse. Lifeguards responding.");
    
    await new Promise(r => setTimeout(r, 1000));
    activateNode('scene');
    log("AMBULANCE: Unit en route to location.");
    
    await new Promise(r => setTimeout(r, 500));
    log("MISSION: Coordinated response active.");
    
    setIsRunning(false);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Incident Response Scenario</h3>
        <p className={styles.subtitle}>Multi-agency collaboration via ICEMS</p>
      </div>

      {/* Scene Container */}
      <div className={styles.sceneContainer}>
        
        {/* Background Grid */}
        <div 
          className={styles.backgroundGrid}
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.05), transparent 25%),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px'
          }}
        />

        {/* Nodes */}
        <div className={`${styles.node} ${styles.nodeMop} ${
          activeNodes.has('mop') 
            ? styles.nodeActive 
            : styles.nodeInactive
        }`}>
          <div className={styles.nodeIcon}>📱</div>
          <div className={styles.nodeTitle}>Public (MOP)</div>
          <div className={styles.nodeStatus}>
            {activeNodes.has('mop') ? 'Calling...' : 'Standby'}
          </div>
        </div>

        <div className={`${styles.node} ${styles.nodePolice} ${
          activeNodes.has('police') 
            ? styles.nodeActive 
            : styles.nodeInactive
        }`}>
          <div className={styles.nodeIcon}>👮</div>
          <div className={styles.nodeTitle}>Police (POL)</div>
          <div className={styles.nodeStatus}>
            {activeNodes.has('police') ? 'Active / Lead' : 'Offline'}
          </div>
        </div>

        <div className={`${styles.node} ${styles.nodeSls} ${
          activeNodes.has('sls') 
            ? styles.nodeActive 
            : styles.nodeInactive
        }`}>
          <div className={styles.nodeIcon}>🏄</div>
          <div className={styles.nodeTitle}>Surf Life Saving</div>
          <div className={styles.nodeStatus}>
            {activeNodes.has('sls') ? 'Joined' : 'Offline'}
          </div>
        </div>

        <div className={`${styles.node} ${styles.nodeAmbo} ${
          activeNodes.has('ambo') 
            ? styles.nodeActive 
            : styles.nodeInactive
        }`}>
          <div className={styles.nodeIcon}>🚑</div>
          <div className={styles.nodeTitle}>Ambulance</div>
          <div className={styles.nodeStatus}>
            {activeNodes.has('ambo') ? 'Joined' : 'Offline'}
          </div>
        </div>

        <div className={`${styles.node} ${styles.nodeClub} ${
          activeNodes.has('club') 
            ? styles.nodeActive 
            : styles.nodeInactive
        }`}>
          <div className={styles.nodeIcon}>🏖️</div>
          <div className={styles.nodeTitle}>Clubhouse</div>
          <div className={styles.nodeStatus}>
            {activeNodes.has('club') ? 'Assets Deployed' : 'Patrol'}
          </div>
        </div>

        <div className={`${styles.node} ${styles.nodeScene} ${
          activeNodes.has('scene') 
            ? styles.nodeActive 
            : styles.nodeInactive
        }`}>
          <div className={styles.nodeIcon}>📍</div>
          <div className={styles.nodeTitle}>Incident Scene</div>
          <div className={styles.nodeStatus}>
            {activeNodes.has('scene') ? 'Arrived' : 'Pending'}
          </div>
        </div>

        {/* SVG Connections */}
        <svg className={styles.svgConnections}>
          {/* Background Dashed Lines */}
          <path d="M130,390 L200,160" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 5" fill="none" />
          <path d="M250,130 L380,130" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 5" fill="none" />
          <path d="M450,130 L580,130" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 5" fill="none" />
          <path d="M450,130 L450,390" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 5" fill="none" />
          <path d="M650,130 L650,390" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 5" fill="none" />

          {/* Animated Signal Lines */}
          {activeSignals.has('sig-1') && (
            <path 
              d="M130,390 L200,160" 
              stroke="rgb(168,85,247)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              fill="none"
              strokeDasharray="300"
              strokeDashoffset="300"
              style={{
                animation: 'drawLine 1s linear forwards'
              }}
            />
          )}
          {activeSignals.has('sig-2') && (
            <path 
              d="M250,130 L380,130" 
              stroke="rgb(59,130,246)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              fill="none"
              strokeDasharray="130"
              strokeDashoffset="130"
              style={{
                animation: 'drawLine 1s linear forwards'
              }}
            />
          )}
          {activeSignals.has('sig-3') && (
            <path 
              d="M450,130 L580,130" 
              stroke="rgb(234,179,8)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              fill="none"
              strokeDasharray="130"
              strokeDashoffset="130"
              style={{
                animation: 'drawLine 1s linear forwards'
              }}
            />
          )}
          {activeSignals.has('sig-4a') && (
            <path 
              d="M450,130 L450,390" 
              stroke="rgb(234,179,8)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              fill="none"
              strokeDasharray="260"
              strokeDashoffset="260"
              style={{
                animation: 'drawLine 1.5s linear forwards'
              }}
            />
          )}
          {activeSignals.has('sig-4b') && (
            <path 
              d="M650,130 L650,390" 
              stroke="rgb(239,68,68)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              fill="none"
              strokeDasharray="260"
              strokeDashoffset="260"
              style={{
                animation: 'drawLine 1.5s linear forwards'
              }}
            />
          )}
        </svg>

      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button 
          onClick={startScenario}
          disabled={isRunning}
          className={styles.startButton}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18.88 18.88A3 3 0 0 1 14.64 23H9.36a3 3 0 0 1-4.24-4.24l.88-.88V12a6 6 0 1 1 12 0v5.88l.88.88z"></path>
          </svg>
          {isRunning ? 'Simulating...' : logs.length > 0 ? 'Re-run Scenario' : 'Report Incident'}
        </button>
        
        {/* Terminal */}
        <div className={styles.terminal}>
          {logs.length === 0 && (
            <div className={styles.terminalEmpty}>Ready for simulation...</div>
          )}
          {logs.map((entry, idx) => (
            <div key={idx} className={styles.logEntry}>
              <span className={styles.logTime}>{entry.time}</span>
              {entry.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
