// Store API - expects GET /api/stores with optional query params (type, search, country)
import type { Store, StoreFilter } from '@/lib/types/store';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
const STORES_ENDPOINT = `${API_BASE_URL}/stores`;

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

