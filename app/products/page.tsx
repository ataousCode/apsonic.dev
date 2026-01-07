'use client';

import React, { useState } from 'react';
import { ProductFilters, ProductGrid } from '@/components/products';
import type { ProductFilters as ProductFiltersType } from '@/lib/types/products';
import { useProductFilters } from '@/hooks/useProductFilters';
import { colors, spacing } from '@/lib/design-tokens';

export default function ProductsPage() {
  const [filters, setFilters] = useState<ProductFiltersType>({});
  const filteredProducts = useProductFilters(filters);

  return (
    <main
      className="min-h-screen pt-20"
      style={{ backgroundColor: colors.background.white }}
    >
      {/* Filters Section */}
      <ProductFilters filters={filters} onFilterChange={setFilters} />

      {/* Products Grid Section */}
      <div className={`w-full ${spacing.section.vertical}`}>
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </main>
  );
}

