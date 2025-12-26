/**
 * Product-related type definitions
 * Centralized types for products, brands, and categories
 * Backend-ready structure
 */

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
  brandId?: string; // Optional: filter by brand
}

export interface DropdownConfig {
  brands: Brand[];
  categories: ProductCategory[];
}

