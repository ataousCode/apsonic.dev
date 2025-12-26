// Banner type definitions
export interface BannerItem {
  id: string;
  type: 'image' | 'video'; // type can be image or video
  src: string;
  title?: string;
  description?: string;
  link?: string;
  newsId?: string;
}

export interface BannerProps {
  items?: BannerItem[];
  autoPlay?: boolean;
  interval?: number;
}

