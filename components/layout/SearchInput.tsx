import React from 'react';
import { SearchIcon } from '@/components/ui/Icons';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  variant?: 'dark' | 'light';
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  className,
  value,
  variant,
  ...props
}) => {
  const hasWidthClass = className?.includes('w-');
  // Determine theme: explicit variant prop, or auto-detect from context
  const isLightTheme = variant === 'light' || 
    (variant !== 'dark' && className?.includes('w-full') && value === undefined);
  const isProductsPage = className?.includes('w-full') && value !== undefined;
  
  return (
    <div className={cn('relative', hasWidthClass ? className : '')}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={cn(
          'rounded-lg px-4 py-2 pl-10',
          'focus:outline-none',
          'transition-colors',
          hasWidthClass ? 'w-full' : 'w-32',
          (isProductsPage || isLightTheme) && 'text-sm shadow-sm'
        )}
        style={{
          backgroundColor: isProductsPage || isLightTheme 
            ? colors.background.white 
            : colors.background.secondary,
          border: isProductsPage || isLightTheme
            ? `1px solid ${value ? colors.brand.green : '#E5E5E5'}`
            : `1px solid ${colors.ui.border}`,
          color: isProductsPage || isLightTheme 
            ? colors.text.black 
            : colors.text.primary,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = colors.brand.green;
          if (isProductsPage || isLightTheme) {
            e.target.style.boxShadow = `0 0 0 3px ${colors.brand.green}20`;
          }
        }}
        onBlur={(e) => {
          if (isProductsPage || isLightTheme) {
            e.target.style.borderColor = value ? colors.brand.green : '#E5E5E5';
            e.target.style.boxShadow = 'none';
          } else {
            e.target.style.borderColor = colors.ui.border;
          }
        }}
        {...props}
      />
      <SearchIcon
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        size={isProductsPage || isLightTheme ? 18 : 16}
        style={{
          color: isProductsPage || isLightTheme
            ? value
              ? colors.brand.green
              : colors.text.gray.medium
            : colors.text.muted,
        }}
      />
    </div>
  );
};

