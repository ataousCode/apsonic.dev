// Africa map configuration for Service Support
export const AFRICA_MAP_CONFIG = {
  // Map bounds for Africa continent
  bounds: {
    // Africa continent bounds [west, south, east, north]
    africa: [-20, -35, 55, 38] as [number, number, number, number],
  },
  
  // Default view
  defaultCenter: [20, 5] as [number, number], // Center of Africa
  defaultZoom: 3.5,
  
  // Region colors for APSONIC presence highlighting
  regionColors: {
    west: '#10B981', // Green - Strong presence
    east: '#EAB308', // Yellow
    central: '#F97316', // Orange
    other: '#3B82F6', // Blue - Coverage/Parts
    default: '#CFD8DC', // Gray - No presence
  },
  
  // Countries by region (ISO 3166-1 alpha-3 codes)
  countriesByRegion: {
    // West Africa - Red
    westAfrica: [
      'SEN', 'GMB', 'GIN', 'GNB', 'SLE', 'LBR', 'CIV', 'GHA', 'TGO', 'BEN',
      'NGA', 'NER', 'MLI', 'BFA', 'MRT', 'CPV',
    ],
    // East Africa - Green
    eastAfrica: [
      'ETH', 'ERI', 'DJI', 'SOM', 'KEN', 'UGA', 'RWA', 'BDI', 'TZA', 'SSD',
    ],
    // Central Africa - Yellow
    centralAfrica: [
      'CAF', 'TCD', 'CMR', 'GNQ', 'GAB', 'COG', 'COD', 'STP', 'AGO',
    ],
    // Southern Africa - Purple
    southernAfrica: [
      'ZMB', 'MWI', 'MOZ', 'ZWE', 'BWA', 'NAM', 'ZAF', 'LSO', 'SWZ', 'MDG', 'MUS',
    ],
  },
  
  // Search highlight color (when searching for a country)
  searchHighlightColor: '#EF4444', // Red
  
  // Animation settings
  animation: {
    duration: 1500, // milliseconds
    easing: 0.5, // easing factor
  },
} as const;

// Country name mappings for search (supports English and French)
export const COUNTRY_NAME_MAP: Record<string, string> = {
  // West Africa
  ghana: 'GHA', togo: 'TGO', benin: 'BEN', mali: 'MLI', nigeria: 'NGA',
  senegal: 'SEN', gambia: 'GMB', guinea: 'GIN', 'guinea-bissau': 'GNB',
  'sierra leone': 'SLE', liberia: 'LBR', 'ivory coast': 'CIV', 'côte d\'ivoire': 'CIV',
  niger: 'NER', burkina: 'BFA', 'burkina faso': 'BFA', mauritania: 'MRT',
  // East Africa
  ethiopia: 'ETH', eritrea: 'ERI', djibouti: 'DJI', somalia: 'SOM',
  kenya: 'KEN', uganda: 'UGA', rwanda: 'RWA', burundi: 'BDI',
  tanzania: 'TZA', 'south sudan': 'SSD',
  // Central Africa
  'central african republic': 'CAF', 'car': 'CAF', chad: 'TCD',
  cameroon: 'CMR', 'equatorial guinea': 'GNQ', gabon: 'GAB',
  congo: 'COG', 'democratic republic of congo': 'COD', 'drc': 'COD',
  'são tomé and príncipe': 'STP', angola: 'AGO',
  // Southern Africa
  zambia: 'ZMB', malawi: 'MWI', mozambique: 'MOZ', zimbabwe: 'ZWE',
  botswana: 'BWA', namibia: 'NAM', 'south africa': 'ZAF', lesotho: 'LSO',
  swaziland: 'SWZ', eswatini: 'SWZ', madagascar: 'MDG', mauritius: 'MUS',
  // North Africa
  egypt: 'EGY', tunisia: 'TUN',
  // French names
  'bénin': 'BEN', 'sénégal': 'SEN', 'mali': 'MLI',
};

