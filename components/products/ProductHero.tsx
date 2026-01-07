'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProductHeroProps {
  title: string;
  subtitle?: string;
  categoryName?: string;
  backgroundImage: string;
  overlayImage?: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

/**
 * Reusable Hero Banner for categories and products
 * Matches the design with background image, title, and overlay logo
 */
export const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  subtitle,
  categoryName,
  backgroundImage,
  overlayImage,
  breadcrumbs,
  className,
}) => {
  return (
    <section className={cn('w-full', className)}>
      {/* Offset for fixed header (h-20) */}
      <div className="pt-20">
        {/* Breadcrumbs Bar (white, separate from hero image) */}
        <div className="w-full bg-white border-b border-gray-100">
          <div className="px-6 sm:px-10 lg:px-16 h-12 flex items-center">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium tracking-wide text-gray-400">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-700 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-gray-300">/</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero Image Area */}
        <div className="relative w-full overflow-hidden bg-black h-[420px] sm:h-[560px] md:h-[650px] lg:h-[720px]">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />

          {/* Subtle overlay only (keep colors close to reference) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

          {/* Overlay Title Graphic (small, left-centered like reference) */}
          {overlayImage ? (
            <div className="absolute left-6 sm:left-12 lg:left-16 top-1/2 -translate-y-1/2">
              <div className="relative w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px] aspect-[2/1]">
                <Image
                  src={overlayImage}
                  alt={title}
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 320px, (max-width: 1024px) 420px, 520px"
                />
              </div>
            </div>
          ) : (
            <div className="absolute left-6 sm:left-12 lg:left-16 top-1/2 -translate-y-1/2">
              <div className="animate-fade-in space-y-3">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.35)' }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-white/80 text-base sm:text-lg">{subtitle}</p>
                )}
                {categoryName && (
                  <div className="ml-1">
                    <span className="text-xl sm:text-2xl md:text-3xl text-white/85 italic font-serif tracking-widest uppercase">
                      {categoryName}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

