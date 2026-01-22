'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Palette, Layout, Box, Save, User, ShoppingCart, Menu, X, 
  ChevronRight, Settings, LogOut, Layers, Maximize2, Undo, Redo, 
  CheckCircle, CreditCard, History, Search, Filter, Trash2, 
  AlertCircle, FileText, ArrowRight, Star, MapPin, Truck,
  Type, Grid, Lightbulb, Ruler, ChevronLeft, RefreshCw, Edit3,
  Monitor, Armchair, HelpCircle, Shield, Lock, Mail, Phone, Camera, ChevronDown, Plus, Home
} from 'lucide-react';

/**
 * ==========================================
 * COURT CANVA 2.0 - PORTFOLIO EDITION
 * ==========================================
 * A fully interactive court design SaaS demo.
 * Features:
 * - Real-time SVG rendering & 3D tilt
 * - Dynamic Pricing Engine
 * - Complete E-commerce Flow (Cart -> Checkout)
 * - User Dashboard & Settings Simulation
 */

// --- 1. CONSTANTS & CONFIGURATION ---

const PRICE_PER_SQM = {
  'Performance Tiles': 45,
  'Acrylic Hardcourt': 35,
  'Cushioned Acrylic': 65,
  'Concrete Base': 25
};

const ACCESSORY_PRICES = {
  hoops: 1200,
  lights: 2500,
  fence: 3000,
  rebounder: 800,
  bench: 1500,      
  scoreboard: 4500  
};

const COLORS = [
  { name: 'Pro Blue', hex: '#1E3A8A' },
  { name: 'Victory Red', hex: '#DC2626' },
  { name: 'Forest Green', hex: '#166534' },
  { name: 'Asphalt Grey', hex: '#4B5563' },
  { name: 'Classic Orange', hex: '#EA580C' },
  { name: 'Deep Purple', hex: '#581C87' },
  { name: 'Sky Blue', hex: '#38BDF8' },
  { name: 'Midnight', hex: '#0F172A' },
  { name: 'Brick', hex: '#7F1D1D' },
  { name: 'Teal', hex: '#0F766E' },
];

const TEMPLATES = [
  { 
    id: 1, name: 'Pro Tournament Tennis', type: 'Tennis', rating: 4.9, price: 12500,
    zones: { surround: '#1E3A8A', courtBase: '#166534', keyAreaLeft: 'transparent', keyAreaRight: 'transparent', centerCircle: 'transparent' },
    dimensions: { length: 36, width: 18 },
    surface: 'Acrylic Hardcourt'
  },
  { 
    id: 2, name: 'Backyard 3x3 Hoops', type: 'Basketball', rating: 4.8, price: 4200,
    zones: { surround: '#166534', courtBase: '#4B5563', keyAreaLeft: '#DC2626', keyAreaRight: '#DC2626', centerCircle: '#DC2626' },
    dimensions: { length: 15, width: 14 },
    surface: 'Performance Tiles'
  },
  { 
    id: 3, name: 'Community Multi-Sport', type: 'Multi', rating: 4.7, price: 15800,
    zones: { surround: '#EA580C', courtBase: '#38BDF8', keyAreaLeft: '#1E3A8A', keyAreaRight: '#1E3A8A', centerCircle: '#1E3A8A' },
    dimensions: { length: 30, width: 18 },
    surface: 'Performance Tiles'
  },
  { 
    id: 4, name: 'Pro Pickleball Court', type: 'Pickleball', rating: 4.6, price: 3900,
    zones: { surround: '#1E3A8A', courtBase: '#38BDF8', keyAreaLeft: '#166534', keyAreaRight: '#166534', centerCircle: 'transparent' },
    dimensions: { length: 20, width: 12 },
    surface: 'Cushioned Acrylic'
  },
  { 
    id: 5, name: 'Midnight Urban Court', type: 'Basketball', rating: 5.0, price: 5500,
    zones: { surround: '#0F172A', courtBase: '#4B5563', keyAreaLeft: '#0F172A', keyAreaRight: '#0F172A', centerCircle: '#0F172A' },
    dimensions: { length: 28, width: 15 },
    surface: 'Concrete Base'
  },
  { 
    id: 6, name: 'Lakers Inspired', type: 'Indoor', rating: 4.5, price: 22000,
    zones: { surround: '#581C87', courtBase: '#FACC15', keyAreaLeft: '#581C87', keyAreaRight: '#581C87', centerCircle: '#581C87' },
    dimensions: { length: 28, width: 15 },
    surface: 'Performance Tiles'
  },
];

// --- 2. UI HELPERS (Atomic Components) ---

const NavItem = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button 
    onClick={onClick} 
    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 
      ${active ? 'bg-slate-800 text-white shadow-inner' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
  >
    {label}
  </button>
);

