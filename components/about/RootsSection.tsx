'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';

export const RootsSection = () => {
    return (
        <Section backgroundColor={colors.background.primary} padding="none" className="relative py-24 overflow-hidden">
            {/* African Geometric Pattern Background - "Kente/Mudcloth Inspired" */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(45deg, ${colors.brand.green} 25%, transparent 25%, transparent 75%, ${colors.brand.green} 75%, ${colors.brand.green}),
                        linear-gradient(45deg, ${colors.brand.green} 25%, transparent 25%, transparent 75%, ${colors.brand.green} 75%, ${colors.brand.green})
                     `,
                    backgroundPosition: '0 0, 10px 10px',
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Side: The Red Earth Concept */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 relative h-[600px] rounded-t-full rounded-b-3xl overflow-hidden border-4 border-white/5"
                    >
                        {/* We use a service image but darken it to focus on the 'feeling' */}
                        <Image
                            src="/images/about-hero.png"
                            alt="The African dusty road"
                            fill
                            className="object-cover sepia-[.5] brightness-75 scale-110"
                        />

                        {/* Overlay Text inside the image */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-black/50 to-transparent">
                            <span className="text-brand-green font-bold text-6xl opacity-20 absolute -top-10 left-10 scale-150 transform rotate-12">
                                AFRICA
                            </span>
                            <h3 className="text-white text-3xl font-bold leading-tight relative">
                                Born from the <br />
                                <span className="text-brand-green">Red Earth</span>.
                            </h3>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mb-8"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                                RESILIENCE
                            </h2>
                            <div className="h-2 w-32 bg-brand-green mb-8" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl text-gray-300 leading-relaxed mb-8 font-light"
                        >
                            Our bikes aren't designed in a glass tower in Europe. They are forged in the heat of the Sahel and tested on the laterite roads of the Savanna.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-400 leading-relaxed mb-12"
                        >
                            We understand that in Africa, a motorcycle is more than a vehicle. It is a beast of burden, a family member, and a tool for survival. That is why we reinforce our chassis with extra steel and tune our suspension for the unpredictable.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-[#1a1a1a] border border-white/5 rounded-xl border-l-4 border-l-brand-green">
                                <span className="block text-3xl font-bold text-white mb-1">45°C</span>
                                <span className="text-xs text-brand-green uppercase tracking-widest">Heat Tested</span>
                            </div>
                            <div className="p-6 bg-[#1a1a1a] border border-white/5 rounded-xl border-l-4 border-l-white">
                                <span className="block text-3xl font-bold text-white mb-1">Heavy</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest">Load Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
