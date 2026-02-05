'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  caption?: string;
  alt?: string;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  caption,
  alt = 'Enlarged image'
}: LightboxProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Handle arrow keys for navigation
  useEffect(() => {
    if (!isOpen || images.length <= 1) return;
    
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };
    
    window.addEventListener('keydown', handleArrowKeys);
    return () => window.removeEventListener('keydown', handleArrowKeys);
  }, [isOpen, onNext, onPrev, images.length]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  const lightboxContent = (
    <div 
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-8 cursor-zoom-out"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img 
            src={currentImage}
            alt={alt}
            className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
          />
          
          {/* Close button on image */}
          <button
            onClick={onClose}
            className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-800 shadow-xl hover:scale-110 transition-all duration-200 z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Caption below image */}
          {caption && (
            <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-slate-300 text-sm text-center max-w-2xl">
              {caption}
            </p>
          )}
        </div>
        
        {/* Navigation arrows for multiple images */}
        {hasMultipleImages && onPrev && onNext && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-pink-500/50 hover:scale-110 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-pink-500/50 hover:scale-110 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}
        
        {/* Bottom hint with counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm border border-white/10 pointer-events-none">
          <div className="flex items-center gap-3">
            {hasMultipleImages && (
              <>
                <span className="text-slate-400">{currentIndex + 1} / {images.length}</span>
                <span className="text-white">•</span>
              </>
            )}
            <span>Click anywhere or press ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Use React Portal to render lightbox at document body level
  if (typeof document !== 'undefined') {
    return createPortal(lightboxContent, document.body);
  }

  return null;
}
