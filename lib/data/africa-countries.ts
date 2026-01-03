// African countries GeoJSON data structure
// This will be used to create GeoJSON features for the map
// In production, load from a GeoJSON file or API

import type { FeatureCollection, Feature, Geometry } from 'geojson';

// Countries where APSONIC is available
export const APSONIC_AVAILABLE_COUNTRIES = ['Ghana', 'Togo', 'Benin', 'Mali'] as const;

// Country ISO codes mapping
export const COUNTRY_ISO_CODES: Record<string, string> = {
  // West Africa
  'Ghana': 'GHA',
  'Togo': 'TGO',
  'Benin': 'BEN',
  'Mali': 'MLI',
  'Nigeria': 'NGA',
  'Senegal': 'SEN',
  'Gambia': 'GMB',
  'Guinea': 'GIN',
  'Guinea-Bissau': 'GNB',
  'Sierra Leone': 'SLE',
  'Liberia': 'LBR',
  'Ivory Coast': 'CIV',
  'Niger': 'NER',
  'Burkina Faso': 'BFA',
  'Mauritania': 'MRT',
  'Cape Verde': 'CPV',
  // East Africa
  'Ethiopia': 'ETH',
  'Eritrea': 'ERI',
  'Djibouti': 'DJI',
  'Somalia': 'SOM',
  'Kenya': 'KEN',
  'Uganda': 'UGA',
  'Rwanda': 'RWA',
  'Burundi': 'BDI',
  'Tanzania': 'TZA',
  'South Sudan': 'SSD',
  // Central Africa
  'Central African Republic': 'CAF',
  'Chad': 'TCD',
  'Cameroon': 'CMR',
  'Equatorial Guinea': 'GNQ',
  'Gabon': 'GAB',
  'Congo': 'COG',
  'Democratic Republic of Congo': 'COD',
  'São Tomé and Príncipe': 'STP',
  'Angola': 'AGO',
  // Southern Africa
  'Zambia': 'ZMB',
  'Malawi': 'MWI',
  'Mozambique': 'MOZ',
  'Zimbabwe': 'ZWE',
  'Botswana': 'BWA',
  'Namibia': 'NAM',
  'South Africa': 'ZAF',
  'Lesotho': 'LSO',
  'Swaziland': 'SWZ',
  'Eswatini': 'SWZ',
  'Madagascar': 'MDG',
  'Mauritius': 'MUS',
};

// Helper to check if country has APSONIC
export const isApsonicAvailable = (countryName: string): boolean => {
  return APSONIC_AVAILABLE_COUNTRIES.some(
    (country) => country.toLowerCase() === countryName.toLowerCase()
  );
};

// Helper to get ISO code
export const getISOCode = (countryName: string): string | undefined => {
  return COUNTRY_ISO_CODES[countryName];
};

