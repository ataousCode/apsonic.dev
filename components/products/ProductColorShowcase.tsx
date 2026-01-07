'use client';

import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// TS in this repo (moduleResolution: bundler) sometimes resolves a minimal MotionProps type
// that doesn't include `animate/exit/initial` on motion components. This keeps runtime behavior
// identical while unblocking typechecking.
const MotionDiv = motion.div as unknown as React.ComponentType<Record<string, unknown>>;

export interface ColorShowcaseVariant {
  id: string;
  name: string;
  description?: string;
  imageSrc: string;
  dotColor: string;
  imageAlt?: string;
}

export interface ProductColorShowcaseProps {
  title: string;
  subtitle: string;
  variants: ColorShowcaseVariant[];
  initialVariantId?: string;
  className?: string;
}

/**
 * ProductColorShowcase
 * A clean studio-style color switcher used between feature grid and specifications.
 * Matches the reference design: top-left copy, top-right active color label, and dot selectors.
 */
export const ProductColorShowcase: React.FC<ProductColorShowcaseProps> = ({
  title,
  subtitle,
  variants,
  initialVariantId,
  className,
}) => {
  const initial = useMemo(() => {
    if (!variants.length) return null;
    if (!initialVariantId) return variants[0];
    return variants.find((v) => v.id === initialVariantId) ?? variants[0];
  }, [initialVariantId, variants]);

  const [active, setActive] = useState<ColorShowcaseVariant | null>(initial);

  const activeIndex = useMemo(() => {
    if (!active) return -1;
    return variants.findIndex((v) => v.id === active.id);
  }, [active, variants]);

  const setByIndex = useCallback(
    (idx: number) => {
      const next = variants[idx];
      if (next) setActive(next);
    },
    [variants]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!variants.length) return;
      if (activeIndex < 0) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setByIndex((activeIndex - 1 + variants.length) % variants.length);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setByIndex((activeIndex + 1) % variants.length);
      }
    },
    [activeIndex, setByIndex, variants.length, variants]
  );

  if (!active) return null;

  return (
    <section
      className={cn(
        'w-full py-20 sm:py-24 overflow-hidden',
        'bg-gradient-to-b from-[#8d8d8d] via-[#cfcfcf] to-[#f3f3f3]',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] lg:h-[560px]"
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-label="Color selector"
        >
          {/* Top-left copy */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-8 z-20 pointer-events-none max-w-[240px]">
            <h3 className="text-white/95 text-base sm:text-lg font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              {title}
            </h3>
            <p className="mt-1 text-white/80 text-xs sm:text-sm font-light tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              {subtitle}
            </p>
          </div>

          {/* Top-right active label */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-8 z-20 pointer-events-none text-right max-w-[240px]">
            <div className="text-white/95 text-base sm:text-lg font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              {active.name}
            </div>
            {active.description && (
              <div className="mt-1 text-white/75 text-[10px] sm:text-xs font-light tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                {active.description}
              </div>
            )}
          </div>

          {/* Main image */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-2 sm:px-6">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={active.id}
                style={{ opacity: 0, transform: 'translateY(6px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                exit={{ opacity: 0, transform: 'translateY(-6px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative w-full h-full max-w-6xl"
              >
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt ?? active.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-2xl"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </MotionDiv>
            </AnimatePresence>
          </div>

          {/* Bottom dot selector */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex items-center justify-center">
            <div className="flex items-center gap-3">
              {variants.map((v) => {
                const isActive = v.id === active.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActive(v)}
                    className={cn(
                      'relative flex items-center justify-center rounded-full transition-all duration-200',
                      isActive ? 'ring-2 ring-gray-900' : 'ring-1 ring-transparent hover:ring-gray-400'
                    )}
                    style={{ width: 18, height: 18 }}
                    aria-label={`Select color ${v.name}`}
                    aria-pressed={isActive}
                  >
                    <span
                      className="rounded-full"
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: v.dotColor,
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


