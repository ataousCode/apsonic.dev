import React from 'react';
import Link from 'next/link';
import { APP_NAME, BRAND_TAGLINE } from '@/lib/constants';
import { colors } from '@/lib/design-tokens';

export interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  showTagline = true,
}) => {
  return (
    <Link href="/" className={`flex flex-col group ${className || ''}`}>
      <span
        className="text-2xl font-bold transition-colors"
        style={{ color: colors.brand.green }}
      >
        {APP_NAME}
      </span>
      {showTagline && (
        <span
          className="text-sm mt-0.5"
          style={{ color: colors.text.secondary }}
        >
          {BRAND_TAGLINE}
        </span>
      )}
    </Link>
  );
};

