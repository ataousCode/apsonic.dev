import React from 'react';
import { SearchIcon } from '@/components/ui/Icons';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  className,
  ...props
}) => {
  return (
    <div className={cn('relative', className)}>
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          'rounded-lg px-4 py-2 pl-10',
          'focus:outline-none',
          'transition-colors w-32'
        )}
        style={{
          backgroundColor: colors.background.secondary,
          border: `1px solid ${colors.ui.border}`,
          color: colors.text.primary,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = colors.brand.green;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = colors.ui.border;
        }}
        {...props}
      />
      <SearchIcon
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        size={16}
        style={{ color: colors.text.muted }}
      />
    </div>
  );
};

