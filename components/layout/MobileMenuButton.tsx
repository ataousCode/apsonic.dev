import React from 'react';
import { MenuIcon, CloseIcon } from '@/components/ui/Icons';
import { colors } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn('p-2 md:hidden transition-colors', className)}
      style={{ color: colors.text.primary }}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <CloseIcon className="w-6 h-6" />
      ) : (
        <MenuIcon className="w-6 h-6" />
      )}
    </button>
  );
};

