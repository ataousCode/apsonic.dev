/**
 * Africa region mapping for APSONIC presence
 * Maps countries to their regions for map styling
 */

export type AfricaRegion = 'west' | 'east' | 'central' | 'other';

export interface CountryRegion {
  country: string;
  isoCode: string;
  region: AfricaRegion;
  presence: 'strong' | 'indirect' | 'coverage';
}

/**
 * Countries with APSONIC presence by region
 * Based on business requirements
 */
export const APSONIC_COUNTRIES_BY_REGION: Record<AfricaRegion, CountryRegion[]> = {
  // West Africa - Strong presence (Green)
  west: [
    { country: 'Ghana', isoCode: 'GHA', region: 'west', presence: 'strong' },
    { country: 'Togo', isoCode: 'TGO', region: 'west', presence: 'strong' },
    { country: 'Benin', isoCode: 'BEN', region: 'west', presence: 'strong' },
    { country: 'Mali', isoCode: 'MLI', region: 'west', presence: 'strong' },
    { country: 'Guinea', isoCode: 'GIN', region: 'west', presence: 'strong' },
    { country: 'Burkina Faso', isoCode: 'BFA', region: 'west', presence: 'strong' },
    { country: 'Ivory Coast', isoCode: 'CIV', region: 'west', presence: 'strong' },
    { country: "Côte d'Ivoire", isoCode: 'CIV', region: 'west', presence: 'strong' },
  ],

  // East Africa - Yellow
  east: [
    { country: 'Tanzania', isoCode: 'TZA', region: 'east', presence: 'strong' },
    { country: 'Kenya', isoCode: 'KEN', region: 'east', presence: 'strong' },
    { country: 'Uganda', isoCode: 'UGA', region: 'east', presence: 'strong' },
  ],

  // Central Africa - Orange
  central: [
    { country: 'Cameroon', isoCode: 'CMR', region: 'central', presence: 'indirect' },
    { country: 'Central African Republic', isoCode: 'CAF', region: 'central', presence: 'indirect' },
    { country: 'Republic of Congo', isoCode: 'COG', region: 'central', presence: 'indirect' },
    { country: 'Congo', isoCode: 'COG', region: 'central', presence: 'indirect' },
    { country: 'Democratic Republic of Congo', isoCode: 'COD', region: 'central', presence: 'indirect' },
    { country: 'DR Congo', isoCode: 'COD', region: 'central', presence: 'indirect' },
  ],

  // Other African Markets - Blue (Coverage/Parts)
  other: [
    { country: 'Senegal', isoCode: 'SEN', region: 'other', presence: 'coverage' },
    { country: 'Nigeria', isoCode: 'NGA', region: 'other', presence: 'coverage' },
    { country: 'Egypt', isoCode: 'EGY', region: 'other', presence: 'coverage' },
    { country: 'Ethiopia', isoCode: 'ETH', region: 'other', presence: 'coverage' },
    { country: 'Somalia', isoCode: 'SOM', region: 'other', presence: 'coverage' },
    { country: 'South Africa', isoCode: 'ZAF', region: 'other', presence: 'coverage' },
    { country: 'Tunisia', isoCode: 'TUN', region: 'other', presence: 'coverage' },
  ],
};

/**
 * Get region for a country by ISO code
 */
export const getCountryRegion = (isoCode: string): AfricaRegion | null => {
  for (const region of Object.keys(APSONIC_COUNTRIES_BY_REGION) as AfricaRegion[]) {
    const found = APSONIC_COUNTRIES_BY_REGION[region].find(
      (country) => country.isoCode === isoCode
    );
    if (found) {
      return found.region;
    }
  }
  return null;
};

/**
 * Get region for a country by country name
 */
export const getCountryRegionByName = (countryName: string): AfricaRegion | null => {
  const searchLower = countryName.toLowerCase().trim();
  
  for (const region of Object.keys(APSONIC_COUNTRIES_BY_REGION) as AfricaRegion[]) {
    const found = APSONIC_COUNTRIES_BY_REGION[region].find(
      (country) => country.country.toLowerCase() === searchLower
    );
    if (found) {
      return found.region;
    }
  }
  return null;
};

/**
 * Check if a country has APSONIC presence
 */
export const hasApsonicPresence = (isoCode: string): boolean => {
  return getCountryRegion(isoCode) !== null;
};

