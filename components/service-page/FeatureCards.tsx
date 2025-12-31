'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { HoverCard } from '@/components/ui/HoverCard';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface FeatureCard {
  id: string;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

export interface FeatureCardsProps {
  cards: FeatureCard[];
  className?: string;
}

// Feature cards section - two large cards
export const FeatureCards: React.FC<FeatureCardsProps> = ({
  cards,
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="large"
    >
      <Container maxWidth="wide">
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: SERVICE_PAGE_CONFIG.grid.cardGap }}
        >
          {cards.map((card) => (
            <HoverCard
              key={card.id}
              as="link"
              href={card.href}
              hoverTransform={SERVICE_PAGE_CONFIG.featureCard.hoverTransform}
              hoverShadow={SERVICE_PAGE_CONFIG.featureCard.hoverShadow}
              transition={SERVICE_PAGE_CONFIG.card.transition}
              className="block text-center"
              style={{
                backgroundColor: SERVICE_PAGE_CONFIG.colors.cardBackground,
                borderRadius: SERVICE_PAGE_CONFIG.card.borderRadius,
                padding: SERVICE_PAGE_CONFIG.featureCard.padding,
                textDecoration: 'none',
              }}
            >
              {/* Image */}
              <div
                className="relative w-full mb-6 rounded-xl overflow-hidden"
                style={{
                  height: SERVICE_PAGE_CONFIG.featureCard.imageHeight,
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontSize: SERVICE_PAGE_CONFIG.typography.cardTitle.fontSize,
                  fontWeight: SERVICE_PAGE_CONFIG.typography.cardTitle.fontWeight,
                  color: SERVICE_PAGE_CONFIG.typography.cardTitle.color,
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="mb-6"
                style={{
                  fontSize: '16px',
                  color: SERVICE_PAGE_CONFIG.colors.secondary,
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>

              {/* CTA Link */}
              <span
                className="inline-block"
                style={{
                  color: SERVICE_PAGE_CONFIG.colors.accent,
                  fontWeight: 500,
                  textDecoration: 'none',
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

