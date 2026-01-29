'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Shield, Menu, Maximize2, ChevronLeft, ChevronRight, Smile, Edit, Cloud, Search, Users, Layout, WifiOff, LucideIcon, TrendingUp, MessageCircle, Smartphone, Tablet, Check, Minus, Code, Target, Star, Eye, UserX, Zap, Activity, AlertCircle, HelpCircle, EyeOff, Sun, Monitor, Home, Building2, Edit3, Grid, Info, FileText, ShoppingCart, User, Lightbulb, Plus, Archive } from 'lucide-react';
import { Project } from '../types';
import { ScrollytellingBlock } from './ScrollytellingBlock';
import { Carousel3D } from './Carousel3D';
import { TestingRefinement } from './TestingRefinement';
import { IncidentScenario } from './IncidentScenario';
import GoalsInteractive from './GoalsInteractive';
import PatternCards from './PatternCards';
import SafetyRails from './SafetyRails';
import dynamic from 'next/dynamic';

// Dynamically import CourtCanva2 component
const CourtCanva2 = dynamic(() => import('./CourtCanva2'), { ssr: false });

// Add keyframes for pulse animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); }
      70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(0,0,0,0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
    }
  `;
  if (!document.querySelector('style[data-pulse-animation]')) {
    style.setAttribute('data-pulse-animation', 'true');
    document.head.appendChild(style);
  }
}

// Icon mapping for features
const iconMap: Record<string, LucideIcon> = {
  'smile': Smile,
  'edit': Edit,
  'cloud': Cloud,
  'search': Search,
  'users': Users,
  'layout': Layout,
  'wifi-off': WifiOff,
  'trending-up': TrendingUp,
  'message-circle': MessageCircle,
  'smartphone': Smartphone,
  'tablet': Tablet,
  'check': Check,
  'minus': Minus,
  'code': Code,
  'shield': Shield,
  'target': Target,
  'star': Star,
  'user-x': UserX,
  'zap': Zap,
  'activity': Activity,
  'eye': Eye,
  'alert-circle': AlertCircle,
  'help-circle': HelpCircle,
  'eye-off': EyeOff,
  'sun': Sun,
  'lightbulb': Lightbulb,
  'shopping-cart': ShoppingCart,
  'user': User,
  'archive': Archive,
};

// Features Interactive Component
const FeaturesInteractive = ({ features }: { features: Array<{ icon: string; title: string; description: string; image: string }> }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-12 items-start mt-8">
      {/* Left: Feature List */}
      <div className="flex-1 flex flex-col gap-4">
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon] || Smile;
          const isActive = idx === activeIndex;
          
          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 flex gap-5 items-start border ${
                isActive 
                  ? 'bg-slate-800/50 border-pink-500/30 shadow-xl shadow-pink-500/5 translate-x-2' 
                  : 'bg-transparent border-transparent hover:bg-slate-800/30 hover:border-slate-700/50'
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white scale-110' 
                  : 'bg-slate-800/50 text-slate-400'
              }`}>
                <Icon size={24} strokeWidth={2} />
              </div>
              
              <div className="flex-1">
                <h4 className={`text-lg font-bold mb-2 transition-colors ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}>
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right: Sticky Preview */}
      <div className="flex-1 sticky top-10">
        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/5 rounded-3xl p-3 shadow-2xl overflow-hidden">
          {/* Device Frame Decoration */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border-b border-white/5 flex items-center px-4 gap-2 z-10">
            <div className="w-3 h-3 rounded-full bg-pink-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-purple-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500/60"></div>
          </div>

          {/* Image Container */}
          <div className="relative mt-10 h-[500px] bg-slate-900/50 rounded-2xl overflow-hidden">
            {features.map((feature, idx) => (
              <img
                key={idx}
                src={feature.image}
                alt={feature.title}
                className={`absolute inset-0 w-full h-full object-contain p-4 transition-all duration-500 ${
                  idx === activeIndex
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-5 pointer-events-none'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Flow Diagram Component
const InteractiveFlowDiagram = ({ 
  title, 
  content, 
  flowDiagrams 
}: { 
  title?: string; 
  content?: string; 
  flowDiagrams: Array<{
    id: string;
    label: string;
    caption: string;
    nodes: Array<{
      label: string;
      x: number;
      y: number;
      type?: 'start' | 'end' | 'normal';
    }>;
  }>;
}) => {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto my-16">
      {/* Header */}
      {title && (
        <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 inline-block"/> 
          {title}
        </h3>
      )}
      {content && (
        <p className="text-slate-400 mb-8">{content}</p>
      )}

      {/* Toggle Buttons */}
      <div className="flex gap-2 bg-slate-800/50 p-1 rounded-full w-fit mb-10 border border-white/10">
        {flowDiagrams.map((flow, idx) => (
          <button
            key={flow.id}
            onClick={() => setActiveFlowIndex(idx)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeFlowIndex === idx
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30' 
                : 'bg-transparent text-slate-400 hover:text-white'
            }`}
          >
            {flow.label}
          </button>
        ))}
      </div>

      {/* Diagram Container */}
      <div className="relative w-full h-[380px] bg-slate-950/50 rounded-2xl border border-cyan-500/20 overflow-visible shadow-xl shadow-cyan-500/10">
        {flowDiagrams.map((flow, idx) => {
          // Define custom connections for flow-1 (branching structure)
          const connections = flow.id === 'flow-1' ? [
            [0, 2], // Discover -> Select
            [1, 2], // Search -> Select
            [2, 3], // Select -> Take Away
            [2, 4], // Select -> Dine In
            [3, 6], // Take Away -> Check Out
            [4, 5], // Dine In -> Select Table
            [5, 6], // Select Table -> Check Out
            [6, 7], // Check Out -> Place Order
            [7, 8], // Place Order -> Finish
            [8, 9]  // Finish -> Review
          ] : flow.nodes.map((_, i) => i < flow.nodes.length - 1 ? [i, i + 1] : null).filter(Boolean) as number[][];

          return (
            <div
              key={flow.id}
              className={`absolute inset-0 transition-all duration-500 ${
                activeFlowIndex === idx 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {/* SVG Connection Lines - behind nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {connections.map((conn, i) => {
                  const fromNode = flow.nodes[conn[0]];
                  const toNode = flow.nodes[conn[1]];
                  
                  // Calculate direction and edge offsets
                  const dx = toNode.x - fromNode.x;
                  const dy = toNode.y - fromNode.y;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  
                  // Normalize direction
                  const dirX = dx / distance;
                  const dirY = dy / distance;
                  
                  // Offset from node edge (approximate node radius)
                  const offset = 4; // percentage units
                  
                  // Start from edge of fromNode
                  const x1 = fromNode.x + dirX * offset;
                  const y1 = fromNode.y + dirY * offset;
                  
                  // End at edge of toNode
                  const x2 = toNode.x - dirX * offset;
                  const y2 = toNode.y - dirY * offset;
                  
                  return (
                    <g key={`${conn[0]}-${conn[1]}`}>
                      {/* Thin elegant connection line from edge to edge */}
                      <line
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="#6EE7B7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                    </g>
                  );
                })}
              </svg>

            {/* Flow Nodes */}
            <div className="absolute inset-0" style={{ zIndex: 10 }}>
              {flow.nodes.map((node, i) => (
                <div
                  key={i}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 hover:scale-110 ${
                    node.type === 'start'
                      ? 'bg-purple-500/20 border-2 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/30'
                      : node.type === 'end'
                      ? 'bg-cyan-500/20 border-2 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-800/95 border-2 border-cyan-500/50 text-slate-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/40'
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    zIndex: 20
                  }}
                >
                  {node.label}
                </div>
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-slate-500 text-sm italic" style={{ zIndex: 5 }}>
              {flow.caption}
            </div>
          </div>
        );
        })}
      </div>
    </div>
  );
};

