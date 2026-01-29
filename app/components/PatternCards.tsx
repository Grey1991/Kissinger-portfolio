'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Pattern {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  figcaption: string;
  tags: string[];
}

const patterns: Pattern[] = [
  {
    title: "Searchable Tables + Persistent Filters",
    description: "Incident and message tables support instant search and column filters, enabling operators to locate specific records without navigating across pages.",
    imageSrc: "/surfcom%20icems/View%20Incidents%20Summary.png",
    imageAlt: "Incidents table with search and filter controls",
    figcaption: "Incident list view with search bar and status filters",
    tags: ["Fast Retrieval", "Operational Triage", "Filter + Search"]
  },
  {
    title: "Status Visibility with Coloured Pills",
    description: "Color-coded status pills (awaiting acknowledgement / acknowledged / closed) provide at-a-glance incident state without requiring detail inspection.",
    imageSrc: "/surfcom%20icems/View%20ICEMS%20Summary.png",
    imageAlt: "ICEMS summary with status pills",
    figcaption: "Status pills highlighting incident states in the summary view",
    tags: ["At-a-glance Status", "State Clarity", "Reduced Checking"]
  },
  {
    title: "Row-Level Quick Actions",
    description: "Contextual action buttons embedded in table rows reduce navigation depth and keep operators in flow during coordination tasks.",
    imageSrc: "/surfcom%20icems/View%20Incidents%20Summary.png",
    imageAlt: "Quick action buttons in incident rows",
    figcaption: "Row-level actions enabling direct access to chat and incident details",
    tags: ["Quick Actions", "In-Context Work", "Reduced Navigation"]
  },
  {
    title: "Structured Incident Details Form",
    description: "Required field validation and logical field grouping ensure consistent data capture and reduce ambiguity during shift handovers.",
    imageSrc: "/surfcom%20icems/View%20Incident%20Details.png",
    imageAlt: "Incident details form with structured fields",
    figcaption: "Incident form showing grouped fields and validation requirements",
    tags: ["Structured Data", "Error Prevention", "Handover-ready"]
  },
  {
    title: "Message Log Timeline with Visibility States",
    description: "Chronological message history displays sender identity, timestamps, and 'seen' states to track communication flow and reduce follow-up questions.",
    imageSrc: "/surfcom%20icems/View%20Message%20Log.png",
    imageAlt: "Message log with timeline and seen states",
    figcaption: "Message timeline showing sender, timestamp, and read status",
    tags: ["Traceable Timeline", "Seen / Read States", "Coordination Clarity"]
  },
  {
    title: "Toast Confirmation with Deep Links",
    description: "Non-blocking toast notifications confirm actions and provide direct navigation links to relevant incident context.",
    imageSrc: "/surfcom%20icems/Light%20Toast.png",
    imageAlt: "Toast notification with action link",
    figcaption: "Toast notification with deep link to newly created incident",
    tags: ["Non-blocking Feedback", "Deep Link Jump", "Flow Continuity"]
  },
  {
    title: "SOS/Emergency Popup Pattern",
    description: "High-priority incident popups surface critical information with a single primary action to minimize decision friction during emergency response.",
    imageSrc: "/surfcom%20icems/SOS%20Popup.png",
    imageAlt: "SOS emergency popup",
    figcaption: "Emergency popup displaying incident ID, time, coordinates, and primary action",
    tags: ["High Priority Alert", "Single Primary Action", "Decision Friction↓"]
  },
  {
    title: "Chat Window Integration",
    description: "Embedded messaging within incident context eliminates context-switching and keeps all coordination history accessible in one place.",
    imageSrc: "/surfcom%20icems/Chat%20window.png",
    imageAlt: "Chat window integrated in incident view",
    figcaption: "Chat interface embedded within incident coordination workspace",
    tags: ["Embedded Comms", "Context-preserving", "Reduced Context Switch"]
  }
];

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
    <div className="pattern-cards-wrapper">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-purple-500 inline-block"/> Design Highlights
      </h3>

      <div className="pattern-cards-list">
        {patterns.map((pattern, index) => (
          <div key={index} className="pattern-card">
            <div className="pattern-card__content">
              <div className="pattern-number">{String(index + 1).padStart(2, '0')}</div>
              <h4 className="pattern-card__title">{pattern.title}</h4>
              <p className="pattern-card__description">{pattern.description}</p>
              <div className="pattern-tags">
                {pattern.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="pattern-tag">{tag}</span>
                ))}
              </div>
            </div>
            <figure className="pattern-card__media" onClick={() => openLightbox(pattern.imageSrc, pattern.figcaption)}>
              <img 
                src={pattern.imageSrc} 
                alt={pattern.imageAlt}
                className="pattern-card__image"
              />
              <figcaption className="pattern-card__figcaption">{pattern.figcaption}</figcaption>
              <div className="zoom-indicator">🔍 Click to zoom</div>
            </figure>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="pattern-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Pattern detail" />
            {lightboxCaption && <p className="lightbox-caption">{lightboxCaption}</p>}
          </div>
        </div>
      )}

      <style jsx>{`
        .pattern-cards-wrapper {
          width: 100%;
        }

        .pattern-cards-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .pattern-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          padding: 24px;
          background: rgba(30, 41, 59, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .pattern-card:hover {
          background: rgba(30, 41, 59, 0.5);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.4);
        }

        .pattern-card__content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
        }

        .pattern-number {
          display: inline-block;
          width: fit-content;
          font-size: 14px;
          font-weight: 700;
          color: #a78bfa;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.5px;
        }

        .pattern-card__title {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin: 0;
        }

        .pattern-card__description {
          font-size: 14px;
          line-height: 1.6;
          color: #94a3b8;
          margin: 0;
        }

        .pattern-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .pattern-tag {
          padding: 4px 10px;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          color: #c4b5fd;
          letter-spacing: 0.3px;
        }

        .pattern-card__media {
          position: relative;
          margin: 0;
          cursor: zoom-in;
          border-radius: 12px;
          overflow: hidden;
          background: #0f172a;
          transition: all 0.3s ease;
        }

        .pattern-card__media:hover {
          transform: scale(1.02);
        }

        .pattern-card__media:hover .zoom-indicator {
          opacity: 1;
        }

        .pattern-card__image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
        }

        .pattern-card__figcaption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px 16px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          color: #e2e8f0;
          font-size: 12px;
          line-height: 1.4;
          margin: 0;
        }

        .zoom-indicator {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 6px 12px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          border-radius: 20px;
          font-size: 11px;
          color: #ffffff;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .pattern-card {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
          }

          .pattern-card__media {
            order: -1;
          }

          .pattern-card__title {
            font-size: 18px;
          }

          .pattern-card__description {
            font-size: 13px;
          }

          .zoom-indicator {
            opacity: 1;
          }
        }

        /* Lightbox Styles */
        .pattern-lightbox {
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

        .lightbox-content {
          max-width: 95%;
          max-height: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          animation: zoomIn 0.3s ease-out;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 85vh;
          width: auto;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .lightbox-caption {
          color: #e2e8f0;
          font-size: 14px;
          text-align: center;
          margin: 0;
          padding: 0 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
