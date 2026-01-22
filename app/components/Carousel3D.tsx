'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselStep {
  title: string;
  text: string;
  image: string;
  caption?: string;
}

interface Carousel3DProps {
  steps: CarouselStep[];
  title?: string;
}

export const Carousel3D = ({ steps, title }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full py-12">
      {title && (
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
          <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block" />
          {title}
        </h3>
      )}

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* 3D Carousel Container */}
        <div className="relative w-full lg:w-1/2 h-[500px] flex items-center justify-center perspective-1000 overflow-hidden">
          <button
            onClick={goToPrev}
            className="absolute left-4 z-30 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors border border-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 z-30 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors border border-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {steps.map((step, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              
              // Only render visible cards
              if (absOffset > 2) return null;

              let transform = '';
              let zIndex = 0;
              let opacity = 0;
              let scale = 1;

              if (offset === 0) {
                // Active card - center
                transform = 'translateX(0%) translateZ(0px) rotateY(0deg)';
                zIndex = 30;
                opacity = 1;
                scale = 1;
              } else if (offset === 1) {
                // Right card
                transform = 'translateX(60%) translateZ(-200px) rotateY(-25deg)';
                zIndex = 20;
                opacity = 0.6;
                scale = 0.85;
              } else if (offset === -1) {
                // Left card
                transform = 'translateX(-60%) translateZ(-200px) rotateY(25deg)';
                zIndex = 20;
                opacity = 0.6;
                scale = 0.85;
              } else if (offset === 2) {
                // Far right
                transform = 'translateX(80%) translateZ(-350px) rotateY(-35deg)';
                zIndex = 10;
                opacity = 0.3;
                scale = 0.7;
              } else if (offset === -2) {
                // Far left
                transform = 'translateX(-80%) translateZ(-350px) rotateY(35deg)';
                zIndex = 10;
                opacity = 0.3;
                scale = 0.7;
              }

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `${transform} scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => offset !== 0 && goToSlide(index)}
                >
                  <div className="w-64 h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 flex items-center justify-center p-2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <span className="text-sm text-pink-400 font-medium">
              {steps[activeIndex].caption}
            </span>
            <h4 className="text-3xl font-bold text-white">
              {steps[activeIndex].title}
            </h4>
          </div>
          
          <p className="text-slate-300 leading-relaxed text-base">
            {steps[activeIndex].text}
          </p>

          {/* Progress Dots */}
          <div className="flex gap-2 pt-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-pink-500'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Counter */}
          <div className="text-sm text-slate-500">
            <span className="text-white font-medium">{activeIndex + 1}</span> / {steps.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
          perspective-origin: center;
        }
      `}</style>
    </div>
  );
};
