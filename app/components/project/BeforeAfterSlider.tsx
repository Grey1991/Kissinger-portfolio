'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface SliderComparison {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

interface BeforeAfterSliderProps {
  section: any;
}

export const BeforeAfterSlider = ({ section }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeComparison, setActiveComparison] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const comparisons = section.beforeAfterSlider.comparisons || [];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };
  const handleClick = (e: React.MouseEvent) => handleMove(e.clientX);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  const currentComparison = comparisons[activeComparison];

  if (!currentComparison) {
    return <div className="text-white">Loading comparison images...</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-16">
      {/* Comparison Selector */}
      {comparisons.length > 1 && (
        <div className="flex gap-3 justify-center mb-8">
          {comparisons.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveComparison(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeComparison === idx
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-white/10'
              }`}
            >
              Comparison {idx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* After Image (Background) */}
        <img
          src={currentComparison.after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before Image (Foreground - Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={currentComparison.before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${(containerRef.current?.offsetWidth || 0) * (100 / sliderPosition)}px` }}
            draggable={false}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-4 bg-slate-800 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-semibold pointer-events-none">
          {currentComparison.beforeLabel || 'Before'}
        </div>
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-semibold pointer-events-none">
          {currentComparison.afterLabel || 'After'}
        </div>
      </div>

      {/* Hint */}
      <p className="text-center text-slate-400 text-sm mt-6 italic">
        Drag the slider or click anywhere to compare
      </p>
    </div>
  );
};
