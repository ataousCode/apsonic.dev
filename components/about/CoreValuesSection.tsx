'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { colors, typography } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import { MdVerified, MdGroups, MdEco, MdHandshake } from 'react-icons/md';

const values = [
    {
        icon: <MdVerified />,
        title: "Relentless Quality",
        description: "We don't cut corners. Every bolt, gear, and chassis is tested to withstand the harshest African road conditions."
    },
    {
        icon: <MdGroups />,
        title: "Community First",
        description: "We grow when our riders grow. Our success is measured by the businesses and families we empower."
    },
    {
        icon: <MdEco />,
        title: "Sustainable Future",
        description: "Committed to reducing emissions through cleaner engine technology and responsible manufacturing."
    },
    {
        icon: <MdHandshake />,
        title: "Trusted Partnership",
        description: "Building lasting relationships with our dealer network and customers through transparency and support."
    }
];

export const CoreValuesSection = () => {
    return (
        <Section backgroundColor={colors.background.secondary} className="relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-green font-mono text-sm uppercase tracking-widest"
                    >
                        Our DNA
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-4 text-3xl font-bold text-white md:text-5xl"
                    >
                        What Drives Us.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group rounded-2xl bg-[#151515] p-8 border border-white/5 hover:border-brand-green/30 transition-all duration-300"
                        >
                            <div className="mb-6 inline-flex rounded-xl bg-brand-green/10 p-3 text-3xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                                {value.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
