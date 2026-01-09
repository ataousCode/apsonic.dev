'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';
import { Section } from '@/components/ui/Section';

export const MissionSection = () => {
    return (
        <Section backgroundColor={colors.background.secondary} padding="none" className="relative overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">

                {/* Left Side: Sticky Content */}
                <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2
                            className="mb-8 font-bold leading-tight tracking-tighter"
                            style={{
                                fontSize: typography.size.h1,
                                color: colors.text.primary
                            }}
                        >
                            Moving A Continent <span style={{ color: colors.brand.green }}>Forward</span>.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-400">
                            <p>
                                At Apsonic, we don't just build motorcycles. We build lifelines.
                                In a continent where mobility means opportunity, our mission is simple:
                                <strong> To empower every journey with relentless reliability.</strong>
                            </p>
                            <p>
                                From the bustling streets of Lagos to the rugged terrains of the Sahel,
                                our machines are engineered to withstand the toughest conditions,
                                ensuring that businesses keep moving, families stay connected, and
                                economies grow.
                            </p>
                        </div>

                        <div className="mt-12 flex gap-8">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white">10+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Countries</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white">1M+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Riders</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Image */}
                <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
                    <Image
                        src="/images/services/services1.jpg"
                        alt="Confident African rider looking at horizon"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 lg:bg-gradient-to-r lg:from-neutral-900 lg:via-transparent lg:to-transparent opacity-90" />
                </div>
            </div>
        </Section>
    );
};
