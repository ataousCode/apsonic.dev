import React from 'react';
import { colors, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="mb-2 block text-sm font-medium"
            style={{ color: colors.text.primary }}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: colors.text.muted }}
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              'flex h-12 w-full rounded-lg px-4 py-2 text-sm',
              effects.transition.colors,
              'focus:outline-none',
              'disabled:cursor-not-allowed disabled:opacity-50',
              icon && 'pl-10',
              className
            )}
            style={{
              backgroundColor: colors.background.secondary,
              border: `1px solid ${error ? colors.ui.error : colors.ui.border}`,
              color: colors.text.primary,
            }}
            placeholder={props.placeholder}
            onFocus={(e) => {
              if (!error) {
                e.target.style.borderColor = colors.brand.green;
              }
            }}
            onBlur={(e) => {
              if (!error) {
                e.target.style.borderColor = colors.ui.border;
              }
            }}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm" style={{ color: colors.ui.error }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
