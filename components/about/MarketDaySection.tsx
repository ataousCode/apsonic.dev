'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import { MdWbSunny, MdShoppingBasket, MdAccessTime } from 'react-icons/md';

export const MarketDaySection = () => {
    return (
        <Section backgroundColor={colors.background.primary} className="relative py-24 border-t border-white/5 overflow-hidden">
            {/* Warm Overlay for "Sun/Dust" feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">

                    {/* Left: Narrative Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full md:w-5/12 bg-[#151515] p-8 lg:p-12 rounded-3xl border border-white/5 flex flex-col justify-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 text-orange-500">
                            <MdWbSunny className="text-2xl" />
                            <span className="font-mono text-sm uppercase tracking-widest">05:00 AM</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                            The Market Day <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Hustle</span>.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Before the sun breaks the horizon, the Apsonic engines roar to life. From the yam farmers of Nigeria to the textile traders of Togo, we are the first step in the supply chain.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><MdAccessTime /> Reliable Start</span>
                            <span className="w-1 h-1 bg-gray-700 rounded-full" />
                            <span className="flex items-center gap-1"><MdShoppingBasket /> Heavy Load</span>
                        </div>
                    </motion.div>

                    {/* Right: Visual Stat Blocks (Abstract Representation of Market Chaos/Order) */}
                    <div className="w-full md:w-7/12 grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#1e1e1e] rounded-3xl p-6 flex flex-col justify-between h-[280px] hover:bg-[#252525] transition-colors border border-white/5"
                        >
                            <span className="text-4xl font-bold text-white">250kg</span>
                            <p className="text-gray-400 text-sm">Average cargo load carried daily by market traders.</p>
                            <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
                                <div className="bg-brand-green h-full w-[85%]" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-green/10 rounded-3xl p-6 flex flex-col justify-between h-[280px] border border-brand-green/20 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-3xl rounded-full group-hover:bg-brand-green/30 transition-all" />
                            <span className="text-4xl font-bold text-brand-green">98%</span>
                            <p className="text-gray-300 text-sm">Uptime reliability rating in high-heat conditions.</p>
                            <div className="flex gap-1 mt-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-2 w-full bg-brand-green rounded-full opacity-80" />)}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="col-span-2 bg-gradient-to-r from-[#222] to-[#1a1a1a] rounded-3xl p-6 flex items-center justify-between border border-white/5"
                        >
                            <div>
                                <h4 className="text-white font-bold text-xl">The Backbone of Trade</h4>
                                <p className="text-gray-500 text-sm">Connecting rural farms to urban centers.</p>
                            </div>
                            <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white text-2xl">
                                ➔
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
