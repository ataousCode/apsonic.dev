// API service for stores - ready for backend integration
import type { Store, StoreFilter } from '@/lib/types/store';

// API endpoint configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
const STORES_ENDPOINT = `${API_BASE_URL}/stores`;

// Fetch all stores from backend
export const fetchStores = async (): Promise<Store[]> => {
  try {
    const response = await fetch(STORES_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Failed to fetch stores: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stores:', error);
    // Return empty array on error - can be replaced with error handling
    return [];
  }
};

// Fetch stores with filters from backend
export const fetchFilteredStores = async (filter: StoreFilter): Promise<Store[]> => {
  try {
    const queryParams = new URLSearchParams();
    if (filter.type && filter.type !== 'all') {
      queryParams.append('type', filter.type);
    }
    if (filter.search) {
      queryParams.append('search', filter.search);
    }
    if (filter.country) {
      queryParams.append('country', filter.country);
    }

    const response = await fetch(`${STORES_ENDPOINT}?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch filtered stores: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching filtered stores:', error);
    return [];
  }
};

// Fetch single store by ID
export const fetchStoreById = async (id: string): Promise<Store | null> => {
  try {
    const response = await fetch(`${STORES_ENDPOINT}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch store: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching store:', error);
    return null;
  }
};