const ToolButton = ({ icon, label, isActive, onClick }: { icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }) => (
  <button 
    onClick={onClick} 
    className={`flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-all mb-0.5 
      ${isActive ? 'bg-orange-600 text-white shadow-md scale-105' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
  >
    <div className="mb-0.5">{icon}</div>
    <span className="text-[7px] font-medium leading-none">{label}</span>
  </button>
);

const AccessoryToggle = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <div 
    onClick={onClick} 
    className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all 
      ${active ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-200' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
  >
    <span className={`text-[10px] font-bold ${active ? 'text-orange-800' : 'text-slate-600'}`}>{label}</span>
    <div className={`w-6 h-3 rounded-full relative transition-colors ${active ? 'bg-orange-500' : 'bg-slate-300'}`}>
      <div className={`absolute top-0.5 w-2 h-2 rounded-full bg-white shadow-sm transition-transform ${active ? 'left-3.5 translate-x-3' : 'left-0.5'}`}></div>
    </div>
  </div>
);

// --- 3. SHARED LAYOUT COMPONENTS ---

const Navbar = ({ currentPage, setCurrentPage, cartCount, toggleMenu, onSignOut }: any) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    setIsUserMenuOpen(false);
  }, [currentPage]);

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 h-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          
          <div className="flex items-center cursor-pointer gap-3 group" onClick={() => setCurrentPage('templates')}>
            <img 
              src="/courtcanva/CC_Logo.png" 
              alt="CourtCanva 2.0" 
              className="h-6 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallbackIcon = document.getElementById('fallback-logo-icon');
                if (fallbackIcon) fallbackIcon.classList.remove('hidden');
                fallbackIcon?.classList.add('flex');
              }}
            />
            <div id="fallback-logo-icon" className="hidden w-6 h-6 bg-orange-500 rounded-lg items-center justify-center transform rotate-3">
              <Layout className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight">Court<span className="text-orange-500">Canva 2.0</span></span>
          </div>

          <div className="hidden md:flex space-x-1">
            <NavItem label="Templates" active={currentPage === 'templates'} onClick={() => setCurrentPage('templates')} />
            <NavItem label="Design Studio" active={currentPage === 'editor'} onClick={() => setCurrentPage('editor')} />
            <NavItem label="Dashboard" active={currentPage === 'dashboard'} onClick={() => setCurrentPage('dashboard')} />
          </div>

          <div className="hidden md:flex items-center space-x-4 relative">
            <button onClick={() => setCurrentPage('cart')} className="relative p-2 text-slate-300 hover:text-white transition-colors">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && <span className="absolute top-0 right-0 -mt-1 -mr-1 w-3.5 h-3.5 bg-orange-500 rounded-full text-[8px] font-bold flex items-center justify-center border border-slate-900 animate-bounce-short">{cartCount}</span>}
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`w-6 h-6 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-[10px] font-bold border-2 transition-all ${isUserMenuOpen ? 'border-white ring-2 ring-orange-500/50' : 'border-slate-800 hover:border-orange-500'}`}
              >
                JD
              </button>

              {isUserMenuOpen && (
                <>
                  <div className="fixed inset-0 z-30 cursor-default" onClick={() => setIsUserMenuOpen(false)}></div>
                  <div className="absolute top-10 right-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-40 text-slate-800 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                      <p className="text-xs font-bold text-slate-900">John Doe</p>
                      <p className="text-[10px] text-slate-500 truncate">john.doe@example.com</p>
                    </div>
                    <div className="py-1">
                      <button onClick={() => setCurrentPage('dashboard')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center text-slate-700 transition-colors"><Layout className="w-4 h-4 mr-3 text-slate-400" /> My Dashboard</button>
                      <button onClick={() => setCurrentPage('profile')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center text-slate-700 transition-colors"><User className="w-4 h-4 mr-3 text-slate-400" /> Profile Settings</button>
                      <button onClick={() => setCurrentPage('addresses')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center text-slate-700 transition-colors"><MapPin className="w-4 h-4 mr-3 text-slate-400" /> My Addresses</button>
                      <button onClick={() => setCurrentPage('security')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center text-slate-700 transition-colors"><Shield className="w-4 h-4 mr-3 text-slate-400" /> Security & Privacy</button>
                      <button onClick={() => setCurrentPage('help')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center text-slate-700 transition-colors"><HelpCircle className="w-4 h-4 mr-3 text-slate-400" /> Help & Support</button>
                    </div>
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <button onClick={onSignOut} className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 text-red-600 flex items-center transition-colors font-medium"><LogOut className="w-4 h-4 mr-3" /> Sign Out</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <button onClick={toggleMenu} className="md:hidden p-2 text-slate-300"><Menu className="w-5 h-5" /></button>
        </div>
      </div>
    </nav>
  );
};

// The core visual engine for the court
const CourtPreview = ({ config, is3D, setZoneColor, activeColor, className, interactive = true }: any) => {
  const zones = config.zones || {};
  const type = config.type || 'Basketball';
  const customText = config.customText || '';
  const accessories = config.accessories || {};
  const dims = config.dimensions || { length: 28, width: 15 }; 
  const surface = config.surface || 'Performance Tiles';

  const isTennis = type === 'Tennis';
  const isMulti = type === 'Multi';
  const isPickleball = type === 'Pickleball';
  const isBasketball = type === 'Basketball' || (!isTennis && !isMulti && !isPickleball);
  
  const tennisLineColor = isMulti ? '#FACC15' : 'white'; 
  const tennisOpacity = isMulti ? 0.9 : 1;

  const svgWidth = Math.min(dims.length * 10, 380);
  const svgHeight = Math.min(dims.width * 10, 220);
  const surroundX = 200 - (svgWidth / 2);
  const surroundY = 120 - (svgHeight / 2);

  const handleZoneClick = (zoneId: string) => {
    if (interactive && activeColor && setZoneColor) {
      setZoneColor(zoneId, activeColor);
    }
  };

  const cursorClass = interactive ? "cursor-pointer hover:opacity-90 transition-opacity" : "";

  return (
    <div className={`transition-all duration-700 ease-in-out transform ${className} ${is3D ? 'scale-90' : 'scale-100'}`}
         style={is3D ? { transform: 'perspective(1000px) rotateX(45deg) rotateZ(-10deg) scale(0.9)', boxShadow: '20px 20px 50px rgba(0,0,0,0.3)' } : {}}
    >
      <div className="relative">
        <svg viewBox="0 0 400 240" className={`w-full h-auto shadow-sm rounded-sm ${is3D ? '' : 'bg-transparent'}`}>
          <defs>
             <pattern id="gridPattern" width="4" height="4" patternUnits="userSpaceOnUse"><path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/></pattern>
             <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch"/><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0"/></filter>
             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>

          <rect x={surroundX} y={surroundY} width={svgWidth} height={svgHeight} fill={zones.surround || '#E2E8F0'} onClick={() => handleZoneClick('surround')} className={cursorClass}/>
          
          {surface === 'Performance Tiles' && <rect x={surroundX} y={surroundY} width={svgWidth} height={svgHeight} fill="url(#gridPattern)" pointerEvents="none" />}
          {(surface === 'Concrete Base' || surface === 'Asphalt Hardcourt') && <rect x={surroundX} y={surroundY} width={svgWidth} height={svgHeight} filter="url(#noiseFilter)" opacity="0.4" pointerEvents="none" />}

          {customText && <text x="200" y={surroundY + svgHeight - 10} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="20" fontFamily="Impact, sans-serif" className="pointer-events-none select-none uppercase tracking-widest font-bold">{customText}</text>}

          <g transform="translate(0, 0)"> 
            {(isBasketball || isMulti) && (
              <g id="basketball-layer">
                <rect x="60" y="45" width="280" height="150" fill={zones.courtBase || '#3B82F6'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('courtBase')} className={cursorClass}/>
                <circle cx="200" cy="120" r="30" fill={zones.centerCircle || 'transparent'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('centerCircle')} className={cursorClass}/>
                <line x1="200" y1="45" x2="200" y2="195" stroke="white" strokeWidth="2" />
                <rect x="60" y="95" width="50" height="50" fill={zones.keyAreaLeft || '#1D4ED8'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('keyAreaLeft')} className={cursorClass}/>
                <circle cx="110" cy="120" r="25" fill="none" stroke="white" strokeWidth="2" />
                <rect x="290" y="95" width="50" height="50" fill={zones.keyAreaRight || '#1D4ED8'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('keyAreaRight')} className={cursorClass}/>
                <circle cx="290" cy="120" r="25" fill="none" stroke="white" strokeWidth="2" />
                <path d="M 60 45 L 100 45 Q 150 120 100 195 L 60 195" fill={zones.threePointLeft || 'transparent'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('threePointLeft')} className={cursorClass}/>
                <path d="M 340 45 L 300 45 Q 250 120 300 195 L 340 195" fill={zones.threePointRight || 'transparent'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('threePointRight')} className={cursorClass}/>
              </g>
            )}

            {(isTennis || isMulti) && (
               <g id="tennis-layer" opacity={tennisOpacity}>
                 {isTennis && <rect x="80" y="65" width="240" height="110" fill={zones.courtBase || '#166534'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('courtBase')} className={cursorClass}/>}
                 <rect x="80" y="65" width="240" height="110" fill="none" stroke={tennisLineColor} strokeWidth="2" pointerEvents="none" />
                 <line x1="80" y1="78" x2="320" y2="78" stroke={tennisLineColor} strokeWidth="2" />
                 <line x1="80" y1="162" x2="320" y2="162" stroke={tennisLineColor} strokeWidth="2" />
                 <line x1="140" y1="78" x2="140" y2="162" stroke={tennisLineColor} strokeWidth="2" />
                 <line x1="260" y1="78" x2="260" y2="162" stroke={tennisLineColor} strokeWidth="2" />
                 <line x1="140" y1="120" x2="260" y2="120" stroke={tennisLineColor} strokeWidth="2" />
                 <line x1="200" y1="55" x2="200" y2="185" stroke={isMulti ? 'rgba(255,255,255,0.8)' : 'white'} strokeWidth="3" strokeDasharray="4" />
                 <circle cx="200" cy="55" r="3" fill="#334155" />
                 <circle cx="200" cy="185" r="3" fill="#334155" />
               </g>
            )}
             
            {isPickleball && (
              <g id="pickleball-layer">
                 <rect x="133" y="89" width="134" height="62" fill={zones.courtBase || '#38BDF8'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('courtBase')} className={cursorClass}/>
                 <rect x="186" y="89" width="28" height="62" fill={zones.keyAreaLeft || '#166534'} stroke="white" strokeWidth="2" onClick={() => handleZoneClick('keyAreaLeft')} className={cursorClass} />
                 <line x1="200" y1="80" x2="200" y2="160" stroke="white" strokeWidth="3" />
              </g>
            )}
          </g>

          {accessories.lights && (
            <g>
               <circle cx={surroundX + 5} cy={surroundY + 5} r="4" fill="#FEF08A" filter="url(#glow)" />
               <circle cx={surroundX + svgWidth - 5} cy={surroundY + 5} r="4" fill="#FEF08A" filter="url(#glow)" />
               <circle cx={surroundX + 5} cy={surroundY + svgHeight - 5} r="4" fill="#FEF08A" filter="url(#glow)" />
               <circle cx={surroundX + svgWidth - 5} cy={surroundY + svgHeight - 5} r="4" fill="#FEF08A" filter="url(#glow)" />
            </g>
          )}
          {accessories.fence && <rect x={surroundX} y={surroundY} width={svgWidth} height={svgHeight} fill="none" stroke="#94A3B8" strokeWidth="4" strokeDasharray="2,2" pointerEvents="none"/>}
          {!is3D && accessories.hoops && (isBasketball || isMulti) && (
             <g>
               <rect x="45" y="105" width="2" height="30" fill="#334155" /> 
               <circle cx="55" cy="120" r="5" fill="none" stroke="#EA580C" strokeWidth="2" />
               <line x1="47" y1="120" x2="50" y2="120" stroke="#334155" strokeWidth="2" />
               <rect x="353" y="105" width="2" height="30" fill="#334155" />
               <circle cx="345" cy="120" r="5" fill="none" stroke="#EA580C" strokeWidth="2" />
               <line x1="350" y1="120" x2="353" y2="120" stroke="#334155" strokeWidth="2" />
             </g>
          )}
          {accessories.bench && (
            <g>
               <rect x="160" y={surroundY - 15} width="80" height="8" fill="#94A3B8" rx="2" />
               <rect x="160" y={surroundY + svgHeight + 7} width="80" height="8" fill="#94A3B8" rx="2" />
            </g>
          )}
        </svg>

        {accessories.hoops && (isBasketball || isMulti) && is3D && (
           <>
             <div className="absolute top-[42%] left-[15%] w-1 h-12 bg-gray-600 transform -rotate-y-12 translate-z-10 origin-bottom shadow-xl">
                <div className="absolute top-0 -left-2 w-5 h-0.5 bg-orange-500"></div> 
                <div className="absolute top-1 -left-1 w-3 h-3 border-2 border-orange-500 rounded-full transform rotate-x-90"></div> 
             </div>
             <div className="absolute top-[42%] right-[15%] w-1 h-12 bg-gray-600 transform rotate-y-12 translate-z-10 origin-bottom shadow-xl">
                 <div className="absolute top-0 -right-2 w-5 h-0.5 bg-orange-500"></div>
                 <div className="absolute top-1 -right-1 w-3 h-3 border-2 border-orange-500 rounded-full transform rotate-x-90"></div>
             </div>
           </>
        )}
        {accessories.scoreboard && (
           <div className={`absolute top-4 right-4 bg-black border-2 border-slate-700 p-2 rounded shadow-2xl ${is3D ? 'transform rotate-y-[-10deg]' : ''}`}>
              <div className="flex space-x-4 text-center">
                 <div><div className="text-[8px] text-red-500 font-bold tracking-widest">HOME</div><div className="text-xl font-mono text-red-500 leading-none">88</div></div>
                 <div className="text-[8px] text-slate-500 pt-2">:</div>
                 <div><div className="text-[8px] text-yellow-500 font-bold tracking-widest">GUEST</div><div className="text-xl font-mono text-yellow-500 leading-none">82</div></div>
              </div>
           </div>
        )}
        {is3D && <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]" style={{ backgroundColor: '#334155', transform: 'translateZ(-10px)' }}/>}
      </div>
    </div>
  );
};

// --- 4. FEATURE COMPONENTS ---

const DesignStudio = ({ config, setConfig, onAddToCart, onLoadProject }: any) => {
  const [activeTool, setActiveTool] = useState('palette');
  const [activeColor, setActiveColor] = useState(COLORS[0].hex);
  const [is3D, setIs3D] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const setZoneColor = (zone: string, color: string) => {
    setConfig((prev: any) => ({ ...prev, zones: { ...prev.zones, [zone]: color } }));
  };

  const updateAccessory = (key: string, value: boolean) => {
    setConfig((prev: any) => {
      const newAccessories = { ...prev.accessories, [key]: value };
      return { ...prev, accessories: newAccessories };
    });
  };

  const updateDimensions = (key: string, value: string) => {
    setConfig((prev: any) => ({
      ...prev, dimensions: { ...prev.dimensions, [key]: parseInt(value) }
    }));
  };

  const updateSurface = (surfaceName: string) => {
    setConfig((prev: any) => ({ ...prev, surface: surfaceName }));
  };

  useEffect(() => {
    const area = (config.dimensions?.length || 0) * (config.dimensions?.width || 0);
    const surfaceCost = PRICE_PER_SQM[config.surface as keyof typeof PRICE_PER_SQM] || 35;
    const basePrice = area * surfaceCost;
    
    let accPrice = 0;
    if (config.accessories?.hoops) accPrice += ACCESSORY_PRICES.hoops;
    if (config.accessories?.lights) accPrice += ACCESSORY_PRICES.lights;
    if (config.accessories?.fence) accPrice += ACCESSORY_PRICES.fence;
    if (config.accessories?.rebounder) accPrice += ACCESSORY_PRICES.rebounder;
    if (config.accessories?.bench) accPrice += ACCESSORY_PRICES.bench;
    if (config.accessories?.scoreboard) accPrice += ACCESSORY_PRICES.scoreboard;

    setConfig((prev: any) => ({ ...prev, price: basePrice + accPrice }));
  }, [config.dimensions, config.surface, config.accessories, setConfig]);

  return (
    <div className="h-full bg-slate-50 overflow-y-auto">
      <div className="flex h-full min-h-full">
      
      <div className="w-12 bg-slate-900 flex flex-col items-center py-2 z-20 shrink-0 shadow-xl border-r border-slate-800 space-y-2">
        <ToolButton icon={<Palette size={16} />} label="Colors" isActive={activeTool === 'palette'} onClick={() => { setActiveTool('palette'); setIsPanelOpen(true); }} />
        <ToolButton icon={<Layers size={16} />} label="Zones" isActive={activeTool === 'zones'} onClick={() => { setActiveTool('zones'); setIsPanelOpen(true); }} />
        <ToolButton icon={<Ruler size={16} />} label="Size" isActive={activeTool === 'dimensions'} onClick={() => { setActiveTool('dimensions'); setIsPanelOpen(true); }} />
        <ToolButton icon={<Lightbulb size={16} />} label="Extras" isActive={activeTool === 'accessories'} onClick={() => { setActiveTool('accessories'); setIsPanelOpen(true); }} />
        <ToolButton icon={<Type size={16} />} label="Brand" isActive={activeTool === 'branding'} onClick={() => { setActiveTool('branding'); setIsPanelOpen(true); }} />
        <ToolButton icon={<Grid size={16} />} label="Surface" isActive={activeTool === 'surface'} onClick={() => { setActiveTool('surface'); setIsPanelOpen(true); }} />
        <div className="flex-grow"></div>
        <ToolButton icon={<RefreshCw size={16} />} label="Reset" isActive={false} onClick={() => { if(confirm('Reset design?')) onLoadProject(TEMPLATES[0]); }} />
      </div>

      <div className={`bg-white border-r border-slate-200 flex flex-col shadow-sm z-10 transition-all duration-300 ease-in-out relative ${isPanelOpen ? 'w-48 translate-x-0 opacity-100' : 'w-0 -translate-x-4 opacity-0 overflow-hidden'}`}>
        <button onClick={() => setIsPanelOpen(!isPanelOpen)} className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-slate-200 shadow-md rounded-full p-1 z-50 text-slate-500 hover:text-slate-800">
          <ChevronLeft size={10} className={`transition-transform ${isPanelOpen ? '' : 'rotate-180'}`} />
        </button>

        <div className="p-2 border-b border-slate-100"><h2 className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">{activeTool}</h2></div>

        <div className="p-2 flex-grow overflow-y-auto space-y-3">
          {activeTool === 'palette' && (
            <div className="grid grid-cols-3 gap-1.5">
              {COLORS.map((c) => (
                <button key={c.hex} onClick={() => setActiveColor(c.hex)} className={`flex flex-col items-center justify-center p-1 rounded-md border transition-all ${activeColor === c.hex ? 'border-orange-500 bg-orange-50' : 'border-slate-100 hover:border-slate-300'}`}>
                  <div className="w-6 h-6 rounded-full shadow-sm mb-0.5" style={{ backgroundColor: c.hex }}></div>
                </button>
              ))}
            </div>
          )}

          {activeTool === 'accessories' && (
             <div className="space-y-1.5">
               <AccessoryToggle label="Pro Hoops (+$1200)" active={config.accessories?.hoops} onClick={() => updateAccessory('hoops', !config.accessories?.hoops)} />
               <AccessoryToggle label="LED Lights (+$2500)" active={config.accessories?.lights} onClick={() => updateAccessory('lights', !config.accessories?.lights)} />
               <AccessoryToggle label="Fencing (+$3000)" active={config.accessories?.fence} onClick={() => updateAccessory('fence', !config.accessories?.fence)} />
               <AccessoryToggle label="Spectator Bench (+$1500)" active={config.accessories?.bench} onClick={() => updateAccessory('bench', !config.accessories?.bench)} />
               <AccessoryToggle label="Scoreboard (+$4500)" active={config.accessories?.scoreboard} onClick={() => updateAccessory('scoreboard', !config.accessories?.scoreboard)} />
             </div>
          )}

          {activeTool === 'dimensions' && (
             <div className="space-y-3">
                <div>
                   <label className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>Length</span> <span>{config.dimensions?.length}m</span></label>
                   <input type="range" min="10" max="40" value={config.dimensions?.length || 28} onChange={(e) => updateDimensions('length', e.target.value)} className="w-full accent-orange-500" />
                </div>
                <div>
                   <label className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>Width</span> <span>{config.dimensions?.width}m</span></label>
                   <input type="range" min="8" max="25" value={config.dimensions?.width || 15} onChange={(e) => updateDimensions('width', e.target.value)} className="w-full accent-orange-500" />
                </div>
             </div>
          )}

          {activeTool === 'branding' && (
             <div className="space-y-2">
               <div>
                 <label className="block text-[10px] font-bold text-slate-500 mb-1">Court Name</label>
                 <input type="text" value={config.customText || ''} onChange={(e) => setConfig((prev: any) => ({...prev, customText: e.target.value}))} className="w-full text-xs border-slate-200 border rounded-md p-1.5" placeholder="YOUR NAME" />
               </div>
             </div>
          )}

          {activeTool === 'surface' && (
             <div className="space-y-1.5">
                {Object.keys(PRICE_PER_SQM).map(s => (
                  <button key={s} onClick={() => updateSurface(s)} className={`w-full text-left px-2 py-1.5 text-[10px] rounded-md border transition-all ${config.surface === s ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-slate-100 hover:bg-slate-50'}`}>
                    <div className="flex justify-between"><span>{s}</span><span className="font-bold text-[9px]">${PRICE_PER_SQM[s as keyof typeof PRICE_PER_SQM]}/m²</span></div>
                  </button>
                ))}
             </div>
          )}
          
          {activeTool === 'zones' && <div className="text-[10px] text-slate-500">Tap court areas to paint with active color.</div>}
        </div>

        <div className="p-2 bg-slate-50 border-t border-slate-200">
           <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-slate-500 font-bold">Total Estimate</span>
            <span className="text-sm font-bold text-slate-900">${config.price?.toLocaleString()}</span>
          </div>
          <button onClick={onAddToCart} className="w-full py-2 bg-slate-900 hover:bg-orange-600 text-white text-xs rounded-lg font-bold shadow-md transition-colors">Add to Cart</button>
        </div>
      </div>

      <div className="flex-grow bg-slate-200 relative overflow-hidden flex flex-col shadow-inner">
        <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md p-1 rounded-lg shadow-sm pointer-events-auto flex space-x-1">
             <button className="p-1 hover:bg-slate-100 rounded text-slate-600"><Undo size={12}/></button>
             <button className="p-1 hover:bg-slate-100 rounded text-slate-600"><Redo size={12}/></button>
          </div>
          <button onClick={() => setIs3D(!is3D)} className={`pointer-events-auto flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold shadow-lg transition-all ${is3D ? 'bg-indigo-600 text-white' : 'bg-white text-slate-800'}`}>
             <Box size={12} /><span>{is3D ? '3D View' : '2D View'}</span>
          </button>
        </div>
        <div className="flex-grow flex items-center justify-center p-2 sm:p-4 overflow-auto perspective-container">
           <CourtPreview config={config} is3D={is3D} setZoneColor={setZoneColor} activeColor={activeColor} className="w-full max-w-5xl" />
        </div>
      </div>
      </div>
    </div>
  );
};

