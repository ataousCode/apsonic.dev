'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Store } from '@/lib/types/store';
import type { StoreQueryType } from './StoreQueryPanel';
import type { Coordinates, Address } from '@/lib/utils/geolocation';
import { LocationIcon, SearchIcon } from '@/components/ui/Icons';
import { NearbyStores } from './NearbyStores';
import { UserLocationDisplay } from './UserLocationDisplay';
import { colors } from '@/lib/design-tokens';
import { SERVICE_CONFIG, SERVICE_LABELS } from '@/lib/constants/service';
import { cn } from '@/lib/utils';

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit/whileInView/variants` during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
const MotionDiv = motion.div as unknown as React.ComponentType<Record<string, unknown>>;
const MotionP = motion.p as unknown as React.ComponentType<Record<string, unknown>>;

export interface StoreListPanelProps {
  stores: Store[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedStoreId?: string;
  onStoreSelect?: (store: Store) => void;
  onCountrySearch?: (country: string) => void;
  selectedCountry?: string;
  queryType?: StoreQueryType | null;
  userLocation?: Coordinates | null;
  userAddress?: Address | null;
  isLoadingLocation?: boolean;
  locationError?: string | null;
  className?: string;
}

export const StoreListPanel: React.FC<StoreListPanelProps> = ({
  stores,
  searchTerm,
  onSearchChange,
  selectedStoreId,
  onStoreSelect,
  onCountrySearch,
  selectedCountry,
  queryType = null,
  userLocation,
  userAddress,
  isLoadingLocation = false,
  locationError,
  className,
}) => {
  const isNearbyQuery = queryType === 'nearby';
  const hasSearch = searchTerm.trim().length > 0 || isNearbyQuery;
  const hasResults = stores.length > 0;
  const showNearbyResults = isNearbyQuery && !isLoadingLocation && !locationError;

  return (
    <div
      className={cn('h-full flex flex-col', className)}
      style={{
        backgroundColor: colors.service.panelOverlay,
        padding: 'clamp(20px, 4vw, 30px) clamp(16px, 3vw, 40px)',
        borderRadius: '0',
      }}
    >
      {/* Search Bar */}
      <div style={{ marginBottom: SERVICE_CONFIG.spacing.searchMarginBottom }}>
        <div
          className="relative"
          style={{
            border: `2px solid ${colors.service.brandGreen}`,
            borderRadius: '10px',
          }}
        >
          <input
            type="text"
            placeholder={SERVICE_LABELS.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 pl-10 focus:outline-none"
            style={{
              backgroundColor: colors.service.inputDark,
              color: colors.text.primary,
              borderRadius: '8px',
            }}
          />
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: colors.service.textMuted }}
          >
            <SearchIcon className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Section Title - Show for nearby query or when there's a search */}
      <AnimatePresence>
        {(hasSearch || isNearbyQuery) && (
          <MotionDiv
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
            style={{
              marginTop: SERVICE_CONFIG.spacing.titleMarginTop,
              marginBottom: SERVICE_CONFIG.spacing.titleMarginBottom,
            }}
          >
            <LocationIcon
              size={28}
              style={{ color: colors.text.primary, marginRight: '10px' }}
            />
            <h3
              className="font-bold"
              style={{
                fontSize: SERVICE_CONFIG.typography.listTitle,
                color: colors.text.primary,
              }}
            >
              {SERVICE_LABELS.listTitle}
            </h3>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* User Location Display */}
      {isNearbyQuery && userLocation && userAddress && (
        <UserLocationDisplay location={userLocation} address={userAddress} />
      )}

      {/* Store Results - Show NearbyStores component when there are results */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {isLoadingLocation ? (
            <MotionDiv
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 mb-4" style={{ borderColor: colors.service.brandGreen }} />
              <p style={{ color: colors.service.textMuted }}>
                Finding your location...
              </p>
            </MotionDiv>
          ) : locationError ? (
            <MotionDiv
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-lg"
              style={{
                backgroundColor: colors.background.secondary,
                border: `1px solid ${colors.ui.border}`,
              }}
            >
              <p className="mb-2" style={{ color: colors.text.primary }}>
                Unable to get your location
              </p>
              <p className="text-sm" style={{ color: colors.text.secondary }}>
                {locationError}
              </p>
              <p className="text-sm mt-2" style={{ color: colors.text.secondary }}>
                Please enable location services or search for a location manually.
              </p>
            </MotionDiv>
          ) : showNearbyResults && hasResults ? (
            <MotionDiv
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NearbyStores stores={stores} country={selectedCountry} />
            </MotionDiv>
          ) : showNearbyResults && !hasResults ? (
            <MotionDiv
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-lg"
              style={{
                backgroundColor: colors.background.secondary,
                border: `1px solid ${colors.ui.border}`,
              }}
            >
              <p className="mb-2 font-medium" style={{ color: colors.text.primary }}>
                No APSONIC service found nearby
              </p>
              {userAddress && (
                <div className="text-sm" style={{ color: colors.text.secondary }}>
                  {userAddress.address && userAddress.address !== userAddress.fullAddress && (
                    <p className="mb-1">{userAddress.address}</p>
                  )}
                  <p>{userAddress.city !== 'Unknown' && userAddress.city}, {userAddress.country}</p>
                </div>
              )}
              {userLocation && !userAddress && (
                <p className="text-sm" style={{ color: colors.text.secondary }}>
                  Your location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                </p>
              )}
              <p className="text-sm mt-2" style={{ color: colors.text.secondary }}>
                Please try searching for a specific location or country.
              </p>
            </MotionDiv>
          ) : hasSearch && hasResults ? (
            <MotionDiv
              key="search-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NearbyStores stores={stores} country={selectedCountry} />
            </MotionDiv>
          ) : hasSearch && !hasResults ? (
            <MotionP
              key="no-search-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ color: colors.service.textMuted }}
            >
              {SERVICE_LABELS.noStoresFound}
            </MotionP>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

