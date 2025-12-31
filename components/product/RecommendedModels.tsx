'use client';

import React from 'react';
import { FeaturedModel, MotorcycleCategory } from '@/lib/types';
import { FeaturedModelCarousel } from './FeaturedModelCarousel';
import { CategoryCarousel } from './CategoryCarousel';
import { colors, spacing } from '@/lib/design-tokens';
import { DEFAULT_FEATURED_MODELS, DEFAULT_CATEGORIES } from '@/lib/data/featured-models';
import { cn } from '@/lib/utils';

export interface RecommendedModelsProps {
  featuredModels?: FeaturedModel[];
  categories?: MotorcycleCategory[];
  className?: string;
}

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

