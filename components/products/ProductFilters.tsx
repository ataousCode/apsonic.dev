'use client';

import React from 'react';
import { SearchInput } from '@/components/layout/SearchInput';
import { FilterButton } from './FilterButton';
import { colors } from '@/lib/design-tokens';
import { BRANDS } from '@/lib/data/products';
import { CATEGORY_OPTIONS } from '@/lib/data/filters';
import { getAvailableDisplacements } from '@/lib/data/product-models';
import type { ProductFilters } from '@/lib/types/products';

interface ProductFiltersProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  const displacements = getAvailableDisplacements();
  const displacementOptions = [
    { value: 0, label: 'Unlimited' },
    ...displacements.map(d => ({ value: d, label: d.toString() })),
  ];

  const brandOptions = [
    { value: '', label: 'Unlimited' },
    ...BRANDS.map(b => ({ value: b.id, label: b.name })),
  ];

  const handleTypeChange = (type: string) => {
    onFilterChange({ ...filters, type: type || undefined });
  };

  const handleDisplacementChange = (displacement: number) => {
    onFilterChange({ ...filters, displacement: displacement || undefined });
  };

  const handleBrandChange = (brand: string) => {
    onFilterChange({ ...filters, brand: brand || undefined });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value || undefined });
  };

  return (
    <div
      className="w-full py-8"
      style={{ backgroundColor: colors.background.white }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1
          className="text-3xl font-bold mb-6"
          style={{ color: colors.brand.green }}
        >
          All Models
        </h1>

        {/* Filters Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Filter Buttons */}
          <div className="flex-1 space-y-5">
            {/* Type Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.black }}>
                Type Selection
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORY_OPTIONS.map((option) => (
                  <FilterButton
                    key={option.value}
                    label={option.label}
                    isActive={filters.type === option.value || (!filters.type && option.value === '')}
                    onClick={() => handleTypeChange(option.value)}
                  />
                ))}
              </div>
            </div>

            {/* Displacement Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.black }}>
                Displacement Selection
              </label>
              <div className="flex flex-wrap gap-2">
                {displacementOptions.map((option) => (
                  <FilterButton
                    key={option.value}
                    label={option.label}
                    isActive={filters.displacement === option.value || (!filters.displacement && option.value === 0)}
                    onClick={() => handleDisplacementChange(option.value)}
                  />
                ))}
              </div>
            </div>

            {/* Brand Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.black }}>
                Brand Selection
              </label>
              <div className="flex flex-wrap gap-2">
                {brandOptions.map((option) => (
                  <FilterButton
                    key={option.value}
                    label={option.label}
                    isActive={filters.brand === option.value || (!filters.brand && option.value === '')}
                    onClick={() => handleBrandChange(option.value)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Search Input */}
          <div className="lg:w-64">
            <SearchInput
              value={filters.search || ''}
              onChange={handleSearchChange}
              placeholder="Search models..."
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

