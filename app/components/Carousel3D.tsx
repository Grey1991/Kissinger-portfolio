'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel3D.module.css';

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
    <div className={styles.container}>
      {title && (
        <h3 className={styles.title}>
          <span className={styles.titleDecoration} />
          {title}
        </h3>
      )}

      <div className={styles.mainContent}>
        {/* 3D Carousel Container */}
        <div className={styles.carouselSection}>
          <div className={styles.carouselContainer}>
            <button
              onClick={goToPrev}
              className={`${styles.navButton} ${styles.navButtonLeft}`}
              aria-label="Previous"
            >
              <ChevronLeft className={styles.navIcon} />
            </button>

            <button
              onClick={goToNext}
              className={`${styles.navButton} ${styles.navButtonRight}`}
              aria-label="Next"
            >
              <ChevronRight className={styles.navIcon} />
            </button>

            {/* Cards */}
            <div className={styles.cardsWrapper}>
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
                    className={styles.card}
                    style={{
                      transform: `${transform} scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                    onClick={() => offset !== 0 && goToSlide(index)}
                  >
                    <div className={styles.cardInner}>
                      <img
                        src={step.image}
                        alt={step.title}
                        className={styles.cardImage}
                        draggable={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <span className={styles.caption}>
                {steps[activeIndex].caption}
              </span>
              <h4 className={styles.stepTitle}>
                {steps[activeIndex].title}
              </h4>
            </div>
            
            <p className={styles.description}>
              {steps[activeIndex].text}
            </p>

            {/* Progress Dots */}
            <div className={styles.progressDots}>
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${styles.dot} ${
                    index === activeIndex ? styles.dotActive : styles.dotInactive
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Counter */}
            <div className={styles.counter}>
              <span className={styles.counterCurrent}>{activeIndex + 1}</span> / {steps.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
