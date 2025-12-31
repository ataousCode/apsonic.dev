'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { HoverCard } from '@/components/ui/HoverCard';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface ExploreCard {
  id: string;
  icon: string;
  title: string;
  ctaText: string;
  href: string;
}

export interface ExploreMoreProps {
  cards: ExploreCard[];
  className?: string;
}

// Explore More section - two small cards
export const ExploreMore: React.FC<ExploreMoreProps> = ({
  cards,
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="small"
    >
      <Container maxWidth="narrow">
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: SERVICE_PAGE_CONFIG.grid.gap }}
        >
          {cards.map((card) => (
            <HoverCard
              key={card.id}
              as="link"
              href={card.href}
              hoverTransform={SERVICE_PAGE_CONFIG.card.hoverTransform}
              hoverShadow={SERVICE_PAGE_CONFIG.card.hoverShadow}
              transition={SERVICE_PAGE_CONFIG.card.transition}
              className="block text-center"
              style={{
                backgroundColor: SERVICE_PAGE_CONFIG.colors.background,
                borderRadius: SERVICE_PAGE_CONFIG.card.borderRadius,
                padding: SERVICE_PAGE_CONFIG.card.padding,
                border: `1px solid ${SERVICE_PAGE_CONFIG.colors.border}`,
                textDecoration: 'none',
              }}
            >
              {/* Icon/Emoji */}
              <div
                className="text-6xl mb-4"
                style={{ fontSize: '64px' }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: SERVICE_PAGE_CONFIG.colors.primary,
                }}
              >
                {card.title}
              </h3>

              {/* CTA Link */}
              <span
                className="inline-block"
                style={{
                  color: SERVICE_PAGE_CONFIG.colors.accent,
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                {card.ctaText} →
              </span>
            </HoverCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

