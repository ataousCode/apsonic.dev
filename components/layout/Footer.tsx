'use client';

import React from 'react';
import Link from 'next/link';
import { SOCIAL_LINKS, FOOTER_PRODUCTS, FOOTER_SERVICES, FOOTER_ABOUT, FOOTER_CONTACT } from '@/lib/constants';
import { colors, typography } from '@/lib/design-tokens';
import { Logo } from './Logo';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedInIcon,
  TikTokIcon,
} from '@/components/ui/Icons';

interface FooterLink {
  label: string;
  href?: string;
  subItems?: FooterLink[];
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  FOOTER_PRODUCTS,
  FOOTER_SERVICES,
  FOOTER_ABOUT,
  FOOTER_CONTACT,
];

const SOCIAL_ICONS = [
  { name: 'facebook', Icon: FacebookIcon, href: SOCIAL_LINKS.facebook },
  { name: 'tiktok', Icon: TikTokIcon, href: SOCIAL_LINKS.tiktok },
  { name: 'instagram', Icon: InstagramIcon, href: SOCIAL_LINKS.instagram },
  { name: 'twitter', Icon: TwitterIcon, href: SOCIAL_LINKS.twitter },
  { name: 'youtube', Icon: YoutubeIcon, href: SOCIAL_LINKS.youtube },
  { name: 'linkedin', Icon: LinkedInIcon, href: SOCIAL_LINKS.linkedin },
];

// Reusable Footer Link Component (DRY)
const FooterLink: React.FC<{ href?: string; label: string; isSubItem?: boolean }> = ({
  href,
  label,
  isSubItem = false,
}) => {
  const linkStyle = {
    color: isSubItem ? colors.text.muted : colors.text.secondary,
    fontSize: isSubItem ? typography.size.caption : typography.size.bodySmall,
  };

  if (!href) {
    // Render as non-clickable text for parent items without href
    return (
      <span className="block" style={linkStyle}>
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="block transition-colors hover:text-[#1FA84F]"
      style={linkStyle}
    >
      {label}
    </Link>
  );
};

const FooterSection: React.FC<{ section: FooterSection }> = ({ section }) => {
  return (
    <div className="flex flex-col">
      <h3
        className="font-semibold mb-4"
        style={{
          color: colors.text.primary,
          fontSize: typography.size.body,
        }}
      >
        {section.title}
      </h3>
      <ul className="flex flex-col gap-2">
        {section.items.map((item, index) => (
          <li key={index}>
            <FooterLink href={item.href} label={item.label} />
            {item.subItems && item.subItems.length > 0 && (
              <ul className="ml-4 mt-2 flex flex-col gap-1">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <FooterLink href={subItem.href} label={subItem.label} isSubItem />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: colors.background.secondary,
      }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section - Brand and Columns */}
        <div className="mb-8 pb-8 border-b" style={{ borderColor: colors.ui.border }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Logo showTagline={false} size="lg" />
            </div>

            {/* Footer Sections */}
            {FOOTER_SECTIONS.map((section, index) => (
              <FooterSection key={index} section={section} />
            ))}
          </div>
        </div>

        {/* Bottom Section - Social Media and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_ICONS.map(({ name, Icon, href }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
                aria-label={name}
              >
                <Icon
                  size={20}
                  style={{ color: colors.text.secondary }}
                  className="hover:text-[#1FA84F] transition-colors"
                />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div
            className="text-sm"
            style={{ color: colors.text.muted }}
          >
            APSONIC.Africa
          </div>
        </div>
      </div>
    </footer>
  );
};

