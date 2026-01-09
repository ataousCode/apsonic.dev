import React from 'react';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionSection } from '@/components/about/MissionSection';
import { EngineeringSection } from '@/components/about/EngineeringSection';
import { TimelineSection } from '@/components/about/TimelineSection';

import { ImpactGallerySection } from '@/components/about/ImpactGallerySection';
import { CultureSection } from '@/components/about/CultureSection';
import { RootsSection } from '@/components/about/RootsSection'; // New
import { RhythmSection } from '@/components/about/RhythmSection'; // New
import { MarketDaySection } from '@/components/about/MarketDaySection'; // New
import { ProverbSection } from '@/components/about/ProverbSection'; // New
import { VideoShowcaseSection } from '@/components/about/VideoShowcaseSection'; // New
import { CoreValuesSection } from '@/components/about/CoreValuesSection';
import { LeadersSection } from '@/components/about/LeadersSection';
import { SustainabilitySection } from '@/components/about/SustainabilitySection';
import { VoicesSection } from '@/components/about/VoicesSection';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';


export const metadata = {
    title: 'About Us - Apsonic',
    description: 'The story of Apsonic: Engineered for Africa, built to endure.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <AboutHero />
            <MissionSection />
            <RootsSection />
            <CultureSection />
            <EngineeringSection />
            <RhythmSection />
            <VideoShowcaseSection />
            <MarketDaySection />
            <ImpactGallerySection />
            <ProverbSection />
            <TimelineSection />
            <VoicesSection />
            <CoreValuesSection />
            <LeadersSection />
            <SustainabilitySection />
        </main>
    );
}
