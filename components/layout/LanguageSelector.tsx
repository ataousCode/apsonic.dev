import React from 'react';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export type Language = 'zh' | 'fr' | 'en';

export interface LanguageOption {
  value: Language;
  label: string;
}

export interface LanguageSelectorProps {
  value: Language;
  onChange: (language: Language) => void;
  options?: LanguageOption[];
  className?: string;
}

const defaultOptions: LanguageOption[] = [
  { value: 'zh', label: '中文' },
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'English' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  value,
  onChange,
  options = defaultOptions,
  className,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Language)}
      className={cn(
        'rounded-lg px-3 py-2',
        'focus:outline-none',
        'transition-colors cursor-pointer',
        className
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
      aria-label="Select language"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={{ backgroundColor: colors.background.primary }}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

