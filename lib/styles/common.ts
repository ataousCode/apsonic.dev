// Common style utilities and classes
// Centralized styling patterns for consistency

export const commonStyles = {
  // Container
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  
  // Text shadows for readability
  textShadow: {
    strong: '0 2px 10px rgba(0,0,0,0.7)',
    medium: '0 2px 8px rgba(0,0,0,0.7)',
    light: '0 1px 4px rgba(0,0,0,0.5)',
  },
  
  // Transitions
  transition: {
    default: 'transition-all duration-300 ease-in-out',
    fast: 'transition-all duration-150 ease-in-out',
    slow: 'transition-all duration-500 ease-in-out',
  },
  
  // Glass morphism
  glass: 'backdrop-blur-sm bg-white/10 border border-white/20',
  
  // Hover effects
  hover: {
    scale: 'hover:scale-110 transition-transform',
    opacity: 'hover:opacity-80 transition-opacity',
  },
} as const;

