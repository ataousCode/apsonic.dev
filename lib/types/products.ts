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

// Product model for products page
export interface ProductModel {
  id: string;
  model: string; // e.g., "AP50-3", "AP125-30", "AP150ZH-20 SPORT"
  brand: string; // e.g., "APSONIC"
  category: string; // e.g., "underbone", "street", "offroad", "tricycle"
  displacement?: number; // e.g., 50, 110, 125, 150, 175, 200, 250
  image: string;
  brandId?: string; // Link to Brand
}

// Product filters
export interface ProductFilters {
  type?: string; // Category slug
  displacement?: number;
  brand?: string; // Brand slug
  search?: string;
}
