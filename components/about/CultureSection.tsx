'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';

export const CultureSection = () => {
    return (
        <Section backgroundColor={colors.background.primary} padding="none" className="relative py-24 overflow-hidden">
            {/* Background Pattern - African Mud Cloth Inspired (Simplified CSS) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333 75%), linear-gradient(-45deg, transparent 75%, #333 75%)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-green font-mono text-sm uppercase tracking-widest mb-4"
                    >
                        Our Spirit
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white max-w-4xl"
                    >
                        Ubuntu: I am because <br /> <span className="text-brand-green">we act together</span>.
                    </motion.h2>
                    <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
                        In Africa, mobility isn't just about transport. It's about connection.
                        It's the grandmother visiting family, the farmer reaching the market, the student getting to school.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: The Market */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src="/images/services/services1.jpg" // Using available mechanic/service image to show 'work'
                            alt="Apsonic mechanic at work"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">The Hustle</h3>
                            <p className="text-gray-300 text-sm">Resilience in every engine. Built for the creators and the entrepreneurs.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: The Road (Centerpiece) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[400px] md:-mt-12 rounded-2xl overflow-hidden group border border-brand-green/30 shadow-[0_0_30px_rgba(31,168,79,0.2)]"
                    >
                        <Image
                            src="/images/about-hero.png" // The open road/hero image
                            alt="Open road in Africa"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">The Journey</h3>
                            <p className="text-gray-300 text-sm">Every terrain, every season. Designed to conquer the diverse landscapes of our continent.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: The Community */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden group"
                    >
                        {/* We need a third distinct image. Let's use services2.jpg or reuse generic ones. */}
                        <Image
                            src="/images/services/services2.jpg"
                            alt="Apsonic spare parts quality"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">The Trust</h3>
                            <p className="text-gray-300 text-sm">Reliability that builds legacy. Passed down from father to son.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
