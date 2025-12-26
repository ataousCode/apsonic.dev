'use client';

import React from 'react';
import Link from 'next/link';
import type { Brand } from '@/lib/types/products';
import { buildProductUrl } from '@/lib/data/products';
import { colors, typography, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

interface BrandListProps {
  brands: Brand[];
  selectedBrandId?: string;
  onBrandHover?: (brand: Brand) => void;
  className?: string;
}

/**
 * BrandList - Displays a list of brands for selection
 * Reusable for dropdown, sidebar, filters, etc.
 */
export const BrandList: React.FC<BrandListProps> = ({
  brands,
  selectedBrandId,
  onBrandHover,
  className,
}) => {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* Section Title */}
      <h3
        className="font-semibold mb-4"
        style={{
          color: colors.text.black,
          fontSize: typography.size.body,
        }}
      >
        Brand Selection
      </h3>

      {/* Brand Items */}
      <ul className="flex flex-col gap-1">
        {brands.map((brand) => {
          const isSelected = selectedBrandId === brand.id;
          const href = buildProductUrl(undefined, brand);

          return (
            <li key={brand.id}>
              <Link
                href={href}
                className={cn(
                  'flex items-center justify-between py-2 px-3 rounded cursor-pointer',
                  effects.transition.colors,
                  isSelected ? 'bg-[#1FA84F]/10' : 'hover:bg-gray-100'
                )}
                style={{
                  color: isSelected ? colors.brand.green : colors.text.black,
                  borderLeft: isSelected ? `3px solid ${colors.brand.green}` : '3px solid transparent',
                }}
                onMouseEnter={() => onBrandHover?.(brand)}
              >
                <span className="font-medium">{brand.name}</span>
                {isSelected && (
                  <span style={{ color: colors.brand.green }}>→</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

