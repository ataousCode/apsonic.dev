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
  hasDropdown?: boolean; // Indicates this item has a dropdown
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
  onProductsHover?: () => void;
  onProductsLeave?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className,
  onItemClick,
  onProductsHover,
  onProductsLeave,
}) => {
  const pathname = usePathname();
  const isMobile = className?.includes('flex-col');

  // Check if item is the Products dropdown trigger
  const isProductsItem = (item: NavItem) => item.href === '/products';

  return (
    <nav className={cn('flex items-center gap-8', className)}>
      {items.map((item) => {
        const isActive = pathname === item.href;
        const isProducts = isProductsItem(item);

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={isProducts && !isMobile ? onProductsHover : undefined}
            onMouseLeave={isProducts && !isMobile ? onProductsLeave : undefined}
          >
            <Link
              href={item.href}
              onClick={onItemClick}
              className={cn(
                'text-base font-medium transition-colors relative block',
                'hover:opacity-80',
                isMobile && 'py-3',
                isMobile && isActive && 'font-semibold'
              )}
              style={{
                color: isActive ? colors.brand.green : colors.text.primary,
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
          </div>
        );
      })}
    </nav>
  );
};

