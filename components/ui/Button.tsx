import React from 'react';
import { colors, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-medium',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      effects.transition.colors,
      effects.radius.md
    );

    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: colors.brand.green,
            color: colors.text.primary,
            border: 'none',
            hover: {
              backgroundColor: '#1B8F45', // Slightly darker green
              transform: 'scale(1.02)',
            },
          };
        case 'secondary':
          return {
            backgroundColor: colors.background.secondary,
            color: colors.text.primary,
            border: `1px solid ${colors.ui.border}`,
            hover: {
              backgroundColor: colors.background.tertiary,
              borderColor: colors.ui.borderHover,
            },
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            color: colors.brand.green,
            border: `1px solid ${colors.brand.green}`,
            hover: {
              backgroundColor: `${colors.brand.green}10`,
              borderColor: colors.brand.green,
            },
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: colors.text.primary,
            border: 'none',
            hover: {
              backgroundColor: colors.ui.hover,
            },
          };
        default:
          return {
            backgroundColor: colors.brand.green,
            color: colors.text.primary,
            border: 'none',
          };
      }
    };

    const variantStyles = getVariantStyles();

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizes[size], className)}
        style={{
          backgroundColor: variantStyles.backgroundColor,
          color: variantStyles.color,
          border: variantStyles.border,
        }}
        onMouseEnter={(e) => {
          if (!disabled && !loading && variantStyles.hover) {
            if (variantStyles.hover.backgroundColor) {
              e.currentTarget.style.backgroundColor =
                variantStyles.hover.backgroundColor;
            }
            if (variantStyles.hover.borderColor) {
              e.currentTarget.style.borderColor = variantStyles.hover.borderColor;
            }
            if (variantStyles.hover.transform) {
              e.currentTarget.style.transform = variantStyles.hover.transform;
            }
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !loading) {
            e.currentTarget.style.backgroundColor = variantStyles.backgroundColor;
            e.currentTarget.style.borderColor = variantStyles.border || 'transparent';
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : icon && iconPosition === 'left' ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        {children}
        {!loading && icon && iconPosition === 'right' ? (
          <span className="ml-2">{icon}</span>
        ) : null}
      </button>
    );
  }
);

Button.displayName = 'Button';
