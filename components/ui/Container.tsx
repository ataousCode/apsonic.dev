import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'default' | 'narrow' | 'wide';
  className?: string;
}

// Reusable container component with consistent padding and max-width
// Used across all pages to maintain consistent layout
export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'default',
  className,
}) => {
  const maxWidthClasses = {
    default: 'max-w-7xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-[1400px]',
  };

  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
};

