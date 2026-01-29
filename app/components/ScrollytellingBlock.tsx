'use client';

import { useState } from 'react';
import { ContentSection } from '../types';

interface ScrollytellingBlockProps {
  section: ContentSection;
}

export const ScrollytellingBlock = ({ section }: ScrollytellingBlockProps) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!section.steps) return null;

  return (
    <div className="w-full py-12">
      {section.title && (
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
          <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block" /> 
          {section.title}
        </h3>
      )}
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {section.steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeStep === idx
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 scale-105' 
                : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-white/10'
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: Image Display */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/5] max-h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 shadow-2xl">
            {section.steps.map((step, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  activeStep === idx 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-95 z-0'
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}
            
            {/* Caption Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20 shadow-lg">
                {section.steps[activeStep]?.caption}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Text Description */}
        <div className="w-full lg:w-1/2">
          <div className="relative min-h-[300px]">
            {section.steps.map((step, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeStep === idx 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-8 z-0 pointer-events-none'
                }`}
              >
                <div className="p-8 rounded-2xl bg-slate-800/50 border border-pink-500/30 shadow-xl backdrop-blur-sm">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-pink-500/10 text-pink-400 text-xs font-semibold rounded-full border border-pink-500/20">
                      Step {idx + 1} of {section.steps?.length}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-base">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex gap-2 mt-8 justify-center lg:justify-start">
            {section.steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeStep
                    ? 'w-12 bg-gradient-to-r from-pink-500 to-purple-600'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
