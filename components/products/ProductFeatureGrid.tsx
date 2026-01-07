'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { GridFeature } from '@/lib/types/products';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ProductFeatureGridProps {
  sectionTitle: string;
  features: GridFeature[];
  footerText?: string;
  className?: string;
}

/**
 * ProductFeatureGrid Component
 * Displays a clean 2x2 grid of product features with large images and overlay text.
 * Designed for high-impact technical detail presentation.
 */
export const ProductFeatureGrid: React.FC<ProductFeatureGridProps> = ({
  sectionTitle,
  features,
  footerText,
  className,
}) => {
  return (
    <section className={cn("w-full py-24 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 tracking-[0.2em] uppercase">
            {sectionTitle}
          </h2>
        </div>

        {/* Features Grid - Refined spacing and rounded corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <ScrollReveal key={feature.id} delay={idx * 0.06} variant="fadeUp" amount={0.25}>
              <div className="relative aspect-[4/3] sm:aspect-[3/2] md:aspect-square lg:aspect-[4/3] bg-gray-50 group overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
                {/* Feature Image */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Text Overlay - Top Left */}
                <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10 max-w-[200px] sm:max-w-xs pointer-events-none">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/70 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer Text */}
        {footerText && (
          <div className="mt-16 text-center">
            <p className="text-[10px] sm:text-xs text-gray-400 font-light tracking-[0.1em] uppercase">
              {footerText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

