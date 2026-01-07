'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import { EngineSpec } from '@/lib/types/products';

interface ProductEngineSpecsProps {
  title: string;
  description: string;
  backgroundImage: string;
  specs: EngineSpec[];
  disclaimer?: string;
  className?: string;
}

/**
 * ProductEngineSpecs Component
 * Displays high-end engine specifications over a studio background image.
 */
export const ProductEngineSpecs: React.FC<ProductEngineSpecsProps> = ({
  title,
  description,
  backgroundImage,
  specs,
  disclaimer,
  className,
}) => {
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];

  return (
    <section 
      className={cn(
        "relative w-full h-auto min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden bg-black py-20 sm:py-0 sm:h-screen",
        className
      )}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center lg:object-right"
          sizes="100vw"
        />
        {/* Subtle vignette for content readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-20">
        <div className="max-w-xl flex flex-col items-start gap-8 sm:gap-12">
          
          {/* Header Group */}
          <motion.div
            className="space-y-4"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: easing }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-wide">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-md">
              {description}
            </p>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            className="w-full space-y-4 sm:space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: { opacity: 1 },
              show: {
                opacity: 1,
                transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
              },
            }}
          >
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-5 sm:py-8 flex items-center justify-between group hover:bg-white/10 transition-colors duration-300"
                style={{ maxWidth: '400px' }}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                  show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.35, ease: easing } },
                }}
              >
                <span className="text-xs sm:text-sm text-gray-400 font-light tracking-wider uppercase">
                  {spec.label}
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-medium text-[#D4AF37] tracking-tight">
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Disclaimer */}
          {disclaimer && (
            <div className="mt-4 opacity-40">
              <p className="text-[10px] sm:text-xs text-gray-500 font-light tracking-wide">
                {disclaimer}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

