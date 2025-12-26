'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProductCategory } from '@/lib/types/products';
import { buildProductUrl } from '@/lib/data/products';
import { effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  category: ProductCategory;
  className?: string;
}

// Reusable product category card with image
export const ProductCard: React.FC<ProductCardProps> = ({ category, className }) => {
  return (
    <Link
      href={buildProductUrl(category)}
      className={cn(
        'group flex flex-col items-center cursor-pointer',
        effects.transition.default,
        'hover:scale-102',
        className
      )}
    >
      <h4
        className={cn(
          'font-medium text-center mb-1 text-sm text-gray-700',
          effects.transition.colors,
          'group-hover:text-[#1FA84F]'
        )}
      >
        {category.name}
      </h4>

      <div className="relative w-[140px] h-[90px] overflow-hidden rounded-md">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className={cn('object-contain', effects.transition.default, 'group-hover:scale-105')}
          sizes="140px"
        />
      </div>
    </Link>
  );
};
