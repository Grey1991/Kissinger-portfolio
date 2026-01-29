'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Shield, AlertTriangle } from 'lucide-react';
import styles from './SafetyRails.module.css';

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

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    onLightboxChange?.(false);
  }, [onLightboxChange]);

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
    <div className={styles.container}>
      {/* Title and Note */}
      <div className={styles.headerSection}>
        <h3 className={styles.title}>
          <span className={styles.titleDecoration}/> Risk Scenarios &amp; Solutions (Post-testing Iteration)
        </h3>
        <p className={styles.note}>
          These solutions were refined through usability feedback and design iteration. Prototype only — not yet implemented.
        </p>
      </div>

      {/* 6-Card Grid */}
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
          >
            {/* Risk Section */}
            <div className={styles.section}>
              <div className={styles.tagRow}>
                <span className={`${styles.tag} ${styles.tagRisk}`}>
                  <AlertTriangle size={12} />
                  Risk
                </span>
              </div>
              <p className={styles.text}>
                {card.risk}
              </p>
            </div>

            {/* Solution Section */}
            <div className={styles.section}>
              <div className={styles.tagRow}>
                <span className={`${styles.tag} ${styles.tagSolution}`}>
                  <Shield size={12} />
                  Solution
                </span>
              </div>
              <p className={styles.text}>
                {card.guardrail}
              </p>
            </div>

            {/* Optional Chips */}
            {card.chips && card.chips.length > 0 && (
              <div className={styles.chips}>
                {card.chips.map((chip, chipIndex) => (
                  <span
                    key={chipIndex}
                    className={styles.chip}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {/* Supporting Screenshot */}
            <div className={styles.screenshotSection}>
              <div
                className={styles.imageWrapper}
                onClick={() => openImage(card.image)}
              >
                <Image
                  src={card.image}
                  alt={card.caption}
                  fill
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>
              <p className={styles.caption}>
                {card.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeImage}
        >
          <button
            className={styles.lightboxClose}
            onClick={closeImage}
          >
            ×
          </button>
          <div className={styles.lightboxContainer}>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyRails;
