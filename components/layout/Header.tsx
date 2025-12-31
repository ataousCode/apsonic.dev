'use client';

import React, { useState, useRef, useCallback } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { colors } from '@/lib/design-tokens';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SearchInput } from './SearchInput';
import { LanguageSelector, type Language } from './LanguageSelector';
import { MobileMenuButton } from './MobileMenuButton';
import { ProductsDropdown } from '@/components/products';

// Delay before closing dropdown to prevent accidental closing
const DROPDOWN_CLOSE_DELAY = 150;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMobileMenuToggle = () => setIsMobileMenuOpen((prev) => !prev);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  const openDropdown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, DROPDOWN_CLOSE_DELAY);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: colors.background.header,
        borderBottom: `1px solid ${colors.ui.border}`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex relative">
            <Navigation
              items={NAV_ITEMS}
              onProductsHover={openDropdown}
              onProductsLeave={closeDropdown}
            />
            {isProductsDropdownOpen && (
              <ProductsDropdown
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              />
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <SearchInput />
            <LanguageSelector value={language} onChange={setLanguage} />
          </div>

          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={handleMobileMenuToggle} />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4" style={{ borderTop: `1px solid ${colors.ui.border}` }}>
            <Navigation items={NAV_ITEMS} className="flex-col gap-0" onItemClick={handleMobileMenuClose} />
            <div className="mt-4 flex flex-col gap-3">
              <SearchInput className="w-full" />
              <LanguageSelector value={language} onChange={setLanguage} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
