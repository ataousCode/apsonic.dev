// Service Support page data
import type { FeatureCard } from '@/components/service-page/FeatureCards';
import type { ExploreCard } from '@/components/service-page/ExploreMore';
import type { InfoBlock } from '@/components/service-page/InformationBlocks';
import type { SupportLink } from '@/components/service-page/SupportTools';
import { PRODUCT_MODELS } from './product-models';

// Feature cards data
export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: '1',
    image: '/images/services/services1.jpg',
    title: 'Professional Service Network',
    description: 'Visit our authorized service centers across West Africa. Expert care, genuine parts.',
    ctaText: 'Find Service Center',
    href: '/services/locations',
  },
  {
    id: '2',
    image: '/images/services/services2.jpg',
    title: 'Order Genuine Spare Parts',
    description: 'Get authentic Apsonic parts delivered to your location. Quality guaranteed.',
    ctaText: 'Browse Parts Catalog',
    href: '/services/parts',
  },
];

// Explore More cards
export const EXPLORE_CARDS: ExploreCard[] = [
  {
    id: '1',
    icon: '📘',
    title: 'Download Manuals & Guides',
    ctaText: 'Download',
    href: '/services/manuals',
  },
  {
    id: '2',
    icon: '🔧',
    title: 'Mechanic Training Programs',
    ctaText: 'Learn More',
    href: '/services/training',
  },
];

// Information blocks
export const INFO_BLOCKS: InfoBlock[] = [
  {
    id: '1',
    title: 'Warranty Information',
    content:
      'All Apsonic motorcycles come with comprehensive warranty coverage and lifetime maintenance support. Our authorized service centers ensure your bike stays in perfect condition.',
    ctaText: 'View Warranty Terms',
    href: '/services/warranty',
    variant: 'default',
  },
  {
    id: '2',
    title: '⚠️ Beware of Counterfeit Parts',
    content:
      'Only genuine Apsonic parts guarantee safety and performance. Counterfeit parts can cause serious damage and void your warranty. Always purchase from authorized dealers.',
    ctaText: 'How to Identify Genuine Parts',
    href: '/services/counterfeit-warning',
    variant: 'warning',
  },
  {
    id: '3',
    title: 'Current Service Campaigns',
    content: [
      'Free inspection for AP200 models',
      'Brake system upgrade program',
      'Seasonal maintenance offers',
    ],
    ctaText: 'View All Programs',
    href: '/services/campaigns',
    variant: 'default',
  },
];

// Support tools links
export const SUPPORT_LINKS: SupportLink[] = [
  { label: 'Find Your Nearest Service Center', href: '/services/locations' },
  { label: 'Check Warranty Status', href: '/services/warranty' },
  { label: 'Order Genuine Spare Parts', href: '/services/parts' },
  { label: 'Download User Manuals', href: '/services/manuals' },
];

// Service coverage data
export const SERVICE_COVERAGE_COUNTRIES = [
  { flag: '🇬🇭', name: 'Ghana' },
  { flag: '🇹🇬', name: 'Togo' },
  { flag: '🇧🇯', name: 'Benin' },
  { flag: '🇨🇮', name: 'Ivory Coast' },
  { flag: '🇧🇫', name: 'Burkina Faso' },
  { flag: '🇲🇱', name: 'Mali' },
  { flag: '🇬🇳', name: 'Guinea' },
];

export const SERVICE_COVERAGE_STATS = {
  servicePoints: '4,500+',
  subsidiaries: '15',
  dealers: '125+',
};

// Get motorcycles for grid (first 8 models)
export const getServicePageMotorcycles = () => {
  return PRODUCT_MODELS.slice(0, 8);
};

