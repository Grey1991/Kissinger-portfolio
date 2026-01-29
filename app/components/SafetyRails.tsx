'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Shield, AlertTriangle } from 'lucide-react';

interface SafetyRailCard {
  risk: string;
  guardrail: string;
  image: string;
  caption: string;
  chips?: string[];
}

interface SafetyRailsProps {
  cards: SafetyRailCard[];
  onLightboxChange?: (isOpen: boolean) => void;
}

const SafetyRails: React.FC<SafetyRailsProps> = ({ cards, onLightboxChange }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
    onLightboxChange?.(true);
  };

  const closeImage = () => {
    setSelectedImage(null);
    onLightboxChange?.(false);
  };

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeImage();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedImage, closeImage]);

  return (
    <div className="space-y-8">
      {/* Title and Note */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-purple-500 inline-block"/> Risk Scenarios &amp; Solutions (Post-testing Iteration)
        </h3>
        <p className="text-sm text-gray-400 italic">
          These solutions were refined through usability feedback and design iteration. Prototype only — not yet implemented.
        </p>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-5 hover:bg-white/[0.07] transition-all duration-300"
          >
            {/* Risk Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-md text-xs font-medium text-red-400">
                  <AlertTriangle size={12} />
                  Risk
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.risk}
              </p>
            </div>

            {/* Solution Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-xs font-medium text-emerald-400">
                  <Shield size={12} />
                  Solution
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.guardrail}
              </p>
            </div>

            {/* Optional Chips */}
            {card.chips && card.chips.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {card.chips.map((chip, chipIndex) => (
                  <span
                    key={chipIndex}
                    className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {/* Supporting Screenshot */}
            <div className="space-y-3 pt-2">
              <div
                className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors group"
                onClick={() => openImage(card.image)}
              >
                <Image
                  src={card.image}
                  alt={card.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {card.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          onClick={closeImage}
        >
          <button
            className="absolute top-4 left-4 text-white/80 hover:text-white text-4xl font-light leading-none z-10"
            onClick={closeImage}
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyRails;
