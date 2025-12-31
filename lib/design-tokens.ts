// APSONIC Design System Tokens
// Dark, Industrial, Premium, Mechanical

export const colors = {
  // Brand Colors
  brand: {
    green: '#1FA84F', // Primary accent color - use sparingly
    // Legacy colors (keep for reference, may be used in images)
    yellow: '#FFD700',
    red: '#FF0000',
  },

  // Background Colors
  background: {
    primary: '#0F0F0F', // Main background
    secondary: '#1E1E1E', // Cards, sections, elevated surfaces
    tertiary: '#2A2A2A', // Hover states, borders
    header: '#0F0F0F', // Header background
    sidebar: 'rgba(40, 40, 40, 0.95)', // Sidebar - black but not very black
    overlay: 'rgba(0, 0, 0, 0.4)', // Image overlay
    overlayDark: 'rgba(0, 0, 0, 0.6)', // Darker image overlay
    white: '#FFFFFF', // White background for light sections
    light: '#F8F9FA', // Light gray background for dropdowns
    card: '#F3F4F6', // Light gray for product cards (gray-100)
  },

  // Text Colors
  text: {
    primary: '#F2F2F2', // Main content, headings
    secondary: '#B0B0B0', // Body text, descriptions
    muted: '#808080', // Placeholders, disabled states
    black: '#000000', // Black text for light backgrounds
    gray: {
      light: '#6B7280', // Light gray for labels
      medium: '#374151', // Medium gray for body text on light backgrounds
      dark: '#1F2937', // Dark gray for headings on light backgrounds
    },
  },

  // UI Colors
  ui: {
    active: '#1FA84F', // Active nav, selected states
    border: 'rgba(255, 255, 255, 0.1)', // Subtle borders
    borderHover: 'rgba(255, 255, 255, 0.2)', // Hover borders
    hover: 'rgba(255, 255, 255, 0.05)', // Hover overlay
    error: '#ef4444', // Error states
  },
  
  // Service Support specific colors
  service: {
    brandGreen: '#00A86B',
    brandGreenLight: '#00C853',
    panelDark: '#2a2a2a',
    panelOverlay: 'rgba(0, 0, 0, 0.75)',
    inputDark: '#1a1a1a',
    textMuted: '#999999',
    textSecondary: '#666666',
    white: '#FFFFFF',
  },
} as const;

export const typography = {
  // Font Sizes (using clamp for responsive)
  size: {
    hero: 'clamp(3rem, 8vw, 5rem)',
    h1: 'clamp(2rem, 5vw, 3.5rem)',
    h2: 'clamp(1.5rem, 4vw, 2.5rem)',
    h3: 'clamp(1.25rem, 3vw, 2rem)',
    bodyLarge: '1.125rem',
    body: '1rem',
    bodySmall: '0.875rem',
    caption: '0.75rem',
  },

  // Font Weights
  weight: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Logo
  logo: {
    size: '2rem',
    weight: 700,
    color: colors.brand.green,
  },

  // Tagline
  tagline: {
    size: '0.875rem',
    weight: 400,
    color: colors.text.secondary,
  },

  // Navigation
  navigation: {
    size: '1rem',
    weight: 500,
    color: colors.text.primary,
  },
} as const;

export const spacing = {
  // Base unit: 4px
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px

  // Component specific
  header: {
    height: '5rem', // 80px
    padding: '0 2rem',
  },
  section: {
    vertical: 'py-16 lg:py-24',
    verticalSmall: 'py-12 lg:py-16',
  },
  container: {
    padding: 'px-4 sm:px-6 lg:px-8',
  },
  card: {
    padding: 'p-6 lg:p-8',
  },
  button: {
    padding: 'px-6 py-3',
  },
} as const;

export const effects = {
  // Transitions
  transition: {
    default: 'transition-all duration-300 ease-in-out',
    fast: 'transition-all duration-200 ease-in-out',
    slow: 'transition-all duration-500 ease-in-out',
    colors: 'transition-colors duration-200',
    transform: 'transition-transform duration-200',
  },

  // Shadows
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    dark: 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]',
  },

  // Blur
  blur: {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  },

  // Border Radius
  radius: {
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
} as const;

// Breakpoints (for reference, use Tailwind classes)
export const breakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
} as const;
