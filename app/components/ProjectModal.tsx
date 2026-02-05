"use client";
// 禁止body滚动的hook
function useBodyScrollLock(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);
}

import { useEffect, useRef, useState } from 'react';
import { X, Shield, Menu, Maximize2, ChevronLeft, ChevronRight, ChevronDown, Smile, Edit, Cloud, Search, Users, Layout, WifiOff, LucideIcon, TrendingUp, MessageCircle, Smartphone, Tablet, Check, Minus, Code, Target, Star, Eye, UserX, Zap, Activity, AlertCircle, HelpCircle, EyeOff, Sun, Monitor, Home, Building2, Edit3, Grid, Info, FileText, ShoppingCart, User, Lightbulb, Plus, Archive, Mail, LogIn, LayoutDashboard, RefreshCw, UserPlus, History, Wifi, Building, Edit2, ArrowLeftRight, ClipboardList } from 'lucide-react';
import { Project } from '../types';
import { ScrollytellingBlock } from './ScrollytellingBlock';
import { Carousel3D } from './Carousel3D';
import { TestingRefinement } from './TestingRefinement';
import { IncidentScenario } from './IncidentScenario';
import GoalsInteractive from './GoalsInteractive';
import PatternCards from './PatternCards';
import SafetyRails from './SafetyRails';
import Lightbox from './Lightbox';
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

  const openLightbox = () => {
    setIsEnlarged(true);
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setIsEnlarged(false);
    onLightboxChange?.(false);
  };

  return (
    <>
      <div 
        className={`cursor-zoom-in group relative ${hasTitle ? 'max-w-md' : ''}`}
        onClick={openLightbox}
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

      {/* Lightbox */}
      <Lightbox
        isOpen={isEnlarged}
        images={[src]}
        currentIndex={0}
        onClose={closeLightbox}
        alt={alt}
      />
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

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        images={currentImages}
        currentIndex={lightboxImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        alt={`${tabs[activeTab]?.label || 'Survey'} image`}
      />
    </div>
  );
};

