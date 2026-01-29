'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const TestingRefinement = () => {
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2'>('v1');

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        
        {/* Left: Narrative Column */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
              Testing & Refinement
            </h2>
            <p className="text-xl text-slate-300 font-semibold">From Confusion to Clarity</p>
          </div>

          {/* Problem Card */}
          <button
            onClick={() => setActiveVersion('v1')}
            className={`p-6 rounded-2xl border-l-4 transition-all duration-400 text-left ${
              activeVersion === 'v1'
                ? 'border-red-500 bg-slate-800/50 backdrop-blur-sm border border-white/10 opacity-100 translate-x-2'
                : 'border-transparent opacity-40 blur-[1px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="text-red-400" size={24} />
              <h3 className="text-xl font-bold text-red-400">The Problem (V1)</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Users were anxious. The abstract list of seats meant they couldn&apos;t visualize where they would be sitting, leading to drop-offs.
            </p>
          </button>

          {/* Solution Card */}
          <button
            onClick={() => setActiveVersion('v2')}
            className={`p-6 rounded-2xl border-l-4 transition-all duration-400 text-left ${
              activeVersion === 'v2'
                ? 'border-emerald-500 bg-slate-800/50 backdrop-blur-sm border border-white/10 opacity-100 translate-x-2'
                : 'border-transparent opacity-40 blur-[1px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="text-emerald-400" size={24} />
              <h3 className="text-xl font-bold text-emerald-400">The Solution (V2)</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We introduced a <strong className="text-white">Cinema-style Seat Map</strong>. Users can now select specific time slots and visually pick their exact table.
            </p>
          </button>
        </div>

        {/* Right: Phone Simulator */}
        <div className="relative flex flex-col items-center lg:order-last order-first">
          <div className="relative w-[320px] h-[640px]" style={{ perspective: '1000px' }}>
            {/* Phone Frame */}
            <div className="w-full h-full bg-slate-950 rounded-[40px] border-[8px] border-slate-700 shadow-2xl overflow-hidden relative transition-transform duration-600">
              
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-full z-20" />

              {/* Screen V1: Confusing Grid */}
              <div 
                className={`absolute inset-0 bg-white pt-16 transition-opacity duration-400 ${
                  activeVersion === 'v1' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img 
                  src="/jr food court/Select Seats Page 1.png"
                  alt="Before: Confusing seat selection"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Screen V2: Visual Map */}
              <div 
                className={`absolute inset-0 bg-white pt-16 transition-opacity duration-400 ${
                  activeVersion === 'v2' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img 
                  src="/jr food court/Select Seat Page 2.png"
                  alt="After: Visual seat map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm p-1 rounded-full flex border border-white/10">
            <button
              onClick={() => setActiveVersion('v1')}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeVersion === 'v1'
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-transparent text-slate-400'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActiveVersion('v2')}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeVersion === 'v2'
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-transparent text-slate-400'
              }`}
            >
              After
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
