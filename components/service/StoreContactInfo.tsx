'use client';

import React from 'react';
import type { Store } from '@/lib/types/store';
import { PhoneIcon, MailIcon, ClockIcon } from '@/components/ui/Icons';
import { colors } from '@/lib/design-tokens';
import { SERVICE_CONFIG } from '@/lib/constants/service';

interface StoreContactInfoProps {
  store: Store;
}

/**
 * Renders store contact information (phone, email, working hours)
 * Uses consistent styling and formatting
 */
export const StoreContactInfo: React.FC<StoreContactInfoProps> = ({ store }) => {
  const contactStyle = {
    color: colors.service.brandGreen,
    fontSize: SERVICE_CONFIG.typography.storeAddress,
    textDecoration: 'none' as const,
  };

  return (
    <div className="space-y-2">
      {store.phone && (
        <div className="flex items-center gap-2">
          <PhoneIcon className="w-4 h-4" style={{ color: colors.text.secondary }} />
          <a href={`tel:${store.phone}`} style={contactStyle} className="hover:underline">
            {store.phone}
          </a>
        </div>
      )}

      {store.email && (
        <div className="flex items-center gap-2">
          <MailIcon className="w-4 h-4" style={{ color: colors.text.secondary }} />
          <a href={`mailto:${store.email}`} style={contactStyle} className="hover:underline">
            {store.email}
          </a>
        </div>
      )}

      {store.workingHours && (
        <div className="flex items-center gap-2">
          <ClockIcon className="w-4 h-4" style={{ color: colors.text.secondary }} />
          <p
            style={{
              color: colors.text.secondary,
              fontSize: SERVICE_CONFIG.typography.storeAddress,
            }}
          >
            {store.workingHours}
          </p>
        </div>
      )}
    </div>
  );
};

