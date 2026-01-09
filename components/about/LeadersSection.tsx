'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { colors, typography } from '@/lib/design-tokens';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const LeadersSection = () => {
    return (
        <Section backgroundColor={colors.background.primary} className="relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-green font-mono text-sm uppercase tracking-widest"
                        >
                            Leadership
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-4 mb-6 text-3xl font-bold text-white md:text-5xl"
                        >
                            Visionaries Behind the Wheel.
                        </motion.h2>
                        <p className="mb-8 text-lg text-gray-400">
                            Our leadership team combines decades of automotive engineering expertise with a deep understanding of the African market.
                            We believe in hands-on leadership – frequenting our factories, visiting our dealers, and listening to our riders.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="border-l-2 border-brand-green pl-6">
                                <h4 className="text-white font-bold text-xl">Global Standards</h4>
                                <p className="text-gray-500 mt-1">ISO 9001 Certified Manufacturing</p>
                            </div>
                            <div className="border-l-2 border-brand-green pl-6">
                                <h4 className="text-white font-bold text-xl">Local Impact</h4>
                                <p className="text-gray-500 mt-1">Creating jobs in 10+ nations</p>
                            </div>
                        </div>

                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8">
                            Meet the Board
                        </Button>
                    </div>

                    {/* Right: Abstract/Visual Representation (Since we don't have headshots) */}
                    {/* Using a sleek, abstract composition or reusing a professional image */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-neutral-900 border border-white/10"
                        >
                            {/* Abstract Leadership Graphic - Replaced with Cultural Pattern Feel */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black" />
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1fa84f 0, #1fa84f 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8 z-10">
                                    <h3 className="text-5xl lg:text-7xl font-bold text-white mb-2 tracking-tighter">
                                        5M+
                                    </h3>
                                    <p className="text-brand-green font-medium tracking-widest uppercase text-sm">Daily Commutes</p>
                                    <p className="text-gray-400 mt-4 max-w-xs mx-auto text-sm">
                                        From the markets of Lomé to the savannahs of Tamale, we power the heartbeat of the region.
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
