'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

export const Typewriter = ({ texts, speed = 100, pause = 2000 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= texts.length) {
      setIndex(0); 
      return; 
    }
    const currentText = texts[index];
    if (subIndex === currentText.length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setDisplayedText(currentText.substring(0, subIndex));
    }, reverse ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, pause]);

  return (
    <span className="inline-block min-w-[200px]">
      {displayedText}
      <span className="animate-pulse text-pink-400">|</span>
    </span>
  );
};
