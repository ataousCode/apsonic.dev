'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProductModel } from '@/lib/types/products';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { HoverCard } from '@/components/ui/HoverCard';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface MotorcycleGridProps {
  motorcycles: ProductModel[];
  className?: string;
}

// Motorcycle model grid with pop-out image effect
export const MotorcycleGrid: React.FC<MotorcycleGridProps> = ({
  motorcycles,
  className,
}) => {
  if (motorcycles.length === 0) {
    return null;
  }

  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="large"
    >
      <Container maxWidth="wide">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          style={{ gap: SERVICE_PAGE_CONFIG.grid.gap }}
        >
          {motorcycles.map((motorcycle) => (
            <HoverCard
              key={motorcycle.id}
              as="link"
              href={`/products/${motorcycle.id}`}
              hoverTransform={SERVICE_PAGE_CONFIG.card.hoverTransform}
              hoverShadow={SERVICE_PAGE_CONFIG.card.hoverShadow}
              transition={SERVICE_PAGE_CONFIG.card.transition}
              className="block text-center"
              style={{
                backgroundColor: SERVICE_PAGE_CONFIG.colors.cardBackground,
                borderRadius: SERVICE_PAGE_CONFIG.card.borderRadius,
                padding: SERVICE_PAGE_CONFIG.card.padding,
                overflow: 'visible',
                textDecoration: 'none',
              }}
            >
              {/* Model Name */}
              <div
                className="mb-3"
                style={{
                  fontSize: SERVICE_PAGE_CONFIG.typography.modelName.fontSize,
                  fontWeight: SERVICE_PAGE_CONFIG.typography.modelName.fontWeight,
                  color: SERVICE_PAGE_CONFIG.typography.modelName.color,
                }}
              >
                {motorcycle.model}
              </div>

              {/* Motorcycle Image - Pop-out effect */}
              <div
                className="relative w-full mb-3"
                style={{
                  aspectRatio: '4/3',
                  margin: '-10px 0',
                  zIndex: 10,
                  position: 'relative',
                }}
              >
                <Image
                  src={motorcycle.image}
                  alt={motorcycle.model}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Category Label */}
              <div
                style={{
                  fontSize: SERVICE_PAGE_CONFIG.typography.categoryLabel.fontSize,
                  fontWeight: SERVICE_PAGE_CONFIG.typography.categoryLabel.fontWeight,
                  color: SERVICE_PAGE_CONFIG.typography.categoryLabel.color,
                }}
              >
                {motorcycle.category}
              </div>
            </HoverCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

