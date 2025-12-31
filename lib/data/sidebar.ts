// Sidebar data - replace with API calls when backend is ready

export interface SidebarIconConfig {
  id: string;
  iconName: 'help' | 'shopping' | 'location';
  label: string;
  onClick?: () => void;
  href?: string;
}

export const SIDEBAR_ICONS: SidebarIconConfig[] = [
  {
    id: 'help',
    iconName: 'help',
    label: 'Help',
    onClick: () => {
      // Handle help click
    },
  },
  {
    id: 'shopping',
    iconName: 'shopping',
    label: 'Products',
    href: '/products',
  },
  {
    id: 'location',
    iconName: 'location',
    label: 'Store Locator',
    href: '/services',
  },
];

