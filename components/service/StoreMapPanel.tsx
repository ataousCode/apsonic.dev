'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { Store } from '@/lib/types/store';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { colors } from '@/lib/design-tokens';
import { SERVICE_CONFIG } from '@/lib/constants/service';
import { cn } from '@/lib/utils';

export interface StoreMapPanelProps {
  stores: Store[];
  selectedStore?: Store;
  onStoreSelect?: (store: Store) => void;
  className?: string;
}

export const StoreMapPanel: React.FC<StoreMapPanelProps> = ({
  stores,
  selectedStore,
  onStoreSelect,
  className,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error('NEXT_PUBLIC_MAPBOX_TOKEN is not set');
      return;
    }

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: SERVICE_CONFIG.map.style,
      center: SERVICE_CONFIG.map.defaultCenter,
      zoom: SERVICE_CONFIG.map.defaultZoom,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.current.on('load', () => {
      setIsLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Update markers when stores change
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add markers for each store
    stores.forEach((store) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = `${SERVICE_CONFIG.map.markerSize}px`;
      el.style.height = `${SERVICE_CONFIG.map.markerSize}px`;
      el.style.borderRadius = '50%';
      el.style.backgroundColor =
        selectedStore?.id === store.id
          ? colors.service.brandGreenLight
          : colors.service.brandGreen;
      el.style.border = `${SERVICE_CONFIG.map.markerBorderWidth}px solid ${colors.service.white}`;
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div style="color: ${colors.text.black}; font-family: system-ui;">
          <h3 style="font-weight: 600; margin-bottom: 4px; font-size: 14px;">${store.name}</h3>
          <p style="font-size: 12px; color: ${colors.service.textSecondary};">${store.address}</p>
        </div>`
      );

      const marker = new mapboxgl.Marker(el)
        .setLngLat([store.coordinates.lng, store.coordinates.lat])
        .setPopup(popup)
        .addTo(map.current!);

      el.addEventListener('click', () => {
        onStoreSelect?.(store);
        popup.addTo(map.current!);
      });

      markersRef.current.push(marker);
    });

    // Fit map to show all stores
    if (stores.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      stores.forEach((store) => {
        bounds.extend([store.coordinates.lng, store.coordinates.lat]);
      });
      map.current.fitBounds(bounds, {
        padding: SERVICE_CONFIG.map.fitBoundsPadding,
        maxZoom: SERVICE_CONFIG.map.fitBoundsMaxZoom,
      });
    }
  }, [stores, selectedStore, isLoaded, onStoreSelect]);

  return (
    <div
      ref={mapContainer}
      className={cn('w-full h-full', className)}
      style={{
        minHeight: '600px',
      }}
    />
  );
};

