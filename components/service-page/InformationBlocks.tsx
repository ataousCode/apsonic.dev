'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface InfoBlock {
  id: string;
  title: string;
  content: string | string[];
  ctaText: string;
  href: string;
  variant?: 'default' | 'warning';
}

export interface InformationBlocksProps {
  blocks: InfoBlock[];
  className?: string;
}

// Information blocks section - three cards
export const InformationBlocks: React.FC<InformationBlocksProps> = ({
  blocks,
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="small"
    >
      <Container maxWidth="wide">
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: SERVICE_PAGE_CONFIG.grid.gap }}
        >
          {blocks.map((block) => (
            <div
              key={block.id}
              className={cn(
                'rounded-lg p-6',
                SERVICE_PAGE_CONFIG.card.transition
              )}
              style={{
                backgroundColor:
                  block.variant === 'warning'
                    ? SERVICE_PAGE_CONFIG.colors.warning
                    : SERVICE_PAGE_CONFIG.colors.cardBackground,
                borderLeft:
                  block.variant === 'warning'
                    ? `4px solid ${SERVICE_PAGE_CONFIG.colors.warningBorder}`
                    : 'none',
              }}
            >
              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: SERVICE_PAGE_CONFIG.colors.primary,
                }}
              >
                {block.title}
              </h3>

              {/* Content */}
              {Array.isArray(block.content) ? (
                <ul className="mb-4 space-y-2">
                  {block.content.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: '14px',
                        color: SERVICE_PAGE_CONFIG.colors.secondary,
                        lineHeight: 1.6,
                        listStyle: 'disc',
                        marginLeft: '20px',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="mb-4"
                  style={{
                    fontSize: '14px',
                    color: SERVICE_PAGE_CONFIG.colors.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {block.content}
                </p>
              )}

              {/* CTA Link */}
              <Link
                href={block.href}
                className="inline-block"
                style={{
                  color: SERVICE_PAGE_CONFIG.colors.accent,
                  fontWeight: 500,
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                {block.ctaText} →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

