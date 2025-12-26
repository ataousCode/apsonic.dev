import React from 'react';
import { colors, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  onClick?: () => void;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, onClick, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          effects.radius.md,
          effects.transition.default,
          hover && 'cursor-pointer',
          onClick && 'cursor-pointer',
          className
        )}
        style={{
          backgroundColor: colors.background.secondary,
          border: `1px solid ${colors.ui.border}`,
        }}
        onMouseEnter={(e) => {
          if (hover || onClick) {
            e.currentTarget.style.borderColor = colors.ui.borderHover;
            e.currentTarget.style.backgroundColor = colors.background.tertiary;
            e.currentTarget.style.transform = 'translateY(-2px)';
          }
        }}
        onMouseLeave={(e) => {
          if (hover || onClick) {
            e.currentTarget.style.borderColor = colors.ui.border;
            e.currentTarget.style.backgroundColor = colors.background.secondary;
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
