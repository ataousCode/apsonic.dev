'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductColor } from '@/lib/types/products';

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit` on motion components during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
const MotionDiv = motion.div as unknown as React.ComponentType<Record<string, unknown>>;

interface ProductColorViewerProps {
  title: string;
  subtitle: string;
  colors: ProductColor[];
  displacement: string;
  className?: string;
}

/**
 * ProductColorViewer Component
 * Interactive component to switch between different motorcycle colors.
 * Features a clean, high-end studio aesthetic.
 */
export const ProductColorViewer: React.FC<ProductColorViewerProps> = ({
  title,
  subtitle,
  colors,
  displacement,
  className,
}) => {
  const [activeColor, setActiveColor] = useState(colors[0] || null);

  if (!activeColor) return null;

  return (
    <section className={cn("w-full py-24 bg-[#F5F5F5] overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-[500px] sm:h-[600px] md:h-[700px]">
        
        {/* Top Left Callout */}
        <div className="absolute top-0 left-4 sm:left-10 z-20 max-w-xs pointer-events-none">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2 tracking-wide">
            {title}
          </h2>
          <p className="text-sm text-gray-500 font-light tracking-wider">
            {subtitle}
          </p>
        </div>

        {/* Top Right Displacement */}
        <div className="absolute top-0 right-4 sm:right-10 z-20 pointer-events-none">
          <span className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-300 tracking-tighter italic">
            {displacement}
          </span>
        </div>

        {/* Main Image Viewer */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-12">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeColor.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full max-w-5xl"
            >
              <Image
                src={activeColor.image}
                alt={`${activeColor.name} view`}
                fill
                className="object-contain object-center drop-shadow-2xl"
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </MotionDiv>
          </AnimatePresence>
        </div>

        {/* Bottom Color Selector */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center">
          <div className="flex items-center gap-6 mb-4">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setActiveColor(color)}
                className={cn(
                  "group relative flex items-center justify-center p-1 rounded-full transition-all duration-300",
                  activeColor.id === color.id ? "ring-2 ring-gray-900" : "ring-1 ring-gray-300 hover:ring-gray-400"
                )}
                title={color.name}
              >
                <div 
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-inner"
                  style={{ backgroundColor: color.colorCode }}
                />
                
                {/* Tooltip */}
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap uppercase tracking-widest">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-gray-900 uppercase tracking-[0.2em]">
            {activeColor.name}
          </span>
        </div>

      </div>
    </section>
  );
};

