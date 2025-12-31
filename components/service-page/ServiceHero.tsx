'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface ServiceHeroProps {
  className?: string;
}

// Hero section with logo badge, heading, and subheading
export const ServiceHero: React.FC<ServiceHeroProps> = ({ className }) => {
  return (
    <Section
      className={cn('flex flex-col items-center justify-center', className)}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="none"
      style={{
        paddingTop: SERVICE_PAGE_CONFIG.spacing.heroPadding.top,
        paddingBottom: SERVICE_PAGE_CONFIG.spacing.heroPadding.bottom,
        minHeight: '60vh',
      }}
    >
      <div className="flex flex-col items-center">
        {/* Logo Badge */}
        {/* <div
          className="rounded-full flex items-center justify-center mb-8"
          style={{
            width: SERVICE_PAGE_CONFIG.logoBadge.size,
            height: SERVICE_PAGE_CONFIG.logoBadge.size,
            backgroundColor: SERVICE_PAGE_CONFIG.logoBadge.backgroundColor,
            boxShadow: SERVICE_PAGE_CONFIG.logoBadge.shadow,
          }}
        >
          <Image
            src="/images/logo/logo.png"
            alt="APSONIC Logo"
            width={80}
            height={80}
            className="object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div> */}

        {/* Main Heading */}
        <h1
          className="text-center"
          style={{
            fontSize: SERVICE_PAGE_CONFIG.typography.heroTitle.fontSize,
            fontWeight: SERVICE_PAGE_CONFIG.typography.heroTitle.fontWeight,
            color: SERVICE_PAGE_CONFIG.typography.heroTitle.color,
            marginTop: '32px',
          }}
        >
          Service Support
        </h1>

        {/* Subheading */}
        <p
          className="text-center"
          style={{
            fontSize: SERVICE_PAGE_CONFIG.typography.heroSubtitle.fontSize,
            fontWeight: SERVICE_PAGE_CONFIG.typography.heroSubtitle.fontWeight,
            color: SERVICE_PAGE_CONFIG.typography.heroSubtitle.color,
            marginTop: '12px',
          }}
        >
          Need assistance? Everything Start here with APSONIC.
        </p>
      </div>
    </Section>
  );
};

