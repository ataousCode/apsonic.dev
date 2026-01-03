// Service Support business logic hook
import { useState, useMemo, useEffect } from 'react';
import { STORES, filterStores } from '@/lib/data/stores';
import type { Store, StoreFilter } from '@/lib/types/store';
import type { StoreQueryType } from '@/components/service/StoreQueryPanel';
import { getUserLocation, calculateDistance, reverseGeocode, type Coordinates, type Address } from '@/lib/utils/geolocation';
import { findCountryFromSearch } from '@/lib/utils/country-search';

export const useServiceSupport = () => {
  const [queryType, setQueryType] = useState<StoreQueryType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | undefined>();
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [userAddress, setUserAddress] = useState<Address | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Fetch user location when nearby query is enabled
  useEffect(() => {
    if (queryType !== 'nearby') {
      setUserLocation(null);
      setUserAddress(null);
      setLocationError(null);
      return;
    }

    setIsLoadingLocation(true);
    setLocationError(null);
    setUserAddress(null);

    getUserLocation()
      .then(async (location) => {
        setUserLocation(location);
        try {
          const address = await reverseGeocode(location);
          setUserAddress(address);
        } catch (error) {
          console.error('Error reverse geocoding:', error);
        }
        setIsLoadingLocation(false);
      })
      .catch((error) => {
        console.error('Error getting user location:', error);
        setLocationError(error.message || 'Unable to get your location');
        setIsLoadingLocation(false);
      });
  }, [queryType]);

  // Filter and sort stores
  const filteredStores = useMemo(() => {
    const filter: StoreFilter = {
      type: queryType === 'pickup' ? 'dealer' : 'all',
      search: searchTerm,
      country: selectedCountry || undefined,
    };
    
    let stores = filterStores(STORES, filter);

    if (queryType === 'nearby' && userLocation) {
      stores = stores
        .map((store) => ({
          ...store,
          distance: calculateDistance(userLocation, store.coordinates),
        }))
        .sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));

      const closestStore = stores[0];
      if (closestStore && closestStore.distance && closestStore.distance > 100) {
        stores = [closestStore];
      }
    }

    return stores;
  }, [queryType, searchTerm, selectedCountry, userLocation]);

  const handleCountrySelect = (searchValue: string) => {
    const country = findCountryFromSearch(searchValue);
    setSelectedCountry(country || '');
    setSelectedStore(undefined);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      handleCountrySelect(value);
    } else {
      setSelectedCountry('');
    }
  };

  return {
    queryType,
    setQueryType,
    searchTerm,
    selectedStore,
    setSelectedStore,
    selectedCountry,
    userLocation,
    userAddress,
    isLoadingLocation,
    locationError,
    filteredStores,
    handleSearchChange,
    handleCountrySelect,
  };
};

