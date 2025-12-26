'use client';

import React from 'react';
import Image from 'next/image';
import { HERO_SLOGAN, CAROUSEL_CONFIG } from '@/lib/constants';
import { colors, typography } from '@/lib/design-tokens';
import { useCarousel } from '@/hooks/useCarousel';
import { CarouselDots } from '@/components/ui/CarouselDots';
import { BannerItem, BannerProps } from '@/lib/types/banner';
import { cn } from '@/lib/utils';

// Default banner items
const DEFAULT_BANNER_ITEMS: BannerItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/images/banners/homepage/img4.png',
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

export const HomeBanner: React.FC<BannerProps> = ({
  items = [],
  autoPlay = true,
  interval = CAROUSEL_CONFIG.defaultInterval,
}) => {
  const bannerItems = items.length > 0 ? items : DEFAULT_BANNER_ITEMS;
  const { currentIndex, isPaused, goToSlide, pause, resume } = useCarousel({
    itemsCount: bannerItems.length,
    autoPlay,
    interval,
  });

  const currentItem = bannerItems[currentIndex];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.background.primary }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: colors.background.primary }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
            {/* Left Side - Motorcycle Images */}
            <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-2xl lg:max-w-3xl h-[60vh] lg:h-[70vh]">
                {bannerItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                      index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    )}
                  >
                    <Image
                      src={item.src}
                      alt={`APSONIC Motorcycle ${index + 1}`}
                      fill
                      className="object-contain object-left"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Text Overlay */}
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2 lg:pl-8">
              <h1
                key={currentIndex}
                className="font-bold leading-tight animate-fade-in-up"
                style={{
                  fontSize: typography.size.h1,
                  lineHeight: typography.lineHeight.tight,
                  color: colors.text.primary,
                  textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                }}
              >
                {currentItem.title || HERO_SLOGAN.chinese}
              </h1>
              <p
                key={`desc-${currentIndex}`}
                className="animate-fade-in-up"
                style={{
                  fontSize: typography.size.bodyLarge,
                  lineHeight: typography.lineHeight.normal,
                  color: colors.text.secondary,
                  animationDelay: '0.2s',
                  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                }}
              >
                {currentItem.description || HERO_SLOGAN.french}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <CarouselDots
        count={bannerItems.length}
        currentIndex={currentIndex}
        onDotClick={goToSlide}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      />
    </section>
  );
};
