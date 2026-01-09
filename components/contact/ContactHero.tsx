'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { Section } from '@/components/ui/Section';

export const ContactHero = () => {
    return (
        <Section
            padding="none"
            className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-hero.png"
                    alt="Apsonic Contact Support"
                    fill
                    className="object-cover opacity-40 blur-sm scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="mb-8 h-px w-20 bg-brand-green/60" />

                    <h1
                        className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl drop-shadow-2xl"
                    >
                        Let&apos;s Start a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-green to-brand-green">Conversation</span>.
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl font-light leading-relaxed">
                        From finding your nearest dealer to technical support,
                        our global team is ready to assist you.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};
