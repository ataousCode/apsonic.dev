// Filter options data - replace with API calls when backend is ready

export interface FilterOption {
  value: string;
  label: string;
}

export const CATEGORY_OPTIONS: FilterOption[] = [
  { value: '', label: 'All Types' },
  { value: 'underbone', label: 'Underbone' },
  { value: 'street', label: 'Street' },
  { value: 'offroad', label: 'Off-Road' },
  { value: 'tricycle', label: 'Tricycle' },
];

