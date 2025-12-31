'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BannerProps } from '@/lib/types/banner';
import { CAROUSEL_CONFIG } from '@/lib/constants';
import { BANNER_CONFIG } from '@/lib/constants/banner';
import { colors, typography } from '@/lib/design-tokens';
import { useCarousel } from '@/hooks/useCarousel';
import { CarouselDots } from '@/components/ui/CarouselDots';
import { DEFAULT_BANNER_ITEMS } from '@/lib/data/banners';
import { cn } from '@/lib/utils';

// Please note, this a reusable baner component with optional text
// Supports image/video carousel, customizable height, text positioning, and overlay
export const Banner: React.FC<BannerProps> = ({
  items = [],
  autoPlay = true,
  interval = CAROUSEL_CONFIG.defaultInterval,
  showText = true,
  showDots = true,
  height = 'fullScreen',
  textPosition = 'right',
  overlayOpacity = 'medium',
  className,
  onSlideChange,
}) => {
  const bannerItems = items.length > 0 ? items : DEFAULT_BANNER_ITEMS;
  
  const { currentIndex, goToSlide, pause, resume } = useCarousel({
    itemsCount: bannerItems.length,
    autoPlay,
    interval,
  });

  const currentItem = bannerItems[currentIndex];

  // Notify parent of slide change
  React.useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const heightClass = BANNER_CONFIG.height[height];
  const positionClass = BANNER_CONFIG.textPosition[textPosition];
  const overlayColor = BANNER_CONFIG.overlay[overlayOpacity];

  const content = (
    <section
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        heightClass,
        className
      )}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Background Media - Carousel */}
      {bannerItems.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            'absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        >
          {item.type === 'image' ? (
            <Image
              src={item.src}
              alt={item.title || `Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          ) : (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          
          {/* Overlay for text readability */}
          {showText && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: overlayColor }}
            />
          )}
        </div>
      ))}

      {/* Text Content - Optional */}
      {showText && currentItem && (
        <div className={cn('relative z-10 w-full', heightClass, 'flex', positionClass)}>
          <div className={cn('container mx-auto w-full', BANNER_CONFIG.spacing.containerPadding)}>
            <div className={cn('w-full', BANNER_CONFIG.spacing.textPadding)}>
              <div className="max-w-4xl">
                {currentItem.title && (
                  <h1
                    key={`title-${currentIndex}`}
                    className="font-bold mb-4"
                    style={{
                      fontSize: BANNER_CONFIG.typography.title.fontSize,
                      fontWeight: BANNER_CONFIG.typography.title.fontWeight,
                      lineHeight: BANNER_CONFIG.typography.title.lineHeight,
                      color: colors.text.primary,
                      textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.4)',
                    }}
                  >
                    {currentItem.title}
                  </h1>
                )}
                
                {currentItem.subtitle && (
                  <h2
                    key={`subtitle-${currentIndex}`}
                    className="font-semibold mb-3"
                    style={{
                      fontSize: BANNER_CONFIG.typography.subtitle.fontSize,
                      fontWeight: BANNER_CONFIG.typography.subtitle.fontWeight,
                      lineHeight: BANNER_CONFIG.typography.subtitle.lineHeight,
                      color: colors.text.primary,
                      textShadow: '0 2px 15px rgba(0,0,0,0.7)',
                    }}
                  >
                    {currentItem.subtitle}
                  </h2>
                )}
                
                {currentItem.description && (
                  <p
                    key={`desc-${currentIndex}`}
                    className="font-medium"
                    style={{
                      fontSize: BANNER_CONFIG.typography.description.fontSize,
                      fontWeight: BANNER_CONFIG.typography.description.fontWeight,
                      lineHeight: BANNER_CONFIG.typography.description.lineHeight,
                      color: colors.text.primary,
                      textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                    }}
                  >
                    {currentItem.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Dots - Optional */}
      {showDots && bannerItems.length > 1 && (
        <CarouselDots
          count={bannerItems.length}
          currentIndex={currentIndex}
          onDotClick={goToSlide}
          className={cn('absolute z-30 left-1/2 -translate-x-1/2', BANNER_CONFIG.spacing.dotsBottom)}
        />
      )}
    </section>
  );

  // Wrap in link if provided
  if (currentItem?.link) {
    return (
      <Link href={currentItem.link} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

