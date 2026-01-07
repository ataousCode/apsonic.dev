'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { KeyMetric, TechSpecItem } from '@/lib/types/products';

interface ProductSpecificationProps {
  keyMetrics: KeyMetric[];
  detailedSpecs: TechSpecItem[];
  className?: string;
}

/**
 * ProductSpecification Component
 * 
 * High-fidelity implementation of the APSONIC Technical Specifications section.
 * Refined for precise alignment, clear table borders, and high-impact metrics.
 */
export const ProductSpecification: React.FC<ProductSpecificationProps> = ({
  keyMetrics,
  detailedSpecs,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];

  return (
    <section className={cn("w-full py-32 bg-white", className)}>
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 1. Header Section */}
        <motion.div
          className="text-center mb-24"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: easing }}
        >
          <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 tracking-[0.3em] uppercase">
            技术参数
          </h2>
        </motion.div>
        
        {/* 2. Key Performance Metrics - Perfectly Aligned */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 mb-28"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 1 },
            show: { opacity: 1, transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
          }}
        >
          {keyMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col items-center px-4"
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.4, ease: easing } },
              }}
            >
              <span className="text-[12px] text-gray-500 font-medium uppercase tracking-[0.15em] mb-8 h-8 flex items-center text-center">
                {metric.label}
              </span>
              
              <div className="flex items-start">
                {metric.subValue && (
                  <span className="text-2xl font-light text-gray-300 mt-2 mr-1">
                    {metric.subValue}
                  </span>
                )}
                <span className="text-7xl sm:text-8xl font-thin text-gray-950 tracking-tighter leading-none">
                  {metric.value}
                </span>
              </div>
              
              <span className="text-[12px] text-gray-400 font-light uppercase tracking-[0.2em] mt-8">
                {metric.unit}
              </span>

              {/* Vertical Separators - Solid and Clear */}
              {idx < keyMetrics.length - 1 && (idx + 1) % 4 !== 0 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-28 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Interactive Toggle Button */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "px-12 py-3 border border-gray-300 rounded-xl transition-all duration-300",
              "text-[14px] tracking-[0.3em] text-gray-500 font-light uppercase bg-white",
              "hover:border-gray-900 hover:text-gray-900"
            )}
          >
            {isExpanded ? "收起参数" : "完整参数"}
          </button>
        </div>

        {/* 4. Detailed Specification Table - Solid Grid with Clear Lines */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
                {detailedSpecs.map((spec, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "flex border-b border-gray-200 min-h-[50px] sm:min-h-[56px] transition-colors hover:bg-gray-50/50",
                      // Vertical divider for the two-column layout on desktop
                      idx % 2 === 0 ? "md:border-r md:border-gray-200" : ""
                    )}
                  >
                    {/* Label Section - Distinct Gray Background */}
                    <div className="w-[45%] sm:w-[42%] bg-[#F7F7F7] flex items-center px-4 sm:px-6 py-3 sm:py-4">
                      <span className="text-[11px] sm:text-[13px] text-gray-600 font-semibold tracking-wide">
                        {spec.label}
                      </span>
                    </div>
                    {/* Value Section - Clean White Background */}
                    <div className="w-[55%] sm:w-[58%] bg-white flex items-center px-4 sm:px-6 py-3 sm:py-4">
                      <span className="text-[11px] sm:text-[13px] text-gray-700 font-light">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
