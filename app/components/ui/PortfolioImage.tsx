import { getImageProps } from 'next/image';
import type { ImgHTMLAttributes } from 'react';

type PortfolioImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  original?: boolean;
};

/** Responsive local previews, without changing the existing CSS or intrinsic ratio.
 * Remote CDN images and full-screen inspection retain their original source.
 */
export function PortfolioImage({
  src, alt, original = false, sizes = '100vw', loading = 'lazy', ...rest
}: PortfolioImageProps) {
  const localPreview = src.startsWith('/') && !src.startsWith('//') && !original;
  const optimized = localPreview
    ? getImageProps({ src, alt, width: 1600, height: 1200, sizes }).props
    : null;

  // getImageProps supplies Next's optimized src/srcSet; retain native geometry
  // because the case studies mix auto-sized images and CSS-constrained previews.
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...rest} src={optimized?.src ?? src} srcSet={optimized?.srcSet} sizes={optimized?.sizes} alt={alt} loading={loading} decoding="async" />;
}
