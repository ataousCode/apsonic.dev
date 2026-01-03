/**
 * Country flag emoji mapping
 * Maps country names to their flag emojis
 * Note: Using emojis for flags as they provide better visual representation
 */

export const COUNTRY_FLAGS: Record<string, string> = {
  Ghana: '🇬🇭',
  Togo: '🇹🇬',
  Benin: '🇧🇯',
  Mali: '🇲🇱',
  Guinea: '🇬🇳',
  'Burkina Faso': '🇧🇫',
  'Ivory Coast': '🇨🇮',
  "Côte d'Ivoire": '🇨🇮',
  Tanzania: '🇹🇿',
  Kenya: '🇰🇪',
  Uganda: '🇺🇬',
  Cameroon: '🇨🇲',
  'Central African Republic': '🇨🇫',
  'Republic of Congo': '🇨🇬',
  Congo: '🇨🇬',
  'Democratic Republic of Congo': '🇨🇩',
  'DR Congo': '🇨🇩',
  Senegal: '🇸🇳',
  Nigeria: '🇳🇬',
  Egypt: '🇪🇬',
  Ethiopia: '🇪🇹',
  Somalia: '🇸🇴',
  'South Africa': '🇿🇦',
  Tunisia: '🇹🇳',
};

/**
 * Get flag emoji for a country name
 */
export const getCountryFlag = (countryName: string): string => {
  return COUNTRY_FLAGS[countryName] || '📍';
};

