// Add keyframes for pulse animation
export const initPulseAnimation = () => {
  if (typeof document === 'undefined') return;
  
  if (!document.querySelector('style[data-pulse-animation]')) {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); }
        70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(0,0,0,0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
      }
    `;
    style.setAttribute('data-pulse-animation', 'true');
    document.head.appendChild(style);
  }
};
