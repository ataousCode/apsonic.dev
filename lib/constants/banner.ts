// Banner component constants
export const BANNER_CONFIG = {
  // Height options
  height: {
    fullScreen: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
    small: 'min-h-[40vh]',
  },
  
  // Text positioning
  textPosition: {
    left: 'items-start justify-start',
    center: 'items-center justify-center',
    right: 'items-end justify-end',
    top: 'items-start justify-center',
    bottom: 'items-end justify-center',
  },
  
  // Overlay opacity
  overlay: {
    light: 'rgba(0, 0, 0, 0.3)',
    medium: 'rgba(0, 0, 0, 0.5)',
    dark: 'rgba(0, 0, 0, 0.7)',
  },
  
  // Animation
  transition: {
    duration: 1000, // ms
    easing: 'ease-in-out',
  },
  
  // Typography
  typography: {
    title: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    description: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  
  // Spacing
  spacing: {
    containerPadding: 'px-4 sm:px-6 lg:px-8',
    textPadding: 'py-20',
    dotsBottom: 'bottom-8',
  },
} as const;