// Interview Image Component with click-to-enlarge
const InterviewImage = ({ src, alt, caption, className, hasTitle, onLightboxChange }: { src: string; alt: string; caption?: string; className?: string; hasTitle?: boolean; onLightboxChange?: (isOpen: boolean) => void }) => {
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

// Survey Tabs Component
const SurveyTabsComponent = ({ tabs, caption, onLightboxChange }: { tabs: Array<{label: string; images: string[]}>; caption?: string; onLightboxChange?: (isOpen: boolean) => void }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const currentImages = tabs[activeTab]?.images || [];

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    onLightboxChange?.(false);
  };

  // Add ESC key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
        onLightboxChange?.(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isLightboxOpen, onLightboxChange]);

  const nextImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {caption && (
        <p className="text-center text-slate-400 text-base mb-8 italic">{caption}</p>
      )}
      
      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === idx
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 scale-105'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-slate-900 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 cursor-zoom-in"
          >
            <img 
              src={img}
              alt={`${tabs[activeTab].label} survey ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-1.5">
                <Maximize2 size={14} />
                Enlarge
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-8 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={currentImages[lightboxImageIndex]}
                alt={`${tabs[activeTab].label} survey ${lightboxImageIndex + 1}`}
                className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
              />
              
              {/* Close button on image */}
              <button
                onClick={closeLightbox}
                className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-800 shadow-xl hover:scale-110 transition-all duration-200 z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Lightbox Navigation */}
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-pink-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextImage}
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
                <span className="text-slate-400">{lightboxImageIndex + 1} / {currentImages.length}</span>
                <span className="text-white">•</span>
                <span>Click anywhere or press ESC to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Gallery Component with Lightbox
const GalleryComponent = ({ images, caption, onLightboxChange }: { images: string[]; caption?: string; onLightboxChange?: (isOpen: boolean) => void }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    onLightboxChange?.(false);
  };

  // Add ESC key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
        onLightboxChange?.(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isLightboxOpen, onLightboxChange]);

  const nextImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="my-12 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Masonry Layout - Photo Wall Style with Original Aspect Ratios */}
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4">
          {images.map((imgSrc, imgIdx) => (
            <button
              key={imgIdx}
              onClick={() => openLightbox(imgIdx)}
              className="relative overflow-hidden rounded-lg border border-white/10 group cursor-zoom-in bg-slate-900 shadow-md hover:shadow-pink-900/20 hover:border-pink-500/50 transition-all duration-300 w-full mb-4 break-inside-avoid"
            >
              <img 
                src={imgSrc} 
                alt={`Gallery item ${imgIdx + 1}`}
                className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-1.5">
                  <Maximize2 size={14} />
                  Click to enlarge
                </div>
              </div>
            </button>
          ))}
        </div>
        {caption && (
          <p className="text-center text-slate-500 text-sm mt-6 italic">
            {caption}
          </p>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-8 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={images[lightboxImageIndex]}
                alt={`Gallery item ${lightboxImageIndex + 1}`}
                className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
              />
              
              {/* Close button on image */}
              <button
                onClick={closeLightbox}
                className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-800 shadow-xl hover:scale-110 transition-all duration-200 z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-pink-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                
                <button
                  onClick={nextImage}
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
                <span className="text-slate-400">{lightboxImageIndex + 1} / {images.length}</span>
                <span className="text-white">•</span>
                <span>Click anywhere or press ESC to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Before/After Slider Component
const BeforeAfterSlider: React.FC<{ section: any }> = ({ section }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeComparison, setActiveComparison] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const comparisons = section.beforeAfterSlider.comparisons || [];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };
  const handleClick = (e: React.MouseEvent) => handleMove(e.clientX);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  const currentComparison = comparisons[activeComparison];

  if (!currentComparison) {
    return <div className="text-white">Loading comparison images...</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-wider mb-4 uppercase text-cyan-400">
          {section.beforeAfterSlider.badge}
        </span>
        <h3 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          {section.title}
        </h3>
        <p className="text-lg leading-relaxed text-slate-400">
          {section.content}
        </p>
      </div>

      {comparisons.length > 1 && (
        <div className="flex justify-center gap-4 mb-6">
          {comparisons.map((comp: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveComparison(idx)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                activeComparison === idx
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {comp.label}
            </button>
          ))}
        </div>
      )}

      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-col-resize select-none mb-12"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* After Image (Base Layer) */}
        <div 
          className="absolute inset-0 bg-slate-900 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentComparison.afterImage})` }}
        />
        
        {/* Before Image (Clipped Layer) */}
        <div 
          className="absolute top-0 left-0 h-full border-r-2 border-cyan-400"
          style={{ 
            backgroundColor: '#0f172a',
            backgroundImage: `url(${currentComparison.beforeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            width: `${sliderPosition}%`,
            filter: 'grayscale(0.8) contrast(1.2)'
          }}
        />

        {/* Slider Handle */}
        <div 
          className="absolute top-1/2 w-11 h-11 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full flex items-center justify-center pointer-events-none z-20"
          style={{ 
            left: `${sliderPosition}%`,
            boxShadow: '0 0 25px rgba(34, 211, 238, 0.6)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 16L22 12L18 8"/><path d="M6 8L2 12L6 16"/>
          </svg>
        </div>
        <div 
          className={`absolute bottom-5 left-5 px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-rose-400 border border-rose-400/30 transition-opacity duration-300 pointer-events-none ${
            sliderPosition < 20 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {section.beforeAfterSlider.beforeLabel}
        </div>
        <div 
          className={`absolute bottom-5 right-5 px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-400/30 transition-opacity duration-300 pointer-events-none ${
            sliderPosition > 80 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {section.beforeAfterSlider.afterLabel}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
        {section.beforeAfterSlider.improvements.map((item: any, idx: number) => (
          <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-transparent hover:border-white/10 hover:bg-white/[0.04] transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-400 pl-11">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Console Navigation Component  
const ConsoleNavigation: React.FC<{ section: any }> = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-purple-500 inline-block"/> {section.title}
      </h3>
      <p className="text-slate-400 mb-12 text-lg">{section.intro}</p>

      <div className="grid md:grid-cols-[350px_1fr] gap-10 md:gap-20 border-t border-b border-white/10 py-12 relative">
        <div className="relative flex flex-col gap-6">
          <div className="hidden md:block absolute right-[-2.5rem] top-0 bottom-0 w-px bg-white/10" />
          <div 
            className="hidden md:block absolute right-[-2.5rem] w-0.5 h-6 bg-cyan-400 transition-all duration-300 ease-out"
            style={{ boxShadow: '0 0 10px rgb(34 211 238)', top: navRefs.current[activeIndex]?.offsetTop || 0 }}
          />
          {section.consoleNav.items.map((item: any, idx: number) => (
            <div
              key={idx}
              ref={el => { navRefs.current[idx] = el; }}
              className={`flex items-center justify-between text-base font-semibold cursor-pointer transition-colors duration-300 ${
                idx === activeIndex ? 'text-white' : 'text-slate-500'
              } hover:text-slate-300`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <span>{item.navTitle}</span>
              <span className={`font-mono text-xs text-cyan-400 transition-all duration-300 ${
                idx === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              }`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
        <div className="relative min-h-[220px] flex items-center">
          {section.consoleNav.items.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`absolute top-1/2 left-0 w-full transition-all duration-400 ease-out ${
                idx === activeIndex ? 'opacity-100 -translate-y-1/2 translate-x-0' : 'opacity-0 -translate-y-1/2 translate-x-5 pointer-events-none'
              }`}
            >
              <div className="inline-block font-mono text-[11px] text-cyan-400 border border-cyan-400/30 px-2 py-1 rounded mb-3 uppercase tracking-wider">
                {item.tag}
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-5 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent leading-tight">
                {item.displayTitle}
              </h3>
              <p className="text-base leading-relaxed text-slate-400 max-w-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");
  const [isAnyLightboxOpen, setIsAnyLightboxOpen] = useState(false);

  // Handle scroll spy for Table of Contents
  useEffect(() => {
    if (!project?.details.toc) return;

    const handleScroll = () => {
      if (!scrollContainerRef.current || !project.details.toc) return;
      
      const scrollPos = scrollContainerRef.current.scrollTop + 200;
      
      for (const item of project.details.toc) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(item.id);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-[90vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
        
        {/* Close Button */}
        <button 
          onClick={isAnyLightboxOpen ? undefined : onClose}
          disabled={isAnyLightboxOpen}
          className={`absolute top-4 right-4 z-50 p-2 rounded-full text-white transition-all border border-white/10 ${
            isAnyLightboxOpen 
              ? 'bg-black/30 opacity-40 cursor-not-allowed' 
              : 'bg-black/50 hover:bg-white/20 cursor-pointer'
          }`}
          title={isAnyLightboxOpen ? 'Close the enlarged image first' : 'Close project'}
        >
          <X size={24} />
        </button>

        {/* Scrollable Area */}
        <div ref={scrollContainerRef} className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-pink-500/30 scrollbar-track-transparent">
          
          {/* Header Hero */}
          <div className={`relative h-80 w-full bg-gradient-to-br ${project.gradient} p-8 md:p-12 flex flex-col justify-end`}>
            {project.image ? (
              <>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-black/20" />
            )}
            
            {/* Ecosystem Diagram Overlay (only for HubX) */}
            {project.id === 'hubx' && (
              <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-64 h-64 opacity-60 hover:opacity-100 transition-opacity duration-500">
                <div className="relative w-full h-full flex flex-col items-center justify-between">
                  {/* Master Trader (Top) */}
                  <div className="relative bg-slate-900/80 border border-white/20 backdrop-blur-md rounded-xl p-2 w-24 flex flex-col items-center gap-1 z-10 border-t-2 border-t-blue-500">
                    <div className="relative w-8 h-8 rounded-full bg-white/10 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <User size={16} />
                    </div>
                    <div className="text-[3px] font-bold uppercase tracking-wider text-blue-400 whitespace-nowrap">Master Trader</div>
                  </div>

                  {/* HubX Core (Center) */}
                  <div className="relative w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center z-10">
                    <Grid size={24} className="text-emerald-500" />
                    <div className="absolute inset-[-5px] rounded-full border border-emerald-500 opacity-0 animate-[ripple_2s_infinite]" />
                  </div>

                  {/* Investors (Bottom) */}
                  <div className="flex gap-2 z-10">
                    {['A', 'B', 'C'].map((label, idx) => (
                      <div key={idx} className="relative bg-slate-900/80 border border-white/20 backdrop-blur-md rounded-xl p-2 w-20 flex flex-col items-center gap-1 border-b-2 border-b-cyan-500">
                        <div className="w-6 h-6 rounded-full bg-white/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                          <User size={12} />
                        </div>
                        <div className="text-[2px] font-bold uppercase tracking-wider text-cyan-400 whitespace-nowrap">Investor {label}</div>
                      </div>
                    ))}
                  </div>

                  {/* SVG Connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                    <defs>
                      <path id="hubx-path-down" d="M 128,48 L 128,105" />
                      <path id="hubx-path-left" d="M 128,145 C 128,170 55,170 55,195" />
                      <path id="hubx-path-mid" d="M 128,145 L 128,205" />
                      <path id="hubx-path-right" d="M 128,145 C 128,170 201,170 201,195" />
                    </defs>
                    <use href="#hubx-path-down" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                    <use href="#hubx-path-left" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                    <use href="#hubx-path-mid" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                    <use href="#hubx-path-right" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                    
                    <circle r="2" fill="#3B82F6">
                      <animateMotion dur="2s" repeatCount="indefinite"><mpath href="#hubx-path-down"/></animateMotion>
                    </circle>
                    <circle r="2" fill="#10B981">
                      <animateMotion dur="2s" begin="0.5s" repeatCount="indefinite"><mpath href="#hubx-path-left"/></animateMotion>
                    </circle>
                    <circle r="2" fill="#10B981">
                      <animateMotion dur="2s" begin="0.7s" repeatCount="indefinite"><mpath href="#hubx-path-mid"/></animateMotion>
                    </circle>
                    <circle r="2" fill="#10B981">
                      <animateMotion dur="2s" begin="0.5s" repeatCount="indefinite"><mpath href="#hubx-path-right"/></animateMotion>
                    </circle>
                  </svg>
                </div>
              </div>
            )}
            
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs font-medium text-white/90 border border-white/10">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs font-medium text-white/90 border border-white/10">
                  {project.details.year}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{project.title}</h2>
              <p className="text-white/80 text-xl max-w-2xl font-light">{project.summary}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-slate-950 relative">
            
            {/* STICKY TABLE OF CONTENTS (Desktop Only) */}
            {project.details.toc && (
              <div className="hidden md:block w-64 bg-slate-900/50 border-r border-white/5 p-6 sticky top-0 h-full overflow-y-auto flex-shrink-0">
                <h5 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6 flex items-center gap-2">
                  <Menu size={14} /> Contents
                </h5>
                <ul className="space-y-4">
                  {project.details.toc.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(item.id);
                          el?.scrollIntoView({ behavior: 'smooth' });
                          setActiveSection(item.id);
                        }}
                        className={`text-sm transition-colors block border-l-2 pl-4 ${
                          activeSection === item.id 
                            ? 'border-pink-500 text-white font-medium' 
                            : 'border-transparent text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Content Body */}
            <div className="flex-grow p-8 md:p-12 space-y-16">
              
              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/10 pb-12">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Role</h4>
                  <p className="text-white font-medium">{project.details.role}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Platform</h4>
                  <p className="text-white font-medium">{project.details.platform}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Tools</h4>
                  <p className="text-white font-medium">{project.details.tools}</p>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={() => {
                      const outcomeSection = document.getElementById('outcome');
                      if (outcomeSection) {
                        outcomeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="w-full py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-900/30 hover:shadow-pink-900/50 hover:scale-[1.02]"
                  >
                    <Eye size={16} /> View Final Design
                  </button>
                </div>
              </div>

              {/* CONDITIONAL RENDERING: FULL CASE STUDY OR STANDARD LAYOUT */}
              {project.isCaseStudy && project.details.contentSections ? (
                <div className="space-y-20 max-w-4xl mx-auto">
                  {project.details.contentSections.map((section, index) => (
                    <div 
                      key={index} 
                      id={section.id} 
                      className="animate-fade-in-up scroll-mt-10" 
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      {/* Flip Cards - Problem & Goals */}
                      {section.type === 'flip-cards' && section.flipCards && (
                        <div className="w-full max-w-6xl mx-auto">
                          {/* Header */}
                          <div className="text-center mb-16">
                            <h3 className="text-4xl font-bold text-white mb-4">{section.title}</h3>
                            {section.content && (
                              <p className="text-slate-400 text-lg">{section.content}</p>
                            )}
                          </div>

                          {/* Cards Grid */}
                          <div className="grid md:grid-cols-3 gap-8">
                            {section.flipCards.map((card, idx) => {
                              const ProblemIcon = iconMap[card.problemIcon] || UserX;
                              const GoalIcon = iconMap[card.goalIcon] || Check;
                              
                              return (
                                <div key={idx} className="flip-card-container group perspective-1000" style={{ height: '400px' }}>
                                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-style-3d group-hover:rotate-y-180">
                                    {/* Front - Problem */}
                                    <div className="flip-card-face absolute w-full h-full backface-hidden bg-slate-900/50 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center">
                                      <div className="absolute top-4 right-4 text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full flex items-center gap-2">
                                        Hover to flip ↻
                                      </div>
                                      <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-90 transition-transform">
                                        <ProblemIcon size={32} className="text-red-400" strokeWidth={2} />
                                      </div>
                                      <h4 className="text-lg font-bold text-white mb-3">{card.problemTitle}</h4>
                                      <p className="text-slate-400 text-center leading-relaxed text-sm">{card.problemDesc}</p>
                                    </div>

                                    {/* Back - Goal */}
                                    <div className="flip-card-face absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 flex flex-col items-center justify-center shadow-2xl shadow-blue-900/50">
                                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                        <GoalIcon size={28} className="text-white" strokeWidth={2} />
                                      </div>
                                      <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide opacity-90">{card.goalTitle}</h4>
                                      <div className="w-full space-y-2.5">
                                        {card.goals.map((goal, gIdx) => (
                                          <div key={gIdx} className="flex items-start gap-2.5 text-white/90">
                                            <Check size={16} className="text-green-300 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                            <span className="text-sm leading-relaxed">{goal}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Strategy Roadmap */}
                      {section.type === 'strategy-roadmap' && section.roadmapSteps && (
                        <div className="w-full max-w-4xl mx-auto my-16">
                          {/* Header */}
                          {section.title && (
                            <div className="text-center mb-16">
                              <h3 className="text-4xl font-bold text-white mb-2">{section.title}</h3>
                            </div>
                          )}

                          {/* Challenge Banner */}
                          {section.roadmapChallenge && (
                            <div className="relative bg-red-50/10 border border-red-500/30 rounded-2xl p-6 mb-16 text-center shadow-lg shadow-red-500/5">
                              <div className="text-xs uppercase tracking-widest text-red-400 font-bold mb-2">
                                The Challenge
                              </div>
                              <div className="text-lg text-slate-200 font-medium">
                                {section.roadmapChallenge}
                              </div>
                              {/* Connecting line */}
                              <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-gradient-to-b from-white/20 to-transparent transform translate-y-full -translate-x-1/2" />
                            </div>
                          )}

                          {/* Timeline */}
                          <div className="relative pl-12">
                            {/* Vertical line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-white/5" />

                            {/* Steps */}
                            <div className="space-y-8">
                              {section.roadmapSteps.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="group relative opacity-60 hover:opacity-100 transition-all duration-300 hover:translate-x-2"
                                >
                                  {/* Dot */}
                                  <div className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-white/20 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 z-10" />

                                  {/* Content Card */}
                                  <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 group-hover:border-pink-500/30 group-hover:bg-slate-800/70 group-hover:shadow-xl group-hover:shadow-pink-500/10 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-2">
                                      <span className="text-xs font-bold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-lg">
                                        {item.step}
                                      </span>
                                      <h4 className="text-xl font-bold text-white">
                                        {item.title}
                                      </h4>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Interactive Flow Diagram */}
                      {section.type === 'interactive-flow' && section.flowDiagrams && (
                        <InteractiveFlowDiagram 
                          title={section.title}
                          content={section.content}
                          flowDiagrams={section.flowDiagrams}
                        />
                      )}

                      {/* Testing & Refinement Interactive */}
                      {section.type === 'testing-refinement' && (
                        <TestingRefinement />
                      )}

                      {/* Stats Grid */}
              {section.type === 'stats-grid' && section.stats && (
                <div>
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.stats.map((stat, idx) => (
                      <div 
                        key={idx}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-4 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                        }}
                      >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                          {/* Icon */}
                          {stat.icon && (
                            <div className="text-3xl group-hover:scale-110 transition-transform duration-500">
                              {stat.icon}
                            </div>
                          )}
                          
                          {/* Value */}
                          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                            {stat.value}
                          </div>
                          
                          {/* Label */}
                          <p className="text-slate-300 text-xs leading-relaxed group-hover:text-white transition-colors duration-500">
                            {stat.label}
                          </p>
                        </div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HUD Ribbon */}
              {section.type === 'hud-ribbon' && section.stats && (
                <div className="w-full my-12">
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                    </h3>
                  )}
                  
                  {/* Horizontal HUD Ribbon */}
                  <div className="relative w-full max-w-5xl mx-auto bg-slate-900/60 border border-white/[0.08] rounded-2xl backdrop-blur-xl overflow-hidden">
                    {/* Top highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    <div className="flex flex-col lg:flex-row items-stretch justify-between h-auto lg:h-28">
                      {section.stats.map((stat, idx) => {
                        const IconComponent = stat.icon ? iconMap[stat.icon] : null;
                        
                        return (
                          <div
                            key={idx}
                            className="group relative flex-1 flex flex-col justify-center px-6 py-5 lg:py-0 transition-all duration-300 hover:bg-white/[0.03] cursor-default border-b lg:border-b-0 lg:border-r border-white/[0.08] last:border-0"
                          >
                            {/* Label with icon */}
                            <div className="flex items-center gap-2 mb-2">
                              {IconComponent && (
                                <IconComponent size={14} className="text-pink-500 opacity-80" />
                              )}
                              <span className="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-semibold">
                                {stat.label}
                              </span>
                            </div>
                            
                            {/* Value */}
                            <span className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:translate-x-1">
                              {stat.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Before/After Slider - Interactive comparison */}
              {section.type === 'before-after-slider' && section.beforeAfterSlider && (
                <BeforeAfterSlider section={section} />
              )}

              {/* Console Navigation - Interactive decision showcase */}
              {section.type === 'console-nav' && section.consoleNav && (
                <ConsoleNavigation section={section} />
              )}

              {/* Hotspot Doc - Interactive requirements documentation */}
              {section.type === 'hotspot-doc' && section.hotspotDoc && (
                <div className="w-full my-8">
                  {/* Header */}
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                    </h3>
                  )}
                  {section.content && (
                    <p className="text-slate-300 leading-relaxed mb-6">{section.content}</p>
                  )}

                  {/* Interactive Document with Hotspots */}
                  <div className="relative w-full rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Background Image */}
                    <img 
                      src={section.hotspotDoc.imageSrc}
                      alt="Documentation"
                      className="w-full h-auto transition-all duration-500"
                      style={{
                        filter: 'brightness(0.4) grayscale(0.3)'
                      }}
                    />

                    {/* Hover enhancement overlay */}
                    <img 
                      src={section.hotspotDoc.imageSrc}
                      alt="Documentation"
                      className="absolute inset-0 w-full h-full object-contain transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        filter: 'brightness(0.6) grayscale(0.1)',
                        transform: 'scale(1.02)'
                      }}
                    />

                    {/* Hotspots */}
                    {section.hotspotDoc.hotspots.map((hotspot, index) => (
                      <div
                        key={index}
                        className="absolute w-4 h-4 rounded-full bg-cyan-400 cursor-pointer z-10 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:bg-white group/hotspot"
                        style={{
                          top: hotspot.position.top,
                          left: hotspot.position.left,
                          animation: 'pulse 2s infinite',
                          boxShadow: '0 0 0 0 rgba(56, 189, 248, 0.4)'
                        }}
                      >
                        {/* Plus icon */}
                        <span className="text-black font-bold text-[10px]">+</span>

                        {/* Tooltip */}
                        <div 
                          className={`absolute top-1/2 -translate-y-1/2 w-48 bg-slate-900/90 backdrop-blur-xl border border-white/20 border-l-[2px] border-l-cyan-400 p-2.5 rounded-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hotspot:opacity-100 z-20 shadow-xl ${
                            hotspot.tooltipAlign === 'right' 
                              ? 'right-6 translate-x-2 group-hover/hotspot:translate-x-0' 
                              : 'left-6 -translate-x-2 group-hover/hotspot:translate-x-0'
                          }`}
                        >
                          <h4 className="text-cyan-400 text-[10px] font-bold uppercase tracking-wide mb-1">
                            {hotspot.title}
                          </h4>
                          <p className="text-slate-200 text-[10px] leading-relaxed">
                            {hotspot.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom hint */}
                  <div className="flex items-center justify-center gap-2 mt-5 text-slate-500 text-sm opacity-60">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    Interactive Spec Preview
                  </div>
                </div>
              )}

              {/* Ecosystem Diagram - Now integrated into hero, this section can be removed from data */}
              {section.type === 'ecosystem-diagram' && (
                <div className="hidden" />
              )}

              {/* Incident Scenario - Interactive multi-agency response simulation */}
              {section.type === 'incident-scenario' && (
                <IncidentScenario />
              )}

              {/* Chat Interview Block */}
              {section.type === 'chat-interview' && (
                <div className="w-full my-8">
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                    </h3>
                  )}
                  {section.content && (
                    <p className="text-slate-300 leading-relaxed mb-6">{section.content}</p>
                  )}
                  
                  {/* Chat Window */}
                  <div className="max-w-3xl mx-auto bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col" style={{ height: '400px' }}>
                    {/* Chat Header */}
                    {section.interviewee && (
                      <div className="bg-slate-800/80 backdrop-blur-sm px-6 py-4 border-b border-white/10 flex items-center gap-4 sticky top-0 z-10">
                        <img 
                          src={section.interviewee.avatar} 
                          alt={section.interviewee.name}
                          className="w-10 h-10 rounded-full bg-slate-700 border-2 border-pink-500/30"
                        />
                        <div>
                          <h4 className="text-white font-semibold text-base">
                            {section.interviewee.name} <span className="text-slate-400 font-normal">({section.interviewee.role})</span>
                          </h4>
                        </div>
                      </div>
                    )}
                    
                    {/* Chat Body */}
                    <div className="flex-1 px-6 py-5 bg-slate-950/50 overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                      {section.messages?.map((msg, idx) => {
                        // Generate timestamp for each message (14:30 + idx minutes)
                        const baseTime = 14 * 60 + 30; // 14:30 in minutes
                        const msgTime = baseTime + idx;
                        const hours = Math.floor(msgTime / 60);
                        const minutes = msgTime % 60;
                        const timeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                        
                        return msg.type === 'system' ? (
                          <div 
                            key={idx}
                            className="text-center text-xs text-slate-500 font-medium mt-4 mb-2 flex items-center justify-center gap-3 opacity-0"
                            style={{ animation: `fadeIn 1s ease ${idx * 0.05 + 0.3}s forwards` }}
                          >
                            <span className="h-px w-8 bg-slate-700"></span>
                            {msg.text}
                            <span className="h-px w-8 bg-slate-700"></span>
                          </div>
                        ) : (
                          <div 
                            key={idx}
                            className={`flex flex-col gap-1 ${
                              msg.type === 'sent' ? 'items-end' : 'items-start'
                            }`}
                            style={{ animation: `messagePopIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${idx * 0.05}s forwards`, opacity: 0 }}
                          >
                            {/* Timestamp */}
                            <div className="text-[10px] text-slate-500 px-2">
                              {section.date && idx === 0 && `${section.date} `}{timeStr}
                            </div>
                            {/* Message Bubble */}
                            <div 
                              className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                                msg.type === 'sent'
                                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl rounded-tr-sm shadow-lg shadow-pink-500/20'
                                  : 'bg-slate-800 text-slate-200 rounded-2xl rounded-tl-sm border border-white/10'
                              }`}
                            >
                              {msg.type === 'received' && section.interviewee && (
                                <span className="block text-[10px] text-slate-500 mb-1">{section.interviewee.name}</span>
                              )}
                              {msg.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Dual Image Block - Side by Side */}
              {section.type === 'dual-image' && section.images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {section.images.map((img, idx) => {
                    // Type guard to ensure img is an object with title, src, caption
                    if (typeof img === 'string') return null;
                    return (
                      <div key={idx}>
                        <h4 className="text-xl font-bold text-white mb-4">{img.title}</h4>
                        <InterviewImage 
                          src={img.src}
                          alt={img.title}
                          caption={img.caption}
                          hasTitle={true}
                          onLightboxChange={setIsAnyLightboxOpen}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Needs List Block */}
              {section.type === 'needs-list' && section.needs && (
                <div className="w-full max-w-4xl mx-auto">
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                    </h3>
                  )}
                  <div className="flex flex-col gap-4">
                    {section.needs.map((need, idx) => (
                      <div 
                        key={idx}
                        className="group flex items-start px-6 py-5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-slate-800/30 hover:border-pink-500/30 hover:px-7 hover:translate-x-1"
                      >
                        {/* Number */}
                        <div className="text-lg font-semibold text-slate-600 group-hover:text-pink-500 mr-7 mt-0.5 transition-colors duration-300 font-mono">
                          {need.number}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {need.title}
                          </h4>
                          <p className="text-slate-400 leading-relaxed text-sm">
                            {need.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Flow Images Block */}
              {section.type === 'flow-images' && section.flows && (
                <div className="w-full">
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                    </h3>
                  )}
                  <div className="flex flex-col gap-8">
                    {section.flows.map((flow, idx) => (
                      <div key={idx} className="space-y-3">
                        {/* Part Label & Title */}
                        <div>
                          <span className="text-pink-500 text-sm font-semibold">{flow.part}</span>
                          <h4 className="text-2xl font-bold text-white mt-1">{flow.title}</h4>
                          <p className="text-slate-400 text-sm mt-2 leading-relaxed">{flow.description}</p>
                        </div>
                        {/* Image */}
                        <div className="max-w-2xl">
                          <InterviewImage 
                            src={flow.src}
                            alt={flow.title}
                            hasTitle={false}
                            onLightboxChange={setIsAnyLightboxOpen}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Interactive Block */}
              {section.type === 'features-interactive' && (
                <div className="w-full">
                  {section.title && (
                    <div className="mb-3">
                      <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                        {section.title}
                      </h3>
                      {section.content && (
                        <p className="text-slate-400 text-sm">{section.content}</p>
                      )}
                    </div>
                  )}
                  
                  <FeaturesInteractive features={section.interactiveFeatures || []} />
                </div>
              )}

              {/* What's Next Cards Block */}
              {section.type === 'next-steps-cards' && section.nextSteps && (
                <div className="w-full max-w-5xl mx-auto">
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                    </h3>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {section.nextSteps.map((step, idx) => {
                      const Icon = iconMap[step.icon] || TrendingUp;
                      return (
                        <div 
                          key={idx}
                          className="group bg-slate-900/50 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-slate-800/50 hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-2"
                        >
                          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-pink-500/50 transition-all duration-300">
                            <Icon size={28} className="text-pink-400 group-hover:text-pink-300" strokeWidth={2} />
                          </div>
                          <h4 className="text-base font-semibold text-white leading-snug">
                            {step.title}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Wrapup Section: Comprehensive Roadmap + Learnings + Improvements */}
              {section.type === 'wrapup-section' && section.wrapup && (
                <div className="w-full max-w-6xl mx-auto">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-white mb-4">{section.title}</h3>
                    {section.content && (
                      <p className="text-slate-400 text-lg">{section.content}</p>
                    )}
                  </div>

                  {/* Future Roadmap */}
                  <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400"></div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Future Roadmap</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                      {section.wrapup.roadmap.map((item, idx) => {
                        const Icon = iconMap[item.icon] || Star;
                        const isLast = idx === section.wrapup!.roadmap.length - 1;
                        return (
                          <div key={idx} className="relative">
                            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/50 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 group">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-400/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
                                <Icon size={24} className="text-blue-400" strokeWidth={2} />
                              </div>
                              <p className="text-base font-semibold text-white leading-tight">{item.title}</p>
                            </div>
                            {/* Arrow connector for desktop */}
                            {!isLast && (
                              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-700 text-2xl z-10">→</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Learnings & Improvements Grid */}
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* What I've Learned */}
                    <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8">
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-green-500/10">
                        <h4 className="text-xl font-bold text-white">What I&apos;ve Learned</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-green-500/10 text-green-400 border border-green-500/20">
                          Validated
                        </span>
                      </div>
                      <div className="space-y-6">
                        {section.wrapup.learnings.map((item, idx) => {
                          const Icon = iconMap[item.icon] || Check;
                          return (
                            <div key={idx} className="flex gap-4">
                              <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Icon size={16} className="text-green-400" strokeWidth={2.5} />
                              </div>
                              <div>
                                <h5 className="text-base font-bold text-white mb-1">{item.title}</h5>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Areas for Improvement */}
                    <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8">
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-orange-500/10">
                        <h4 className="text-xl font-bold text-white">Areas for Improvement</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          Growth
                        </span>
                      </div>
                      <div className="space-y-6">
                        {section.wrapup.improvements.map((item, idx) => {
                          const Icon = iconMap[item.icon] || Target;
                          return (
                            <div key={idx} className="flex gap-4">
                              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Icon size={16} className="text-orange-400" strokeWidth={2.5} />
                              </div>
                              <div>
                                <h5 className="text-base font-bold text-white mb-1">{item.title}</h5>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Context Panel - Background & Target Users */}
              {section.type === 'context-panel' && (
                <div className="w-full max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-stretch">
                    {/* Left: Project Background */}
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-10 flex flex-col justify-between overflow-hidden">
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
                      
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                          <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Project Context</span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-6">
                          <img 
                            src="/courtcanva/CC_Logo.png" 
                            alt="CourtCanva Logo" 
                            className="w-16 h-16 object-contain"
                          />
                          <h1 className="text-5xl font-extrabold text-white leading-tight">CourtCanva</h1>
                        </div>
                        
                        <p className="text-slate-300 text-lg leading-relaxed mb-10">
                          A startup project aimed at revolutionizing court construction. We provide a responsive platform where users can <strong className="text-white">create custom court designs</strong> via an intuitive interface and <strong className="text-white">receive instant quotes</strong> from suppliers.
                        </p>
                      </div>
                    </div>

                    {/* Right: Target Users */}
                    <div className="flex flex-col gap-5">
                      <div className="mb-3">
                        <span className="text-sm text-slate-400 font-semibold uppercase tracking-wide">Target Audience</span>
                      </div>
                      
                      <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-x-2 hover:shadow-xl hover:shadow-black/20 cursor-default overflow-hidden">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-slate-900 group-hover:scale-110 group-hover:-rotate-6">
                          <Building2 size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Court Owners</h3>
                          <p className="text-sm text-slate-400">Looking to renovate or upgrade existing facilities.</p>
                        </div>
                      </div>

                      <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-x-2 hover:shadow-xl hover:shadow-black/20 cursor-default overflow-hidden">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-slate-900 group-hover:scale-110 group-hover:-rotate-6">
                          <Users size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Facility Managers</h3>
                          <p className="text-sm text-slate-400">Managing sports complexes and maintenance.</p>
                        </div>
                      </div>

                      <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-x-2 hover:shadow-xl hover:shadow-black/20 cursor-default overflow-hidden">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-slate-900 group-hover:scale-110 group-hover:-rotate-6">
                          <Home size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Individuals</h3>
                          <p className="text-sm text-slate-400">Building personal backyard or private courts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Requirements List */}
              {section.type === 'requirements-list' && (
                <div className="w-full max-w-5xl mx-auto">
                  <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                    {section.title}
                  </h3>

                  <div className="space-y-0">
                    {/* Requirement 1 */}
                    <div className="group relative py-6 grid grid-cols-[80px,1fr,60px] gap-8 items-start border-b border-white/10 transition-all duration-400 after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:shadow-[0_0_15px_rgba(56,189,248,0.5)] after:transition-[width] after:duration-500 hover:after:w-full">
                      <div className="font-mono text-slate-500 text-sm pt-1 group-hover:text-sky-400 transition-colors hidden md:block">01</div>
                      <div className="flex flex-col gap-2 md:col-start-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 group-hover:translate-x-2 transition-all duration-300">
                          User-friendly Design Tool
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl opacity-80 group-hover:text-slate-300 group-hover:opacity-100 transition-all">
                          Intuitive interface for creating court designs. We lowered the barrier to entry so anyone can design like a pro.
                        </p>
                      </div>
                      <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-slate-500 opacity-50 group-hover:border-sky-400 group-hover:bg-sky-400/10 group-hover:text-sky-400 group-hover:scale-110 group-hover:rotate-45 group-hover:opacity-100 transition-all duration-400 md:col-start-3 col-start-3 row-start-1">
                        <Edit3 size={20} />
                      </div>
                    </div>

                    {/* Requirement 2 */}
                    <div className="group relative py-6 grid grid-cols-[80px,1fr,60px] gap-8 items-start border-b border-white/10 transition-all duration-400 after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:shadow-[0_0_15px_rgba(56,189,248,0.5)] after:transition-[width] after:duration-500 hover:after:w-full">
                      <div className="font-mono text-slate-500 text-sm pt-1 group-hover:text-sky-400 transition-colors hidden md:block">02</div>
                      <div className="flex flex-col gap-2 md:col-start-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 group-hover:translate-x-2 transition-all duration-300">
                          Enhanced Responsiveness
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl opacity-80 group-hover:text-slate-300 group-hover:opacity-100 transition-all">
                          Seamless experience across devices. Whether on iPad on-site or desktop in the office, the workflow remains fluid.
                        </p>
                      </div>
                      <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-slate-500 opacity-50 group-hover:border-sky-400 group-hover:bg-sky-400/10 group-hover:text-sky-400 group-hover:scale-110 group-hover:rotate-45 group-hover:opacity-100 transition-all duration-400 md:col-start-3 col-start-3 row-start-1">
                        <Smartphone size={20} />
                      </div>
                    </div>

                    {/* Requirement 3 */}
                    <div className="group relative py-6 grid grid-cols-[80px,1fr,60px] gap-8 items-start border-b border-white/10 transition-all duration-400 after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:shadow-[0_0_15px_rgba(56,189,248,0.5)] after:transition-[width] after:duration-500 hover:after:w-full">
                      <div className="font-mono text-slate-500 text-sm pt-1 group-hover:text-sky-400 transition-colors hidden md:block">03</div>
                      <div className="flex flex-col gap-2 md:col-start-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 group-hover:translate-x-2 transition-all duration-300">
                          Design Consistency
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl opacity-80 group-hover:text-slate-300 group-hover:opacity-100 transition-all">
                          Cohesive visual language. We built an Atomic Design System to ensure uniformity across the entire platform.
                        </p>
                      </div>
                      <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-slate-500 opacity-50 group-hover:border-sky-400 group-hover:bg-sky-400/10 group-hover:text-sky-400 group-hover:scale-110 group-hover:rotate-45 group-hover:opacity-100 transition-all duration-400 md:col-start-3 col-start-3 row-start-1">
                        <Grid size={20} />
                      </div>
                    </div>

                    {/* Requirement 4 */}
                    <div className="group relative py-6 grid grid-cols-[80px,1fr,60px] gap-8 items-start transition-all duration-400 after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:shadow-[0_0_15px_rgba(56,189,248,0.5)] after:transition-[width] after:duration-500 hover:after:w-full">
                      <div className="font-mono text-slate-500 text-sm pt-1 group-hover:text-sky-400 transition-colors hidden md:block">04</div>
                      <div className="flex flex-col gap-2 md:col-start-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 group-hover:translate-x-2 transition-all duration-300">
                          Accessibility (A11y)
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl opacity-80 group-hover:text-slate-300 group-hover:opacity-100 transition-all">
                          Inclusive design. Meeting WCAG 2.1 AA standards with high contrast ratios and keyboard navigation support.
                        </p>
                      </div>
                      <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-slate-500 opacity-50 group-hover:border-sky-400 group-hover:bg-sky-400/10 group-hover:text-sky-400 group-hover:scale-110 group-hover:rotate-45 group-hover:opacity-100 transition-all duration-400 md:col-start-3 col-start-3 row-start-1">
                        <Info size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Text Block */}
                      {section.type === 'text-block' && (
                        <div className="max-w-3xl">
                          {section.title && (
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                              <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                              {section.title}
                            </h3>
                          )}
                          {section.highlight && (
                            <div className="mb-8 p-6 bg-pink-500/5 border-l-4 border-pink-500 text-pink-200 text-lg font-medium italic rounded-r-lg">
                              &quot;{section.highlight}&quot;
                            </div>
                          )}
                          {/* Special styling for CTA-style text blocks */}
                          {section.id === 'courtcanva2-cta' ? (
                            <div className="flex items-center justify-center my-8 py-6 px-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-sm">
                              <div 
                                className="text-slate-200 text-lg leading-relaxed text-center whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: section.content || '' }}
                              />
                            </div>
                          ) : (
                            <div 
                              className="text-slate-300 leading-relaxed text-lg whitespace-pre-line"
                              dangerouslySetInnerHTML={{ __html: section.content || '' }}
                            />
                          )}
                        </div>
                      )}

                      {/* Structure Cards - Product Structure */}
                      {section.type === 'structure-cards' && (
                        <div className="w-full max-w-7xl mx-auto">
                          <h3 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
                            <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                            {section.title}
                          </h3>

                          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            {/* Card 1: Homepage */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20">
                              <img src="/courtcanva/landing webpage.png" alt="Homepage" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-all duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                                <Home size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">01</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-200 group-hover:text-emerald-400 drop-shadow-lg">Homepage</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Eye-catching banner showcasing platform capabilities with clear CTAs for starting designs or exploring the gallery.
                                </p>
                              </div>
                            </div>

                            {/* Card 2: Design Interface */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20">
                              <img src="/courtcanva/3D Preview Access Button.png" alt="Design Interface" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-all duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                                <Edit3 size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">02</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-200 group-hover:text-emerald-400 drop-shadow-lg">Design Interface</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Intuitive drag-and-drop tool with extensive court elements, customization options, and real-time 3D preview.
                                </p>
                              </div>
                            </div>

                            {/* Card 3: Quote Request */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20">
                              <img src="/courtcanva/Order Generation Page.png" alt="Quote Request" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-all duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                                <FileText size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">03</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-200 group-hover:text-emerald-400 drop-shadow-lg">Quote Request</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Submit custom designs with project details like location and materials. Quotes sent directly via email or platform messaging.
                                </p>
                              </div>
                            </div>

                            {/* Card 4: Templates */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20">
                              <img src="/courtcanva/My Template Page.png" alt="Templates" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-all duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                                <Grid size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">04</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-200 group-hover:text-emerald-400 drop-shadow-lg">Templates</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Diverse collection of user-created designs offering inspiration with social sharing options for favorite designs.
                                </p>
                              </div>
                            </div>

                            {/* Card 5: User Account */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20">
                              <img src="/courtcanva/My Account.png" alt="User Account" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-all duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                                <User size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">05</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-200 group-hover:text-emerald-400 drop-shadow-lg">User Account</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Personal dashboard for managing saved designs, accessing quotes, and tracking project progress.
                                </p>
                              </div>
                            </div>

                            {/* Card 6: Place Order */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20">
                              <img src="/courtcanva/Order Placed Successful Page.png" alt="Place Order" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-all duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                                <ShoppingCart size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">06</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-200 group-hover:text-emerald-400 drop-shadow-lg">Place Order</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Secure payment with detailed order summaries and real-time status updates from court builders.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Feature Showcase */}
                      {section.type === 'feature-showcase' && section.featureShowcase && (
                        <div className="w-full my-12 flex flex-col items-center">
                          {/* Header Area */}
                          <div className="mb-12 text-center max-w-3xl">
                            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-[1.5px] mb-5">
                              {section.featureShowcase.badge}
                            </span>
                            <h3 className="text-[42px] font-extrabold mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent leading-tight">
                              {section.featureShowcase.heroTitle}
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                              {section.featureShowcase.description}
                            </p>
                          </div>

                          {/* Features Grid - 2x2 + 1 spanning */}
                          <div className="grid lg:grid-cols-2 gap-5 w-full">
                            {section.featureShowcase.features.map((feature, idx) => {
                              const IconComponent = iconMap[feature.icon];
                              const isLastItem = idx === section.featureShowcase!.features.length - 1;
                              
                              return (
                                <div
                                  key={idx}
                                  className={`group relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 transition-all duration-400 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] cursor-default overflow-hidden ${
                                    isLastItem ? 'lg:col-span-2' : ''
                                  }`}
                                >
                                  {/* Left accent line on hover */}
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  
                                  {/* Header */}
                                  <div className="flex items-center justify-between mb-0 group-hover:mb-4 transition-all duration-400">
                                    <div className="flex items-center gap-3">
                                      <span className="text-xs font-mono text-slate-500 opacity-50 group-hover:opacity-100 group-hover:text-emerald-400 group-hover:font-bold transition-all duration-300">
                                        {feature.index}
                                      </span>
                                      <h4 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                                        {IconComponent && <IconComponent size={18} className="opacity-80" />}
                                        {feature.title}
                                      </h4>
                                    </div>
                                    
                                    {/* Plus/Minus indicator */}
                                    <div className="relative w-5 h-5 text-slate-500 opacity-50 group-hover:opacity-100 group-hover:text-emerald-400 transition-all duration-400">
                                      <Plus size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-400 group-hover:rotate-90" />
                                    </div>
                                  </div>

                                  {/* Description (collapsible) */}
                                  <div className="max-h-0 opacity-0 translate-y-2 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                    <p className="text-sm leading-relaxed text-slate-400">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Reflection Dual Column */}
                      {section.type === 'reflection-dual' && section.reflectionData && (
                        <div className="w-full my-12">
                          <div className="grid lg:grid-cols-2 gap-20">
                            {/* Left Column: What Worked Well */}
                            <div className="relative">
                              <div className="mb-14 pl-5 flex items-baseline gap-4 flex-wrap">
                                <span className="text-[13px] uppercase tracking-[2px] font-bold text-emerald-400 opacity-80">
                                  RETROSPECTIVE
                                </span>
                                <h3 className="text-[28px] font-extrabold text-white tracking-tight leading-none">
                                  What Worked Well
                                </h3>
                              </div>

                              {section.reflectionData.successes.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="group relative mb-12 pl-8 cursor-default transition-transform duration-300 hover:translate-x-2"
                                >
                                  {/* Left decorative line */}
                                  <div className="absolute left-0 top-1.5 w-[3px] h-6 bg-slate-800 transition-all duration-400 group-hover:h-full group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgb(52,211,153)]" />
                                  
                                  {/* Background number */}
                                  <div className="absolute -top-10 -left-5 text-[100px] font-black text-white/[0.02] z-0 pointer-events-none leading-none transition-all duration-500 group-hover:text-white/[0.06] group-hover:-translate-x-2 group-hover:scale-105" style={{fontFamily: 'Helvetica Neue, sans-serif'}}>
                                    {String(idx + 1).padStart(2, '0')}
                                  </div>

                                  {/* Content */}
                                  <div className="relative z-10">
                                    <h4 className="text-xl font-bold text-slate-200 mb-2.5 transition-colors duration-300 group-hover:text-emerald-400">
                                      {item.title}
                                    </h4>
                                    <p className="text-base leading-[1.7] text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Right Column: Areas for Evolution */}
                            <div className="relative">
                              <div className="mb-14 pl-5 flex items-baseline gap-4 flex-wrap">
                                <span className="text-[13px] uppercase tracking-[2px] font-bold text-pink-400 opacity-80">
                                  RETROSPECTIVE
                                </span>
                                <h3 className="text-[28px] font-extrabold text-white tracking-tight leading-none">
                                  Areas for Evolution
                                </h3>
                              </div>

                              {section.reflectionData.improvements.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="group relative mb-12 pl-8 cursor-default transition-transform duration-300 hover:translate-x-2"
                                >
                                  {/* Left decorative line */}
                                  <div className="absolute left-0 top-1.5 w-[3px] h-6 bg-slate-800 transition-all duration-400 group-hover:h-full group-hover:bg-pink-400 group-hover:shadow-[0_0_15px_rgb(251,113,133)]" />
                                  
                                  {/* Background number */}
                                  <div className="absolute -top-10 -left-5 text-[100px] font-black text-white/[0.02] z-0 pointer-events-none leading-none transition-all duration-500 group-hover:text-white/[0.06] group-hover:-translate-x-2 group-hover:scale-105" style={{fontFamily: 'Helvetica Neue, sans-serif'}}>
                                    {String(idx + 1).padStart(2, '0')}
                                  </div>

                                  {/* Content */}
                                  <div className="relative z-10">
                                    <h4 className="text-xl font-bold text-slate-200 mb-2.5 transition-colors duration-300 group-hover:text-pink-400">
                                      {item.title}
                                    </h4>
                                    <p className="text-base leading-[1.7] text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Image Block */}
                      {section.type === 'image' && (
                        <div className="w-full my-8">
                          {section.title && (
                            <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                              <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                              {section.title}
                            </h3>
                          )}
                          {section.content && (
                            <p className="text-slate-300 leading-relaxed mb-6">{section.content}</p>
                          )}
                          <InterviewImage 
                            src={section.src || ''}
                            alt={section.alt || ''}
                            caption={section.caption}
                            className={section.imageClass}
                            hasTitle={!!section.title}
                            onLightboxChange={setIsAnyLightboxOpen}
                          />
                        </div>
                      )}

                      {/* Scrollytelling Block */}
                      {section.type === 'scrollytelling' && (
                        <ScrollytellingBlock section={section} />
                      )}

                      {/* 3D Carousel Block */}
                      {section.type === 'carousel-3d' && section.steps && (
                        <Carousel3D steps={section.steps} title={section.title} />
                      )}

                      {/* Process Steps Block */}
                      {section.type === 'process-steps' && section.processSteps && (
                        <div className="w-full my-16">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
                            {section.processSteps.map((step, idx) => {
                              const svgIcons: Record<string, string> = {
                                'Discover': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.12 14.12l-6.06 2.02a1 1 0 0 1-1.26-1.26l2.02-6.06a1 1 0 0 1 .58-.58l6.06-2.02a1 1 0 0 1 1.26 1.26l-2.02 6.06a1 1 0 0 1-.58.58z',
                                'Define': 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
                                'Ideate': 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z',
                                'Design': 'M3.5 18.5l8-8-2-2-8 8V20h3.5v-1.5zm.91-2h-1.5v-1.5l5-5 1.5 1.5-5 5zM18.42 1.59a2 2 0 0 0-2.83 0l-2.34 2.33 4.24 4.24 2.34-2.33a2 2 0 0 0 0-2.83l-1.41-1.41z'
                              };
                              return (
                                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:border-pink-500/50 group-hover:shadow-2xl group-hover:shadow-pink-500/20 transition-all duration-300">
                                    <svg 
                                      viewBox="0 0 24 24" 
                                      className="w-12 h-12 md:w-14 md:h-14 fill-slate-400 group-hover:fill-pink-400 group-hover:scale-110 transition-all duration-300"
                                    >
                                      <path d={svgIcons[step.label]} />
                                    </svg>
                                  </div>
                                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                                    {step.label}
                                  </h3>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Product Users Block */}
                      {section.type === 'product-users' && section.productUsers && (
                        <div className="w-full my-16 text-center">
                          <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                              {section.productUsers.description.split(/the ages of \d+ and \d+/).map((part, idx, arr) => {
                                if (idx < arr.length - 1) {
                                  const match = section.productUsers!.description.match(/the ages of (\d+) and (\d+)/);
                                  return (
                                    <span key={idx}>
                                      {part}
                                      <span className="text-pink-400 font-semibold bg-pink-500/10 px-2 py-1 rounded">
                                        the ages of {match?.[1]} and {match?.[2]}
                                      </span>
                                    </span>
                                  );
                                }
                                return <span key={idx}>{part}</span>;
                              })}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                              {section.productUsers.users.map((user, idx) => (
                                <div key={idx} className="flex flex-col items-center group">
                                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 mb-6 group-hover:border-pink-500/50 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/20 transition-all duration-300">
                                    <img 
                                      src={user.image} 
                                      alt={user.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <h4 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                                    {user.name}
                                  </h4>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Survey Tabs Block */}
                      {section.type === 'survey-tabs' && section.surveyTabs && (
                        <div className="w-full my-12">
                          <SurveyTabsComponent 
                            tabs={section.surveyTabs} 
                            caption={section.caption}
                            onLightboxChange={setIsAnyLightboxOpen}
                          />
                        </div>
                      )}

                      {/* Video Block */}
                      {section.type === 'video' && (
                        <div className="w-full my-12 flex flex-col items-center">
                          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl inline-block">
                            {section.src?.includes('youtube.com') || section.src?.includes('youtu.be') ? (
                              <iframe
                                src={section.src}
                                title={section.caption || 'Video'}
                                className="w-full aspect-[9/16]"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <video 
                                ref={(el) => {
                                  if (el) {
                                    const observer = new IntersectionObserver(
                                      (entries) => {
                                        entries.forEach((entry) => {
                                          if (entry.isIntersecting) {
                                            el.play().catch(() => {
                                              // Autoplay was prevented, user interaction required
                                            });
                                          } else {
                                            el.pause();
                                          }
                                        });
                                      },
                                      { threshold: 0.5 }
                                    );
                                    observer.observe(el);
                                  }
                                }}
                                src={section.src}
                                controls
                                loop
                                muted
                                playsInline
                                className="h-auto"
                                style={{ maxWidth: '100%' }}
                              >
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </div>
                          {section.caption && (
                            <p className="text-center text-slate-500 text-sm mt-4 italic">
                              {section.caption}
                            </p>
                          )}
                        </div>
                      )}

                      {/* React Component */}
                      {section.type === 'react-component' && section.component === 'CourtCanva2' && (
                        <div className="w-full max-w-3xl my-12">
                          <div className="rounded-2xl overflow-hidden ring-1 ring-white/20">
                            <CourtCanva2 />
                          </div>
                        </div>
                      )}

                      {/* Gallery Grid */}
                      {section.type === 'gallery' && section.images && (
                        <GalleryComponent 
                          images={section.images.filter((img): img is string => typeof img === 'string')}
                          caption={section.caption}
                          onLightboxChange={setIsAnyLightboxOpen}
                        />
                      )}

                      {/* Goals Interactive */}
                      {section.type === 'goals-interactive' && (
                        <GoalsInteractive onLightboxChange={setIsAnyLightboxOpen} />
                      )}

                      {/* Pattern Cards */}
                      {section.type === 'pattern-cards' && (
                        <PatternCards onLightboxChange={setIsAnyLightboxOpen} />
                      )}

                      {/* Safety Rails */}
                      {section.type === 'safety-rails' && section.safetyRails && (
                        <SafetyRails cards={section.safetyRails} onLightboxChange={setIsAnyLightboxOpen} />
                      )}

                      {/* Feature List */}
                      {section.type === 'feature-list' && section.features && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-purple-500 inline-block"/> {section.title}
                          </h3>
                          <p className="text-slate-400 mb-8 max-w-3xl text-lg">{section.intro}</p>
                          {/* Blueprint-style list for Context Section */}
                          {section.id === 'context' ? (
                            <div className="max-w-4xl">
                              
                              {/* Blueprint Rows */}
                              {section.features.map((feature, idx) => (
                                <div 
                                  key={idx}
                                  className="bp-row group relative py-4 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-4 items-start cursor-default"
                                >
                                  {/* Title */}
                                  <h3 className="text-base font-bold text-white m-0 leading-snug transition-all duration-400 group-hover:translate-x-2 group-hover:text-white">
                                    {feature.title.replace(/\s+/g, '\n').split('\n').map((line, i) => (
                                      <span key={i}>
                                        {line}
                                        {i < feature.title.replace(/\s+/g, '\n').split('\n').length - 1 && <br />}
                                      </span>
                                    ))}
                                  </h3>
                                  
                                  {/* Description */}
                                  <p className="text-base leading-relaxed text-slate-500 m-0 transition-colors duration-300 group-hover:text-slate-300">
                                    {feature.desc}
                                  </p>
                                  
                                  {/* Bottom Line with Progress Effect */}
                                  <div className="absolute bottom-0 left-0 w-full h-px bg-white/15">
                                    <div className="h-full w-0 bg-indigo-500 transition-all duration-[600ms] ease-out group-hover:w-full shadow-[0_0_15px_currentColor]" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {section.features.map((feature, idx) => (
                                <div key={idx} className="p-6 bg-slate-900 border border-white/10 rounded-xl hover:border-pink-500/30 transition-colors group">
                                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                  </div>
                                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                  {feature.images && feature.images.length > 0 && (
                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                      {feature.images.map((imgSrc, imgIdx) => (
                                        <img
                                          key={imgIdx}
                                          src={imgSrc}
                                          alt={`${feature.title} - Image ${imgIdx + 1}`}
                                          className="w-full h-auto rounded-lg border border-white/10"
                                        />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Impact Section */}
                      {section.type === 'impact' && (
                        <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-8 md:p-12 rounded-3xl border border-pink-500/20 text-center shadow-2xl shadow-pink-900/10">
                          <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>
                          <p className="text-slate-200 text-xl leading-relaxed max-w-4xl mx-auto">
                            {section.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // STANDARD LAYOUT FOR OTHER PROJECTS
                <div className="grid md:grid-cols-3 gap-12">
                  {/* Left Column (Context) */}
                  <div className="md:col-span-1 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-pink-500 rounded-full"/> Overview
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.details.overview}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-500 rounded-full"/> My Role
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.details.myRole}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-blue-500 rounded-full"/> Constraints
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.details.constraints}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Process & Results) */}
                  <div className="md:col-span-2 space-y-10">
                    {/* Approach */}
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                      <h3 className="text-2xl font-bold text-white mb-4">Approach</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {project.details.approach}
                      </p>
                    </div>

                    {/* Key Decisions */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Key UX Decisions</h3>
                      <ul className="space-y-4">
                        {project.details.keyDecisions.map((decision, idx) => (
                          <li key={idx} className="flex gap-4 p-4 bg-slate-900 rounded-lg border border-white/5">
                            <span className="flex-shrink-0 w-8 h-8 bg-pink-500/20 text-pink-400 flex items-center justify-center rounded-full font-bold text-sm">
                              {idx + 1}
                            </span>
                            <p className="text-slate-300 text-sm mt-1">{decision}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-8 rounded-2xl border border-pink-500/20">
                      <h3 className="text-2xl font-bold text-white mb-2">Outcome</h3>
                      <p className="text-slate-200 text-lg">
                        {project.details.outcome}
                      </p>
                    </div>

                    {/* NDA Note */}
                    <div className="flex items-center gap-3 p-4 bg-yellow-900/10 border border-yellow-500/20 rounded-lg text-yellow-500/80 text-sm">
                      <Shield size={16} />
                      <span>Some screens are redacted due to NDA. I can walk through details confidentially.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
