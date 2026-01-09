'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdStorefront, MdSupportAgent, MdBusinessCenter, MdNewspaper } from 'react-icons/md';
import { colors } from '@/lib/design-tokens';

const categories = [
    {
        icon: <MdBusinessCenter />,
        title: "Sales & Partnerships",
        description: "For bulk orders, fleet management, and B2B opportunities.",
        action: "Contact Sales",
        color: "brand-green"
    },
    {
        icon: <MdStorefront />,
        title: "Become a Dealer",
        description: "Join our expanding network of certified Apsonic distributors.",
        action: "Apply Now",
        color: "blue-500" // Accent for differentiation
    },
    {
        icon: <MdSupportAgent />,
        title: "Support Center",
        description: "Technical assistance, warranty claims, and part inquiries.",
        action: "Get Support",
        color: "orange-500" // Accent
    },
    {
        icon: <MdNewspaper />,
        title: "Media & Press",
        description: "Brand assets, press releases, and media inquiries.",
        action: "Media Kit",
        color: "purple-500" // Accent
    }
];

export const ContactCategories = () => {
    return (
        <div className="relative -mt-20 z-20 container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="group flex flex-col items-start rounded-2xl bg-[#1a1a1a] p-8 shadow-xl border border-white/5 hover:border-brand-green/30 transition-all cursor-pointer"
                    >
                        <div className="mb-6 rounded-xl bg-white/5 p-4 text-3xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                            {cat.icon}
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{cat.title}</h3>
                        <p className="mb-6 text-sm text-gray-400 leading-relaxed flex-grow">
                            {cat.description}
                        </p>
                        <span className="text-sm font-bold text-brand-green flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            {cat.action} &rarr;
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
