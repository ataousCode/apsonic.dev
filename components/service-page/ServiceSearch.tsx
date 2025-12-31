'use client';

import React from 'react';
import { SearchInput } from '@/components/layout/SearchInput';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface ServiceSearchProps {
  onSearch?: (value: string) => void;
  className?: string;
}

// Search bar section
export const ServiceSearch: React.FC<ServiceSearchProps> = ({
  onSearch,
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="none"
      style={{
        paddingTop: SERVICE_PAGE_CONFIG.spacing.searchPadding.top,
        paddingBottom: SERVICE_PAGE_CONFIG.spacing.searchPadding.bottom,
      } as React.CSSProperties}
    >
      <Container maxWidth="narrow">
        <SearchInput
          placeholder="Search for support topics, manuals, or parts..."
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full"
          variant="light"
        />
      </Container>
    </Section>
  );
};

