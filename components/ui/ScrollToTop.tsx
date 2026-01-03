'use client';

import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

/**
 * Floating scroll-to-top button
 * Appears when user scrolls down, allows smooth scroll to top
 */
export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50',
        'p-3 md:p-4 rounded-full shadow-lg',
        'transition-all duration-300',
        'hover:scale-110 active:scale-95',
        'flex items-center justify-center'
      )}
      style={{
        backgroundColor: colors.service.brandGreen,
        color: colors.background.white,
        boxShadow: '0 4px 12px rgba(31, 168, 79, 0.3)',
      }}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

