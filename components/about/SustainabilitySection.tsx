'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import { MdOutlineWaterDrop, MdOutlineForest, MdOutlineBolt } from 'react-icons/md';

export const SustainabilitySection = () => {
    return (
        <Section backgroundColor={colors.background.secondary} className="relative z-10 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Content - African Context Focus */}
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-green font-mono text-sm uppercase tracking-widest"
                        >
                            Responsibility
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-4 mb-6 text-3xl font-bold text-white md:text-5xl"
                        >
                            Preserving Our Land.
                        </motion.h2>
                        <p className="mb-8 text-lg text-gray-400 leading-relaxed">
                            Africa is not just our market; it is our home. We are committed to minimizing our environmental footprint by designing engines that consume less fuel and produce fewer emissions, protecting the diverse ecosystems of our continent.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-full bg-green-900/20 p-2 text-brand-green">
                                    <MdOutlineBolt className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Fuel Efficiency Focus</h4>
                                    <p className="text-sm text-gray-500">Our Euro-3 compliant engines reduce fuel consumption by 15%, saving riders money and reducing carbon output.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-full bg-green-900/20 p-2 text-brand-green">
                                    <MdOutlineForest className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Packaging Reduction</h4>
                                    <p className="text-sm text-gray-500">We utilize 80% recycled materials for our shipping crates, reducing waste in local communities.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual - Using local service image to represent 'field/land' or work */}
                    {/* We can re-use 'services1.jpg' as it shows a rider in an outdoor/natural setting if we crop it or apply overlay */}
                    {/* Or use the about-hero image which is outdoors. Let's use about-hero for a grand landscape feel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden group"
                    >
                        <Image
                            src="/images/about-hero.png" // Reusing distinct landscape image
                            alt="Apsonic motorcycle in nature"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-2">Empowering Local Industry</h3>
                            <p className="text-gray-300 text-sm">
                                By localizing assembly in Ghana, Togo, and Benin, we reduce shipping emissions and build technical skills in the workforce.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
};
