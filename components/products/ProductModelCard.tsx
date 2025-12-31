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

// Motorcycle card with bike in front, card as background
// No overflow, no animations
export const ProductModelCard: React.FC<ProductModelCardProps> = ({ product, className }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className={cn('relative block', className)}
      style={{
        backgroundColor: PRODUCTS_GRID_CONFIG.card.background,
        borderRadius: PRODUCTS_GRID_CONFIG.card.borderRadius,
        padding: PRODUCTS_GRID_CONFIG.card.padding,
        overflow: 'hidden',
      }}
    >
      {/* Model name (top left) and Brand (top right) */}
      <div className="relative z-10 flex items-start justify-between mb-4 pointer-events-none">
        <span
          className="font-bold"
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

      {/* Motorcycle Image - Contained within card, in front of background */}
      <div
        className="relative w-full"
        style={{
          aspectRatio: PRODUCTS_GRID_CONFIG.image.aspectRatio,
        }}
      >
        <Image
          src={product.image}
          alt={product.model}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </Link>
  );
};

