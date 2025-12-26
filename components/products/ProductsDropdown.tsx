'use client';

import React, { useState, useCallback, useMemo } from 'react';
import type { Brand } from '@/lib/types/products';
import { getDropdownConfig, getCategoriesByBrand } from '@/lib/data/products';
import { colors } from '@/lib/design-tokens';
import { BrandList } from './BrandList';
import { ProductCard } from './ProductCard';

interface ProductsDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

// Displays brands on left, product categories on right
export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  onMouseEnter,
  onMouseLeave,
  className,
}) => {
  const config = getDropdownConfig();
  const [selectedBrandId, setSelectedBrandId] = useState<string>(config.brands[0]?.id || '');

  const currentCategories = useMemo(() => getCategoriesByBrand(selectedBrandId), [selectedBrandId]);
  const handleBrandHover = useCallback((brand: Brand) => setSelectedBrandId(brand.id), []);

  return (
    <div
      className={`fixed left-0 right-0 shadow-lg z-50 ${className || ''}`}
      style={{
        backgroundColor: '#F8F9FA',
        borderTop: `1px solid ${colors.ui.border}`,
        top: '80px',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-6">
          {/* Brand Selection */}
          <div className="w-40 flex-shrink-0 border-r pr-4" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
            <BrandList
              brands={config.brands}
              selectedBrandId={selectedBrandId}
              onBrandHover={handleBrandHover}
            />
          </div>

          {/* Product Categories */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-5 items-start">
              {currentCategories.map((category) => (
                <ProductCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
