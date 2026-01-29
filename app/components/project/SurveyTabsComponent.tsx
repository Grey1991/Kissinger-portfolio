'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './SurveyTabsComponent.module.css';

interface TabData {
  label: string;
  images: string[];
}

interface SurveyTabsComponentProps {
  tabs: TabData[];
  caption?: string;
  onLightboxChange?: (isOpen: boolean) => void;
}

export const SurveyTabsComponent = ({ tabs, caption, onLightboxChange }: SurveyTabsComponentProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const currentImages = tabs[activeTab]?.images || [];

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    onLightboxChange?.(false);
  };

  const nextImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, currentImages.length]);

  return (
    <div className={styles.container}>
      {/* Tab Buttons */}
      <div className={styles.tabButtons}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`${styles.tabButton} ${
              activeTab === idx
                ? styles.tabButtonActive
                : styles.tabButtonInactive
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content - Image Grid */}
      <div className={styles.grid}>
        {currentImages.map((src, idx) => (
          <div
            key={idx}
            className={styles.gridItem}
            onClick={() => openLightbox(idx)}
          >
            <img
              src={src}
              alt={`${tabs[activeTab].label} - Image ${idx + 1}`}
              className={styles.gridImage}
            />
            <div className={styles.gridOverlay}>
              <div className={styles.gridHint}>
                Click to enlarge
              </div>
            </div>
          </div>
        ))}
      </div>

      {caption && (
        <p className={styles.caption}>
          {caption}
        </p>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className={styles.lightbox}
          onClick={closeLightbox}
        >
          <div className={styles.lightboxWrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageContainer}>
              <img 
                src={currentImages[lightboxImageIndex]}
                alt={`${tabs[activeTab].label} - Image ${lightboxImageIndex + 1}`}
                className={styles.lightboxImage}
              />
              
              {/* Close button on image */}
              <button
                onClick={closeLightbox}
                className={styles.lightboxCloseBtn}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Navigation Buttons */}
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className={`${styles.navButton} ${styles.navButtonPrev}`}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                
                <button
                  onClick={nextImage}
                  className={`${styles.navButton} ${styles.navButtonNext}`}
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
            
            {/* Bottom hint with counter */}
            <div className={styles.hint}>
              <div className={styles.hintContent}>
                <span className={styles.hintCounter}>{lightboxImageIndex + 1} / {currentImages.length}</span>
                <span className={styles.hintSeparator}>•</span>
                <span>Click anywhere or press ESC to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
