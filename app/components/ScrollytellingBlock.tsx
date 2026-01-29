'use client';

import { useState } from 'react';
import { ContentSection } from '../types';
import styles from './ScrollytellingBlock.module.css';

interface ScrollytellingBlockProps {
  section: ContentSection;
}

export const ScrollytellingBlock = ({ section }: ScrollytellingBlockProps) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!section.steps) return null;

  return (
    <div className={styles.container}>
      {section.title && (
        <h3 className={styles.title}>
          <span className={styles.titleDecoration} /> 
          {section.title}
        </h3>
      )}
      
      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        {section.steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`${styles.tabButton} ${
              activeStep === idx ? styles.tabButtonActive : styles.tabButtonInactive
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className={styles.contentArea}>
        {/* Left: Image Display */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {section.steps.map((step, idx) => (
              <div
                key={idx}
                className={`${styles.imageSlide} ${
                  activeStep === idx ? styles.imageSlideActive : styles.imageSlideInactive
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className={styles.slideImage}
                />
              </div>
            ))}
            
            {/* Caption Badge */}
            <div className={styles.captionBadge}>
              {section.steps[activeStep]?.caption}
            </div>
          </div>
        </div>

        {/* Right: Text Description */}
        <div className={styles.textSection}>
          <div className={styles.textContent}>
            {section.steps.map((step, idx) => (
              <div 
                key={idx}
                className={`${styles.textSlide} ${
                  activeStep === idx ? styles.textSlideActive : styles.textSlideInactive
                }`}
              >
                <div className={styles.textCard}>
                  <div className={styles.stepBadge}>
                    Step {idx + 1} of {section.steps?.length}
                  </div>
                  <h4 className={styles.stepTitle}>
                    {step.title}
                  </h4>
                  <p className={styles.stepDescription}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className={styles.progressIndicator}>
            {section.steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`${styles.progressDot} ${
                  idx === activeStep ? styles.progressDotActive : styles.progressDotInactive
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
