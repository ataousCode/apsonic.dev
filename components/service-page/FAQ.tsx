'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/Icons';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

// FAQ component with accordion functionality - Apple-inspired design
export const FAQ: React.FC<FAQProps> = ({
  title = 'Frequently Asked Questions',
  items,
  className,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="small"
    >
      <Container maxWidth="narrow">
        {/* Title */}
        <h2
          className="text-center mb-12"
          style={{
            fontSize: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontSize,
            fontWeight: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontWeight,
            color: SERVICE_PAGE_CONFIG.typography.sectionTitle.color,
          }}
        >
          {title}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {items.map((item, index) => {
            const isOpen = openItems.has(item.id);

            return (
              <div key={item.id}>
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between py-5 text-left transition-colors"
                  style={{
                    borderBottom: `1px solid ${SERVICE_PAGE_CONFIG.colors.border}`,
                    color: SERVICE_PAGE_CONFIG.colors.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = SERVICE_PAGE_CONFIG.colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = SERVICE_PAGE_CONFIG.colors.primary;
                  }}
                >
                  <span
                    className="flex-1 pr-4"
                    style={{
                      fontSize: SERVICE_PAGE_CONFIG.typography.linkText.fontSize,
                      fontWeight: 400,
                    }}
                  >
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    size={20}
                    className={cn(
                      'flex-shrink-0 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                    style={{ color: SERVICE_PAGE_CONFIG.colors.secondary }}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    className="pb-5 pt-2"
                    style={{
                      color: SERVICE_PAGE_CONFIG.colors.secondary,
                      fontSize: '16px',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

