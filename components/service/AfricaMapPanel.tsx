'use client';

import React, { useEffect, useCallback } from 'react';
import type { FeatureCollection } from 'geojson';
import { AFRICA_MAP_CONFIG } from '@/lib/constants/africa-map';
import { useMapInitializer } from './MapInitializer';
import { useUserLocationMarker } from './UserLocationMarker';
import { fetchAfricanGeoJSON } from '@/lib/utils/geojson';
import { updateGeoJSONSource, addRegionLayers, updateSearchHighlight } from '@/lib/utils/map-layers';
import { getBoundsFromFeature } from '@/lib/utils/map-bounds';
import { cn } from '@/lib/utils';

export interface AfricaMapPanelProps {
  selectedCountry?: string;
  onCountrySelect?: (countryCode: string) => void;
  userLocation?: { lat: number; lng: number } | null;
  showOnlyUserLocation?: boolean;
  className?: string;
}

/**
 * Africa map panel component
 * Displays interactive map with region-based country coloring
 */
export const AfricaMapPanel: React.FC<AfricaMapPanelProps> = ({
  selectedCountry,
  onCountrySelect,
  userLocation,
  showOnlyUserLocation = false,
  className,
}) => {
  const { map, isLoaded, mapContainer } = useMapInitializer();
  const geoJsonDataRef = React.useRef<FeatureCollection | null>(null);

  // Initialize user location marker
  useUserLocationMarker({
    map: map.current,
    userLocation,
    show: showOnlyUserLocation,
  });

  // Load and process GeoJSON data
  const loadGeoJSONData = useCallback(async () => {
    if (!map.current || !isLoaded) return;

    const geoJson = await fetchAfricanGeoJSON(selectedCountry);
    if (!geoJson) return;

    geoJsonDataRef.current = geoJson;
    updateGeoJSONSource(map.current, geoJson);
    
    // Add layers after source is ready
    setTimeout(() => {
      if (map.current && map.current.getSource('africa-countries')) {
        addRegionLayers(map.current);
      }
    }, 100);
  }, [map, isLoaded, selectedCountry]);

  // Load GeoJSON when map is ready
  useEffect(() => {
    if (isLoaded) {
      loadGeoJSONData();
    }
  }, [isLoaded, loadGeoJSONData]);

  // Update search highlight when selectedCountry changes
  useEffect(() => {
    if (!map.current || !isLoaded || !geoJsonDataRef.current) return;

    const updatedGeoJson = updateSearchHighlight(
      map.current,
      geoJsonDataRef.current,
      selectedCountry?.trim() || null
    );

    geoJsonDataRef.current = updatedGeoJson;
    updateGeoJSONSource(map.current, updatedGeoJson);

    // Animate to searched country
    if (selectedCountry?.trim() && geoJsonDataRef.current) {
      const searchedFeature = geoJsonDataRef.current.features.find(
        (f) => (f.properties?.name as string)?.toLowerCase() === selectedCountry.toLowerCase()
      );

      if (searchedFeature) {
        const bounds = getBoundsFromFeature(searchedFeature);
        if (bounds) {
          map.current.fitBounds(bounds, {
            padding: 100,
            duration: AFRICA_MAP_CONFIG.animation.duration,
            easing: (t: number) => t * (2 - t),
          });
        }
      }
    } else if (!selectedCountry?.trim()) {
      // Reset to default view when search is cleared
      map.current.fitBounds(AFRICA_MAP_CONFIG.bounds.africa, {
        padding: 50,
        duration: 1000,
        easing: (t: number) => t * (2 - t),
      });
    }
  }, [selectedCountry, isLoaded, map]);

  // Reset map view when showOnlyUserLocation changes
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    if (!showOnlyUserLocation) {
      map.current.fitBounds(AFRICA_MAP_CONFIG.bounds.africa, {
        padding: 50,
        duration: 1000,
        easing: (t: number) => t * (2 - t),
      });
    } else if (userLocation) {
      map.current.flyTo({
        center: [userLocation.lng, userLocation.lat],
        zoom: 10,
        duration: 1500,
      });
    }
  }, [showOnlyUserLocation, userLocation, isLoaded, map]);

  return (
    <div ref={mapContainer} className={cn('w-full h-full', className)} />
  );
};
