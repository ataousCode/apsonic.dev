'use client';

import React from 'react';
import { FeaturedModel, MotorcycleCategory } from '@/lib/types';
import { FeaturedModelCarousel } from './FeaturedModelCarousel';
import { CategoryCarousel } from './CategoryCarousel';
import { colors, spacing } from '@/lib/design-tokens';
import { DEFAULT_MODEL_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export interface RecommendedModelsProps {
  featuredModels?: FeaturedModel[];
  categories?: MotorcycleCategory[];
  className?: string;
}

/**
 * Helper function to create model colors with associated image path
 * Reuses DEFAULT_MODEL_COLORS to avoid duplication
 */
const createModelColors = (imagePath: string) =>
  DEFAULT_MODEL_COLORS.map((color) => ({
    ...color,
    image: imagePath,
  }));

// Default featured models - using available banner images
const DEFAULT_FEATURED_MODELS: FeaturedModel[] = [
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

// Default categories - using available banner images
const DEFAULT_CATEGORIES: MotorcycleCategory[] = [
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

export const RecommendedModels: React.FC<RecommendedModelsProps> = ({
  featuredModels = DEFAULT_FEATURED_MODELS,
  categories = DEFAULT_CATEGORIES,
  className,
}) => {
  return (
    <section
      className={cn('w-full', spacing.section.vertical, className)}
      style={{ backgroundColor: colors.background.white }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Model Carousel */}
        <div className="mb-16 lg:mb-24">
          <FeaturedModelCarousel
            models={featuredModels}
            autoPlay
          />
        </div>

        {/* Category Carousel */}
        <CategoryCarousel
          categories={categories}
          autoPlay={false}
        />
      </div>
    </section>
  );
};

