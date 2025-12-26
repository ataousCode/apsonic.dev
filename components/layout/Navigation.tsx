'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
  labelEn?: string;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className,
  onItemClick,
}) => {
  const pathname = usePathname();
  const isMobile = className?.includes('flex-col');

  return (
    <nav className={cn('flex items-center gap-8', className)}>
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'text-base font-medium transition-colors relative',
              'hover:opacity-80',
              isMobile && 'block py-3',
              isMobile && isActive && 'font-semibold'
            )}
            style={{
              color: isActive
                ? colors.brand.green
                : isMobile
                ? colors.text.primary
                : colors.text.primary,
            }}
          >
            {item.label}
            {!isMobile && isActive && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: colors.brand.green }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

