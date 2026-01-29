'use client';

import { useState, useEffect } from 'react';

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
    <div className="w-full my-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold text-white mb-2">Incident Response Scenario</h3>
        <p className="text-slate-400">Multi-agency collaboration via ICEMS</p>
      </div>

      {/* Scene Container */}
      <div className="relative w-full max-w-[900px] h-[500px] mx-auto border border-white/10 rounded-3xl bg-slate-950/30 backdrop-blur-md overflow-hidden shadow-2xl">
        
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-20"
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
        <div className={`absolute bottom-[60px] left-[60px] w-[140px] p-4 rounded-xl border transition-all duration-500 z-10 ${
          activeNodes.has('mop') 
            ? 'bg-slate-800/90 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.5)] scale-100 opacity-100' 
            : 'bg-slate-900/60 border-white/10 scale-90 opacity-40'
        }`}>
          <div className="text-3xl mb-2 text-center">📱</div>
          <div className="text-sm font-bold text-white text-center">Public (MOP)</div>
          <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
            {activeNodes.has('mop') ? 'Calling...' : 'Standby'}
          </div>
        </div>

        <div className={`absolute top-[60px] left-[180px] w-[140px] p-4 rounded-xl border transition-all duration-500 z-10 ${
          activeNodes.has('police') 
            ? 'bg-slate-800/90 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)] scale-100 opacity-100' 
            : 'bg-slate-900/60 border-white/10 scale-90 opacity-40'
        }`}>
          <div className="text-3xl mb-2 text-center">👮</div>
          <div className="text-sm font-bold text-white text-center">Police (POL)</div>
          <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
            {activeNodes.has('police') ? 'Active / Lead' : 'Offline'}
          </div>
        </div>

        <div className={`absolute top-[60px] left-[380px] w-[140px] p-4 rounded-xl border transition-all duration-500 z-10 ${
          activeNodes.has('sls') 
            ? 'bg-slate-800/90 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.5)] scale-100 opacity-100' 
            : 'bg-slate-900/60 border-white/10 scale-90 opacity-40'
        }`}>
          <div className="text-3xl mb-2 text-center">🏄</div>
          <div className="text-sm font-bold text-white text-center">Surf Life Saving</div>
          <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
            {activeNodes.has('sls') ? 'Joined' : 'Offline'}
          </div>
        </div>

        <div className={`absolute top-[60px] left-[580px] w-[140px] p-4 rounded-xl border transition-all duration-500 z-10 ${
          activeNodes.has('ambo') 
            ? 'bg-slate-800/90 border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.5)] scale-100 opacity-100' 
            : 'bg-slate-900/60 border-white/10 scale-90 opacity-40'
        }`}>
          <div className="text-3xl mb-2 text-center">🚑</div>
          <div className="text-sm font-bold text-white text-center">Ambulance</div>
          <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
            {activeNodes.has('ambo') ? 'Joined' : 'Offline'}
          </div>
        </div>

        <div className={`absolute bottom-[60px] left-[380px] w-[140px] p-4 rounded-xl border transition-all duration-500 z-10 ${
          activeNodes.has('club') 
            ? 'bg-slate-800/90 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.5)] scale-100 opacity-100' 
            : 'bg-slate-900/60 border-white/10 scale-90 opacity-40'
        }`}>
          <div className="text-3xl mb-2 text-center">🏖️</div>
          <div className="text-sm font-bold text-white text-center">Clubhouse</div>
          <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
            {activeNodes.has('club') ? 'Assets Deployed' : 'Patrol'}
          </div>
        </div>

        <div className={`absolute bottom-[60px] left-[580px] w-[140px] p-4 rounded-xl border transition-all duration-500 z-10 ${
          activeNodes.has('scene') 
            ? 'bg-slate-800/90 border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.5)] scale-100 opacity-100' 
            : 'bg-slate-900/60 border-white/10 scale-90 opacity-40'
        }`}>
          <div className="text-3xl mb-2 text-center">📍</div>
          <div className="text-sm font-bold text-white text-center">Incident Scene</div>
          <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
            {activeNodes.has('scene') ? 'Arrived' : 'Pending'}
          </div>
        </div>

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
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

        <style jsx>{`
          @keyframes drawLine {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>

      {/* Controls */}
      <div className="flex gap-5 mt-8 max-w-[900px] mx-auto items-start">
        <button 
          onClick={startScenario}
          disabled={isRunning}
          className="px-8 py-4 bg-red-500 hover:bg-red-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg font-bold shadow-lg hover:shadow-red-500/40 transition-all flex items-center gap-3"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18.88 18.88A3 3 0 0 1 14.64 23H9.36a3 3 0 0 1-4.24-4.24l.88-.88V12a6 6 0 1 1 12 0v5.88l.88.88z"></path>
          </svg>
          {isRunning ? 'Simulating...' : logs.length > 0 ? 'Re-run Scenario' : 'Report Incident'}
        </button>
        
        {/* Terminal */}
        <div className="flex-1 h-[120px] bg-slate-950 border border-white/10 rounded-lg p-4 font-mono text-sm text-emerald-400 overflow-y-auto shadow-inner">
          {logs.length === 0 && (
            <div className="text-slate-600">Ready for simulation...</div>
          )}
          {logs.map((entry, idx) => (
            <div key={idx} className="mb-1.5 animate-fade-in">
              <span className="text-slate-500 mr-3">{entry.time}</span>
              {entry.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
