'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from './PatternCards.module.css';
import { patternCardsData, type Pattern } from '@/app/data/patternCards';

export default function PatternCards({ onLightboxChange }: { onLightboxChange?: (isOpen: boolean) => void }) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>('');

  const openLightbox = (imageSrc: string, caption: string) => {
    setLightboxImage(imageSrc);
    setLightboxCaption(caption);
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxCaption('');
    onLightboxChange?.(false);
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxImage]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        <span className={styles.titleAccent}/> Design Highlights
      </h3>

      <div className={styles.cardsList}>
        {patternCardsData.map((pattern, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
              <h4 className={styles.cardTitle}>{pattern.title}</h4>
              <p className={styles.cardDescription}>{pattern.description}</p>
              <div className={styles.tags}>
                {pattern.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
            <figure className={styles.media} onClick={() => openLightbox(pattern.imageSrc, pattern.figcaption)}>
              <img 
                src={pattern.imageSrc} 
                alt={pattern.imageAlt}
                className={styles.image}
              />
              <figcaption className={styles.figcaption}>{pattern.figcaption}</figcaption>
              <div className={styles.zoomIndicator}>🔍 Click to zoom</div>
            </figure>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <X size={24} />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Pattern detail" />
            {lightboxCaption && <p className={styles.lightboxCaption}>{lightboxCaption}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
