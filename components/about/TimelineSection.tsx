'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { MdTimeline, MdTrendingUp, MdPublic, MdBuild, MdRocketLaunch } from 'react-icons/md';

interface TimelineEventProps {
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const TimelineEvent = ({ year, title, description, icon }: TimelineEventProps) => (
    <div className="relative flex flex-col items-center flex-shrink-0 w-80 lg:w-96 snap-center group">
        {/* Year Marker */}
        <div className="mb-8 flex flex-col items-center relative">
            <span
                className="text-5xl font-bold tracking-tighter text-white/80 group-hover:text-brand-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
                {year}
            </span>
            <div className="mt-4 h-4 w-4 rounded-full bg-brand-green ring-4 ring-brand-green/20 shadow-[0_0_15px_rgba(31,168,79,0.5)] z-10" />

            {/* Connecting Line Segment */}
            <div className="h-full w-px bg-white/10 absolute top-16 bottom-0" />
        </div>

        {/* Card */}
        <div className="w-full h-full rounded-2xl bg-[#1a1a1a] p-8 border border-white/5 hover:border-brand-green/50 hover:bg-[#222] transition-all duration-300 hover:-translate-y-2">
            <div className="mb-4 text-brand-green text-3xl bg-brand-green/10 w-fit p-3 rounded-xl border border-brand-green/20">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

export const TimelineSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <Section backgroundColor={colors.background.tertiary} className="overflow-hidden py-24">
            <div className="container mx-auto px-4 mb-12">
                <div className="flex flex-col items-center text-center">
                    <span className="text-brand-green font-mono text-sm uppercase tracking-widest mb-4">Our Journey</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">A Legacy of Motion</h2>
                    <p className="max-w-2xl text-gray-400">
                        From a humble beginning to dominating the African market, our journey is detailed by the milestones we've passed.
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative w-full">
                {/* Connecting Line Background */}
                <div className="absolute top-[88px] left-0 right-0 h-px bg-white/10 hidden md:block" />

                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-12 overflow-x-auto pb-12 px-8 md:px-24 hide-scrollbar scroll-smooth"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    <TimelineEvent
                        year="2005"
                        title="The Inception"
                        description="Apsonic establishes its footprint with a vision to revolutionize personal transport in West Africa. We started with a single goal: Reliability."
                        icon={<MdTimeline />}
                    />

                    <TimelineEvent
                        year="2010"
                        title="Market Leader"
                        description="Became the #1 selling motorcycle brand in Togo and Benin, earning the trust of millions with our 'Aloba' model."
                        icon={<MdTrendingUp />}
                    />

                    <TimelineEvent
                        year="2015"
                        title="Expansion Era"
                        description="Expanded operations to Ghana, Ivory Coast, and Burkina Faso, establishing a robust service network of 500+ mechanics."
                        icon={<MdPublic />}
                    />

                    <TimelineEvent
                        year="2026"
                        title="Future Tech"
                        description="Entering a new era with Series-X electric hybrids and expanding our smart manufacturing plant in West Africa."
                        icon={<MdRocketLaunch />}
                    />
                </div>
            </div>
        </Section>
    );
};
