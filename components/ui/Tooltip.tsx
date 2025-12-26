import React from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  show?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'left',
  show = false,
}) => {
  if (!show) return <>{children}</>;

  const positionClasses = {
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
  };

  const arrowClasses = {
    left: 'left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/90',
    right: 'right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black/90',
    top: 'top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-black/90',
  };

  return (
    <div className="relative group">
      {children}
      <div
        className={cn(
          'absolute px-3 py-1.5 bg-black/90 text-white text-sm rounded whitespace-nowrap pointer-events-none z-50',
          positionClasses[position]
        )}
      >
        {content}
        <div className={cn('absolute', arrowClasses[position])} />
      </div>
    </div>
  );
};

