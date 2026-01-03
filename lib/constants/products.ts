// Products grid constants
export const PRODUCTS_GRID_CONFIG = {
  // Grid layout
  grid: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '24px', // Improved spacing between cards - accommodates image overflow
  },
  
  // Card styling
  card: {
    background: '#F5F5F5',
    borderRadius: '12px',
    padding: '20px',
    // Note: overflow removed - images intentionally overflow for floating effect
  },
  
  // Image styling
  image: {
    aspectRatio: '4/3',
  },
  
  // Typography
  typography: {
    modelName: {
      fontSize: '16px',
      fontWeight: 700,
      color: '#000000',
    },
    brandName: {
      fontSize: '12px',
      color: '#999999',
    },
  },
} as const;

