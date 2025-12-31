'use client';

import React, { useState, useMemo } from 'react';
import { StoreQueryPanel, type StoreQueryType } from './StoreQueryPanel';
import { StoreListPanel } from './StoreListPanel';
import { StoreMapPanel } from './StoreMapPanel';
import { Button } from '@/components/ui/Button';
import { STORES, filterStores } from '@/lib/data/stores';
import type { Store, StoreFilter } from '@/lib/types/store';
import { colors, spacing } from '@/lib/design-tokens';
import { SERVICE_CONFIG, SERVICE_LABELS } from '@/lib/constants/service';
import { cn } from '@/lib/utils';

export interface ServiceSupportProps {
  className?: string;
}

export const ServiceSupport: React.FC<ServiceSupportProps> = ({
  className,
}) => {
  const [queryType, setQueryType] = useState<StoreQueryType>('pickup');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | undefined>();

  // Filter stores based on query type and search
  const filteredStores = useMemo(() => {
    const filter: StoreFilter = {
      type: queryType === 'pickup' ? 'dealer' : 'all',
      search: searchTerm,
    };
    return filterStores(STORES, filter);
  }, [queryType, searchTerm]);

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

        {/* Three Column Layout with Map as Background */}
        <div className="relative mb-8" style={{ minHeight: '600px', display: 'flex' }}>
          {/* Map - Full Width Background (extends behind middle panel) */}
          <div
            className="absolute inset-0"
            style={{
              left: SERVICE_CONFIG.layout.mapStartPosition,
              right: 0,
              zIndex: 1,
            }}
          >
            <StoreMapPanel
              stores={filteredStores}
              selectedStore={selectedStore}
              onStoreSelect={setSelectedStore}
              className="h-full"
            />
          </div>

          {/* Left Panel - Opaque */}
          <div
            style={{
              width: SERVICE_CONFIG.layout.leftPanelWidth,
              flexShrink: 0,
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
            style={{
              width: SERVICE_CONFIG.layout.middlePanelWidth,
              flexShrink: 0,
              position: 'relative',
              zIndex: 2,
            }}
          >
            <StoreListPanel
              stores={filteredStores}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedStoreId={selectedStore?.id}
              onStoreSelect={setSelectedStore}
              className="h-full"
            />
          </div>
        </div>

        {/* Bottom Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="md"
            style={{
              backgroundColor: colors.background.white,
              border: `1px solid ${colors.ui.border}`,
              color: colors.text.black,
            }}
          >
            {SERVICE_LABELS.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

