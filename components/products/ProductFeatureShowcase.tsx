'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ProductFeature } from '@/lib/types/products';

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit/whileInView/layoutId` during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
const MotionH2 = motion.h2 as unknown as React.ComponentType<Record<string, unknown>>;
const MotionDiv = motion.div as unknown as React.ComponentType<Record<string, unknown>>;

interface ProductFeatureShowcaseProps {
  sectionTitle: string;
  features: ProductFeature[];
  className?: string;
}

/**
 * Premium Product Feature Image Showcase
 * Allows users to switch between high-quality feature images with overlay text.
 */
export const ProductFeatureShowcase: React.FC<ProductFeatureShowcaseProps> = ({
  sectionTitle,
  features,
  className,
}) => {
  const [activeFeature, setActiveFeature] = useState(features[0] || null);
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];

  if (!activeFeature) return null;

  return (
    <section 
      className={cn(
        "relative w-full py-24 sm:py-32 bg-white flex flex-col items-center",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Title */}
        <MotionH2
          className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-16 tracking-[0.15em] text-center uppercase"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: easing }}
        >
          {sectionTitle}
        </MotionH2>

        {/* Main Image Showcase */}
        <div className="relative w-full max-w-6xl aspect-[4/5] sm:aspect-[16/9] overflow-hidden bg-gray-50 rounded-2xl sm:rounded-3xl shadow-xl">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeFeature.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={activeFeature.image}
                alt={activeFeature.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
              />

              {/* Text Overlay - Adjusted for Mobile Bottom-up alignment */}
              <div className="absolute inset-0 z-10 p-6 sm:p-12 md:p-16 flex flex-col justify-end sm:justify-start pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />
                <MotionDiv
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-2 sm:space-y-4 relative z-20"
                >
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-normal text-white drop-shadow-md">
                    {activeFeature.title}
                  </h3>
                  <p className="text-xs sm:text-base text-white/90 font-light leading-relaxed drop-shadow-md max-w-xs sm:max-w-md">
                    {activeFeature.description}
                  </p>
                </MotionDiv>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>

        {/* Feature Switcher Labels - Responsive One-Line Scroll on Mobile */}
        <div className="mt-8 sm:mt-12 w-full max-w-4xl border-t border-gray-100 pt-8 overflow-hidden">
          <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-x-8 sm:gap-x-12 overflow-x-auto scrollbar-hide pb-4 sm:pb-0 px-4 sm:px-0">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "relative py-2 text-[10px] sm:text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 flex-shrink-0",
                  activeFeature.id === feature.id 
                    ? "text-gray-900" 
                    : "text-gray-400 hover:text-gray-600"
                )}
              >
                {feature.label}
                {activeFeature.id === feature.id && (
                  <MotionDiv
                    layoutId="active-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

