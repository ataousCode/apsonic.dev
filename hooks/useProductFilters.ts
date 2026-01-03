// Product filtering logic hook
import { useMemo } from 'react';
import { PRODUCT_MODELS, filterProducts } from '@/lib/data/product-models';
import type { ProductFilters as ProductFiltersType } from '@/lib/types/products';

export const useProductFilters = (filters: ProductFiltersType) => {
  const filteredProducts = useMemo(() => {
    return filterProducts(filters);
  }, [filters]);

  return filteredProducts;
};

