'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Goal {
  title: string;
  description: string;
  icon: string;
  wireframeImage: string;
  uiImage: string;
  colorClass: string;
  colorVars: {
    bg: string;
    border: string;
    hover: string;
  };
}

const goals: Goal[] = [
  {
    title: "Reduce Friction\nin Logging",
    description: "Streamline incident creation and data capture during live operational work to minimize time away from coordination tasks.",
    icon: "⚡️",
    wireframeImage: "/surfcom%20icems/Incident%20logging%20phase.png",
    uiImage: "/surfcom%20icems/View%20Incident%20Details.png",
    colorClass: "card-1",
    colorVars: {
      bg: "rgba(236, 72, 153, 0.1)",
      border: "rgba(236, 72, 153, 0.3)",
      hover: "#ec4899"
    }
  },
  {
    title: "Improve Update\nVisibility",
    description: "Enhance visibility of incident updates and communication history to reduce back-and-forth and information gaps.",
    icon: "👁️",
    wireframeImage: "/surfcom%20icems/orchestration%20phase.png",
    uiImage: "/surfcom%20icems/View%20Message%20Log.png",
    colorClass: "card-2",
    colorVars: {
      bg: "rgba(59, 130, 246, 0.1)",
      border: "rgba(59, 130, 246, 0.3)",
      hover: "#3b82f6"
    }
  },
  {
    title: "Support Consistent\nData Capture",
    description: "Ensure structured, unambiguous information flows to enable faster coordination and reliable reporting.",
    icon: "☑️",
    wireframeImage: "/surfcom%20icems/Key%20data%20needs.png",
    uiImage: "/surfcom%20icems/View%20ICEMS%20Summary.png",
    colorClass: "card-3",
    colorVars: {
      bg: "rgba(168, 85, 247, 0.1)",
      border: "rgba(168, 85, 247, 0.3)",
      hover: "#a855f7"
    }
  }
];

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
    <div className="goals-interactive-wrapper">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-purple-500 inline-block"/> Goals
      </h3>
      <p className="text-slate-400 mb-8 max-w-3xl text-lg">
        The refresh focused on three core objectives, bridging technical documentation with modern interface design.
      </p>

      <div className="goals-grid">
        {goals.map((goal, index) => (
          <div 
            key={index} 
            className={`goal-card ${goal.colorClass}`}
            style={{
              ['--icon-bg' as any]: goal.colorVars.bg,
              ['--icon-border' as any]: goal.colorVars.border,
              ['--hover-color' as any]: goal.colorVars.hover
            }}
          >
            <div className="visual-stage">
              <div className="status-tag">
                <div className="status-dot"></div>
                <span className="tag-text"></span>
              </div>
              <div className="image-container" onClick={() => openLightbox(goal.wireframeImage, goal.uiImage, goal.title)}>
                <img 
                  src={goal.wireframeImage} 
                  alt={`${goal.title} - Documentation`}
                  className="layer layer-wire"
                />
                <img 
                  src={goal.uiImage} 
                  alt={`${goal.title} - Live UI`}
                  className="layer layer-ui"
                />
                <div className="zoom-hint">🔍</div>
              </div>
            </div>
            <div className="card-content">
              <div className="title-row">
                <div className="icon-box">{goal.icon}</div>
                <h3 className="text-base md:text-lg font-bold leading-tight whitespace-pre-line">
                  {goal.title}
                </h3>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {goal.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mobile-hint">👆 Tap cards to reveal final design</div>

      {/* Lightbox Modal */}
      {lightboxUI && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          
          {/* Toggle Button */}
          <button 
            className="lightbox-toggle" 
            onClick={(e) => { e.stopPropagation(); toggleView(); }}
          >
            <div className="toggle-dot" style={{ background: showWireframe ? '#94a3b8' : '#10b981' }}></div>
            <span className="toggle-text">{showWireframe ? 'DOC SPEC' : 'LIVE UI'}</span>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={showWireframe ? lightboxWireframe! : lightboxUI} 
              alt={lightboxTitle} 
              style={{ filter: showWireframe ? 'grayscale(100%) contrast(1.2)' : 'none' }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .goals-interactive-wrapper {
          width: 100%;
        }

        .goals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1400px;
          width: 100%;
        }

        .goal-card {
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 8px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .goal-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
          border-color: var(--hover-color);
        }

        .visual-stage {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 24px;
          background: #0f172a;
          cursor: crosshair;
        }

        .visual-stage::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.5s;
          z-index: 3;
        }

        .goal-card:hover .visual-stage::after {
          opacity: 0;
        }

        .image-container {
          position: relative;
          width: 100%;
          cursor: zoom-in;
        }

        .zoom-hint {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 4;
        }

        .goal-card:hover .zoom-hint {
          opacity: 1;
        }

        .layer {
          display: block;
          width: 100%;
          height: auto;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .layer-wire {
          opacity: 1;
          transform: scale(1);
          filter: grayscale(100%) contrast(1.2);
          z-index: 1;
          position: relative;
        }

        .layer-ui {
          opacity: 0;
          transform: scale(1.05);
          z-index: 2;
          position: absolute;
          top: 0;
          left: 0;
        }

        .goal-card:hover .layer-wire {
          opacity: 0;
          transform: scale(0.97);
        }

        .goal-card:hover .layer-ui {
          opacity: 1;
          transform: scale(1);
        }

        .status-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          padding: 6px 12px;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #94a3b8;
          transition: background 0.3s;
        }

        .goal-card:hover .status-dot {
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
        }

        .tag-text::after {
          content: "DOC SPEC";
        }

        .goal-card:hover .tag-text::after {
          content: "LIVE UI";
        }

        .card-content {
          padding: 10px 20px 20px 20px;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .icon-box {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          border: 1px solid var(--icon-border);
          background: var(--icon-bg);
        }

        .mobile-hint {
          display: none;
          font-size: 12px;
          color: #94A3B8;
          text-align: center;
          margin-top: 20px;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .mobile-hint {
            display: block;
          }
          
          .goals-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 1200px) {
          .goals-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn 0.2s ease-out;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10001;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .lightbox-toggle {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          padding: 8px 16px;
          border-radius: 24px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 10001;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .lightbox-toggle:hover {
          background: rgba(0, 0, 0, 0.85);
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        .toggle-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .toggle-text {
          font-weight: 500;
        }

        .lightbox-content {
          max-width: 95%;
          max-height: 95%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: zoomIn 0.3s ease-out;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 90vh;
          width: auto;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: filter 0.5s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
