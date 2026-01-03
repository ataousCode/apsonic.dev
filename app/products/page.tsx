'use client';

import React, { useState } from 'react';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductGrid } from '@/components/products/ProductGrid';
import type { ProductFilters as ProductFiltersType } from '@/lib/types/products';
import { useProductFilters } from '@/hooks/useProductFilters';
import { colors, spacing } from '@/lib/design-tokens';

export default function ProductsPage() {
  const [filters, setFilters] = useState<ProductFiltersType>({});
  const filteredProducts = useProductFilters(filters);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: colors.background.white }}
    >
      {/* Filters Section */}
      <ProductFilters filters={filters} onFilterChange={setFilters} />

      {/* Products Grid Section */}
      <div className={`w-full ${spacing.section.vertical}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </main>
  );
}

