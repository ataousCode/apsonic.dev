'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturedModel } from '@/lib/types';
import { colors, typography, effects } from '@/lib/design-tokens';
import { CAROUSEL_CONFIG } from '@/lib/constants';
import { useCarousel } from '@/hooks/useCarousel';
import { CarouselNavButton } from '@/components/ui/CarouselNavButton';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface FeaturedModelCarouselProps {
  models: FeaturedModel[];
  autoPlay?: boolean;
  interval?: number;
}

export const FeaturedModelCarousel: React.FC<FeaturedModelCarouselProps> = ({
  models,
  autoPlay = true,
  interval = CAROUSEL_CONFIG.defaultInterval,
}) => {
  const { currentIndex, nextSlide, prevSlide, pause, resume } = useCarousel({
    itemsCount: models.length,
    autoPlay,
    interval,
  });

  const currentModel = models[currentIndex];

  return (
    <div
      className="relative w-full"
      style={{
        backgroundColor: colors.background.white,
      }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2
          className="font-bold"
          style={{
            fontSize: typography.size.h2,
            lineHeight: typography.lineHeight.tight,
            color: colors.brand.green,
          }}
        >
          Recommended Models
        </h2>
      </div>

      {/* Model Name */}
      <div className="text-center mb-6">
        <h3
          className="font-semibold"
          style={{
            fontSize: typography.size.h1,
            lineHeight: typography.lineHeight.tight,
            color: colors.text.black,
          }}
        >
          {currentModel.name}
        </h3>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full mb-8">
        {/* Image with Watermark */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] overflow-hidden">
          {/* Watermark Background */}
          {currentModel.watermark && (
            <div
              className="absolute inset-0 flex items-start justify-center z-0"
              style={{
                color: 'rgba(0, 0, 0, 0.05)',
                fontSize: 'clamp(4rem, 15vw, 12rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                paddingTop: 'clamp(2rem, 8vw, 6rem)',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
                whiteSpace: 'nowrap',
              }}
            >
              {currentModel.watermark}
            </div>
          )}

          {/* Motorcycle Image */}
          <div className="relative w-full h-full z-10">
            <Image
              src={currentModel.image}
              alt={currentModel.name}
              fill
              className={cn(
                'object-contain object-center',
                effects.transition.default
              )}
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        {/* Navigation Arrows - positioned at container level */}
        {models.length > 1 && (
          <>
            <CarouselNavButton
              direction="left"
              onClick={prevSlide}
              ariaLabel="Previous model"
            />
            <CarouselNavButton
              direction="right"
              onClick={nextSlide}
              ariaLabel="Next model"
            />
          </>
        )}
      </div>

      {/* Call to Action Button */}
      <div className="text-center">
        <Link href="/products">
          <Button variant="outline" size="md">
            All Models
          </Button>
        </Link>
      </div>
    </div>
  );
};

