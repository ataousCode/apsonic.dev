// Store and location types for Service Support section
export interface Store {
    id: string;
    name: string;
    address: string;
    type: 'dealer' | 'service';
    coordinates: {
        lat: number;
        lng: number;
    };
    country: string;
    city?: string;
    phone?: string;
}

export interface StoreFilter {
    type: 'dealer' | 'service' | 'all';
    search: string;
    country?: string;
}