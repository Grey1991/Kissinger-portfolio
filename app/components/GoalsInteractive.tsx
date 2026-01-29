'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { goalsData } from '@/app/data/goalsData';
import styles from './GoalsInteractive.module.css';

export default function GoalsInteractive({ onLightboxChange }: { onLightboxChange?: (isOpen: boolean) => void }) {
  const [lightboxWireframe, setLightboxWireframe] = useState<string | null>(null);
  const [lightboxUI, setLightboxUI] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const [showWireframe, setShowWireframe] = useState(false);

  const openLightbox = (wireframeSrc: string, uiSrc: string, title: string) => {
    setLightboxWireframe(wireframeSrc);
    setLightboxUI(uiSrc);
    setLightboxTitle(title);
    setShowWireframe(false); // Default to showing UI
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setLightboxWireframe(null);
    setLightboxUI(null);
    setLightboxTitle('');
    setShowWireframe(false);
    onLightboxChange?.(false);
  };

  const toggleView = () => {
    setShowWireframe(!showWireframe);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.titleDecoration}/> Goals
      </h3>
      <p className={styles.subtitle}>
        The refresh focused on three core objectives, bridging technical documentation with modern interface design.
      </p>

      <div className={styles.grid}>
        {goalsData.map((goal, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles[goal.colorClass]}`}
            style={{
              ['--icon-bg' as any]: goal.colorVars.bg,
              ['--icon-border' as any]: goal.colorVars.border,
              ['--hover-color' as any]: goal.colorVars.hover
            }}
          >
            <div className={styles.visualStage}>
              <div className={styles.statusTag}>
                <div className={styles.statusDot}></div>
                <span className={styles.tagText}></span>
              </div>
              <div className={styles.imageContainer} onClick={() => openLightbox(goal.wireframeImage, goal.uiImage, goal.title)}>
                <img 
                  src={goal.wireframeImage} 
                  alt={`${goal.title} - Documentation`}
                  className={`${styles.layer} ${styles.layerWire}`}
                />
                <img 
                  src={goal.uiImage} 
                  alt={`${goal.title} - Live UI`}
                  className={`${styles.layer} ${styles.layerUi}`}
                />
                <div className={styles.zoomHint}>🔍</div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                <div className={styles.iconBox}>{goal.icon}</div>
                <h3 className={styles.cardTitle}>
                  {goal.title}
                </h3>
              </div>
              <p className={styles.description}>
                {goal.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mobileHint}>👆 Tap cards to reveal final design</div>

      {/* Lightbox Modal */}
      {lightboxUI && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <X size={24} />
          </button>
          
          {/* Toggle Button */}
          <button 
            className={styles.lightboxToggle} 
            onClick={(e) => { e.stopPropagation(); toggleView(); }}
          >
            <div className={styles.toggleDot} style={{ background: showWireframe ? '#94a3b8' : '#10b981' }}></div>
            <span className={styles.toggleText}>{showWireframe ? 'DOC SPEC' : 'LIVE UI'}</span>
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={showWireframe ? lightboxWireframe! : lightboxUI} 
              alt={lightboxTitle} 
              style={{ filter: showWireframe ? 'grayscale(100%) contrast(1.2)' : 'none' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
