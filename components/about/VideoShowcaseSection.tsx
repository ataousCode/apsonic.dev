'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdPlayCircleOutline } from 'react-icons/md';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import Image from 'next/image';

const videos = [
    {
        id: '1',
        title: "Apsonic puts durability to the ultimate test!",
        description: "We wanted to ensure that our engines could withstand the harshest adherence tests in the Sahel. So we put our new DuraCore™ engine through a 5,000km endurance run from Lagos to Bamako without a single oil change.",
        youtubeId: "LXb3EKWsInQ", // Placeholder ID
        thumbnail: "/images/services/services1.jpg" // Reusing distinct image
    },
    {
        id: '2',
        title: "The Heartbeat of the Market",
        description: "See how Apsonic motorcycles power the daily economy of Accra's busiest markets. From dawn till dusk, we are the silent partner in every transaction.",
        youtubeId: "ScMzIvxBSi4", // Placeholder ID
        thumbnail: "/images/about-hero.png" // Reusing hero
    },
    {
        id: '3',
        title: "Engineering the Future",
        description: "A behind-the-scenes look at our assembly plant in Guangzhou and our testing facilities in Togo. Precision meets passion.",
        youtubeId: "JGwWNGJdvx8", // Placeholder ID
        thumbnail: "/images/services/services2.jpg" // Reusing image
    }
];

export const VideoShowcaseSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextVideo = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const currentVideo = videos[currentIndex];

    return (
        <Section backgroundColor={colors.background.primary} className="relative py-24 border-t border-white/5">
            <div className="container mx-auto px-4 relative">

                {/* Navigation Arrows (Absolute on Desktop) */}
                <button
                    onClick={prevVideo}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-20 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-brand-green hover:bg-brand-green hover:text-white transition-all"
                >
                    <MdKeyboardArrowLeft className="text-3xl" />
                </button>
                <button
                    onClick={nextVideo}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-20 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-brand-green hover:bg-brand-green hover:text-white transition-all"
                >
                    <MdKeyboardArrowRight className="text-3xl" />
                </button>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-5/12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentVideo.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                    {currentVideo.title}
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {currentVideo.description}
                                </p>
                                <a
                                    href={`https://www.youtube.com/watch?v=${currentVideo.youtubeId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-brand-green font-bold hover:gap-3 transition-all"
                                >
                                    Watch it on Youtube <MdKeyboardArrowRight className="text-xl" />
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Video Player & Thumbnails */}
                    <div className="w-full lg:w-7/12">
                        {/* Main Video Area */}
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 mb-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentVideo.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0"
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?rel=0`}
                                        title={currentVideo.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Bottom Area: Thumbnails & Indicators */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                            {/* Indicators (Dots) */}
                            <div className="flex gap-2">
                                {videos.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-brand-green' : 'w-4 bg-white/20 hover:bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Thumbnails (Preview next items) */}
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {videos.map((video, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-brand-green opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                                            }`}
                                    >
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Play Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <MdPlayCircleOutline className="text-white text-2xl" />
                                        </div>
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
