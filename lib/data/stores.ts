// Mock store data - replace with fetchStores() from lib/api/stores.ts
import type { Store, StoreFilter } from '@/lib/types/store';
export const STORES: Store[] = [
  {
    id: '1',
    name: 'Sogakofe-affloa',
    address: 'House No. 501, Canton Road, Accra, Ghana',
    type: 'dealer',
    coordinates: { lat: 5.6037, lng: -0.1870 },
    country: 'Ghana',
    city: 'Accra',
    phone: '+233 XX XXX XXXX',
    email: 'sogakofe@apsonic.com',
    workingHours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM',
  },
  {
    id: '2',
    name: 'Kate-saling',
    address: 'House No. 501, Garage Road, Accra, Ghana',
    type: 'service',
    coordinates: { lat: 5.5500, lng: -0.2000 },
    country: 'Ghana',
    city: 'Accra',
    phone: '+233 XX XXX XXXX',
    email: 'katesaling@apsonic.com',
    workingHours: 'Mon-Sat: 8:00 AM - 5:00 PM',
  },
  {
    id: '3',
    name: 'Lome Dealer',
    address: 'Main Street, Lome, Togo',
    type: 'dealer',
    coordinates: { lat: 6.1375, lng: 1.2123 },
    country: 'Togo',
    city: 'Lome',
    phone: '+228 XX XXX XXXX',
    email: 'lome@apsonic.com',
    workingHours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 3:00 PM',
  },
  {
    id: '4',
    name: 'Cotonou Service',
    address: 'Avenue de la Republique, Cotonou, Benin',
    type: 'service',
    coordinates: { lat: 6.3654, lng: 2.4183 },
    country: 'Benin',
    city: 'Cotonou',
    phone: '+229 XX XXX XXXX',
    email: 'cotonou@apsonic.com',
    workingHours: 'Mon-Sat: 8:00 AM - 5:00 PM',
  },
  {
    id: '5',
    name: 'Bamako Dealer',
    address: 'Rue de la République, Bamako, Mali',
    type: 'dealer',
    coordinates: { lat: 12.6392, lng: -8.0029 },
    country: 'Mali',
    city: 'Bamako',
    phone: '+223 XX XXX XXXX',
    email: 'bamako@apsonic.com',
    workingHours: 'Mon-Fri: 8:00 AM - 6:00 PM',
  },
];

// Filter stores based on criteria
export const filterStores = (stores: Store[], filter: StoreFilter): Store[] => {
  return stores.filter((store) => {
    // Filter by type
    if (filter.type !== 'all' && store.type !== filter.type) {
      return false;
    }

    // Filter by search term
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      const matchesName = store.name.toLowerCase().includes(searchLower);
      const matchesAddress = store.address.toLowerCase().includes(searchLower);
      const matchesCity = store.city?.toLowerCase().includes(searchLower);
      const matchesCountry = store.country.toLowerCase().includes(searchLower);
      
      if (!matchesName && !matchesAddress && !matchesCity && !matchesCountry) {
        return false;
      }
    }

    // Filter by country (case-insensitive partial match)
    if (filter.country) {
      const filterCountryLower = filter.country.toLowerCase();
      const storeCountryLower = store.country.toLowerCase();
      if (!storeCountryLower.includes(filterCountryLower)) {
        return false;
      }
    }

    return true;
  });
};

// Get unique countries from stores
export const getCountries = (stores: Store[]): string[] => {
  const countries = new Set(stores.map((store) => store.country));
  return Array.from(countries).sort();
};

