import React from 'react';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

// Reusable section wrapper component
// Provides consistent spacing and background colors across pages
export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  padding = 'medium',
  className,
  style,
  ...props
}) => {
  const paddingClasses = {
    none: '',
    small: 'py-12 lg:py-16',
    medium: 'py-16 lg:py-24',
    large: 'py-20 lg:py-32',
  };

  return (
    <section
      className={cn('w-full', paddingClasses[padding], className)}
      style={{
        backgroundColor: backgroundColor || colors.background.white,
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  );
};

