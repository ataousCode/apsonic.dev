'use client';

import React from 'react';
import type { ProductModel } from '@/lib/types/products';
import { ProductModelCard } from './ProductModelCard';
import { colors } from '@/lib/design-tokens';
import { groupProductsByCategory } from '@/lib/data/product-models';
import { CATEGORY_DISPLAY_NAMES } from '@/lib/constants';
import { PRODUCTS_GRID_CONFIG } from '@/lib/constants/products';

interface ProductGridProps {
  products: ProductModel[];
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, className }) => {
  const groupedProducts = groupProductsByCategory(products);

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p style={{ color: colors.text.muted }}>No products found.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category} className="mb-12">
          {/* Category Title - aligned with filter section */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
            <div className="flex-1">
              <h2
                className="text-2xl font-bold"
                style={{ color: colors.text.black }}
              >
                {CATEGORY_DISPLAY_NAMES[category] || category}
              </h2>
            </div>
            {/* Spacer to align with search field */}
            <div className="lg:w-80"></div>
          </div>

          {/* Product Grid - 3 columns with overlapping effect */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            style={{ gap: PRODUCTS_GRID_CONFIG.grid.gap }}
          >
            {categoryProducts.map((product) => (
              <ProductModelCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

