'use client';

import { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDot) cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.3;
      cursorY += dy * 0.3;
      const scale = isHoveringRef.current ? 1.5 : 1;
      if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${scale})`;
      requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-pink-400 rounded-full pointer-events-none z-[9999] -ml-4 -mt-4 mix-blend-screen
          ${isHovering ? 'bg-pink-500/10 border-pink-300' : 'opacity-50'}
        `}
        style={{ transition: 'background-color 0.3s ease-out, border-color 0.3s ease-out, opacity 0.3s ease-out' }}
      />
      <div 
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -ml-1 -mt-1
          ${isHovering ? 'bg-white' : 'bg-fuchsia-400'}
        `}
        style={{ transition: 'background-color 0.2s' }}
      />
    </>
  );
};
