'use client';

import React from 'react';
import { ServiceHero } from '@/components/service-page/ServiceHero';
import { SupportTools } from '@/components/service-page/SupportTools';
import { ServiceSearch } from '@/components/service-page/ServiceSearch';
import { FeatureCards } from '@/components/service-page/FeatureCards';
import { ExploreMore } from '@/components/service-page/ExploreMore';
import { StoreLocatorSection } from '@/components/service-page/StoreLocatorSection';
import { ServiceCoverage } from '@/components/service-page/ServiceCoverage';
import { InformationBlocks } from '@/components/service-page/InformationBlocks';
import {
  FEATURE_CARDS,
  EXPLORE_CARDS,
  INFO_BLOCKS,
} from '@/lib/data/service-page';
import { SERVICE_FAQ_ITEMS } from '@/lib/data/faq';
import { FAQ } from '@/components/service-page';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: SERVICE_PAGE_CONFIG.colors.background }}>
      <ServiceHero />
      <SupportTools />
      <ServiceSearch />
      <FeatureCards cards={FEATURE_CARDS} />
      <ExploreMore cards={EXPLORE_CARDS} />
      <ServiceCoverage />
      {/* <InformationBlocks blocks={INFO_BLOCKS} /> */}
      <StoreLocatorSection />
      <FAQ items={SERVICE_FAQ_ITEMS} />
    </main>
  );
}

