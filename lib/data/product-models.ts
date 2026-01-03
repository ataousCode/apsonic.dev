// Mock product data - replace with API call to GET /api/products
import type { ProductModel } from '@/lib/types/products';

// Product models data
export const PRODUCT_MODELS: ProductModel[] = [
  // Underbone models
  { id: 'ap50-3', model: 'AP50-3', brand: 'APSONIC', category: 'underbone', displacement: 50, image: '/images/banners/homepage/img1.jpg', brandId: 'apsonic' },
  { id: 'ap50-a-plus', model: 'AP50-A PLUS', brand: 'APSONIC', category: 'underbone', displacement: 50, image: '/images/banners/homepage/img2.jpg', brandId: 'apsonic' },
  { id: 'ap110-3', model: 'AP110-3', brand: 'APSONIC', category: 'underbone', displacement: 110, image: '/images/banners/homepage/img3.jpg', brandId: 'apsonic' },
  { id: 'ap110-a-plus-white', model: 'AP110-A PLUS', brand: 'APSONIC', category: 'underbone', displacement: 110, image: '/images/banners/homepage/AP110-A-PLUS(白).png', brandId: 'apsonic' },
  { id: 'ap110-a-plus-red', model: 'AP110-A PLUS', brand: 'APSONIC', category: 'underbone', displacement: 110, image: '/images/banners/homepage/AP110-A-PLUS(红).png', brandId: 'apsonic' },
  { id: 'ap110-a-plus-blue', model: 'AP110-A PLUS', brand: 'APSONIC', category: 'underbone', displacement: 110, image: '/images/banners/homepage/AP110-A-PLUS(蓝).png', brandId: 'apsonic' },
  { id: 'ap110-a-plus-yellow', model: 'AP110-A PLUS', brand: 'APSONIC', category: 'underbone', displacement: 110, image: '/images/banners/homepage/AP110-A-PLUS(黄).png', brandId: 'apsonic' },
  { id: 'ap110-a-plus-black', model: 'AP110-A PLUS', brand: 'APSONIC', category: 'underbone', displacement: 110, image: '/images/banners/homepage/AP110-A-PLUS(黑).png', brandId: 'apsonic' },
  
  // Street models
  { id: 'ap125-30-1', model: 'AP125-30', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/AP125-30（1）.png', brandId: 'apsonic' },
  { id: 'ap125-30-2', model: 'AP125-30', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/AP125-30（2）.png', brandId: 'apsonic' },
  { id: 'ap125-12-1', model: 'AP125-12', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/AP125-12(1).png', brandId: 'apsonic' },
  { id: 'ap125-12-2', model: 'AP125-12', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/AP125-12(2).png', brandId: 'apsonic' },
  { id: 'ap125-12-3', model: 'AP125-12', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/AP125-12(3).png', brandId: 'apsonic' },
  { id: 'ap125-k', model: 'AP125-K', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/AP125-K(1).png', brandId: 'apsonic' },
  { id: 'ap125-8-plus', model: 'AP125-8 Plus', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/img2.jpg', brandId: 'apsonic' },
  { id: 'ap125-a', model: 'AP125-A', brand: 'APSONIC', category: 'street', displacement: 125, image: '/images/banners/homepage/img3.jpg', brandId: 'apsonic' },
  
  // Off-road models
  { id: 'ap135', model: 'AP135', brand: 'APSONIC', category: 'offroad', displacement: 135, image: '/images/banners/homepage/img1.jpg', brandId: 'apsonic' },
  { id: 'ap150x-ii', model: 'AP150X-II', brand: 'APSONIC', category: 'offroad', displacement: 150, image: '/images/banners/homepage/img2.jpg', brandId: 'apsonic' },
  { id: 'ap200gy-3', model: 'AP200GY-3', brand: 'APSONIC', category: 'offroad', displacement: 200, image: '/images/banners/homepage/img3.jpg', brandId: 'apsonic' },
  
  // Tricycle models
  { id: 'ap150zh-20-sport', model: 'AP150ZH-20 SPORT', brand: 'APSONIC', category: 'tricycle', displacement: 150, image: '/images/banners/homepage/img4.png', brandId: 'apsonic' },
  { id: 'ap150zh-175', model: 'AP150ZH-175', brand: 'APSONIC', category: 'tricycle', displacement: 150, image: '/images/banners/homepage/img1.jpg', brandId: 'apsonic' },
  { id: 'ap125-a-tricycle', model: 'AP125-A', brand: 'APSONIC', category: 'tricycle', displacement: 125, image: '/images/banners/homepage/img2.jpg', brandId: 'apsonic' },
];

// Filter products by filters
export function filterProducts(filters: {
  type?: string;
  displacement?: number;
  brand?: string;
  search?: string;
}): ProductModel[] {
  let filtered = [...PRODUCT_MODELS];

  if (filters.type) {
    filtered = filtered.filter(p => p.category === filters.type);
  }

  if (filters.displacement) {
    filtered = filtered.filter(p => p.displacement === filters.displacement);
  }

  if (filters.brand) {
    filtered = filtered.filter(p => p.brandId === filters.brand);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.model.toLowerCase().includes(searchLower) ||
      p.brand.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}

// Group products by category
export function groupProductsByCategory(products: ProductModel[]): Record<string, ProductModel[]> {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, ProductModel[]>);
}

// Get available displacements from products
export function getAvailableDisplacements(): number[] {
  const displacements = new Set<number>();
  PRODUCT_MODELS.forEach(p => {
    if (p.displacement) {
      displacements.add(p.displacement);
    }
  });
  return Array.from(displacements).sort((a, b) => a - b);
}

