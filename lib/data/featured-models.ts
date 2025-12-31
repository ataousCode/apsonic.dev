// Featured models data - replace with API calls when backend is ready
import type { FeaturedModel, MotorcycleCategory } from '@/lib/types';
import { DEFAULT_MODEL_COLORS } from '@/lib/constants';

// Helper to create model colors
const createModelColors = (imagePath: string) =>
  DEFAULT_MODEL_COLORS.map((color) => ({
    ...color,
    image: imagePath,
  }));

export const DEFAULT_FEATURED_MODELS: FeaturedModel[] = [
  {
    id: '1',
    name: 'AP125-30 ALOBA',
    image: '/images/banners/homepage/img1.jpg',
    watermark: 'APSONIC',
    colors: createModelColors('/images/banners/homepage/img1.jpg'),
    href: '/products/ap125-30-aloba',
  },
  {
    id: '2',
    name: 'AP150-40 CRUISER',
    image: '/images/banners/homepage/img2.jpg',
    watermark: 'Good Life',
    colors: createModelColors('/images/banners/homepage/img2.jpg'),
    href: '/products/ap150-40-cruiser',
  },
  {
    id: '3',
    name: 'AP200-50 RACER',
    image: '/images/banners/homepage/img3.jpg',
    watermark: 'RACER',
    colors: createModelColors('/images/banners/homepage/img3.jpg'),
    href: '/products/ap200-50-racer',
  },
];

export const DEFAULT_CATEGORIES: MotorcycleCategory[] = [
  {
    id: 'underbone',
    name: 'Underbone',
    image: '/images/banners/homepage/img1.jpg',
    href: '/products?category=underbone',
  },
  {
    id: 'street',
    name: 'Street',
    image: '/images/banners/homepage/img2.jpg',
    href: '/products?category=street',
  },
  {
    id: 'offroad',
    name: 'Off-Road',
    image: '/images/banners/homepage/img3.jpg',
    href: '/products?category=offroad',
  },
];

