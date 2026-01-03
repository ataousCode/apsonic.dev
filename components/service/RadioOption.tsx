'use client';

import React from 'react';
import { colors } from '@/lib/design-tokens';
import { typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface RadioOptionProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  name: string;
  className?: string;
}

export const RadioOption: React.FC<RadioOptionProps> = ({
  value,
  label,
  checked,
  onChange,
  name,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onChange();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange();
    }
  };

  return (
    <label 
      className={cn('flex items-center cursor-pointer', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="checkbox"
      aria-checked={checked}
    >
      <div
        className="mr-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
        style={{
          borderColor: checked ? colors.service.brandGreen : colors.ui.border,
          backgroundColor: checked ? colors.service.brandGreen : 'transparent',
        }}
      >
        {checked && (
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: colors.background.white,
            }}
          />
        )}
      </div>
      <span
        className="font-medium"
        style={{
          fontSize: typography.size.body,
          color: colors.text.primary,
        }}
      >
        {label}
      </span>
    </label>
  );
};

