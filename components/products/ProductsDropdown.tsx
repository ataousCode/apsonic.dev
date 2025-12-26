'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
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

/**
 * ProductsDropdown - Main dropdown container
 * Displays brands on the left, product categories on the right
 * Categories change based on selected brand
 */
export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  onMouseEnter,
  onMouseLeave,
  className,
}) => {
  const config = getDropdownConfig();
  const [selectedBrandId, setSelectedBrandId] = useState<string>(config.brands[0]?.id || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get categories for the selected brand
  const currentCategories = useMemo(() => {
    return getCategoriesByBrand(selectedBrandId);
  }, [selectedBrandId]);

  const handleBrandHover = useCallback((brand: Brand) => {
    setSelectedBrandId(brand.id);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`fixed left-0 right-0 bg-white shadow-xl z-50 ${className || ''}`}
      style={{
        backgroundColor: colors.background.white,
        borderTop: `1px solid ${colors.ui.border}`,
        top: '80px', // Match header height
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-8">
          {/* Left: Brand Selection */}
          <div className="w-48 flex-shrink-0 border-r pr-6" style={{ borderColor: colors.ui.border }}>
            <BrandList
              brands={config.brands}
              selectedBrandId={selectedBrandId}
              onBrandHover={handleBrandHover}
            />
          </div>

          {/* Right: Product Categories - Changes based on selected brand */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-6">
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

