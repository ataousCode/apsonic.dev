'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { SERVICE_COVERAGE_COUNTRIES, SERVICE_COVERAGE_STATS } from '@/lib/data/service-page';
import { cn } from '@/lib/utils';

export interface Country {
  flag: string;
  name: string;
}

export interface ServiceCoverageProps {
  countries?: Country[];
  stats?: {
    servicePoints: string;
    subsidiaries: string;
    dealers: string;
  };
  className?: string;
}

// Service coverage section with country flags and statistics
export const ServiceCoverage: React.FC<ServiceCoverageProps> = ({
  countries = SERVICE_COVERAGE_COUNTRIES,
  stats = SERVICE_COVERAGE_STATS,
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="small"
      style={{ borderTop: `1px solid ${SERVICE_PAGE_CONFIG.colors.border}` }}
    >
      <Container maxWidth="wide">
        {/* Heading */}
        <h2
          className="text-center mb-8"
          style={{
            fontSize: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontSize,
            fontWeight: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontWeight,
            color: SERVICE_PAGE_CONFIG.typography.sectionTitle.color,
          }}
        >
          Our Service Network Spans West Africa
        </h2>

        {/* Countries */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((country, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-full"
              style={{
                backgroundColor: SERVICE_PAGE_CONFIG.colors.cardBackground,
                fontSize: '14px',
                color: SERVICE_PAGE_CONFIG.colors.primary,
              }}
            >
              {country.flag} {country.name}
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: SERVICE_PAGE_CONFIG.colors.secondary,
                marginBottom: '4px',
              }}
            >
              {stats.servicePoints}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: SERVICE_PAGE_CONFIG.colors.secondary,
              }}
            >
              Service Points
            </div>
          </div>
          <div className="text-center">
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: SERVICE_PAGE_CONFIG.colors.secondary,
                marginBottom: '4px',
              }}
            >
              {stats.subsidiaries}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: SERVICE_PAGE_CONFIG.colors.secondary,
              }}
            >
              Subsidiaries
            </div>
          </div>
          <div className="text-center">
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: SERVICE_PAGE_CONFIG.colors.secondary,
                marginBottom: '4px',
              }}
            >
              {stats.dealers}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: SERVICE_PAGE_CONFIG.colors.secondary,
              }}
            >
              Authorized Dealers
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

