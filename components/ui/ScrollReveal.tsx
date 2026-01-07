'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

type ScrollRevealVariant = 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Which motion preset to use */
  variant?: ScrollRevealVariant;
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Only animate the first time it enters viewport */
  once?: boolean;
  /** How much of the element should be visible before animating (0..1) */
  amount?: number;
  /** Render as a semantic tag (defaults to div) */
  as?: keyof React.JSX.IntrinsicElements;
}

const easing: number[] = [0.22, 1, 0.36, 1];

function getPreset(variant: ScrollRevealVariant, reduceMotion: boolean) {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, transform: 'none' } as React.CSSProperties,
      show: { opacity: 1, transform: 'none' } as React.CSSProperties,
    };
  }

  switch (variant) {
    case 'fadeIn':
      return { hidden: { opacity: 0 } as React.CSSProperties, show: { opacity: 1 } as React.CSSProperties };
    case 'scaleIn':
      return {
        hidden: { opacity: 0, transform: 'scale(0.98)' } as React.CSSProperties,
        show: { opacity: 1, transform: 'scale(1)' } as React.CSSProperties,
      };
    case 'slideLeft':
      return {
        hidden: { opacity: 0, transform: 'translateX(18px)' } as React.CSSProperties,
        show: { opacity: 1, transform: 'translateX(0px)' } as React.CSSProperties,
      };
    case 'slideRight':
      return {
        hidden: { opacity: 0, transform: 'translateX(-18px)' } as React.CSSProperties,
        show: { opacity: 1, transform: 'translateX(0px)' } as React.CSSProperties,
      };
    case 'fadeUp':
    default:
      return {
        hidden: { opacity: 0, transform: 'translateY(18px)' } as React.CSSProperties,
        show: { opacity: 1, transform: 'translateY(0px)' } as React.CSSProperties,
      };
  }
}

/**
 * ScrollReveal
 * A small, reusable wrapper for premium "scroll into view" animations.
 * Reduced-motion friendly.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2,
  as = 'div',
}) => {
  const reduceMotion = useReducedMotion();
  const preset = getPreset(variant, !!reduceMotion);
  const MotionTag = ((motion as unknown as Record<string, unknown>)[as] ?? motion.div) as unknown as React.ComponentType<
    Record<string, unknown>
  >;

  return (
    <MotionTag
      className={cn('will-change-transform', className)}
      style={preset.hidden}
      viewport={{ once, amount }}
      transition={{ duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay, ease: easing }}
      whileInView={preset.show}
    >
      {children}
    </MotionTag>
  );
};


