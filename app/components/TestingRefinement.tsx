'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { testingRefinementData } from '@/app/data/testingRefinementData';
import styles from './TestingRefinement.module.css';

export const TestingRefinement = () => {
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2'>('v1');
  const data = testingRefinementData;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        {/* Left: Narrative Column */}
        <div className={styles.narrativeColumn}>
          <div>
            <h2 className={styles.title}>
              <span className={styles.titleLine} /> 
              {data.header.title}
            </h2>
            <p className={styles.subtitle}>{data.header.subtitle}</p>
          </div>

          {/* Problem Card */}
          <button
            onClick={() => setActiveVersion('v1')}
            className={`${styles.card} ${activeVersion === 'v1' ? styles.problemActive : styles.cardInactive}`}
          >
            <div className={styles.cardHeader}>
              <AlertCircle className={styles.problemIcon} size={24} />
              <h3 className={styles.problemTitle}>{data.problem.title}</h3>
            </div>
            <p className={styles.cardText}>
              {data.problem.description}
            </p>
          </button>

          {/* Solution Card */}
          <button
            onClick={() => setActiveVersion('v2')}
            className={`${styles.card} ${activeVersion === 'v2' ? styles.solutionActive : styles.cardInactive}`}
          >
            <div className={styles.cardHeader}>
              <CheckCircle className={styles.solutionIcon} size={24} />
              <h3 className={styles.solutionTitle}>{data.solution.title}</h3>
            </div>
            <p className={styles.cardText}>
              We introduced a <strong className={styles.highlight}>Cinema-style Seat Map</strong>. Users can now select specific time slots and visually pick their exact table.
            </p>
          </button>
        </div>

        {/* Right: Phone Simulator */}
        <div className={styles.phoneSimulatorWrapper}>
          <div className={styles.phoneContainer}>
            {/* Phone Frame */}
            <div className={styles.phoneFrame}>
              
              {/* Dynamic Island */}
              <div className={styles.dynamicIsland} />

              {/* Screen V1: Confusing Grid */}
              <div className={`${styles.phoneScreen} ${activeVersion === 'v1' ? styles.screenActive : styles.screenInactive}`}>
                <img 
                  src={data.images.v1}
                  alt={data.images.v1Alt}
                  className={styles.screenImage}
                />
              </div>

              {/* Screen V2: Visual Map */}
              <div className={`${styles.phoneScreen} ${activeVersion === 'v2' ? styles.screenActive : styles.screenInactive}`}>
                <img 
                  src={data.images.v2}
                  alt={data.images.v2Alt}
                  className={styles.screenImage}
                />
              </div>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className={styles.toggleContainer}>
            <button
              onClick={() => setActiveVersion('v1')}
              className={`${styles.toggleButton} ${activeVersion === 'v1' ? styles.toggleActive : styles.toggleInactive}`}
            >
              {data.toggleLabels.v1}
            </button>
            <button
              onClick={() => setActiveVersion('v2')}
              className={`${styles.toggleButton} ${activeVersion === 'v2' ? styles.toggleActive : styles.toggleInactive}`}
            >
              {data.toggleLabels.v2}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
