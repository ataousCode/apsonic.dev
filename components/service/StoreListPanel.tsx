'use client';

import React from 'react';
import type { Store } from '@/lib/types/store';
import { LocationIcon } from '@/components/ui/Icons';
import { colors } from '@/lib/design-tokens';
import { SERVICE_CONFIG, SERVICE_LABELS } from '@/lib/constants/service';
import { cn } from '@/lib/utils';

export interface StoreListPanelProps {
  stores: Store[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedStoreId?: string;
  onStoreSelect?: (store: Store) => void;
  className?: string;
}

export const StoreListPanel: React.FC<StoreListPanelProps> = ({
  stores,
  searchTerm,
  onSearchChange,
  selectedStoreId,
  onStoreSelect,
  className,
}) => {
  return (
    <div
      className={cn('h-full flex flex-col', className)}
      style={{
        backgroundColor: colors.service.panelOverlay,
        padding: SERVICE_CONFIG.panel.padding,
        borderRadius: SERVICE_CONFIG.panel.borderRadius,
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div
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
      </div>

      {/* Store List */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ display: 'flex', flexDirection: 'column', gap: SERVICE_CONFIG.spacing.storeListGap }}
      >
        {stores.length === 0 ? (
          <p style={{ color: colors.service.textMuted }}>{SERVICE_LABELS.noStoresFound}</p>
        ) : (
          stores.slice(0, SERVICE_CONFIG.store.initialDisplayCount).map((store) => {
            const isSelected = selectedStoreId === store.id;

            return (
              <div
                key={store.id}
                onClick={() => onStoreSelect?.(store)}
                className="cursor-pointer"
                style={{
                  borderLeft: isSelected
                    ? `${SERVICE_CONFIG.store.selectedBorderWidth}px solid ${colors.service.brandGreen}`
                    : 'none',
                  paddingLeft: isSelected
                    ? SERVICE_CONFIG.store.selectedPaddingLeft
                    : SERVICE_CONFIG.store.defaultPaddingLeft,
                }}
              >
                <h4
                  className="font-bold mb-1"
                  style={{
                    fontSize: SERVICE_CONFIG.typography.storeName,
                    color: colors.text.primary,
                  }}
                >
                  {store.name}
                </h4>
                <p
                  style={{
                    color: colors.service.textMuted,
                    fontSize: SERVICE_CONFIG.typography.storeAddress,
                  }}
                >
                  {store.address}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

