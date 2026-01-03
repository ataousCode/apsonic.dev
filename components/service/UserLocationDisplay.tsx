'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Coordinates, Address } from '@/lib/utils/geolocation';
import { colors } from '@/lib/design-tokens';

interface UserLocationDisplayProps {
  location: Coordinates;
  address: Address;
  className?: string;
}

/**
 * Displays user's location with formatted address
 * Shows street address, city/country, and coordinates as fallback
 */
export const UserLocationDisplay: React.FC<UserLocationDisplayProps> = ({
  location,
  address,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`mb-4 p-3 rounded-lg ${className || ''}`}
      style={{
        backgroundColor: colors.background.secondary,
        border: `1px solid ${colors.ui.border}`,
      }}
    >
      <p className="text-sm mb-2 font-medium" style={{ color: colors.text.primary }}>
        Your Location:
      </p>
      {address.address && address.address !== address.fullAddress && (
        <p className="text-sm mb-1" style={{ color: colors.text.secondary }}>
          {address.address}
        </p>
      )}
      <p className="text-sm mb-1" style={{ color: colors.text.secondary }}>
        {address.city !== 'Unknown' && address.city}, {address.country}
      </p>
      <p className="text-xs mt-1" style={{ color: colors.text.muted }}>
        {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
      </p>
    </motion.div>
  );
};

