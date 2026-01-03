// Mock products/brands data - replace with GET /api/brands and GET /api/categories
import type { Brand, ProductCategory, DropdownConfig } from '@/lib/types/products';

export const BRANDS: Brand[] = [
  {
    id: 'apsonic',
    name: 'APSONIC',
    slug: 'apsonic',
    description: 'Quality motorcycles for everyday use',
  },
  {
    id: 'apsonic-pro',
    name: 'APSONIC PRO',
    slug: 'apsonic-pro',
    description: 'Premium performance motorcycles',
  },
  {
    id: 'apsonic-emoto',
    name: 'APSONIC E-MOTO',
    slug: 'apsonic-emoto',
    description: 'Electric mobility solutions',
  },
];

// Categories organized by brand
export const BRAND_CATEGORIES: Record<string, ProductCategory[]> = {
  'apsonic': [
    { id: 'underbone', name: 'Underbone', slug: 'underbone', image: '/images/banners/homepage/img1.jpg', brandId: 'apsonic' },
    { id: 'street', name: 'Street', slug: 'street', image: '/images/banners/homepage/img2.jpg', brandId: 'apsonic' },
    { id: 'offroad', name: 'Off-Road', slug: 'offroad', image: '/images/banners/homepage/img3.jpg', brandId: 'apsonic' },
    { id: 'tricycle', name: 'Tricycle', slug: 'tricycle', image: '/images/banners/homepage/img4.png', brandId: 'apsonic' },
  ],
  'apsonic-pro': [
    { id: 'pro-sport', name: 'Sport', slug: 'sport', image: '/images/brand/img.png', brandId: 'apsonic-pro' },
    { id: 'pro-touring', name: 'Touring', slug: 'touring', image: '/images/brand/img1.png', brandId: 'apsonic-pro' },
  ],
  'apsonic-emoto': [
    { id: 'emoto-scooter', name: 'E-Scooter', slug: 'e-scooter', image: '/images/brand/img.png', brandId: 'apsonic-emoto' },
    { id: 'emoto-bike', name: 'E-Bike', slug: 'e-bike', image: '/images/brand/img1.png', brandId: 'apsonic-emoto' },
  ],
};

// Default categories
export const PRODUCT_CATEGORIES: ProductCategory[] = BRAND_CATEGORIES['apsonic'];

// Get dropdown configuration
export function getDropdownConfig(): DropdownConfig {
  return { brands: BRANDS, categories: PRODUCT_CATEGORIES };
}

// Get categories for a specific brand
export function getCategoriesByBrand(brandId: string): ProductCategory[] {
  return BRAND_CATEGORIES[brandId] || PRODUCT_CATEGORIES;
}

// Build product URL from category/brand
export function buildProductUrl(category?: ProductCategory, brand?: Brand): string {
  const params = new URLSearchParams();
  if (category) params.set('category', category.slug);
  if (brand) params.set('brand', brand.slug);
  const query = params.toString();
  return query ? `/products?${query}` : '/products';
}
