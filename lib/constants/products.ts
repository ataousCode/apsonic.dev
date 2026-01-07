// Products grid constants
export const PRODUCTS_GRID_CONFIG = {
  // Grid layout
  grid: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '5px', // Spacing between cards - REDUCE THIS to make gaps smaller
  },
  
  // Card styling
  card: {
    background: '#F5F5F5',
    borderRadius: '12px',
    padding: '12px', // REDUCE THIS to make card padding smaller
    maxWidth: '80%', // Match image width - REDUCE THIS to make card smaller
    // Note: overflow removed - images intentionally overflow for floating effect
  },
  
  // Image styling
  image: {
    aspectRatio: '3/2',
    maxHeight: '220px', // Limit maximum image height - REDUCE THIS to make images smaller
    maxWidth: '80%', // Limit maximum image width - REDUCE THIS to make images narrower
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

