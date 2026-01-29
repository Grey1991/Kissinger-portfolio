'use client';

import { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import styles from './InterviewImage.module.css';

interface InterviewImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  hasTitle?: boolean;
  onLightboxChange?: (isOpen: boolean) => void;
}

export const InterviewImage = ({ 
  src, 
  alt, 
  caption, 
  className, 
  hasTitle, 
  onLightboxChange 
}: InterviewImageProps) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isEnlarged) {
        setIsEnlarged(false);
        onLightboxChange?.(false);
      }
    };
    
    if (isEnlarged) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isEnlarged, onLightboxChange]);

  return (
    <>
      <div 
        className={`cursor-zoom-in group relative ${hasTitle ? 'max-w-md' : ''}`}
        onClick={() => {
          setIsEnlarged(true);
          onLightboxChange?.(true);
        }}
      >
        <img 
          src={src}
          alt={alt}
          className={className || `w-full rounded-xl border border-white/10 shadow-2xl ${hasTitle ? 'max-h-48 object-contain' : ''} group-hover:border-pink-500/50 transition-all duration-300`}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center rounded-xl">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
            <Maximize2 size={16} />
            Click to enlarge
          </div>
        </div>
      </div>
      {caption && (
        <p className="text-center text-slate-400 text-sm mt-4 italic">
          {caption}
        </p>
      )}

      {/* Enlarged Modal */}
      {isEnlarged && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-8 cursor-zoom-out"
          onClick={() => {
            setIsEnlarged(false);
            onLightboxChange?.(false);
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={src}
                alt={alt}
                className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
              />
              
              {/* Close button on image */}
              <button
                onClick={() => {
                  setIsEnlarged(false);
                  onLightboxChange?.(false);
                }}
                className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-800 shadow-xl hover:scale-110 transition-all duration-200 z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Bottom hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm border border-white/10 pointer-events-none">
            Click anywhere or press ESC to close
          </div>
        </div>
      )}
    </>
  );
};