// Hub Highlights Tabs Component (for SLS Hub project)
const HubHighlightsTabsComponent = ({ tabs, onLightboxChange }: { 
  tabs: Array<{
    label: string; 
    whyItMatters: string; 
    primaryGallery: Array<{src: string; caption: string}>; 
    moreScreenshots?: Array<{src: string; caption: string}>
  }>; 
  onLightboxChange?: (isOpen: boolean) => void 
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [currentGalleryType, setCurrentGalleryType] = useState<'primary' | 'more'>('primary');
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const currentTab = tabs[activeTab];
  const currentImages = currentGalleryType === 'primary' 
    ? currentTab?.primaryGallery || [] 
    : currentTab?.moreScreenshots || [];

  const openLightbox = (index: number, galleryType: 'primary' | 'more') => {
    setCurrentGalleryType(galleryType);
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    onLightboxChange?.(false);
  };

  const nextImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  // Reset accordion state when changing tabs
  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setExpandedAccordion(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12">
      {/* Tabs - Responsive: Pills on desktop, Dropdown on mobile */}
      <div className="mb-8">
        {/* Desktop: Horizontal Pills */}
        <div className="hidden md:flex justify-center gap-2 flex-wrap">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => handleTabChange(idx)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile: Dropdown */}
        <div className="md:hidden">
          <select
            value={activeTab}
            onChange={(e) => handleTabChange(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 text-white border border-white/10 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          >
            {tabs.map((tab, idx) => (
              <option key={idx} value={idx}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* Why It Matters */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="text-orange-500 mt-1">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h5 className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-1">Why It Matters</h5>
              <p className="text-slate-300 leading-relaxed">{currentTab?.whyItMatters}</p>
            </div>
          </div>
        </div>

        {/* Primary Gallery */}
        <div>
          <h5 className="text-lg font-semibold text-slate-200 mb-4">Key Screenshots</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTab?.primaryGallery?.map((item, idx) => (
              <button
                key={idx}
                onClick={() => openLightbox(idx, 'primary')}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 cursor-zoom-in"
              >
                <div className="aspect-video w-full">
                  <img 
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm leading-tight">{item.caption}</p>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm px-2 py-1.5 rounded-full text-white text-xs flex items-center gap-1">
                  <Maximize2 size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* More Screenshots Accordion */}
        {currentTab?.moreScreenshots && currentTab.moreScreenshots.length > 0 && (
          <div className="border border-slate-700/50 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedAccordion(!expandedAccordion)}
              className="w-full px-6 py-4 bg-slate-800/30 hover:bg-slate-800/50 transition-colors flex items-center justify-between group"
            >
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                View more screenshots ({currentTab.moreScreenshots.length})
              </span>
              <ChevronDown 
                size={20} 
                className={`text-slate-400 group-hover:text-white transition-all duration-300 ${expandedAccordion ? 'rotate-180' : ''}`}
              />
            </button>
            
            {expandedAccordion && (
              <div className="p-4 bg-slate-900/30">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {currentTab.moreScreenshots.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => openLightbox(idx, 'more')}
                      className="group relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-slate-900 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 cursor-zoom-in"
                    >
                      <img 
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Maximize2 size={16} className="text-white" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        images={currentImages.map(img => img.src)}
        currentIndex={lightboxImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        alt={currentImages[lightboxImageIndex]?.caption || ''}
        caption={currentImages[lightboxImageIndex]?.caption}
      />
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

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={lightboxImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        caption={caption}
        alt="Gallery image"
      />
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

// Responsive & Dark Mode Interactive Section
const ResponsiveDarkModeSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="max-w-full">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* LEFT: Narrative & Controls */}
        <div className="flex-1 lg:sticky lg:top-10 space-y-8">
          
          {/* Description */}
          <div>
            <p className="text-slate-400 text-base leading-relaxed mb-4">
              I designed for real-world constraints, ensuring key workflows (Forms, Rosters) remain usable on mobile devices. I also implemented a full Dark Mode system to align with modern platform expectations.
            </p>
            
            {/* Coverage Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="font-mono text-[10px] text-green-400 bg-green-400/10 px-3 py-1.5 rounded-md border border-green-400/20">
                Breakpoints: Desktop/Tablet/Mobile
              </span>
              <span className="font-mono text-[10px] text-green-400 bg-green-400/10 px-3 py-1.5 rounded-md border border-green-400/20">
                Patterns: Forms · Tables · Modals
              </span>
              <span className="font-mono text-[10px] text-green-400 bg-green-400/10 px-3 py-1.5 rounded-md border border-green-400/20">
                WCAG AA Contrast
              </span>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between">
            <div className="font-semibold text-sm text-white">Try Dark Mode Preview</div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative w-[60px] h-[32px] rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-indigo-500' : 'bg-slate-600'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center text-sm transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-[28px]' : 'translate-x-0'
                }`}
              >
                {isDarkMode ? '🌙' : '☀️'}
              </div>
            </button>
          </div>

          {/* Hint */}
          <div className="text-xs text-slate-500 leading-relaxed">
            *Click the switch above to toggle the device mockups between Light and Dark mode designs.
          </div>

        </div>

        {/* RIGHT: Device Simulation Grid */}
        <div className="flex-[1.6] space-y-10">

          {/* Device Row 1 */}
          <div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-end">
              
              {/* Phone Frame */}
              <div className="mx-auto md:mx-0">
                <div className="relative w-[200px] h-[400px] bg-[#111] border-[8px] border-[#333] rounded-[24px] overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-black rounded-[10px] z-10" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full transition-all duration-500 flex items-start justify-center">
                    {isDarkMode ? (
                      <img 
                        src="/slshub/Mobile Flow (Dark).png" 
                        alt="Mobile Flow Dark Mode"
                        className="w-full h-auto min-h-full object-cover object-top scale-[1.15] origin-top"
                      />
                    ) : (
                      <img 
                        src="/slshub/Mobile Flow (Light).png" 
                        alt="Mobile Flow Light Mode"
                        className="w-full h-auto min-h-full object-cover object-top scale-[1.15] origin-top"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Laptop Frame */}
              <div className="flex-1 min-w-0">
                <div className="relative w-full h-[300px] bg-[#111] border-[12px] border-[#333] border-b-[24px] rounded-t-[16px] rounded-b-[4px] overflow-hidden shadow-2xl">
                  {/* Camera Dot */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#555] rounded-full" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full transition-all duration-500">
                    {isDarkMode ? (
                      <img 
                        src="/slshub/Desktop Dashboard(Dark).png" 
                        alt="Desktop Dashboard Dark Mode"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img 
                        src="/slshub/Desktop Dashboard(Light).png" 
                        alt="Desktop Dashboard Light Mode"
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                </div>
              </div>

            </div>
            <div className="mt-4 text-xs text-center text-slate-500 border-t border-white/10 pt-3">
              Same workflow across breakpoints: layout reflows without losing critical actions.
            </div>
          </div>

          {/* Device Row 2 */}
          <div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-end">
              
              {/* Phone Frame - Smaller */}
              <div className="mx-auto md:mx-0">
                <div className="relative w-[200px] h-[350px] bg-[#111] border-[6px] border-[#333] rounded-[24px] overflow-hidden shadow-2xl">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-black rounded-[10px] z-10" />
                  
                  <div className="w-full h-full transition-all duration-500">
                    {isDarkMode ? (
                      <img 
                        src="/slshub/Mobile Modal (Dark).png" 
                        alt="Mobile Modal Dark Mode"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img 
                        src="/slshub/Mobile Modal (Light).png" 
                        alt="Mobile Modal Light Mode"
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Laptop Frame - Smaller */}
              <div className="flex-1 min-w-0">
                <div className="relative w-full bg-[#111] border-[8px] border-[#333] border-b-[20px] rounded-t-[16px] rounded-b-[4px] overflow-hidden shadow-2xl">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#555] rounded-full" />
                  
                  <div className="w-full transition-all duration-500 flex items-start justify-center">
                    {isDarkMode ? (
                      <img 
                        src="/slshub/Desktop Table (Dark).png" 
                        alt="Desktop Table Dark Mode"
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <img 
                        src="/slshub/Desktop Table (Light).png" 
                        alt="Desktop Table Light Mode"
                        className="w-full h-auto object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>

            </div>
            <div className="mt-4 text-xs text-center text-slate-500 border-t border-white/10 pt-3">
              Modal behaviour on small screens & consistent contrast in data tables.
            </div>
          </div>

          {/* Device Row 3 - Forms */}
          <div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-end">
              
              {/* Phone Frame */}
              <div className="mx-auto md:mx-0">
                <div className="relative w-[200px] h-[400px] bg-[#111] border-[8px] border-[#333] rounded-[24px] overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-black rounded-[10px] z-10" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full transition-all duration-500">
                    {isDarkMode ? (
                      <img 
                        src="/slshub/Mobile Form (Dark).png" 
                        alt="Mobile Form Dark Mode"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img 
                        src="/slshub/Mobile Form (Light).png" 
                        alt="Mobile Form Light Mode"
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Laptop Frame */}
              <div className="flex-1 min-w-0">
                <div className="relative w-full bg-[#111] border-[12px] border-[#333] border-b-[24px] rounded-t-[16px] rounded-b-[4px] overflow-hidden shadow-2xl">
                  {/* Camera Dot */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#555] rounded-full" />
                  
                  {/* Screen Content */}
                  <div className="w-full transition-all duration-500 flex items-start justify-center">
                    {isDarkMode ? (
                      <img 
                        src="/slshub/Desktop Form (Dark).png" 
                        alt="Desktop Form Dark Mode"
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <img 
                        src="/slshub/Desktop Form (Light).png" 
                        alt="Desktop Form Light Mode"
                        className="w-full h-auto object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>

            </div>
            <div className="mt-4 text-xs text-center text-slate-500 border-t border-white/10 pt-3">
              Form layouts adapt across viewports while maintaining field hierarchy and validation clarity.
            </div>
          </div>

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
  const [selectedScreensTab, setSelectedScreensTab] = useState('account-access');
  const [screenshotLightboxOpen, setScreenshotLightboxOpen] = useState(false);
  const [currentScreenshotImage, setCurrentScreenshotImage] = useState('');
  useBodyScrollLock(true);

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

  // Video autoplay on scroll into view
  useEffect(() => {
    const videos = document.querySelectorAll('.video-autoplay');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Auto-play was prevented, ignore the error
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
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
      <div className="relative w-full max-w-7xl h-[90vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
        
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
          <div className={`relative h-80 w-full ${project.id === 'slshub' ? 'bg-gradient-to-r from-orange-700 to-orange-600' : `bg-gradient-to-br ${project.gradient}`} p-8 md:p-12 flex flex-col justify-end`}>
            {project.image ? (
              <>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-100 transition-all duration-700"
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
                {/* Additional badge for SLS Hub */}
                {project.id === 'slshub' && (
                  <span className="px-3 py-1 bg-green-600/80 backdrop-blur rounded-full text-xs font-semibold text-white border border-green-400/30">
                    ✓ Live
                  </span>
                )}
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
                            ? (project.id === 'slshub' ? 'border-fuchsia-400 text-white font-medium bg-gradient-to-r from-fuchsia-400/10 to-transparent' : 'border-pink-500 text-white font-medium')
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
                      // Different target sections for different projects
                      let targetId = project.finalDesignLink || 'outcome'; // use finalDesignLink if available
                      if (!project.finalDesignLink) {
                        if (project.id === 'surfcom') {
                          targetId = 'design-highlights';
                        } else if (project.id === 'courtcanva') {
                          targetId = 'courtcanva2-intro';
                        } else if (project.id === 'nootee') {
                          targetId = 'final-ui';
                        } else if (project.id === 'jrfood') {
                          targetId = 'final-polish';
                        }
                      }
                      const targetSection = document.getElementById(targetId);
                      if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="w-full py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-900/30 hover:shadow-pink-900/50 hover:scale-[1.02]"
                  >
                    <Eye size={16} /> View highlights
                  </button>
                </div>
              </div>

              {/* CONDITIONAL RENDERING: FULL CASE STUDY OR STANDARD LAYOUT */}
              {project.isCaseStudy && project.details.contentSections ? (
                <div className="space-y-20 max-w-6xl mx-auto">
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

              {/* Video CTA Button */}
              {section.type === 'video-cta' && section.videoPath && (
                <div className="w-full my-8">
                  <a 
                    href={section.videoPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-xl font-semibold text-base transition-all shadow-xl shadow-pink-900/30 hover:shadow-pink-900/50 hover:scale-[1.02] group"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    {section.buttonText || 'Watch Video'}
                  </a>
                </div>
              )}

              {/* Image Masonry Gallery - Waterfall Layout */}
              {section.type === 'image-masonry' && section.images && (
                <div className="w-full my-8">
                  {section.title && (
                    <h4 className="text-xl font-semibold text-slate-200 mb-3 pb-2 border-b border-slate-700/50">
                      {section.title}
                    </h4>
                  )}
                  {section.content && (
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{section.content}</p>
                  )}
                  
                  {/* Masonry Grid using CSS columns */}
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {section.images.map((img: any, idx: number) => (
                      <div 
                        key={idx} 
                        className="break-inside-avoid mb-4 group cursor-pointer"
                        onClick={() => {
                          setScreenshotLightboxOpen(true);
                          setCurrentScreenshotImage(img.src);
                          setIsAnyLightboxOpen(true);
                        }}
                      >
                        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-900/50 transition-all duration-300 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20">
                          <img
                            src={img.src}
                            alt={img.caption || ''}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                          />
                          {img.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                              <p className="text-slate-200 text-xs leading-relaxed">
                                {img.caption}
                              </p>
                            </div>
                          )}
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

              {/* Problem & Goal Block - Custom Design */}
              {section.type === 'problem-goal' && (
                <div className="w-full">
                  {section.title && (
                    <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                      {section.title}
                    </h3>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px_1fr] gap-10 lg:gap-10 items-stretch">
                    {/* Problem Card */}
                    <div className="group relative bg-red-500/5 border border-red-500/20 rounded-[20px] p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:z-10">
                      {/* Scan Overlay */}
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.2)_3px)] opacity-30 rounded-[20px] pointer-events-none" />
                      
                      {/* Card Header */}
                      <div className="flex items-center gap-3 border-b border-white/5 pb-4 relative z-10">
                        <div className="w-9 h-9 rounded-lg bg-red-500/15 flex items-center justify-center text-red-500">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-red-500 m-0">Current State: Friction</h4>
                      </div>
                      
                      {/* Card Text */}
                      <div 
                        className="text-[15px] leading-relaxed text-red-200 relative z-10 [&_strong]:text-white [&_strong]:font-semibold [&_strong]:bg-red-500/20 [&_strong]:px-1 [&_strong]:rounded-sm"
                        dangerouslySetInnerHTML={{ __html: section.problemText || '' }}
                      />
                    </div>

                    {/* Center Arrow */}
                    <div className="hidden lg:flex items-center justify-center z-10">
                      <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded-full flex items-center justify-center text-slate-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>

                    {/* Goal Card */}
                    <div className="group relative bg-blue-500/5 border border-blue-500/30 rounded-[20px] p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:z-10 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
                      {/* Card Header */}
                      <div className="flex items-center gap-3 border-b border-white/5 pb-4 relative z-10">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-500">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-blue-500 m-0">Target State: Optimised</h4>
                      </div>
                      
                      {/* Card Text */}
                      <div 
                        className="text-[15px] leading-relaxed text-blue-200 relative z-10 [&_strong]:text-white [&_strong]:font-semibold [&_strong]:bg-blue-500/20 [&_strong]:px-1 [&_strong]:rounded-sm"
                        dangerouslySetInnerHTML={{ __html: section.goalText || '' }}
                      />
                    </div>
                  </div>
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
              {/* Next Steps Section: Comprehensive Roadmap + Learnings + Improvements */}
              {section.type === 'next-steps' && section.nextSteps && (
                <div className="w-full max-w-6xl mx-auto">
                  {/* Header */}
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500"/> 
                      {section.title}
                    </h3>
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
                      {section.nextSteps.roadmap.map((item, idx) => {
                        const Icon = iconMap[item.icon] || Star;
                        const isLast = idx === section.nextSteps!.roadmap.length - 1;
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
                        {section.nextSteps.learnings.map((item, idx) => {
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
                        {section.nextSteps.improvements.map((item, idx) => {
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
                        <div className={project.id === 'slshub' && (section.id === 'selected-screens' || section.id === 'module-coverage' || section.id === 'rules-governance' || section.id === 'design-system' || section.id === 'responsive-dark' || section.id === 'guides-enablement' || section.id === 'quality-readiness' || section.id === 'summary') ? 'max-w-full' : 'max-w-3xl'}>
                          {section.title && (
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                              <span className={`inline-block ${project.id === 'slshub' ? 'h-0.5 w-6 bg-fuchsia-500' : 'w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500'}`}/> 
                              {section.title}
                            </h3>
                          )}
                          {section.highlight && (
                            <div className="mb-8 p-6 bg-pink-500/5 border-l-4 border-pink-500 text-pink-200 text-lg font-medium italic rounded-r-lg">
                              &quot;{section.highlight}&quot;
                            </div>
                          )}
                          
                          {/* Special rendering for SLS Hub Selected Screens - Tabbed Gallery */}
                          {project.id === 'slshub' && section.id === 'selected-screens' ? (
                            <div className="space-y-8 max-w-full">
                              {(() => {
                                const screenshotTabs = [
                                  {
                                    id: 'account-access',
                                    label: 'Account & Access',
                                    screenshots: [
                                      { src: '/slshub/2fa-verification.png', caption: '2FA Verification' },
                                      { src: '/slshub/change-password.png', caption: 'Change Password' },
                                      { src: '/slshub/my-details-member.png', caption: 'My Details (Member)' },
                                      { src: '/slshub/my-details-nonmember.png', caption: 'My Details (Non-member)' }
                                    ]
                                  },
                                  {
                                    id: 'membership-transactions',
                                    label: 'Membership Transactions',
                                    screenshots: [
                                      { src: '/slshub/renew-membership.png', caption: 'Renew Membership' },
                                      { src: '/slshub/transfer-membership.png', caption: 'Transfer Membership' },
                                      { src: '/slshub/family-group-manage.png', caption: 'Manage Family Group' },
                                      { src: '/slshub/family-group-add.png', caption: 'Add Family Member' }
                                    ]
                                  },
                                  {
                                    id: 'forms-submissions',
                                    label: 'Forms & Submissions',
                                    screenshots: [
                                      { src: '/slshub/submit-form.png', caption: 'Submit a Form' },
                                      { src: '/slshub/taf-reendorsement-1.png', caption: 'TAF Re-endorsement (Step 1)' },
                                      { src: '/slshub/taf-reendorsement-2.png', caption: 'TAF Re-endorsement (Step 2)' },
                                      { src: '/slshub/taf-reendorsement-3.png', caption: 'TAF Re-endorsement (Step 3)' }
                                    ]
                                  },
                                  {
                                    id: 'patrols-tracker',
                                    label: 'Patrols & Nipper Tracker',
                                    screenshots: [
                                      { src: '/slshub/nipper-approve.png', caption: 'Nipper Award Approval' },
                                      { src: '/slshub/nipper-unapprove.png', caption: 'Nipper Award Un-approval' },
                                      { src: '/slshub/session-checkin.png', caption: 'Session Check-in' },
                                      { src: '/slshub/session-checkout.png', caption: 'Session Check-out' },
                                      { src: '/slshub/rfid-nfc.png', caption: 'RFID/NFC Check-in/out' }
                                    ]
                                  },
                                  {
                                    id: 'records-history',
                                    label: 'Records & History',
                                    screenshots: [
                                      { src: '/slshub/requests-log.png', caption: 'Requests Log' },
                                      { src: '/slshub/submissions-history.png', caption: 'Submissions History' },
                                      { src: '/slshub/status-log.png', caption: 'Status Change Log' },
                                      { src: '/slshub/admin-status-history.png', caption: 'Admin Status History' }
                                    ]
                                  },
                                  {
                                    id: 'admin-governance',
                                    label: 'Admin & Governance',
                                    screenshots: [
                                      { src: '/slshub/find-user.png', caption: 'Find User' },
                                      { src: '/slshub/user-permissions.png', caption: 'User Permissions' },
                                      { src: '/slshub/process-forms.png', caption: 'Process Forms' },
                                      { src: '/slshub/taf-settings.png', caption: 'TAF Settings' },
                                      { src: '/slshub/sems-report.png', caption: 'SEMS Report' }
                                    ]
                                  }
                                ];

                                const currentTabData = screenshotTabs.find(tab => tab.id === selectedScreensTab);

                                return (
                                  <>
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                      Below are grouped examples showing how rules, transactions, and operational workflows were handled in the UI.
                                    </p>
                                    
                                    {/* Tab Navigation - Auto Wrap Layout */}
                                    <div className="flex flex-wrap gap-2 justify-center">
                                      {screenshotTabs.map((tab) => (
                                        <button
                                          key={tab.id}
                                          onClick={() => setSelectedScreensTab(tab.id)}
                                          className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all border ${
                                            selectedScreensTab === tab.id
                                              ? 'bg-gradient-to-r from-fuchsia-500/20 to-fuchsia-600/10 border-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20'
                                              : 'bg-[#0F111A] border-white/10 text-slate-400 hover:text-white hover:border-fuchsia-500/50'
                                          }`}
                                        >
                                          {tab.label}
                                        </button>
                                      ))}
                                    </div>

                                    {/* Screenshot Gallery */}
                                    {currentTabData && (
                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                        {currentTabData.screenshots.map((screenshot, idx) => (
                                          <div
                                            key={idx}
                                            className="group relative bg-[#0F111A] border border-white/10 hover:border-fuchsia-500 rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/10"
                                            onClick={() => {
                                              setScreenshotLightboxOpen(true);
                                              setCurrentScreenshotImage(screenshot.src);
                                              setIsAnyLightboxOpen(true);
                                            }}
                                          >
                                            <div className="aspect-video bg-slate-900/50 flex items-center justify-center relative">
                                              <img
                                                src={screenshot.src}
                                                alt={screenshot.caption}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                  // Fallback for missing images
                                                  e.currentTarget.style.display = 'none';
                                                  const parent = e.currentTarget.parentElement;
                                                  if (parent && !parent.querySelector('.placeholder-created')) {
                                                    const placeholder = document.createElement('div');
                                                    placeholder.className = 'absolute inset-0 flex items-center justify-center placeholder-created';
                                                    placeholder.innerHTML = `<div class="text-center"><div class="w-16 h-16 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500 mx-auto mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></div><p class="text-slate-500 text-sm">Screenshot placeholder</p></div>`;
                                                    parent.appendChild(placeholder);
                                                  }
                                                }}
                                              />
                                              {/* Expand Icon */}
                                              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Maximize2 size={16} className="text-white" />
                                              </div>
                                            </div>
                                            <div className="p-3 border-t border-white/5">
                                              <p className="text-slate-300 text-sm font-medium">{screenshot.caption}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                );
                              })()}

                              {/* Figma Prototype Embed */}
                              {section.figmaPrototype && (
                                <div className="mt-12 space-y-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-500 to-purple-500"></div>
                                    <h4 className="text-xl font-bold text-white">{section.figmaPrototype.title}</h4>
                                  </div>
                                  <p className="text-slate-400 text-base">{section.figmaPrototype.description}</p>
                                  <div className="relative w-full bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden" style={{ height: '800px' }}>
                                    <iframe
                                      src={section.figmaPrototype.url}
                                      className="w-full h-full"
                                      allowFullScreen
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : project.id === 'slshub' && section.id === 'module-coverage' ? (
                            /* Special rendering for SLS Hub Module Coverage - Sidebar + Main Area Layout */
                            <div className="space-y-6 max-w-full">
                              
                              {/* Intro Text */}
                              <p className="text-slate-300 leading-relaxed text-lg">
                                SLS Hub spans a wide set of member and admin capabilities, organised into a clear navigation model (Dashboard, Applications, Account, More modules, and Admin). This coverage map reflects the scope I designed and standardised across the platform.
                              </p>

                              {/* Top Row: 2 Columns */}
                              <div className="grid lg:grid-cols-2 gap-6">
                                
                                {/* Left Column: Entry & Access + My Account */}
                                <div className="flex flex-col gap-6">
                                  
                                  {/* Entry & Access Panel */}
                                  <div className="relative bg-slate-900/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-teal-400 before:opacity-80">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/8">
                                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">Entry & Access</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      <div className="bg-white/2 rounded-lg p-3 border border-transparent hover:border-white/10 hover:bg-white/6 hover:translate-x-1 transition-all duration-200">
                                        <span className="block text-sm font-semibold text-white mb-1">Authentication</span>
                                        <span className="block text-xs text-slate-400">Log In, Log Out, Reset Password</span>
                                      </div>
                                      <div className="bg-white/2 rounded-lg p-3 border border-transparent hover:border-white/10 hover:bg-white/6 hover:translate-x-1 transition-all duration-200">
                                        <span className="block text-sm font-semibold text-white mb-1">Sign Up Flows</span>
                                        <span className="block text-xs text-slate-400">New Member, Current/Past Member, Academy Join</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* My Account Panel */}
                                  <div className="relative bg-slate-900/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-slate-400 before:opacity-80">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/8">
                                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">My Account</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      <div className="bg-white/2 rounded-lg p-3 border border-transparent hover:border-white/10 hover:bg-white/6 hover:translate-x-1 transition-all duration-200">
                                        <span className="block text-sm font-semibold text-white mb-1">Profile Settings</span>
                                        <span className="block text-xs text-slate-400">Update Personal Details, Contact Info</span>
                                      </div>
                                      <div className="bg-white/2 rounded-lg p-3 border border-transparent hover:border-white/10 hover:bg-white/6 hover:translate-x-1 transition-all duration-200">
                                        <span className="block text-sm font-semibold text-white mb-1">Security</span>
                                        <span className="block text-xs text-slate-400">Change Password, Identity Verification</span>
                                      </div>
                                    </div>
                                  </div>

                                </div>

                                {/* Right Column: Administration Console */}
                                <div className="relative bg-indigo-500/8 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-indigo-400 before:opacity-80">
                                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/8">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Administration Console</span>
                                  </div>
                                  <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-[#020617]/30 border border-indigo-400/20 rounded-xl p-4 hover:bg-indigo-400/10 hover:border-indigo-400 hover:-translate-y-1 transition-all duration-200">
                                      <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">Platform Management</div>
                                      <ul className="space-y-1.5">
                                        <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Find User & Manage Profiles</li>
                                        <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Manage Offers & Forms</li>
                                        <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Approve Officials</li>
                                        <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">SEMS Reports</li>
                                      </ul>
                                    </div>
                                    <div className="bg-[#020617]/30 border border-indigo-400/20 rounded-xl p-4 hover:bg-indigo-400/10 hover:border-indigo-400 hover:-translate-y-1 transition-all duration-200">
                                      <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">System Configuration</div>
                                      <ul className="space-y-1.5">
                                        <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Update State Logo</li>
                                        <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Configure Notifications</li>
                                        <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">TAF Settings</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                              </div>

                              {/* Bottom: Member Portal & Apps - Full Width */}
                              <div className="relative bg-slate-900/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-sky-400 before:opacity-80">
                                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/8">
                                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">Member Portal & Apps</span>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                  
                                  <div className="bg-[#020617]/30 border border-white/8 rounded-xl p-4 hover:bg-sky-400/8 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">Dashboard & Shell</div>
                                    <ul className="space-y-1.5">
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Global Nav & App Switcher</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Dynamic Widgets (Patrols, Awards)</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Notifications & Alerts</li>
                                    </ul>
                                  </div>

                                  <div className="bg-[#020617]/30 border border-white/8 rounded-xl p-4 hover:bg-sky-400/8 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">Membership</div>
                                    <ul className="space-y-1.5">
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Renew & Transfer Organisations</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Family Groups Management</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Payments (One-off / Bulk)</li>
                                    </ul>
                                  </div>

                                  <div className="bg-[#020617]/30 border border-white/8 rounded-xl p-4 hover:bg-sky-400/8 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">Patrols</div>
                                    <ul className="space-y-1.5">
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Upcoming Roster View</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Patrol Substitutes</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Log Patrol Hours</li>
                                    </ul>
                                  </div>

                                  <div className="bg-[#020617]/30 border border-white/8 rounded-xl p-4 hover:bg-sky-400/8 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">Applications</div>
                                    <ul className="space-y-1.5">
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">SurfGuard, SEMS, eLearning</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Members Store</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Beach Management</li>
                                    </ul>
                                  </div>

                                  <div className="bg-[#020617]/30 border border-white/8 rounded-xl p-4 hover:bg-sky-400/8 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">Education & Nippers</div>
                                    <ul className="space-y-1.5">
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">My Awards & Proficiencies</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Nipper Session Tracking</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Junior Awards</li>
                                    </ul>
                                  </div>

                                  <div className="bg-[#020617]/30 border border-white/8 rounded-xl p-4 hover:bg-sky-400/8 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">Resources & Forms</div>
                                    <ul className="space-y-1.5">
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Apply for Awards (Long Service)</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Document Library</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Member Offers</li>
                                    </ul>
                                  </div>

                                  <div className="bg-[#020617]/30 border border-white/8 rounded-xl p-4 hover:bg-sky-400/8 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-xs font-bold text-white mb-2 pb-2 border-b border-white/5">History</div>
                                    <ul className="space-y-1.5">
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Transaction Logs</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Request Status</li>
                                      <li className="text-xs text-slate-400 pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-white/20 before:font-bold">Archives</li>
                                    </ul>
                                  </div>

                                </div>
                              </div>

                            </div>
                          ) : project.id === 'slshub' && section.id === 'rules-governance' ? (
                            /* Special rendering for SLS Hub Rules & Governance - Split Layout */
                            <div className="flex gap-10 max-w-full items-start">
                              
                              {/* Left Column: Strategy & Logic (Sticky) */}
                              <div className="flex-1 sticky top-10 flex flex-col gap-8">
                                
                                {/* Header Block */}
                                <div>
                                  <p className="text-slate-400 text-base leading-relaxed">
                                    To <strong className="text-white">minimise</strong> support load, I designed the UX to be transparent about <em>why</em> actions are available or restricted. The interface enforces business rules through explicit states and audit-friendly workflows.
                                  </p>
                                </div>

                                {/* Logic List */}
                                <div className="flex flex-col gap-4">
                                  
                                  <div className="bg-white/3 border-l-4 border-rose-500 p-5 rounded-r-xl hover:bg-white/6 hover:translate-x-1 transition-all duration-300">
                                    <span className="block text-base font-bold text-white mb-1.5">Eligibility Gating</span>
                                    <span className="block text-sm text-slate-400 leading-relaxed">Modules and actions appear only when role/award prerequisites are met, reducing confusion.</span>
                                  </div>

                                  <div className="bg-white/3 border-l-4 border-amber-500 p-5 rounded-r-xl hover:bg-white/6 hover:translate-x-1 transition-all duration-300">
                                    <span className="block text-base font-bold text-white mb-1.5">Status-Driven Actions</span>
                                    <span className="block text-sm text-slate-400 leading-relaxed">CTAs change dynamically (Pending → Approved) providing clear system feedback.</span>
                                  </div>

                                  <div className="bg-white/3 border-l-4 border-green-500 p-5 rounded-r-xl hover:bg-white/6 hover:translate-x-1 transition-all duration-300">
                                    <span className="block text-base font-bold text-white mb-1.5">Multi-Step Verification</span>
                                    <span className="block text-sm text-slate-400 leading-relaxed">Complex approvals are broken into guided steps with confirmation modals.</span>
                                  </div>

                                  <div className="bg-white/3 border-l-4 border-purple-500 p-5 rounded-r-xl hover:bg-white/6 hover:translate-x-1 transition-all duration-300">
                                    <span className="block text-base font-bold text-white mb-1.5">Reversible Admin Controls</span>
                                    <span className="block text-sm text-slate-400 leading-relaxed">Destructive actions are constrained and often reversible (e.g., Soft Delete).</span>
                                  </div>

                                </div>

                              </div>

                              {/* Right Column: Evidence Viewer (Scrollable) */}
                              <div className="flex-[1.5] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col h-[800px] overflow-hidden">
                                
                                {/* Browser-like Header */}
                                <div className="px-6 py-4 border-b border-white/10 bg-black/20 flex justify-between items-center">
                                  <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                  </div>
                                  <div className="font-mono text-xs text-slate-500">UX_Specification_Audit.pdf</div>
                                  <div className="w-10"></div>
                                </div>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto p-8 flex flex-col gap-10 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                                  
                                  {/* Screenshot 1 - Admin Access Criteria */}
                                  <div className="flex flex-col gap-3">
                                    <div 
                                      className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300 cursor-pointer group relative"
                                      onClick={() => {
                                        setScreenshotLightboxOpen(true);
                                        setCurrentScreenshotImage('/slshub/Admin Access Criteria.png');
                                        setIsAnyLightboxOpen(true);
                                      }}
                                    >
                                      <img 
                                        src="/slshub/Admin Access Criteria.png" 
                                        alt="Admin Access Criteria" 
                                        className="w-full h-full object-contain"
                                      />
                                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 size={32} className="text-white" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Eligibility gating</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Eligibility-gated access: Admin modules and actions appear only when specific role prerequisites are met.</div>
                                    </div>
                                  </div>

                                  {/* Screenshot 2 - Award Gating */}
                                  <div className="flex flex-col gap-3">
                                    <div 
                                      className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300 cursor-pointer group relative"
                                      onClick={() => {
                                        setScreenshotLightboxOpen(true);
                                        setCurrentScreenshotImage('/slshub/Award Gating.png');
                                        setIsAnyLightboxOpen(true);
                                      }}
                                    >
                                      <img 
                                        src="/slshub/Award Gating.png" 
                                        alt="Award Gating" 
                                        className="w-full h-full object-contain"
                                      />
                                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 size={32} className="text-white" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Eligibility gating</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Award-driven access: Attendance modules require specific awards to be held by the user.</div>
                                    </div>
                                  </div>

                                  {/* Video 1 - Approve Action */}
                                  <div className="flex flex-col gap-3">
                                    <div className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300">
                                      <video 
                                        src="/slshub/Approve Action.mp4"
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain video-autoplay"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Status-driven CTA</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Status-driven actions: CTAs change dynamically with clear system feedback (Success Toast).</div>
                                    </div>
                                  </div>

                                  {/* Video 2 - Reversible Action */}
                                  <div className="flex flex-col gap-3">
                                    <div className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300">
                                      <video 
                                        src="/slshub/Reversible Action.mp4"
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain video-autoplay"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Status-driven CTA</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Reverse workflows: Approved items allow for &apos;Unapprove&apos; actions to correct administrative errors.</div>
                                    </div>
                                  </div>

                                  {/* Video 3 - Multi-step Approval */}
                                  <div className="flex flex-col gap-3">
                                    <div className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300">
                                      <video 
                                        src="/slshub/Multi-step Approval.mp4"
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain video-autoplay"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Multi-step approval + confirmation</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Guided progression: Complex approvals are broken into steps with final state outcomes.</div>
                                    </div>
                                  </div>

                                  {/* Screenshot 3 - Submission Confirmation */}
                                  <div className="flex flex-col gap-3">
                                    <div 
                                      className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300 cursor-pointer group relative"
                                      onClick={() => {
                                        setScreenshotLightboxOpen(true);
                                        setCurrentScreenshotImage('/slshub/Submission Confirmation.png');
                                        setIsAnyLightboxOpen(true);
                                      }}
                                    >
                                      <img 
                                        src="/slshub/Submission Confirmation.png" 
                                        alt="Submission Confirmation" 
                                        className="w-full h-full object-contain"
                                      />
                                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 size={32} className="text-white" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Multi-step approval + confirmation</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Transaction traceability: &quot;Are you sure?&quot; confirmation modals ensure intent before submission.</div>
                                    </div>
                                  </div>

                                  {/* Screenshot 4 - Deactivate Confirm */}
                                  <div className="flex flex-col gap-3">
                                    <div 
                                      className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300 cursor-pointer group relative"
                                      onClick={() => {
                                        setScreenshotLightboxOpen(true);
                                        setCurrentScreenshotImage('/slshub/Deactivate Confirm.png');
                                        setIsAnyLightboxOpen(true);
                                      }}
                                    >
                                      <img 
                                        src="/slshub/Deactivate Confirm.png" 
                                        alt="Deactivate Confirm" 
                                        className="w-full h-full object-contain"
                                      />
                                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 size={32} className="text-white" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Admin reversibility + constrained action</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Admin operations: Confirmation gates prevent accidental deactivation of user accounts.</div>
                                    </div>
                                  </div>

                                  {/* Screenshot 5 - Audit Log / Permissions */}
                                  <div className="flex flex-col gap-3">
                                    <div 
                                      className="w-full aspect-[16/10] bg-slate-800 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300 cursor-pointer group relative"
                                      onClick={() => {
                                        setScreenshotLightboxOpen(true);
                                        setCurrentScreenshotImage('/slshub/Audit Log:Permissions.png');
                                        setIsAnyLightboxOpen(true);
                                      }}
                                    >
                                      <img 
                                        src="/slshub/Audit Log:Permissions.png" 
                                        alt="Audit Log and Permissions" 
                                        className="w-full h-full object-contain"
                                      />
                                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 size={32} className="text-white" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="self-start font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase">Rule type: Audit Traceability</div>
                                      <div className="text-sm text-slate-200 leading-relaxed">Operational traceability: Permission changes and status updates are logged for governance.</div>
                                    </div>
                                  </div>

                                </div>

                              </div>

                            </div>
                          ) : project.id === 'slshub' && section.id === 'design-system' ? (
                            /* Special rendering for SLS Hub Design System & Delivery */
                            <div className="space-y-8 max-w-full">
                              
                              {/* Top Section: Context */}
                              <div>
                                <p className="text-slate-400 text-base leading-relaxed">
                                  I bridged the gap between design and engineering by building a robust component library and delivering implementation-ready specs. My focus was on feasibility, consistency, and protecting design intent through to release.
                                </p>
                              </div>

                              {/* Deliverables Row */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                
                                <div className="flex flex-col gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 hover:border-cyan-400/30 transition-all duration-200 group">
                                  <div className="w-5 h-5 text-cyan-400 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                                  </div>
                                  <div>
                                    <strong className="block text-white text-xs font-semibold mb-1.5">Shared Component Library</strong>
                                    <span className="block text-[11px] text-slate-400 leading-relaxed">Established standardised patterns (Forms, Modals, Tables) to speed up development.</span>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 hover:border-purple-400/30 transition-all duration-200 group">
                                  <div className="w-5 h-5 text-purple-400 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                                  </div>
                                  <div>
                                    <strong className="block text-white text-xs font-semibold mb-1.5">Dev Mode Specifications</strong>
                                    <span className="block text-[11px] text-slate-400 leading-relaxed">Delivered responsive logic, spacing tokens, and field requirements for clear handoff.</span>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 hover:border-amber-400/30 transition-all duration-200 group">
                                  <div className="w-5 h-5 text-amber-400 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                  </div>
                                  <div>
                                    <strong className="block text-white text-xs font-semibold mb-1.5">Confluence Mapping</strong>
                                    <span className="block text-[11px] text-slate-400 leading-relaxed">Mapped field requirements to UI components to handle edge cases and validation rules.</span>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 hover:border-green-400/30 transition-all duration-200 group">
                                  <div className="w-5 h-5 text-green-400 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                                  </div>
                                  <div>
                                    <strong className="block text-white text-xs font-semibold mb-1.5">End-to-End Validation</strong>
                                    <span className="block text-[11px] text-slate-400 leading-relaxed">Clickable prototypes and continuous QA to validate expected behaviours.</span>
                                  </div>
                                </div>

                              </div>

                              {/* Bottom Section: Evidence Grid - Full Width */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                
                                {/* Card 1 */}
                                <div className="bg-slate-900/60 backdrop-blur-sm border border-white/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 before:absolute before:top-0 before:left-0 before:w-2.5 before:h-2.5 before:border-t-2 before:border-l-2 before:border-cyan-400 after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:border-b-2 after:border-r-2 after:border-cyan-400">
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                  <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center bg-black/20">
                                    <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">01_Component_Architecture</span>
                                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Figma Variables</span>
                                  </div>
                                  <div 
                                    className="bg-black/10 cursor-pointer group/img relative"
                                    onClick={() => {
                                      setScreenshotLightboxOpen(true);
                                      setCurrentScreenshotImage('/slshub/Component Matrix : Library.png');
                                      setIsAnyLightboxOpen(true);
                                    }}
                                  >
                                    <img 
                                      src="/slshub/Component Matrix : Library.png" 
                                      alt="Component Matrix Library"
                                      className="w-full h-auto block"
                                    />
                                    <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                                      <Maximize2 size={32} className="text-white" />
                                    </div>
                                  </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-slate-900/60 backdrop-blur-sm border border-white/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 before:absolute before:top-0 before:left-0 before:w-2.5 before:h-2.5 before:border-t-2 before:border-l-2 before:border-purple-400 after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:border-b-2 after:border-r-2 after:border-purple-400">
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                  <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center bg-black/20">
                                    <span className="font-mono text-[11px] uppercase tracking-wider text-purple-400">02_Dev_Handoff_Specs</span>
                                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Dev Mode</span>
                                  </div>
                                  <div 
                                    className="bg-black/10 cursor-pointer group/img relative"
                                    onClick={() => {
                                      setScreenshotLightboxOpen(true);
                                      setCurrentScreenshotImage('/slshub/Measurements : Breakpoints.png');
                                      setIsAnyLightboxOpen(true);
                                    }}
                                  >
                                    <img 
                                      src="/slshub/Measurements : Breakpoints.png" 
                                      alt="Measurements and Breakpoints"
                                      className="w-full h-auto block"
                                    />
                                    <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                                      <Maximize2 size={32} className="text-white" />
                                    </div>
                                  </div>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-slate-900/60 backdrop-blur-sm border border-white/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 before:absolute before:top-0 before:left-0 before:w-2.5 before:h-2.5 before:border-t-2 before:border-l-2 before:border-amber-400 after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:border-b-2 after:border-r-2 after:border-amber-400">
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                  <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center bg-black/20">
                                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400">03_Requirements_Map</span>
                                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Confluence</span>
                                  </div>
                                  <div 
                                    className="bg-black/10 cursor-pointer group/img relative"
                                    onClick={() => {
                                      setScreenshotLightboxOpen(true);
                                      setCurrentScreenshotImage('/slshub/Table Screenshot.png');
                                      setIsAnyLightboxOpen(true);
                                    }}
                                  >
                                    <img 
                                      src="/slshub/Table Screenshot.png" 
                                      alt="Table Screenshot"
                                      className="w-full h-auto block"
                                    />
                                    <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                                      <Maximize2 size={32} className="text-white" />
                                    </div>
                                  </div>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-slate-900/60 backdrop-blur-sm border border-white/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 before:absolute before:top-0 before:left-0 before:w-2.5 before:h-2.5 before:border-t-2 before:border-l-2 before:border-cyan-400 after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:border-b-2 after:border-r-2 after:border-cyan-400">
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                  <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center bg-black/20">
                                    <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">04_Interaction_Flows</span>
                                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Prototyping</span>
                                  </div>
                                  <div 
                                    className="bg-black/10 cursor-pointer group/img relative"
                                    onClick={() => {
                                      setScreenshotLightboxOpen(true);
                                      setCurrentScreenshotImage('/slshub/Flow Map.png');
                                      setIsAnyLightboxOpen(true);
                                    }}
                                  >
                                    <img 
                                      src="/slshub/Flow Map.png" 
                                      alt="Flow Map"
                                      className="w-full h-auto block"
                                    />
                                    <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                                      <Maximize2 size={32} className="text-white" />
                                    </div>
                                  </div>
                                </div>

                                {/* Card 5 */}
                                <div className="md:col-span-2 bg-slate-900/60 backdrop-blur-sm border border-white/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 before:absolute before:top-0 before:left-0 before:w-2.5 before:h-2.5 before:border-t-2 before:border-l-2 before:border-green-400 after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:border-b-2 after:border-r-2 after:border-green-400">
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                  <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center bg-black/20">
                                    <span className="font-mono text-[11px] uppercase tracking-wider text-green-400">05_QA_Validation</span>
                                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Browser Stack</span>
                                  </div>
                                  <div 
                                    className="bg-black/10 cursor-pointer group/img relative"
                                    onClick={() => {
                                      setScreenshotLightboxOpen(true);
                                      setCurrentScreenshotImage('/slshub/Bug Fix:QA Table2.png');
                                      setIsAnyLightboxOpen(true);
                                    }}
                                  >
                                    <img 
                                      src="/slshub/Bug Fix:QA Table2.png" 
                                      alt="Bug Fix QA Table"
                                      className="w-full h-auto block"
                                    />
                                    <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                                      <Maximize2 size={32} className="text-white" />
                                    </div>
                                  </div>
                                </div>

                              </div>

                            </div>
                          ) : project.id === 'slshub' && section.id === 'responsive-dark' ? (
                            /* Special rendering for SLS Hub Responsive & Dark Mode */
                            <ResponsiveDarkModeSection />
                          ) : project.id === 'slshub' && section.id === 'guides-enablement' ? (
                            /* Special rendering for SLS Hub Guides & Enablement */
                            <div className="max-w-full">
                              {/* Description */}
                              <div className="mb-8">
                                <p className="text-slate-400 text-base leading-relaxed">
                                  Launch assets ensuring recognition across digital and physical channels.
                                </p>
                              </div>

                              {/* Asset Grid */}
                              <div className="grid md:grid-cols-2 gap-6">

                                {/* Card 1: Favicon */}
                                <div className="bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                                  
                                  {/* Preview Box - Favicon Image */}
                                  <div className="w-full h-[180px] bg-black/30 rounded-xl mb-5 flex items-center justify-center overflow-hidden p-4">
                                    <img 
                                      src="/slshub/System Favicon.png" 
                                      alt="System Favicon"
                                      className="max-w-full max-h-full object-contain"
                                    />
                                  </div>

                                  {/* Text Info */}
                                  <div className="font-mono text-[10px] text-amber-400 bg-amber-400/10 px-2 py-1 rounded mb-2 uppercase tracking-wider border border-amber-400/20">
                                    Browser Asset
                                  </div>
                                  <div className="text-base font-semibold text-white mb-1">
                                    System Favicon
                                  </div>
                                  <div className="text-sm text-slate-400">
                                    Ensures instant recognition in crowded tabs.
                                  </div>

                                </div>

                                {/* Card 2: Brochure */}
                                <div className="bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 group">
                                  
                                  {/* Preview Box - Brochure */}
                                  <div 
                                    className="w-full h-[180px] bg-black/30 rounded-xl mb-5 flex items-center justify-center overflow-hidden p-4 cursor-pointer relative group/brochure"
                                    onClick={() => {
                                      setScreenshotLightboxOpen(true);
                                      setCurrentScreenshotImage('/slshub/Launch Brochure.png');
                                      setIsAnyLightboxOpen(true);
                                    }}
                                  >
                                    <img 
                                      src="/slshub/Launch Brochure.png" 
                                      alt="Launch Brochure"
                                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-lg opacity-0 group-hover/brochure:opacity-100 transition-opacity duration-200">
                                      <Maximize2 size={24} className="text-white" />
                                    </div>
                                  </div>

                                  {/* Text Info */}
                                  <div className="font-mono text-[10px] text-amber-400 bg-amber-400/10 px-2 py-1 rounded mb-2 uppercase tracking-wider border border-amber-400/20">
                                    Print Asset
                                  </div>
                                  <div className="text-base font-semibold text-white mb-1">
                                    Launch Brochure
                                  </div>
                                  <div className="text-sm text-slate-400">
                                    Physical guide for club admin onboarding.
                                  </div>

                                </div>

                              </div>
                            </div>
                          ) : project.id === 'slshub' && section.id === 'quality-readiness' ? (
                            /* Special rendering for SLS Hub Quality & Release Readiness */
                            <div className="max-w-full">
                              
                              {/* Description */}
                              <div className="mb-8">
                                <p className="text-slate-400 text-base leading-relaxed">
                                  Ran continuous UI QA per ticket throughout development, testing across browsers and devices and partnering with developers to confirm feasibility and correctness. This helped catch edge cases early (rule-driven visibility, status transitions, responsive regressions, modal constraints) and ensured the experience shipped consistently.
                                </p>
                              </div>

                              {/* Section Label */}
                              <div className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold">
                                Release Quality Monitor
                              </div>

                              {/* HUD Container */}
                              <div className="bg-green-500/5 border border-green-500/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.25)] hover:border-green-500/50">
                                
                                <div className="flex flex-col lg:flex-row">
                                  
                                  {/* LEFT: Status Block */}
                                  <div className="bg-green-500/10 p-8 lg:min-w-[200px] border-b lg:border-b-0 lg:border-r border-green-500/20 flex flex-col justify-center gap-2">
                                    
                                    {/* Pulse Row */}
                                    <div className="flex items-center gap-2.5 mb-1">
                                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.7)]"></div>
                                      <span className="font-mono text-[11px] text-green-400 uppercase tracking-wider font-bold">
                                        System Stable
                                      </span>
                                    </div>

                                    {/* Big Stat */}
                                    <div className="text-[28px] font-extrabold text-white leading-none">
                                      Ready to Ship
                                    </div>

                                    {/* Sub Stat */}
                                    <div className="text-sm text-white/60">
                                      0 Critical Blockers
                                    </div>

                                  </div>

                                  {/* RIGHT: Metrics Grid */}
                                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2">
                                    
                                    {/* Metric 1 */}
                                    <div className="p-6 border-b sm:border-r border-white/5 flex flex-col gap-1.5 transition-colors hover:bg-green-500/5">
                                      <div className="text-xl mb-1">🌐</div>
                                      <div className="text-xs text-slate-400 font-medium">Browser Matrix</div>
                                      <div className="text-sm text-white font-bold flex items-center gap-1.5">
                                        <span className="text-green-400 text-base">✔</span> Chrome / Safari / Edge
                                      </div>
                                    </div>

                                    {/* Metric 2 */}
                                    <div className="p-6 border-b border-white/5 flex flex-col gap-1.5 transition-colors hover:bg-green-500/5">
                                      <div className="text-xl mb-1">📱</div>
                                      <div className="text-xs text-slate-400 font-medium">Responsive Behaviours</div>
                                      <div className="text-sm text-white font-bold flex items-center gap-1.5">
                                        <span className="text-green-400 text-base">✔</span> Desktop / Tablet / Mobile
                                      </div>
                                    </div>

                                    {/* Metric 3 */}
                                    <div className="p-6 sm:border-r border-white/5 flex flex-col gap-1.5 transition-colors hover:bg-green-500/5">
                                      <div className="text-xl mb-1">🔒</div>
                                      <div className="text-xs text-slate-400 font-medium">Permission Logic</div>
                                      <div className="text-sm text-white font-bold flex items-center gap-1.5">
                                        <span className="text-green-400 text-base">✔</span> Role Gating Validated
                                      </div>
                                    </div>

                                    {/* Metric 4 */}
                                    <div className="p-6 flex flex-col gap-1.5 transition-colors hover:bg-green-500/5">
                                      <div className="text-xl mb-1">✨</div>
                                      <div className="text-xs text-slate-400 font-medium">Design Fidelity</div>
                                      <div className="text-sm text-white font-bold flex items-center gap-1.5">
                                        <span className="text-green-400 text-base">✔</span> Pixel-Perfect Handoff
                                      </div>
                                    </div>

                                  </div>

                                </div>

                              </div>

                            </div>
                          ) : project.id === 'slshub' && section.id === 'summary' ? (
                            /* Special rendering for SLS Hub Summary - 3 column layout */
                            <div className="space-y-10 max-w-full">
                              {/* Header */}
                              <div className="border-b border-white/10 pb-6">
                                <p className="text-slate-400 text-base leading-relaxed max-w-4xl">
                                  A breakdown of the project scope, my individual contribution, and the key capabilities demonstrated through the SLS Hub design.
                                </p>
                              </div>

                              {/* 3 Column Grid */}
                              <div className="grid md:grid-cols-3 gap-8 items-start">
                                
                                {/* Column 1: The Objective */}
                                <div className="flex flex-col gap-5">
                                  <div className="flex items-center justify-between pb-3 border-b-2 border-cyan-400">
                                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">The Objective</span>
                                  </div>
                                  <div className="flex flex-col gap-3">
                                    {/* Item 1 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-cyan-400 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400/20 group-hover:w-1 group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors duration-300">Central Portal Transformation</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">SLS Hub replaces the legacy Members Area as the central portal for all member interactions.</span>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-cyan-400 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400/20 group-hover:w-1 group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors duration-300">Scope of Management</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">Enabling members to manage memberships, awards, patrol participation, requests, resources, and linked services.</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Column 2: My Role */}
                                <div className="flex flex-col gap-5">
                                  <div className="flex items-center justify-between pb-3 border-b-2 border-purple-500">
                                    <span className="text-xs font-bold uppercase tracking-widest text-purple-500">My Role</span>
                                  </div>
                                  <div className="flex flex-col gap-3">
                                    {/* Item 1 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-purple-500 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-500/20 group-hover:w-1 group-hover:bg-purple-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-purple-500 transition-colors duration-300">End-to-End Design</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">Owned UI/UX across the entire portal (desktop + responsive mobile).</span>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-purple-500 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-500/20 group-hover:w-1 group-hover:bg-purple-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-purple-500 transition-colors duration-300">Delivery Artefacts</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">Delivered a shared component library, implementation-ready specs (Dev Mode), and fully clickable prototypes.</span>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-purple-500 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-500/20 group-hover:w-1 group-hover:bg-purple-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-purple-500 transition-colors duration-300">Design Assurance (QA)</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">Conducted continuous cross-device QA to protect design intent through build and release.</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Column 3: What This Demonstrates */}
                                <div className="flex flex-col gap-5">
                                  <div className="flex items-center justify-between pb-3 border-b-2 border-pink-400">
                                    <span className="text-xs font-bold uppercase tracking-widest text-pink-400">What This Demonstrates</span>
                                  </div>
                                  <div className="flex flex-col gap-3">
                                    {/* Item 1 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-pink-400 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink-400/20 group-hover:w-1 group-hover:bg-pink-400 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-pink-400 transition-colors duration-300">System-Level UX</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">Portal architecture with role- and eligibility-driven visibility (member vs admin, award-gated access).</span>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-pink-400 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink-400/20 group-hover:w-1 group-hover:bg-pink-400 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-pink-400 transition-colors duration-300">Complex Workflows</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">Rules-heavy transactional flows including renewals, transfers, submissions, approvals, and payments.</span>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="group relative border-l-2 border-transparent hover:border-pink-400 pl-4 py-4 transition-all duration-300 hover:translate-x-1.5">
                                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink-400/20 group-hover:w-1 group-hover:bg-pink-400 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                                      <span className="block text-base font-bold text-white mb-1.5 group-hover:text-pink-400 transition-colors duration-300">Operational Traceability</span>
                                      <span className="block text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">Comprehensive history logs, records, data exports, and audit-friendly status changes.</span>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          ) : section.id === 'courtcanva2-cta' ? (
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
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-[transform,border-color,box-shadow] duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20 will-change-transform">
                              <img src="/courtcanva/landing webpage.png" alt="Homepage" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-[background-image] duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300 z-10">
                                <Home size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">01</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-emerald-400 drop-shadow-lg">Homepage</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-[opacity,max-height] duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Eye-catching banner showcasing platform capabilities with clear CTAs for starting designs or exploring the gallery.
                                </p>
                              </div>
                            </div>

                            {/* Card 2: Design Interface */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-[transform,border-color,box-shadow] duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20 will-change-transform">
                              <img src="/courtcanva/3D Preview Access Button.png" alt="Design Interface" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-[background-image] duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300 z-10">
                                <Edit3 size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">02</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-emerald-400 drop-shadow-lg">Design Interface</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-[opacity,max-height] duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Intuitive drag-and-drop tool with extensive court elements, customization options, and real-time 3D preview.
                                </p>
                              </div>
                            </div>

                            {/* Card 3: Quote Request */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-[transform,border-color,box-shadow] duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20 will-change-transform">
                              <img src="/courtcanva/Order Generation Page.png" alt="Quote Request" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-[background-image] duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300 z-10">
                                <FileText size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">03</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-emerald-400 drop-shadow-lg">Quote Request</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-[opacity,max-height] duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Submit custom designs with project details like location and materials. Quotes sent directly via email or platform messaging.
                                </p>
                              </div>
                            </div>

                            {/* Card 4: Templates */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-[transform,border-color,box-shadow] duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20 will-change-transform">
                              <img src="/courtcanva/My Template Page.png" alt="Templates" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-[background-image] duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300 z-10">
                                <Grid size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">04</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-emerald-400 drop-shadow-lg">Templates</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-[opacity,max-height] duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Diverse collection of user-created designs offering inspiration with social sharing options for favorite designs.
                                </p>
                              </div>
                            </div>

                            {/* Card 5: User Account */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-[transform,border-color,box-shadow] duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20 will-change-transform">
                              <img src="/courtcanva/My Account.png" alt="User Account" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-[background-image] duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300 z-10">
                                <User size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">05</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-emerald-400 drop-shadow-lg">User Account</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-[opacity,max-height] duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                  Personal dashboard for managing saved designs, accessing quotes, and tracking project progress.
                                </p>
                              </div>
                            </div>

                            {/* Card 6: Place Order */}
                            <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-[transform,border-color,box-shadow] duration-300 hover:scale-[1.02] border border-white/10 hover:border-emerald-500 flex flex-col justify-end h-[320px] hover:shadow-2xl hover:shadow-emerald-500/20 will-change-transform">
                              <img src="/courtcanva/Order Placed Successful Page.png" alt="Place Order" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95 transition-[background-image] duration-300 group-hover:from-slate-900/40 group-hover:to-slate-900/95" />
                              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300 z-10">
                                <ShoppingCart size={20} />
                              </div>
                              <div className="relative z-10 p-6">
                                <span className="text-sm font-bold text-emerald-400 block mb-2 opacity-80 drop-shadow-lg">06</span>
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-emerald-400 drop-shadow-lg">Place Order</h3>
                                <p className="text-sm leading-relaxed text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-[opacity,max-height] duration-300 overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
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

                      {/* Hub Highlights Tabs (SLS Hub) */}
                      {section.type === 'hub-highlights-tabs' && section.hubHighlightsTabs && (
                        <div className="w-full my-12">
                          <HubHighlightsTabsComponent 
                            tabs={section.hubHighlightsTabs}
                            onLightboxChange={setIsAnyLightboxOpen}
                          />
                        </div>
                      )}

                      {/* Info Cards (compact 3-column cards for key highlights) */}
                      {section.type === 'info-cards' && section.infoCards && (
                        <div className="w-full max-w-6xl mx-auto my-12">
                          {section.title && (
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                              <span className="w-6 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600 inline-block"/> 
                              {section.title}
                            </h3>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {section.infoCards.map((card, idx) => (
                              <div 
                                key={idx}
                                className="bg-slate-900/40 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/50 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10"
                              >
                                <h4 className="text-base font-semibold text-orange-400 mb-3">{card.title}</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">{card.content}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Video Block */}
                      {section.type === 'video' && (
                        <div className="w-full my-12 flex flex-col items-center">
                          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl inline-block max-w-xs">
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
                                className="h-auto w-full"
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

                      {/* Flip Cards Blueprint Layout */}
                      {section.type === 'flip-cards' && section.cards && (
                        <div className="w-full max-w-[960px] mx-auto">
                          {/* Header */}
                          <div className="mb-10">
                            <div className="flex justify-between items-end mb-3">
                              <h3 className="text-3xl font-bold text-white m-0 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                                {section.title}
                              </h3>
                              {section.hint && (
                                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                  <svg className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                  </svg>
                                  <span>{section.hint}</span>
                                </div>
                              )}
                            </div>
                            <p className="text-slate-400 text-base ml-11">
                              A breakdown of deliverables across ecosystems, culminating in final validation.
                            </p>
                          </div>

                          {/* Cards Grid */}
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[260px] lg:h-[260px] mb-6" style={{ perspective: '1000px' }}>
                            {section.cards.map((card: any, cardIdx: number) => {
                              const colorMap: Record<string, string> = {
                                cyan: '#38bdf8',
                                pink: '#f472b6',
                                emerald: '#34d399'
                              };
                              const accentColor = colorMap[card.color] || '#38bdf8';

                              const iconMap: Record<string, React.ReactElement> = {
                                globe: (
                                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M2 12h20"/>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                  </svg>
                                ),
                                users: (
                                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                  </svg>
                                ),
                                shield: (
                                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                  </svg>
                                )
                              };

                              return (
                                <div key={cardIdx} className="h-full cursor-pointer group/flip" style={{ perspective: '1000px' }}>
                                  <div className="relative w-full h-full transition-transform duration-500 group-hover/flip:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                                    {/* Front Face */}
                                    <div 
                                      className="absolute w-full h-full rounded-xl p-4 flex flex-col border shadow-lg"
                                      style={{ 
                                        backfaceVisibility: 'hidden',
                                        backgroundColor: '#0f172a',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        borderTopColor: accentColor,
                                        borderTopWidth: '3px'
                                      }}
                                    >
                                      <div className="flex items-start gap-2.5 mb-4">
                                        <div className="mt-0.5" style={{ color: accentColor }}>
                                          {iconMap[card.icon]}
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                          <div className="text-lg font-bold text-white leading-tight">{card.system}</div>
                                          <div className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded w-fit font-mono" style={{ color: accentColor, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                            {card.tag}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 flex-grow">
                                        {card.scope.map((item: any, idx: number) => (
                                          <div key={idx} className="flex gap-2 text-xs text-slate-400 px-1.5 py-1 rounded transition-colors hover:bg-white/5 hover:text-white items-center leading-tight">
                                            <span className="font-mono text-[11px] font-bold opacity-80 flex-shrink-0" style={{ color: accentColor }}>{item.id}</span>
                                            <span>{item.text}</span>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="text-[9px] text-slate-400 opacity-50 border border-white/10 px-2 py-0.5 rounded-full text-center mt-auto">
                                        ↺ Logic
                                      </div>
                                    </div>

                                    {/* Back Face */}
                                    <div 
                                      className="absolute w-full h-full rounded-xl p-4 flex flex-col border shadow-lg"
                                      style={{ 
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                        backgroundColor: '#1e293b',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        borderTopColor: accentColor,
                                        borderTopWidth: '3px',
                                        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                                        backgroundSize: '12px 12px'
                                      }}
                                    >
                                      <span className="text-[11px] uppercase tracking-wider font-bold mb-2.5 block border-b border-white/10 pb-1.5" style={{ color: accentColor }}>
                                        {card.logic.title}
                                      </span>
                                      
                                      {card.logic.dualColumn ? (
                                        <div className="flex gap-1.5 h-full">
                                          {card.logic.dualColumn.map((col: any, colIdx: number) => (
                                            <div key={colIdx} className="flex-1 flex flex-col gap-1">
                                              <div className="text-[9px] text-slate-400 mb-0.5">{col.label}</div>
                                              {col.steps.map((step: string, sIdx: number) => (
                                                <div key={sIdx} className="bg-white/5 px-1.5 py-0.5 rounded text-[9px] text-center border-l-2" style={{ borderLeftColor: accentColor }}>
                                                  {step}
                                                </div>
                                              ))}
                                            </div>
                                          ))}
                                        </div>
                                      ) : (
                                        <div className="flex flex-col gap-1.5">
                                          {card.logic.steps.map((step: string, sIdx: number) => {
                                            const [mainText, subText] = step.split('|');
                                            const isHighlighted = sIdx === 1;
                                            return (
                                              <div key={sIdx}>
                                                <div 
                                                  className="border rounded px-2 py-1 text-[11px] text-center relative"
                                                  style={{ 
                                                    borderColor: isHighlighted ? accentColor : 'rgba(255,255,255,0.1)',
                                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                                    color: '#e2e8f0'
                                                  }}
                                                >
                                                  <strong>{mainText}</strong>
                                                  {subText && <><br/><span className="text-[9px] text-slate-400">{subText}</span></>}
                                                </div>
                                                {sIdx < card.logic.steps.length - 1 && (
                                                  <div className="text-center text-slate-400 text-[11px] my-[-3px]">↓</div>
                                                )}
                                              </div>
                                            );
                                          })}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* UAT Bar */}
                          {section.uatBar && (
                            <div className="bg-purple-500/5 border border-purple-500/30 rounded-xl px-4 py-2.5 flex items-center justify-between transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:border-purple-400 hover:-translate-y-0.5">
                              <div className="flex items-center gap-3">
                                <svg width="20" height="20" fill="none" stroke="#a855f7" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <div className="font-mono text-sm font-extrabold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                                  {section.uatBar.badge}
                                </div>
                                <div className="text-[13px] font-bold text-white">
                                  {section.uatBar.title}
                                </div>
                                <div className="text-[10px] text-slate-400 border-l border-white/10 pl-2.5">
                                  {section.uatBar.subtitle}
                                </div>
                              </div>
                              <svg width="18" height="18" stroke="#a855f7" strokeWidth="2" fill="none" viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
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

                      {/* Wrap-up Section */}
                      {section.type === 'wrapup-section' && (
                        <div className="w-full max-w-5xl mx-auto">
                          {/* Title */}
                          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                            {section.title || 'Wrap-up'}
                          </h3>

                          {/* Hero Card with Overview */}
                          {section.heroText && (
                            <div className="relative bg-slate-900/40 border border-white/10 rounded-2xl p-8 mb-6 overflow-hidden">
                              <p className="text-base text-slate-200 leading-relaxed max-w-4xl">
                                {section.heroText}
                              </p>
                            </div>
                          )}

                          {/* Outcomes Grid */}
                          {section.outcomes && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                              {section.outcomes.map((outcome: any, idx: number) => {
                                const iconMap: any = {
                                  'link': <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>,
                                  'shield': <Shield size={16} />,
                                  'credit-card': <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>,
                                  'package': <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                };
                                const colorMap: any = {
                                  'blue': { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/5' },
                                  'orange': { border: 'border-orange-500/30', text: 'text-orange-400', bg: 'bg-orange-500/5' },
                                  'green': { border: 'border-green-500/30', text: 'text-green-400', bg: 'bg-green-500/5' },
                                  'purple': { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/5' }
                                };
                                const colors = colorMap[outcome.color] || colorMap.blue;
                                
                                return (
                                  <div key={idx} className="group bg-slate-900/40 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 flex flex-col gap-1">
                                    <div className={`w-8 h-8 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} mb-1`}>
                                      {iconMap[outcome.icon]}
                                    </div>
                                    <h4 className="text-sm font-bold text-white leading-tight">{outcome.title}</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">{outcome.desc}</p>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Status Bar */}
                          {section.statusBar && (
                            <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                              <div className="flex flex-col gap-0.5">
                                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">{section.statusBar.label}</span>
                                <span className="text-xs font-mono text-white">{section.statusBar.value}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {section.statusBar.badges.map((badge: any, idx: number) => (
                                  <div 
                                    key={idx}
                                    className={`px-3 py-1 rounded-md text-[10px] font-semibold border ${
                                      badge.type === 'done' 
                                        ? 'bg-green-500/10 text-green-400 border-green-500/30' 
                                        : 'bg-slate-500/10 text-slate-400 border-slate-500/30'
                                    }`}
                                  >
                                    {badge.text}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CTA Footer */}
                          <div className="flex flex-col items-center text-center gap-8 pt-8 border-t border-white/10">
                            {section.content && (
                              <p className="text-base text-slate-300 max-w-2xl">
                                {section.content}
                              </p>
                            )}
                            
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                              <a 
                                href="mailto:huweina98@gmail.com"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-pink-900/40 hover:shadow-pink-900/60 hover:-translate-y-0.5"
                              >
                                <Mail size={18} />
                                Contact Me
                              </a>
                              <button 
                                onClick={() => {
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white rounded-lg font-semibold transition-all"
                              >
                                <ChevronLeft size={18} className="rotate-90" />
                                Back to Top
                              </button>
                            </div>
                          </div>
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
                    {project.details.keyDecisions && (
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
                    )}

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
      
      {/* Lightbox for Selected Screens */}
      {screenshotLightboxOpen && (
        <Lightbox
          isOpen={screenshotLightboxOpen}
          images={[currentScreenshotImage]}
          currentIndex={0}
          onClose={() => {
            setScreenshotLightboxOpen(false);
            setIsAnyLightboxOpen(false);
          }}
          onNext={() => {}}
          onPrev={() => {}}
          alt="SLS Hub Screenshot"
        />
      )}
    </div>
  );
};
