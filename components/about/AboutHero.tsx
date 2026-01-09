'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export const AboutHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/about-hero.png"
          alt="Apsonic motorcycle on an African road at sunset"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* Cinematic Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" 
          aria-hidden="true"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        
        {/* Animated Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-4xl font-bold tracking-tight text-white"
          style={{ 
            fontSize: typography.size.hero,
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}
        >
          The Heartbeat of the Road
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl"
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          Engineered for the continent. Built to endure. Designed to empower.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="mt-10"
        >
             <Button 
                variant="primary" 
                size="lg"
                className="rounded-full px-8 backdrop-blur-sm"
              >
                Discover Our Story
              </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};
