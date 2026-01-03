// Mock banner data - replace with GET /api/banners
import type { BannerItem } from '@/lib/types/banner';
import { HERO_SLOGAN } from '@/lib/constants';

export const DEFAULT_BANNER_ITEMS: BannerItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/images/banners/homepage/img.jpg',
    title: HERO_SLOGAN.chinese,
    description: HERO_SLOGAN.french,
  },
  {
    id: '2',
    type: 'image',
    src: '/images/banners/homepage/img2.jpg',
    title: HERO_SLOGAN.chinese,
    description: HERO_SLOGAN.french,
  },
  {
    id: '3',
    type: 'image',
    src: '/images/banners/homepage/img3.jpg',
    title: HERO_SLOGAN.chinese,
    description: HERO_SLOGAN.french,
  },
];

