'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import { MdFormatQuote } from 'react-icons/md';

const stories = [
    {
        name: "Kwame Mensah",
        role: "Logistics Entrepreneur, Ghana",
        quote: "Standard bikes couldn't handle the gravel roads to the northern farms. The Apsonic suspension changed my business. I went from one bike to a fleet of ten.",
        image: "/images/services/services1.jpg" // Reusing mechanic/rider image
    },
    {
        name: "Amara Diop",
        role: "Healthcare Worker, Senegal",
        quote: "Reliability is not a luxury for me; it is life or death. When I need to reach a remote village, I trust only one engine starting up.",
        image: "/images/about-hero.png" // Reusing hero for a 'field' look
    },
    {
        name: "Chidi Okafor",
        role: "Market Trader, Nigeria",
        quote: "Fuel prices fluctuate, but my Apsonic's efficiency remains constant. It is the partner that keeps my profit margins healthy.",
        image: "/images/services/services2.jpg" // Reusing parts/shop image
    }
];

export const VoicesSection = () => {
    return (
        <Section backgroundColor={colors.background.tertiary} className="relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-green font-mono text-sm uppercase tracking-widest"
                    >
                        Community
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-4 text-3xl font-bold text-white md:text-5xl"
                    >
                        Voices of the <span className="text-brand-green">Continent</span>.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative rounded-2xl bg-[#1a1a1a] p-8 border border-white/5 hover:border-brand-green/30 transition-all group"
                        >
                            {/* <div className="absolute top-6 left-6 text-brand-green/20 text-6xl font-serif leading-none z-0">
                                <MdFormatQuote />
                            </div> */}

                            <div className="relative z-10">
                                <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                                    "{story.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-brand-green/50">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{story.name}</h4>
                                        <span className="text-brand-green text-xs uppercase tracking-wider">{story.role}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
