'use client';

import React from 'react';
import { StoreQueryPanel } from './StoreQueryPanel';
import { StoreListPanel } from './StoreListPanel';
import { AfricaMapPanel } from './AfricaMapPanel';
import { Button } from '@/components/ui/Button';
import { colors, spacing } from '@/lib/design-tokens';
import { SERVICE_CONFIG, SERVICE_LABELS } from '@/lib/constants/service';
import { useServiceSupport } from '@/hooks/useServiceSupport';
import { cn } from '@/lib/utils';

export interface ServiceSupportProps {
  className?: string;
}

export const ServiceSupport: React.FC<ServiceSupportProps> = ({
  className,
}) => {
  const {
    queryType,
    setQueryType,
    searchTerm,
    selectedStore,
    setSelectedStore,
    selectedCountry,
    userLocation,
    userAddress,
    isLoadingLocation,
    locationError,
    filteredStores,
    handleSearchChange,
    handleCountrySelect,
  } = useServiceSupport();

  return (
    <section
      className={cn('w-full', spacing.section.vertical, className)}
      style={{ backgroundColor: colors.background.white }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8">
          <h2
            className="font-bold"
            style={{
              fontSize: SERVICE_CONFIG.typography.sectionTitle,
              color: colors.service.brandGreen,
            }}
          >
            {SERVICE_LABELS.sectionTitle}
          </h2>
        </div>

        {/* Responsive Layout: Vertical on mobile, Horizontal on desktop */}
        <div className="mb-8">
          {/* Mobile: Vertical Stack */}
          <div className="flex flex-col lg:hidden">
            {/* Left Panel */}
            <div className="w-full">
              <StoreQueryPanel
                queryType={queryType}
                onQueryTypeChange={setQueryType}
                className="h-auto min-h-[200px]"
              />
            </div>

            {/* Middle Panel */}
            <div className="w-full">
              <StoreListPanel
                stores={filteredStores}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                selectedStoreId={selectedStore?.id}
                onStoreSelect={setSelectedStore}
                onCountrySearch={handleCountrySelect}
                selectedCountry={selectedCountry}
                queryType={queryType}
                userLocation={userLocation}
                userAddress={userAddress}
                isLoadingLocation={isLoadingLocation}
                locationError={locationError}
                className="h-auto min-h-[300px]"
              />
            </div>

            {/* Map Panel */}
            <div className="w-full" style={{ minHeight: '400px', height: '400px' }}>
              <AfricaMapPanel
                selectedCountry={searchTerm.trim() ? (selectedCountry || searchTerm) : ''}
                onCountrySelect={handleCountrySelect}
                userLocation={queryType === 'nearby' ? userLocation : null}
                showOnlyUserLocation={queryType === 'nearby'}
                className="h-full"
              />
            </div>
          </div>

          {/* Desktop: Horizontal Layout with Map as Background */}
          <div className="hidden lg:flex relative" style={{ minHeight: '600px' }}>
            {/* Left Panel - Opaque */}
            <div
              className="flex-shrink-0"
              style={{
                width: SERVICE_CONFIG.layout.leftPanelWidth,
                position: 'relative',
                zIndex: 3,
              }}
            >
              <StoreQueryPanel
                queryType={queryType}
                onQueryTypeChange={setQueryType}
                className="h-full"
              />
            </div>

            {/* Middle Panel - Semi-transparent overlay */}
            <div
              className="flex-shrink-0"
              style={{
                width: SERVICE_CONFIG.layout.middlePanelWidth,
                position: 'relative',
                zIndex: 2,
              }}
            >
              <StoreListPanel
                stores={filteredStores}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                selectedStoreId={selectedStore?.id}
                onStoreSelect={setSelectedStore}
                onCountrySearch={handleCountrySelect}
                selectedCountry={selectedCountry}
                queryType={queryType}
                userLocation={userLocation}
                userAddress={userAddress}
                isLoadingLocation={isLoadingLocation}
                locationError={locationError}
                className="h-full"
              />
            </div>

            {/* Map - Starts exactly after middle panel, centered in remaining space */}
            <div
              className="absolute inset-0"
              style={{
                left: `${parseFloat(SERVICE_CONFIG.layout.leftPanelWidth) + parseFloat(SERVICE_CONFIG.layout.middlePanelWidth)}%`,
                right: 0,
                zIndex: 1,
              }}
            >
              <AfricaMapPanel
                selectedCountry={searchTerm.trim() ? (selectedCountry || searchTerm) : ''}
                onCountrySelect={handleCountrySelect}
                userLocation={queryType === 'nearby' ? userLocation : null}
                showOnlyUserLocation={queryType === 'nearby'}
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="md"
            style={{
              backgroundColor: colors.background.white,
              border: `2px solid ${colors.service.brandGreen}`,
              color: colors.service.brandGreen,
              fontWeight: 600,
            }}
          >
            {SERVICE_LABELS.buttonText}
          </Button>
        </div>

      </div>
    </section>
  );
};

