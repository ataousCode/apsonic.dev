// Product-related type definitions

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  brandId?: string;
}

export interface DropdownConfig {
  brands: Brand[];
  categories: ProductCategory[];
}
