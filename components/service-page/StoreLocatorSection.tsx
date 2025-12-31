'use client';

import React from 'react';
import { ServiceSupport } from '@/components/service';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface StoreLocatorSectionProps {
  className?: string;
}

// Store locator section wrapper with title
export const StoreLocatorSection: React.FC<StoreLocatorSectionProps> = ({
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.cardBackground}
      padding="large"
    >
      <Container>
        {/* Section Title */}
        <h2
          className="text-center mb-10"
          style={{
            fontSize: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontSize,
            fontWeight: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontWeight,
            color: SERVICE_PAGE_CONFIG.typography.sectionTitle.color,
          }}
        >
          Find Your Nearest Apsonic Service Center
        </h2>

        {/* Service Support Component */}
        <ServiceSupport />
      </Container>
    </Section>
  );
};

