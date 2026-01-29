'use client';

import { useState, useRef } from 'react';
import styles from './ConsoleNavigation.module.css';

interface ConsoleNavigationProps {
  section: any;
}

export const ConsoleNavigation = ({ section }: ConsoleNavigationProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateIndicatorPosition = (index: number) => {
    setActiveIndex(index);
    const offset = navRefs.current[index]?.offsetTop || 0;
    setIndicatorTop(offset);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.titleDecoration}/> {section.title}
      </h3>
      <p className={styles.intro}>{section.intro}</p>

      <div className={styles.grid}>
        <div className={styles.navSection}>
          <div className={styles.divider} />
          <div 
            className={styles.indicator}
            style={{ boxShadow: '0 0 10px rgb(34 211 238)', top: indicatorTop }}
          />
          {section.consoleNav.items.map((item: any, idx: number) => (
            <div
              key={idx}
              ref={el => { navRefs.current[idx] = el; }}
              className={`${styles.navItem} ${
                idx === activeIndex ? styles.navItemActive : styles.navItemInactive
              }`}
              onMouseEnter={() => updateIndicatorPosition(idx)}
            >
              <span>{item.navTitle}</span>
              <span className={`${styles.navNumber} ${
                idx === activeIndex ? styles.navNumberActive : styles.navNumberInactive
              }`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.contentSection}>
          {section.consoleNav.items.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${styles.contentItem} ${
                idx === activeIndex ? styles.contentItemActive : styles.contentItemInactive
              }`}
            >
              <div className={styles.tag}>
                {item.tag}
              </div>
              <h3 className={styles.displayTitle}>
                {item.displayTitle}
              </h3>
              <p className={styles.description}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
