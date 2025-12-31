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
  return (
    <label className={cn('flex items-center cursor-pointer', className)}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-3 w-5 h-5"
        style={{
          accentColor: colors.service.brandGreen,
        }}
      />
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

