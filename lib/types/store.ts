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
    email?: string;
    workingHours?: string;
    distance?: number; // Distance from user location in kilometers
}

export interface StoreFilter {
    type: 'dealer' | 'service' | 'all';
    search: string;
    country?: string;
}