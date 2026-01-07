'use client';

import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';
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
      // Lowered threshold so it appears sooner on mobile
      if (window.scrollY > 100) {
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60]', // Increased z-index and padding
            'p-3.5 md:p-4 rounded-full shadow-2xl',
            'transition-shadow duration-300',
            'flex items-center justify-center'
          )}
          style={{
            backgroundColor: colors.service.brandGreen,
            color: colors.background.white,
            boxShadow: '0 8px 30px rgba(31, 168, 79, 0.4)', // Stronger shadow
          }}
          aria-label="Scroll to top"
        >
          <HiArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

