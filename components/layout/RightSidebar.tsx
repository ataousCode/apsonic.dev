'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { colors } from '@/lib/design-tokens';
import {
  HelpIcon,
  ChatIcon,
  LocationIcon,
  UserIcon,
} from '@/components/ui/Icons';
import { Tooltip } from '@/components/ui/Tooltip';
import { cn } from '@/lib/utils';

interface SidebarIcon {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

const SIDEBAR_ICONS: SidebarIcon[] = [
  {
    id: 'chat',
    icon: <ChatIcon className="w-6 h-6" />,
    label: 'Customer Service',
    onClick: () => console.log('Chat clicked'),
  },
  {
    id: 'location',
    icon: <LocationIcon className="w-6 h-6" />,
    label: 'Store Locator',
    href: '/services',
  },
];

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
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 py-6 px-2 rounded-l-lg transition-all"
      style={{
        backgroundColor: colors.background.sidebar,
        backdropFilter: 'blur(10px)',
        borderLeft: `1px solid ${colors.ui.border}`,
      }}
      onMouseLeave={handleIconLeave}
    >
      {SIDEBAR_ICONS.map((item) => {
        const isHovered = hoveredIcon === item.id;
        const iconButton = (
          <button
            onClick={item.onClick}
            onMouseEnter={() => handleIconHover(item.id)}
            className={cn(
              'p-3 rounded-lg transition-all',
              'hover:scale-110',
              isHovered && 'scale-110'
            )}
            style={{
              color: colors.text.primary,
              backgroundColor: isHovered ? colors.ui.hover : 'transparent',
            }}
            aria-label={item.label}
          >
            {item.icon}
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