// --- 5. PAGE COMPONENTS ---

const ProfilePage = () => {
  const [isSaving, setIsSaving] = useState(false);
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => { setIsSaving(false); alert('Profile Saved Successfully!'); }, 1500);
  };

  return (
    <div className="h-full bg-slate-50 py-6 px-4 animate-fade-in overflow-y-auto">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h1 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><User className="mr-3" /> Profile Settings</h1>
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-lg font-bold text-white shadow-md relative group cursor-pointer">
            JD
            <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><Camera className="w-6 h-6 text-white" /></div>
          </div>
          <div className="ml-6"><h3 className="font-bold text-base">John Doe</h3><p className="text-slate-500 text-xs">Premium Member</p></div>
        </div>
        <div className="space-y-6">
          <div><label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label><div className="relative"><User className="absolute left-3 top-3 w-5 h-5 text-slate-400" /><input type="text" defaultValue="John Doe" className="w-full pl-10 p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" /></div></div>
          <div><label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label><div className="relative"><Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" /><input type="email" defaultValue="john.doe@example.com" className="w-full pl-10 p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" /></div></div>
          <div><label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label><div className="relative"><Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" /><input type="tel" defaultValue="+61 400 000 000" className="w-full pl-10 p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" /></div></div>
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button onClick={handleSave} className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md flex items-center">
              {isSaving ? <><RefreshCw className="w-4 h-4 mr-2 animate-spin"/> Saving...</> : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddressesPage = () => (
  <div className="h-full bg-slate-50 py-6 px-4 animate-fade-in overflow-y-auto">
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-slate-900 flex items-center"><MapPin className="mr-3"/> Address Book</h1>
        <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-colors flex items-center"><Plus className="w-4 h-4 mr-2"/> Add New</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative hover:shadow-md transition-shadow">
           <div className="absolute top-4 right-4 flex space-x-2 text-slate-400">
             <button className="hover:text-slate-600 p-1"><Edit3 size={16}/></button>
             <button className="hover:text-red-500 p-1"><Trash2 size={16}/></button>
           </div>
           <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">DEFAULT</span>
           <div className="flex items-start">
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-4 shrink-0"><Home className="w-5 h-5 text-slate-500"/></div>
             <div>
               <h3 className="font-bold text-sm text-slate-900">Home</h3>
               <p className="text-slate-500 text-sm mt-2 leading-relaxed">John Doe<br/>123 Sport Avenue<br/>Melbourne, VIC 3000<br/>Australia</p>
             </div>
           </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative hover:shadow-md transition-shadow">
           <div className="absolute top-4 right-4 flex space-x-2 text-slate-400">
             <button className="hover:text-slate-600 p-1"><Edit3 size={16}/></button>
             <button className="hover:text-red-500 p-1"><Trash2 size={16}/></button>
           </div>
           <div className="flex items-start">
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-4 shrink-0"><Box className="w-5 h-5 text-slate-500"/></div>
             <div>
               <h3 className="font-bold text-sm text-slate-900">Office</h3>
               <p className="text-slate-500 text-sm mt-2 leading-relaxed">CourtCanva HQ<br/>45 Design St<br/>Sydney, NSW 2000<br/>Australia</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const SecurityPage = () => (
  <div className="h-full bg-slate-50 py-6 px-4 animate-fade-in overflow-y-auto">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h1 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><Shield className="mr-3" /> Security & Privacy</h1>
      <div className="space-y-8">
        <div>
          <h3 className="text-base font-bold text-slate-800 mb-4">Change Password</h3>
          <div className="space-y-4">
            <input type="password" placeholder="Current Password" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-slate-400" />
            <input type="password" placeholder="New Password" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-slate-400" />
            <input type="password" placeholder="Confirm New Password" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-slate-400" />
          </div>
          <button onClick={() => alert('Password Updated')} className="mt-4 px-4 py-2 border border-slate-300 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">Update Password</button>
        </div>
        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-800 mb-4">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"><Lock className="w-5 h-5 text-green-600"/></div>
              <div><p className="font-bold text-slate-800">2FA is currently active</p><p className="text-xs text-slate-500">Your account is secured with mobile verification.</p></div>
            </div>
            <button className="text-sm font-bold text-red-600 hover:underline">Disable</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HelpPage = () => (
  <div className="h-full bg-slate-50 py-6 px-4 animate-fade-in overflow-y-auto">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">How can we help?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div onClick={() => alert('Tracking system demo')} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
          <Truck className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="font-bold text-base mb-2">Shipping & Delivery</h3>
          <p className="text-slate-500 text-sm">Track your orders, shipping rates, and delivery times.</p>
        </div>
        <div onClick={() => alert('Download PDF Guide demo')} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
          <Grid className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-bold text-base mb-2">Installation Guide</h3>
          <p className="text-slate-500 text-sm">Step-by-step guides for installing your DIY court.</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h3 className="text-base font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="group p-4 bg-slate-50 rounded-lg cursor-pointer">
            <summary className="font-bold text-slate-800 list-none flex justify-between items-center">What is the warranty period? <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180"/></summary>
            <p className="mt-4 text-slate-600 text-sm">We offer a 10-year comprehensive warranty on all our performance tiles and a 5-year warranty on acrylic surfaces.</p>
          </details>
          <details className="group p-4 bg-slate-50 rounded-lg cursor-pointer">
            <summary className="font-bold text-slate-800 list-none flex justify-between items-center">Do you offer installation services? <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180"/></summary>
            <p className="mt-4 text-slate-600 text-sm">Yes! We have a network of certified installers across the country. You can select &quot;Professional Installation&quot; during checkout.</p>
          </details>
        </div>
      </div>
    </div>
  </div>
);

const TemplatesPage = ({ onSelectTemplate }: any) => (
  <div className="h-full bg-slate-50 py-6 px-4 animate-fade-in overflow-y-auto">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-6"><h1 className="text-2xl font-bold text-slate-900 mb-2">Select a Template</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEMPLATES.map(t => (
          <div key={t.id} onClick={() => onSelectTemplate(t)} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-slate-100 overflow-hidden">
             <div className="h-48 bg-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
                <div className="w-full h-full transform transition-transform group-hover:scale-105 group-hover:-rotate-1">
                   <CourtPreview config={t} is3D={false} interactive={false} />
                </div>
             </div>
             <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-base">{t.name}</h3>
                        <p className="text-xs text-slate-500">{t.type} • {t.surface}</p>
                    </div>
                    <div className="text-sm font-bold text-slate-900">${t.price.toLocaleString()}</div>
                </div>
                <div className="mt-4 w-full py-1.5 bg-slate-100 text-slate-900 text-xs font-bold rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all flex items-center justify-center">
                    Customise <ArrowRight className="ml-1.5 w-3 h-3" />
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CartPage = ({ cart, onCheckout, onRemove, setCurrentPage }: any) => {
  const subtotal = cart.reduce((acc: number, item: any) => acc + (item.price || 0), 0);
  return (
    <div className="h-full bg-slate-50 py-6 px-4 overflow-y-auto">
       <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold mb-4">Shopping Cart ({cart.length})</h1>
          {cart.length === 0 ? <div className="text-center py-10">Cart is empty. <button onClick={() => setCurrentPage('templates')} className="text-orange-600 font-bold">Start Designing</button></div> : (
             <div className="space-y-4">
                {cart.map((item: any, i: number) => (
                   <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                      <div className="flex items-center">
                         <div className="w-20 h-20 bg-slate-100 rounded mr-4 overflow-hidden flex items-center"><div className="scale-50"><CourtPreview config={item} interactive={false}/></div></div>
                         <div>
                            <h3 className="font-bold text-sm">{item.name}</h3>
                            <p className="text-xs text-slate-500">{item.dimensions.length}m x {item.dimensions.width}m • {item.surface}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="font-bold text-lg">${item.price.toLocaleString()}</div>
                         <button onClick={() => onRemove(i)} className="text-red-500 text-xs mt-1">Remove</button>
                      </div>
                   </div>
                ))}
                <div className="mt-8 border-t pt-4 text-right">
                   <div className="text-base font-bold mb-4">Total: ${subtotal.toLocaleString()}</div>
                   <button onClick={onCheckout} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">Checkout</button>
                </div>
             </div>
          )}
       </div>
    </div>
  );
};

const DashboardPage = ({ savedProjects, onEditProject, onCreateNew, orders }: any) => (
  <div className="h-full bg-slate-50 py-6 px-4 overflow-y-auto">
     <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">My Dashboard</h1>
        <div className="mb-12">
           <div className="flex justify-between items-center mb-4">
             <h2 className="text-base font-bold text-slate-800">Saved Projects</h2>
             <button onClick={onCreateNew} className="text-sm font-bold text-orange-600 hover:text-orange-700">+ New Design</button>
           </div>
           {savedProjects.length === 0 ? (
             <div className="bg-white p-8 rounded-xl border border-dashed border-slate-300 text-center text-slate-500">No saved projects yet.</div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedProjects.map((p: any, idx: number) => (
                   <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-32 bg-slate-100 relative p-4 flex items-center justify-center">
                         <div className="scale-50 origin-center w-full"><CourtPreview config={p} interactive={false} /></div>
                      </div>
                      <div className="p-4">
                         <h3 className="font-bold text-sm text-slate-900">{p.name}</h3>
                         <p className="text-xs text-slate-500 mb-4">{p.type} • {p.surface}</p>
                         <button onClick={() => onEditProject(p)} className="w-full py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-orange-600 flex items-center justify-center">
                           <Edit3 className="w-3 h-3 mr-2"/> Edit Design
                         </button>
                      </div>
                   </div>
                ))}
             </div>
           )}
        </div>
        <div>
           <h2 className="text-base font-bold text-slate-800 mb-4">Recent Orders</h2>
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
             {orders.length === 0 ? (
                <div className="p-8 text-center text-slate-500">No orders placed yet.</div>
             ) : (
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Item</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">Amount</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                     {orders.map((o: any, i: number) => (
                       <tr key={i}>
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">#ORD-{o.id}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{o.name}</td>
                         <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Processing</span></td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 text-right">${o.price.toLocaleString()}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-right"><button onClick={() => alert('Invoice PDF downloaded')} className="text-orange-600 hover:underline">View Invoice</button></td>
                       </tr>
                     ))}
                  </tbody>
                </table>
             )}
           </div>
        </div>
     </div>
  </div>
);

const CheckoutPage = ({ onPlaceOrder, onCancel }: any) => (
  <div className="h-full flex items-center justify-center bg-slate-50 p-4">
     <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-3">Simulate Payment</h2>
        <p className="text-slate-500 mb-8">This is a demo. No actual money will be charged.</p>
        <button onClick={onPlaceOrder} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg mb-3">Pay Successfully</button>
        <button onClick={onCancel} className="w-full py-3 text-slate-500">Cancel</button>
     </div>
  </div>
);

const ResultPage = ({ type, onHome, onDashboard }: any) => (
  <div className="h-full flex items-center justify-center bg-slate-50 p-4">
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center">
       <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
         {type === 'success' ? <CheckCircle size={24}/> : <AlertCircle size={24}/>}
       </div>
       <h2 className="text-xl font-bold mb-2">{type === 'success' ? 'Order Confirmed!' : 'Payment Failed'}</h2>
       <div className="mt-6 space-y-2">
         <button onClick={onDashboard} className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg">Go to Dashboard</button>
         <button onClick={onHome} className="w-full py-3 text-slate-500">Back Home</button>
       </div>
    </div>
  </div>
);

// --- 6. MAIN APP ROUTER ---

const CourtCanvaApp = () => {
  const [currentPage, setCurrentPage] = useState('templates'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [savedProjects, setSavedProjects] = useState<any[]>([]); 
  const [orders, setOrders] = useState<any[]>([]); 
  const [isSigningOut, setIsSigningOut] = useState(false); 
  
  const defaultState = {
    name: 'My Custom Court',
    type: 'Basketball',
    price: 4500,
    zones: { surround: '#E2E8F0', courtBase: '#3B82F6', keyAreaLeft: '#1D4ED8', keyAreaRight: '#1D4ED8', centerCircle: 'transparent' },
    customText: '',
    accessories: { hoops: false, lights: false, fence: false, rebounder: false, bench: false, scoreboard: false },
    dimensions: { length: 28, width: 15 },
    surface: 'Performance Tiles'
  };

  const [courtConfig, setCourtConfig] = useState(defaultState);

  const handleSelectTemplate = (template: any) => {
    setCourtConfig({
      ...defaultState,
      name: template.name,
      type: template.type,
      zones: { ...template.zones },
      dimensions: template.dimensions || { length: 28, width: 15 },
      surface: template.surface || 'Performance Tiles',
      price: template.price || 4500
    });
    setCurrentPage('editor');
  };

  const handleEditSaved = (project: any) => {
    setCourtConfig(project);
    setCurrentPage('editor');
  };

  const handleAddToCart = () => {
    const newItem = { ...courtConfig, id: Date.now() };
    setCart([...cart, newItem]);
    if (!savedProjects.find(p => p.name === newItem.name)) {
      setSavedProjects([...savedProjects, newItem]);
    }
    setCurrentPage('cart');
  };

  const handlePlaceOrder = () => {
    const newOrders = cart.map(item => ({ id: Math.floor(Math.random()*10000), ...item }));
    setOrders([...orders, ...newOrders]);
    setCart([]);
    setCurrentPage('success');
  };

  const handleSignOut = () => {
    setIsSigningOut(true);
    setTimeout(() => {
      setIsSigningOut(false);
      setCurrentPage('templates');
    }, 1500);
  };

  if (isSigningOut) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold">Signing Out...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-900 bg-white h-[500px] flex flex-col rounded-2xl">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        cartCount={cart.length} 
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
        onSignOut={handleSignOut}
      />
      <main className="flex-1 overflow-y-auto">
        {currentPage === 'templates' && <TemplatesPage onSelectTemplate={handleSelectTemplate} />}
        {currentPage === 'editor' && (
          <DesignStudio 
            config={courtConfig} 
            setConfig={setCourtConfig} 
            onAddToCart={handleAddToCart}
            onLoadProject={handleSelectTemplate} 
          />
        )}
        {currentPage === 'cart' && (
           <CartPage cart={cart} onCheckout={() => setCurrentPage('checkout')} onRemove={(i: number) => setCart(cart.filter((_, idx) => idx !== i))} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'checkout' && <CheckoutPage onPlaceOrder={handlePlaceOrder} onCancel={() => setCurrentPage('cart')} />}
        {currentPage === 'success' && <ResultPage type="success" onHome={() => setCurrentPage('templates')} onDashboard={() => setCurrentPage('dashboard')} />}
        {currentPage === 'failed' && <ResultPage type="failed" onHome={() => setCurrentPage('checkout')} />}
        
        {currentPage === 'dashboard' && <DashboardPage savedProjects={savedProjects} onEditProject={handleEditSaved} onCreateNew={() => setCurrentPage('templates')} orders={orders} />}
        
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'addresses' && <AddressesPage />}
        {currentPage === 'security' && <SecurityPage />}
        {currentPage === 'help' && <HelpPage />}
      </main>
    </div>
  );
};

export default CourtCanvaApp;
