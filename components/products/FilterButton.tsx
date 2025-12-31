'use client';

import React from 'react';
import { colors, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

// Reusable filter button component
export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-md text-sm font-medium',
        effects.transition.colors,
        isActive ? 'text-white shadow-sm' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
        className
      )}
      style={{
        backgroundColor: isActive ? colors.brand.green : 'transparent',
      }}
    >
      {label}
    </button>
  );
};

