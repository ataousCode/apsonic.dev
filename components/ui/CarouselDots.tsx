import React from 'react';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface CarouselDotsProps {
  count: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  count,
  currentIndex,
  onDotClick,
  className,
}) => {
  if (count <= 1) return null;

  return (
    <div className={cn('flex gap-2', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            'transition-all duration-300 rounded-full cursor-pointer',
            index === currentIndex ? 'w-3 h-3' : 'w-2 h-2'
          )}
          style={{
            backgroundColor:
              index === currentIndex
                ? colors.text.primary
                : `${colors.text.primary}80`,
          }}
          onMouseEnter={(e) => {
            if (index !== currentIndex) {
              e.currentTarget.style.backgroundColor = `${colors.text.primary}BF`;
            }
          }}
          onMouseLeave={(e) => {
            if (index !== currentIndex) {
              e.currentTarget.style.backgroundColor = `${colors.text.primary}80`;
            }
          }}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentIndex ? 'true' : undefined}
        />
      ))}
    </div>
  );
};

