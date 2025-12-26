'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { colors } from '@/lib/design-tokens';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SearchInput } from './SearchInput';
import { LanguageSelector, type Language } from './LanguageSelector';
import { MobileMenuButton } from './MobileMenuButton';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

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
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation items={NAV_ITEMS} className="hidden md:flex" />

          {/* Desktop Search and Language */}
          <div className="hidden md:flex items-center gap-4">
            <SearchInput />
            <LanguageSelector value={language} onChange={setLanguage} />
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={handleMobileMenuToggle}
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4"
            style={{ borderTop: `1px solid ${colors.ui.border}` }}
          >
            <Navigation
              items={NAV_ITEMS}
              className="flex-col gap-0"
              onItemClick={handleMobileMenuClose}
            />
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
