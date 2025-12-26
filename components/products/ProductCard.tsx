'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProductCategory } from '@/lib/types/products';
import { buildProductUrl } from '@/lib/data/products';
import { colors, typography, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  category: ProductCategory;
  className?: string;
}

/**
 * ProductCard - Displays a product category with image
 * Reusable across dropdown, category pages, etc.
 */
export const ProductCard: React.FC<ProductCardProps> = ({ category, className }) => {
  const href = buildProductUrl(category);

  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col items-center cursor-pointer',
        effects.transition.default,
        'hover:scale-105',
        className
      )}
    >
      {/* Category Name */}
      <h4
        className={cn(
          'font-medium text-center mb-2',
          effects.transition.colors,
          'group-hover:text-[#1FA84F]'
        )}
        style={{
          color: colors.text.black,
          fontSize: typography.size.body,
        }}
      >
        {category.name}
      </h4>

      {/* Category Image */}
      <div className="relative w-[180px] h-[120px] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className={cn(
            'object-contain',
            effects.transition.default,
            'group-hover:scale-110'
          )}
          sizes="180px"
        />
      </div>
    </Link>
  );
};

