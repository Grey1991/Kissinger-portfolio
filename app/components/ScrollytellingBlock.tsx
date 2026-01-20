'use client';

import { useEffect, useRef, useState } from 'react';
import { ContentSection } from '../types';

interface ScrollytellingBlockProps {
  section: ContentSection;
}

export const ScrollytellingBlock = ({ section }: ScrollytellingBlockProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px', 
        threshold: 0.1
      }
    );

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [section.steps]);

  if (!section.steps) return null;

  return (
    <div className="w-full py-12">
      {section.title && (
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
          <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block" /> 
          {section.title}
        </h3>
      )}
      
      <div className="flex flex-col md:flex-row gap-8 relative">
        {/* Left: Sticky Image Area */}
        <div className="hidden md:flex w-1/2 h-[600px] sticky top-20 items-center justify-center">
          <div className="relative w-full h-full max-w-sm mx-auto overflow-hidden"> 
            {section.steps.map((step, idx) => (
              <img
                key={idx}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                  activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
            <div className="absolute bottom-4 left-0 w-full text-center z-20">
              <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium border border-white/10">
                {section.steps[activeStep]?.caption}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Scrolling Text Area */}
        <div className="w-full md:w-1/2 flex flex-col gap-[600px] py-[200px]"> 
          {section.steps.map((step, idx) => (
            <div 
              key={idx}
              ref={(el) => { stepsRef.current[idx] = el; }}
              data-step-index={idx}
              className={`p-8 rounded-2xl border transition-all duration-500 ${
                activeStep === idx 
                  ? 'bg-slate-800 border-pink-500/50 shadow-lg shadow-pink-500/10 scale-100 opacity-100' 
                  : 'bg-slate-900 border-white/5 scale-95 opacity-40'
              }`}
            >
              {/* Mobile Image Fallback */}
              <div className="md:hidden w-full h-96 mb-6 rounded-lg overflow-hidden border border-white/10 bg-black/50">
                <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
              <p className="text-slate-300 leading-relaxed text-base">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
