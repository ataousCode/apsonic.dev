// Country ISO code mapping utilities
import { COUNTRY_NAME_MAP } from '@/lib/constants/africa-map';

export const getCountryISOCode = (countryName: string): string | null => {
  const searchLower = countryName.toLowerCase().trim();
  
  // Direct mapping lookup
  let countryCode = COUNTRY_NAME_MAP[searchLower];
  
  // Partial match fallback
  if (!countryCode) {
    for (const [key, code] of Object.entries(COUNTRY_NAME_MAP)) {
      const keyLower = key.toLowerCase();
      if (keyLower === searchLower || 
          keyLower.includes(searchLower) || 
          searchLower.includes(keyLower) ||
          keyLower.startsWith(searchLower) ||
          searchLower.startsWith(keyLower)) {
        countryCode = code;
        break;
      }
    }
  }
  
  return countryCode || null;
};

/**
 * Get country name from ISO code
 */
export const getCountryNameFromISOCode = (code: string): string => {
  const names: Record<string, string> = {
    // West Africa
    GHA: 'Ghana', TGO: 'Togo', BEN: 'Benin', MLI: 'Mali', GIN: 'Guinea',
    BFA: 'Burkina Faso', CIV: 'Ivory Coast', SEN: 'Senegal', NGA: 'Nigeria',
    // East Africa
    TZA: 'Tanzania', KEN: 'Kenya', UGA: 'Uganda',
    // Central Africa
    CMR: 'Cameroon', CAF: 'Central African Republic', COG: 'Congo', COD: 'Democratic Republic of Congo',
    // Other Markets
    ETH: 'Ethiopia', SOM: 'Somalia', ZAF: 'South Africa', EGY: 'Egypt', TUN: 'Tunisia',
    // Additional countries
    GMB: 'Gambia', GNB: 'Guinea-Bissau', SLE: 'Sierra Leone', LBR: 'Liberia',
    NER: 'Niger', MRT: 'Mauritania', ERI: 'Eritrea', DJI: 'Djibouti',
    RWA: 'Rwanda', BDI: 'Burundi', SSD: 'South Sudan', TCD: 'Chad',
    GNQ: 'Equatorial Guinea', GAB: 'Gabon', STP: 'São Tomé and Príncipe',
    AGO: 'Angola', ZMB: 'Zambia', MWI: 'Malawi', MOZ: 'Mozambique',
    ZWE: 'Zimbabwe', BWA: 'Botswana', NAM: 'Namibia', LSO: 'Lesotho',
    SWZ: 'Swaziland', MDG: 'Madagascar', MUS: 'Mauritius',
  };
  return names[code] || '';
};

