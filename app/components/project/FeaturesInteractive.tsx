'use client';

import { useState } from 'react';
import { Smile } from 'lucide-react';
import { iconMap } from '@/app/utils/iconMap';
import styles from './FeaturesInteractive.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface FeaturesInteractiveProps {
  features: Feature[];
}

export const FeaturesInteractive = ({ features }: FeaturesInteractiveProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      {/* Left: Feature List */}
      <div className={styles.featureList}>
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon] || Smile;
          const isActive = idx === activeIndex;
          
          return (
            <div
              key={idx}
              className={`${styles.featureCard} ${
                isActive 
                  ? styles.featureCardActive
                  : styles.featureCardInactive
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className={`${styles.iconBox} ${
                isActive 
                  ? styles.iconBoxActive
                  : styles.iconBoxInactive
              }`}>
                <Icon size={24} strokeWidth={2} />
              </div>
              
              <div className={styles.featureContent}>
                <h4 className={`${styles.featureTitle} ${
                  isActive ? styles.featureTitleActive : styles.featureTitleInactive
                }`}>
                  {feature.title}
                </h4>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right: Sticky Preview */}
      <div className={styles.previewContainer}>
        <div className={styles.previewCard}>
          {/* Device Frame Decoration */}
          <div className={styles.deviceFrame}>
            <div className={styles.deviceDot}></div>
            <div className={`${styles.deviceDot} ${styles.deviceDotPurple}`}></div>
            <div className={`${styles.deviceDot} ${styles.deviceDotBlue}`}></div>
          </div>

          {/* Image Container */}
          <div className={styles.imageContainer}>
            {features.map((feature, idx) => (
              <img
                key={idx}
                src={feature.image}
                alt={feature.title}
                className={`${styles.previewImage} ${
                  idx === activeIndex
                    ? styles.previewImageActive
                    : styles.previewImageInactive
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
