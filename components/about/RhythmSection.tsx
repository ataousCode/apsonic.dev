'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion, useScroll, useTransform } from 'framer-motion';

export const RhythmSection = () => {
    return (
        <Section backgroundColor={colors.background.secondary} className="relative py-32 overflow-hidden">
            {/* Background Text Texture */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none select-none overflow-hidden">
                <div className="whitespace-nowrap text-[20vh] font-bold text-transparent text-stroke-2 text-stroke-white animate-marquee">
                    ACCRA LAGOS LOME COTONOU BAMAKO OUAGA
                </div>
                <div className="whitespace-nowrap text-[20vh] font-bold text-transparent text-stroke-2 text-stroke-white animate-marquee-reverse">
                    MOVE RISE GROW BUILD DREAM HUSTLE
                </div>
                <div className="whitespace-nowrap text-[20vh] font-bold text-transparent text-stroke-2 text-stroke-white animate-marquee">
                    THE HEARTBEAT OF THE STREETS
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                        The Rhythm of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-white to-brand-green animate-gradient-x">Every City</span>
                    </h2>

                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl text-brand-green font-mono mb-8">
                            // DAKAR // ABIDJAN // ACCRA // LAGOS
                        </p>
                        <p className="text-gray-400 text-lg">
                            From the dawn prayer to the midnight market, Apsonic is the soundtrack of the city.
                            We are indispensable to the flow of life across West Africa.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Custom CSS for Marquee - Injected here for simplicity or should be in globals */}
            <style jsx>{`
                .text-stroke-2 {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee 20s linear infinite reverse;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </Section>
    );
};
