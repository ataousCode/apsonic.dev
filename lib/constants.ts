/**
 * Application-wide constants
 * Centralized configuration for maintainability
 */
export const APP_NAME = 'APSONIC';
export const BRAND_TAGLINE = 'Good Quality, Good Life';

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/apsonic',
  instagram: 'https://instagram.com/apsonic',
  twitter: 'https://twitter.com/apsonic',
  youtube: 'https://youtube.com/apsonic',
  linkedin: 'https://linkedin.com/company/apsonic',
  tiktok: 'https://tiktok.com/@apsonic',
};

// Footer Navigation Data
export const FOOTER_PRODUCTS = {
  title: 'Products',
  items: [
    { label: 'Brand selection', href: '/products' },
    {
      label: 'APSONIC',
      subItems: [
        { label: 'Bent beam car', href: '/products?category=underbone' },
        { label: 'Street', href: '/products?category=street' },
        { label: 'Sports', href: '/products?category=sport' },
        { label: 'Tricycle', href: '/products?category=tricycle' },
      ],
    },
    {
      label: 'APSONIC Pro',
      subItems: [
        { label: 'Street car', href: '/products?category=pro-street' },
      ],
    },
    {
      label: 'APSONIC-EMOTO',
      subItems: [
        { label: 'Tricycle', href: '/products?category=emoto-tricycle' },
      ],
    },
  ],
};

export const FOOTER_SERVICES = {
  title: 'Services',
  items: [
    { label: 'After sales', href: '/services/after-sales' },
    { label: 'Supply chain support', href: '/services/supply-chain' },
  ],
};

export const FOOTER_ABOUT = {
  title: 'About',
  items: [
    { label: 'Brand introduction', href: '/about' },
    { label: 'Brand culture', href: '/about/culture' },
    { label: 'Development history', href: '/about/history' },
    { label: 'News', href: '/about/news' },
    { label: 'Social contribution', href: '/about/contribution' },
  ],
};

export const FOOTER_CONTACT = {
  title: 'Contact us',
  items: [
    { label: 'Business consulting', href: '/contact' },
  ],
};

// Navigation Items (matching mockup)
export const NAV_ITEMS = [
  { label: 'Products', href: '/products', labelEn: 'Products' },
  { label: 'Services', href: '/services', labelEn: 'Services' },
  { label: 'About', href: '/about', labelEn: 'About APSONIC' },
  { label: 'Contact', href: '/contact', labelEn: 'Contact Us' },
];

// Hero Slogan (bilingual)
export const HERO_SLOGAN = {
  chinese: '好质量 好生活',
  french: 'Bonne qualité pour une meilleure vie',
  english: 'Good Quality, Good Life',
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'motorcycles', label: 'Motorcycles' },
  { id: 'scooters', label: 'Scooters' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'parts', label: 'Parts' },
];

// Demo prices for development
export const FILTER_OPTIONS = {
  price: [
    { label: 'Under $500', value: '0-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: '$1000 - $2000', value: '1000-2000' },
    { label: 'Above $2000', value: '2000+' },
  ],
  engine: [
    { label: '50cc - 125cc', value: '50-125' },
    { label: '125cc - 250cc', value: '125-250' },
    { label: '250cc+', value: '250+' },
  ],
};

// African Countries (West Africa focus) Demo for now
export const COUNTRIES = [
  { code: 'NG', name: 'Nigeria' },
  { code: 'GH', name: 'Ghana' },
  { code: 'SN', name: 'Senegal' },
  { code: 'CI', name: 'Ivory Coast' },
  { code: 'ML', name: 'Mali' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'NE', name: 'Niger' },
  { code: 'TG', name: 'Togo' },
  { code: 'BJ', name: 'Benin' },
  { code: 'GN', name: 'Guinea' },
];

// Responsive Breakpoints
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};

// Default Model Colors (shared across models)
export const DEFAULT_MODEL_COLORS = [
  {
    id: 'black',
    name: 'Black',
    value: '#000000',
  },
  {
    id: 'red',
    name: 'Red',
    value: '#DC143C',
  },
  {
    id: 'grey',
    name: 'Grey',
    value: '#808080',
  },
];

// Carousel Configuration
export const CAROUSEL_CONFIG = {
  defaultInterval: 5000,
  scrollGap: 24, // gap-6 = 24px
  cardWidth: 280,
};

