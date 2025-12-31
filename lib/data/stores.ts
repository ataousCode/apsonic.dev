// Store data for Service Support section
// TODO: Replace with backend API integration using lib/api/stores.ts
import type { Store, StoreFilter } from '@/lib/types/store';

// Sample store data - replace with fetchStores() from lib/api/stores.ts
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

    // Filter by country
    if (filter.country && store.country !== filter.country) {
      return false;
    }

    return true;
  });
};

// Get unique countries from stores
export const getCountries = (stores: Store[]): string[] => {
  const countries = new Set(stores.map((store) => store.country));
  return Array.from(countries).sort();
};

