import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { colors, effects } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface CarouselNavButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
  ariaLabel: string;
}

export const CarouselNavButton: React.FC<CarouselNavButtonProps> = ({
  direction,
  onClick,
  className,
  ariaLabel,
}) => {
  const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;
  const positionClass = direction === 'left' ? 'left-4' : 'right-4';

  return (
    <button
      onClick={onClick}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 z-20',
        'w-12 h-12 rounded-full flex items-center justify-center',
        'bg-black/10 backdrop-blur-sm',
        'hover:bg-black/20',
        effects.transition.default,
        positionClass,
        className
      )}
      aria-label={ariaLabel}
    >
      <Icon size={24} style={{ color: colors.text.black }} />
    </button>
  );
};

