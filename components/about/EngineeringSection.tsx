'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { MdSpeed, MdEngineering, MdFlashOn, MdLocalGasStation } from 'react-icons/md'; // Assuming react-icons is installed

interface SpecCardProps {
    title: string;
    value: string;
    description: string;
    icon: React.ReactNode;
    colSpan?: string;
}

const SpecCard = ({ title, value, description, icon, colSpan = "col-span-1" }: SpecCardProps) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={cn(
            "group relative overflow-hidden rounded-2xl bg-[#1a1a1a] p-8 border border-white/5",
            colSpan
        )}
    >
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-4xl text-brand-green">{icon}</div>
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">{title}</h3>
                <div className="text-3xl font-bold text-white mb-4">{value}</div>
            </div>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Gradient Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
);

export const EngineeringSection = () => {
    return (
        <Section backgroundColor={colors.background.primary} className="relative z-10">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-green font-mono text-sm uppercase tracking-widest"
                    >
                        Precision Engineering
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-4 text-4xl font-bold text-white md:text-5xl"
                    >
                        Built To Outlast.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">

                    {/* Feature 1: Engine Tech - Spans 2 rows on Desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden border border-white/10 group"
                    >
                        <Image
                            src="/images/services/services2.jpg"
                            alt="Apsonic Engine Technology"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <div className="mb-2 flex items-center gap-2 text-brand-green">
                                <MdEngineering className="text-xl" />
                                <span className="font-bold uppercase tracking-widest text-xs">Core Technology</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">DuraCore™ Engine Block</h3>
                            <p className="max-w-md text-gray-300">
                                Proprietary alloy composition designed to dissipate heat 40% faster in sub-Saharan climates, ensuring peak performance under heavy load.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 2: Fuel */}
                    <SpecCard
                        title="Fuel Efficiency"
                        value="65 km/L"
                        description="Optimized combustion chamber for maximum mileage per liter."
                        icon={<MdLocalGasStation />}
                    />

                    {/* Feature 3: Suspension */}
                    <SpecCard
                        title="Suspension"
                        value="Dual-Spring"
                        description="Reinforced rear shock absorbers calibrated for rugged terrain."
                        icon={<MdFlashOn />}
                    />

                    {/* Feature 4: Load */}
                    <SpecCard
                        title="Load Capacity"
                        value="250 kg+"
                        description="Heavy-duty chassis frame built for commercial logistics."
                        icon={<MdSpeed />}
                    />

                </div>
            </div>
        </Section>
    );
};
