import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface HoverCardProps {
  children: React.ReactNode;
  hoverTransform?: string;
  hoverShadow?: string;
  transition?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'div' | 'link';
  href?: string;
  [key: string]: any;
}

// Reusable card component with hover effects
// Supports both div and Link rendering for flexible usage
export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  hoverTransform = 'translateY(-8px)',
  hoverShadow = '0 8px 24px rgba(0, 0, 0, 0.12)',
  transition = 'all 0.3s ease',
  className,
  style,
  as = 'div',
  href,
  ...props
}) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = hoverTransform;
    e.currentTarget.style.boxShadow = hoverShadow;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const commonProps = {
    className: cn(transition, className),
    style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...props,
  };

  if (as === 'link' && href) {
    return <Link href={href} {...commonProps}>{children}</Link>;
  }

  return <div {...commonProps}>{children}</div>;
};
