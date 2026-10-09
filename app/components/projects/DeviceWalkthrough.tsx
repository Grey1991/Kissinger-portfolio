'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  section: { caption?: string; videoItems: { src: string; label: string }[] };
  opening?: boolean;
  poster?: string;
};

/** Keep desktop demonstrations readable, and narrower devices at their natural scale. */
export function DeviceWalkthrough({ section, opening = false, poster }: Props) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const item = section.videoItems[active];
  const device = item.label.toLowerCase();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.5 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [item.src]);

  return <div className={`device-walkthrough ${opening ? 'device-walkthrough-opening' : ''}`}>
    {opening && <h3 className="case-study-heading">Device Walkthrough</h3>}
    <div className="device-walkthrough-tabs" role="group" aria-label="Choose walkthrough device">
      {section.videoItems.map((video, index) => <button key={video.src} type="button"
        aria-pressed={active === index} onClick={() => setActive(index)}>
        {video.label}
      </button>)}
    </div>
    <div className={`device-walkthrough-player device-walkthrough-${device}`}>
      <video key={item.src} ref={videoRef} src={`${item.src}#t=0.1`} poster={poster} controls loop muted playsInline
        preload="auto" aria-label={`${item.label} membership joining walkthrough`}>
        Your browser does not support video playback.
      </video>
    </div>
    {section.caption && <p className="device-walkthrough-caption">{section.caption}</p>}
  </div>;
}
