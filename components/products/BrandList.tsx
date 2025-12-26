'use client';

import React from 'react';
import Link from 'next/link';
import type { Brand } from '@/lib/types/products';
import { buildProductUrl } from '@/lib/data/products';
import { colors, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

interface BrandListProps {
  brands: Brand[];
  selectedBrandId?: string;
  onBrandHover?: (brand: Brand) => void;
  className?: string;
}

// Reusable brand selection list
export const BrandList: React.FC<BrandListProps> = ({
  brands,
  selectedBrandId,
  onBrandHover,
  className,
}) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <h3 className="font-medium mb-3 text-xs uppercase tracking-wide text-gray-500">
        Brand
      </h3>

      <ul className="flex flex-col gap-0.5">
        {brands.map((brand) => {
          const isSelected = selectedBrandId === brand.id;

          return (
            <li key={brand.id}>
              <Link
                href={buildProductUrl(undefined, brand)}
                className={cn(
                  'flex items-center justify-between py-1.5 px-2 rounded text-sm cursor-pointer',
                  effects.transition.colors,
                  isSelected ? 'bg-[#1FA84F]/10' : 'hover:bg-white/60'
                )}
                style={{
                  color: isSelected ? colors.brand.green : '#374151',
                  borderLeft: isSelected ? `2px solid ${colors.brand.green}` : '2px solid transparent',
                }}
                onMouseEnter={() => onBrandHover?.(brand)}
              >
                <span className={isSelected ? 'font-semibold' : 'font-medium'}>{brand.name}</span>
                {isSelected && (
                  <span className="text-xs" style={{ color: colors.brand.green }}>→</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
