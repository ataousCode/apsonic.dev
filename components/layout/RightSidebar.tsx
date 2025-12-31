'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { colors } from '@/lib/design-tokens';
import {
  HelpIcon,
  ShoppingBagIcon,
  LocationIcon,
} from '@/components/ui/Icons';
import { Tooltip } from '@/components/ui/Tooltip';
import { SIDEBAR_ICONS } from '@/lib/data/sidebar';
import { cn } from '@/lib/utils';

// Map icon names to components
const ICON_MAP = {
  help: HelpIcon,
  shopping: ShoppingBagIcon,
  location: LocationIcon,
};

export const RightSidebar: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleIconHover = (iconId: string) => {
    setHoveredIcon(iconId);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <aside
      className="fixed right-0 z-40 flex flex-col items-center gap-3 py-4 px-1.5 rounded-l-lg transition-all"
      style={{
        backgroundColor: colors.background.sidebar,
        backdropFilter: 'blur(10px)',
        borderLeft: `1px solid rgba(255, 255, 255, 0.2)`,
        borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
        borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
        top: '100px', // Space after header (80px header + 20px gap)
      }}
      onMouseLeave={handleIconLeave}
    >
      {SIDEBAR_ICONS.map((item) => {
        const isHovered = hoveredIcon === item.id;
        const IconComponent = ICON_MAP[item.iconName];
        const iconButton = (
          <button
            onClick={item.onClick}
            onMouseEnter={() => handleIconHover(item.id)}
            className={cn(
              'p-2 rounded-lg transition-all',
              'hover:scale-110',
              isHovered && 'scale-110'
            )}
            style={{
              color: colors.text.primary,
              backgroundColor: isHovered ? colors.ui.hover : 'transparent',
            }}
            aria-label={item.label}
          >
            <IconComponent className="w-5 h-5" />
          </button>
        );

        const content = item.href ? (
          <Link href={item.href} className="block">
            {iconButton}
          </Link>
        ) : (
          iconButton
        );

        return (
          <Tooltip
            key={item.id}
            content={item.label}
            position="left"
            show={isHovered}
          >
            {content}
          </Tooltip>
        );
      })}
    </aside>
  );
};
