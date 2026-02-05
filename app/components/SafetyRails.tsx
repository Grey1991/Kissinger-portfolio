'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Shield, AlertTriangle } from 'lucide-react';
import Lightbox from './Lightbox';

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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    onLightboxChange?.(true);
  };

  const closeImage = () => {
    setSelectedImageIndex(-1);
    onLightboxChange?.(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % cards.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="space-y-8">
      {/* Title and Note */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-purple-500 inline-block"/> Risk Scenarios &amp; Solutions
          <span className="ml-2 px-3 py-1 text-xs font-normal text-gray-400 bg-gray-800/50 border border-gray-700/50 rounded-full">
            Post-testing iteration
          </span>
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

            {/* Supporting Screenshot */}
            <div className="space-y-3 pt-2">
              <div
                className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors group"
                onClick={() => openImage(index)}
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

      {/* Lightbox */}
      <Lightbox
        isOpen={selectedImageIndex >= 0}
        images={cards.map(card => card.image)}
        currentIndex={selectedImageIndex >= 0 ? selectedImageIndex : 0}
        onClose={closeImage}
        onNext={nextImage}
        onPrev={prevImage}
        caption={selectedImageIndex >= 0 ? cards[selectedImageIndex].caption : ''}
        alt="Risk scenario screenshot"
      />
    </div>
  );
};

export default SafetyRails;
