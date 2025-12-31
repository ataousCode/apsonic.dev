'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { SUPPORT_LINKS } from '@/lib/data/service-page';
import { cn } from '@/lib/utils';

export interface SupportLink {
  label: string;
  href: string;
}

export interface SupportToolsProps {
  links?: SupportLink[];
  className?: string;
}


// Support tools section with clickable links
export const SupportTools: React.FC<SupportToolsProps> = ({
  links = SUPPORT_LINKS,
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="small"
    >
      <Container maxWidth="narrow">
        {/* Section Title */}
        <h2
          className="mb-8"
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: SERVICE_PAGE_CONFIG.colors.primary,
          }}
        >
          Support Tools
        </h2>

        {/* Links List */}
        <div className="space-y-0">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block transition-colors"
              style={{
                padding: '20px 0',
                fontSize: SERVICE_PAGE_CONFIG.typography.linkText.fontSize,
                fontWeight: SERVICE_PAGE_CONFIG.typography.linkText.fontWeight,
                color: SERVICE_PAGE_CONFIG.colors.primary,
                textDecoration: 'none',
                borderBottom: index < links.length - 1
                  ? `1px solid ${SERVICE_PAGE_CONFIG.colors.border}`
                  : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = SERVICE_PAGE_CONFIG.colors.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = SERVICE_PAGE_CONFIG.colors.primary;
              }}
            >
              → {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

