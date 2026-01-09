import React from 'react';
import { colors, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, ...props }, ref) => {
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
                    <textarea
                        ref={ref}
                        className={cn(
                            'flex w-full rounded-lg px-4 py-3 text-sm min-h-[120px]',
                            effects.transition.colors,
                            'focus:outline-none',
                            'disabled:cursor-not-allowed disabled:opacity-50',
                            className
                        )}
                        style={{
                            backgroundColor: colors.background.secondary,
                            border: `1px solid ${error ? colors.ui.error : colors.ui.border}`,
                            color: colors.text.primary,
                        }}
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

Textarea.displayName = 'Textarea';
