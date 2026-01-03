'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProductModel } from '@/lib/types/products';
import { PRODUCTS_GRID_CONFIG } from '@/lib/constants/products';
import { cn } from '@/lib/utils';

interface ProductModelCardProps {
  product: ProductModel;
  className?: string;
}

// Product card with image intentionally overflowing the card background
// Creates a floating, layered effect with depth and visual hierarchy
// Wheels and lower body parts extend DOWNWARD beyond card boundaries
// Fully responsive with proper spacing
export const ProductModelCard: React.FC<ProductModelCardProps> = ({ product, className }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className={cn('relative block group', className)}
      style={{
        paddingBottom: '8px', // Minimal space for very small bottom overflow
      }}
    >
      {/* Card Background - Fixed height, does not extend to bottom */}
      <div
        className="relative"
        style={{
          backgroundColor: PRODUCTS_GRID_CONFIG.card.background,
          borderRadius: PRODUCTS_GRID_CONFIG.card.borderRadius,
          padding: PRODUCTS_GRID_CONFIG.card.padding,
          minHeight: '220px',
          zIndex: 1,
        }}
      >
        {/* Model name (top left) and Brand (top right) - Inside card background */}
        <div 
          className="flex items-start justify-between pointer-events-none mb-2"
        >
          <span
            className="font-bold text-sm sm:text-base"
            style={{
              fontSize: PRODUCTS_GRID_CONFIG.typography.modelName.fontSize,
              fontWeight: PRODUCTS_GRID_CONFIG.typography.modelName.fontWeight,
              color: PRODUCTS_GRID_CONFIG.typography.modelName.color,
            }}
          >
            {product.model}
          </span>
          <span
            className="text-xs uppercase tracking-wide"
            style={{
              fontSize: PRODUCTS_GRID_CONFIG.typography.brandName.fontSize,
              color: PRODUCTS_GRID_CONFIG.typography.brandName.color,
            }}
          >
            {product.brand}
          </span>
        </div>
      </div>

      {/* Product Image - Positioned higher, only small portion (wheels) overflows at bottom */}
      {/* Responsive: overflow adjusts on smaller screens to maintain spacing */}
      <div
        className="relative z-10 w-[calc(100%+12px)] sm:w-[calc(100%+12px)] md:w-[calc(100%+12px)] -ml-[6px] -mr-[6px] -mb-[4px]"
        style={{
          aspectRatio: PRODUCTS_GRID_CONFIG.image.aspectRatio,
          marginTop: '-200px', // Moved further upward - only small portion overflows
        }}
      >
        <Image
          src={product.image}
          alt={product.model}
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </Link>
  );
};

