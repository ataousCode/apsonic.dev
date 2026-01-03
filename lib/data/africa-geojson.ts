// GeoJSON data for African countries
// This will be used with Mapbox for data-driven styling
// Countries where APSONIC is available are marked with apsAvailable: true

import type { FeatureCollection, Feature, Geometry } from 'geojson';

// Countries where APSONIC is available (from stores data)
export const APSONIC_AVAILABLE_COUNTRIES = [
  'Ghana',
  'Togo',
  'Benin',
  'Mali',
] as const;

// All African countries with their ISO codes
// This is a simplified structure - in production, use a complete GeoJSON file
export interface CountryFeature extends Feature {
  properties: {
    name: string;
    isoCode: string;
    apsAvailable: boolean;
    isSearched: boolean;
  };
}

// Helper to check if a country has APSONIC available
export const isApsonicAvailable = (countryName: string): boolean => {
  return APSONIC_AVAILABLE_COUNTRIES.some(
    (country) => country.toLowerCase() === countryName.toLowerCase()
  );
};

// Create initial GeoJSON structure
// Note: In production, load actual GeoJSON from a file or API
// For now, we'll use Mapbox boundaries and update properties dynamically
export const createInitialGeoJSON = (): FeatureCollection => {
  // This is a placeholder - actual implementation will use Mapbox boundaries
  // and update properties dynamically
  return {
    type: 'FeatureCollection',
    features: [],
  };
};

