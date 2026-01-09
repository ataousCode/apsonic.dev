'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export interface ServiceHeroProps {
  className?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ className }) => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/services/services1.jpg"
          alt="Apsonic Professional Service"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        {/* Cinematic Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full bg-brand-green/20 px-4 py-1 text-sm font-semibold text-brand-green backdrop-blur-md border border-brand-green/30">
              WORLD CLASS SUPPORT
            </span>

            <h1
              className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Expert Care.<br />
              <span className="text-brand-green">Everywhere.</span>
            </h1>

            <p className="mb-8 text-xl text-gray-200">
              With over 500 service centers across the continent,
              genuine parts and expert mechanics are never far away.
              Keep your journey moving.
            </p>

            <div className="flex gap-4">
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-8 shadow-[0_0_20px_rgba(31,168,79,0.3)] hover:shadow-[0_0_30px_rgba(31,168,79,0.5)]"
              >
                Find Service Center
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-white text-white hover:bg-white hover:text-black"
              >
                Genuine Parts
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

