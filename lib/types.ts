// Type definitions
export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  price: number;
  description: string;
  specifications: ProductSpecification[];
  colors: ProductColor[];
  images: ProductImages;
  thumbnail: string;
  featured?: boolean;
}

export interface ProductColor {
  name: string;
  value: string; // hex color code
  image: string; // path to color-specific image
}

export interface ProductImages {
  main: string; // default main image
  gallery: string[]; // additional images
}

export interface ProductSpecification {
  label: string;
  value: string;
}

// Store moved to lib/types/store.ts to avoid duplication

// BannerItem moved to lib/types/banner.ts to avoid duplication

export interface ServiceNetwork {
  id: string;
  name: string;
  icon: string;
  description: string;
  coverage: string[];
}

export interface ConsultationMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Featured Model for Recommended Models section
export interface FeaturedModel {
  id: string;
  name: string; // e.g., "AP125-30 ALOBA"
  image: string; // Main image path
  watermark?: string; // Watermark text (e.g., "ALOBA")
  colors: Array<{
    id: string;
    name: string; // e.g., "魅夜黑" (Charming Night Black)
    value: string; // hex color code
    image?: string; // Optional color-specific image
  }>;
  href?: string; // Link to detail page
}

// Motorcycle Category for category carousel
export interface MotorcycleCategory {
  id: string;
  name: string; // e.g., "弯梁车", "街车", "越野"
  image: string; // Category image
  href?: string; // Link to category page
}

