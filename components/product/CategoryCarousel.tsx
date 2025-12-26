'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotorcycleCategory } from '@/lib/types';
import { colors, effects, typography } from '@/lib/design-tokens';
import { CAROUSEL_CONFIG } from '@/lib/constants';
import { CarouselNavButton } from '@/components/ui/CarouselNavButton';
import { cn } from '@/lib/utils';

export interface CategoryCarouselProps {
  categories: MotorcycleCategory[];
  autoPlay?: boolean;
  interval?: number; // Not used but kept for API consistency
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Scrolls the carousel horizontally by one card width plus gap
   */
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount = cardWidth + CAROUSEL_CONFIG.scrollGap;
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  /**
   * Centers the scroll position on initial load for better visual balance
   * Only applies when there are 3 or fewer categories
   */
  useEffect(() => {
    if (scrollContainerRef.current && categories.length <= 3) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollLeft = (scrollWidth - clientWidth) / 2;
      container.scrollLeft = scrollLeft;
    }
  }, [categories.length]);

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Navigation Arrows */}
      {categories.length > 1 && (
        <>
          <CarouselNavButton
            direction="left"
            onClick={() => scroll('left')}
            ariaLabel="Previous categories"
          />
          <CarouselNavButton
            direction="right"
            onClick={() => scroll('right')}
            ariaLabel="Next categories"
          />
        </>
      )}

      {/* Scrollable Categories Container - Centered */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 justify-center items-center"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href || `/products?category=${category.id}`}
            className={cn(
              'group relative block rounded-lg flex-shrink-0',
              effects.transition.default,
              'hover:scale-105',
              'w-[280px]'
            )}
            style={{
              backgroundColor: colors.background.white,
            }}
          >
            {/* Category Image - Centered, no overflow */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className={cn(
                  'object-contain object-center',
                  effects.transition.default,
                  'group-hover:scale-105'
                )}
                sizes="280px"
              />
            </div>

            {/* Category Name */}
            <div className="p-4 text-center">
              <h3
                className={cn(
                  'font-medium',
                  effects.transition.colors,
                  'group-hover:text-[#1FA84F]' // Using colors.brand.green
                )}
                style={{
                  color: colors.text.black,
                  fontSize: typography.size.body,
                }}
              >
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

