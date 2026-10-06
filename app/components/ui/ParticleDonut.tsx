'use client';

import { useEffect, useRef, useState } from 'react';

export const ParticleDonut = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(1);

  // Handle scroll opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrolled / 600);
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    const particleCount = 4200;
    let canvasWidth = 1;
    let canvasHeight = 1;
    let compositionScale = 1;
    
    interface Particle {
      u: number;
      v: number;
      x: number;
      y: number;
      z: number;
      cx: number;
      cy: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
    }
    
    const particles: Particle[] = [];
    const torusRadius = 180;
    const tubeRadius = 70;
    let mouseX = -1000;
    let mouseY = -1000;

    const getCenterX = () => canvasWidth / 2;
    
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      particles.push({
        u, v, x: 0, y: 0, z: 0, cx: 0, cy: 0, vx: 0, vy: 0,
        alpha: Math.random() * 0.4 + 0.12, size: Math.random() * 0.9 + 0.3
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - getCenterX();
      mouseY = e.clientY - rect.top - canvasHeight / 2;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseX = touch.clientX - rect.left - getCenterX();
      mouseY = touch.clientY - rect.top - canvasHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    let angleX = -0.42;
    let angleY = 0.92;

    const render = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      angleX += 0.002;
      angleY += 0.003;
      const centerX = getCenterX();
      const centerY = canvasHeight / 2;
      const fov = 600;
      ctx.fillStyle = '#d8ceff';

      particles.forEach(p => {
        let x = (torusRadius + tubeRadius * Math.cos(p.v)) * Math.cos(p.u);
        let y = (torusRadius + tubeRadius * Math.cos(p.v)) * Math.sin(p.u);
        let z = tubeRadius * Math.sin(p.v);

        const tx = x * Math.cos(angleY) - z * Math.sin(angleY);
        let tz = x * Math.sin(angleY) + z * Math.cos(angleY);
        x = tx; z = tz;

        const ty = y * Math.cos(angleX) - z * Math.sin(angleX);
        tz = y * Math.sin(angleX) + z * Math.cos(angleX);
        y = ty; z = tz;

        const scale = fov / (fov + z);
        const targetX = x * scale * compositionScale;
        const targetY = y * scale * compositionScale;

        const dx = targetX - mouseX;
        const dy = targetY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 120;

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 50;
          const pushY = Math.sin(angle) * force * 50;
          p.vx += pushX * 0.1;
          p.vy += pushY * 0.1;
        }

        p.vx += (targetX - p.cx) * 0.05;
        p.vy += (targetY - p.cy) * 0.05;
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.cx += p.vx;
        p.cy += p.vy;

        const drawX = centerX + p.cx;
        const drawY = centerY + p.cy;
        const drawSize = p.size * scale;
        
        const depthAlpha = (z + tubeRadius) / (tubeRadius * 2); 
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha + depthAlpha * 0.3));
        
        ctx.beginPath();
        ctx.arc(drawX, drawY, drawSize, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      canvasWidth = bounds.width;
      canvasHeight = bounds.height;
      const artBounds = canvas.parentElement!.getBoundingClientRect();
      compositionScale = window.innerWidth >= 768
        ? Math.min(artBounds.width + 180, artBounds.height * 0.75 + 140) / 620 * (2.06 * 2 / 3)
        : Math.min(canvasWidth, canvasHeight) / 620 * 1.03;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvasWidth * pixelRatio);
      canvas.height = Math.round(canvasHeight * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };
    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: opacity }}
    />
  );
};
