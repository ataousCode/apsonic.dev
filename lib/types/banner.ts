// Banner type definitions
export interface BannerItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title?: string;
  description?: string;
  subtitle?: string;
  link?: string;
  newsId?: string;
}

export type BannerHeight = 'fullScreen' | 'large' | 'medium' | 'small';
export type TextPosition = 'left' | 'center' | 'right' | 'top' | 'bottom';
export type OverlayOpacity = 'light' | 'medium' | 'dark';

export interface BannerProps {
  items?: BannerItem[];
  autoPlay?: boolean;
  interval?: number;
  showText?: boolean;
  showDots?: boolean;
  height?: BannerHeight;
  textPosition?: TextPosition;
  overlayOpacity?: OverlayOpacity;
  className?: string;
  onSlideChange?: (index: number) => void;
}

