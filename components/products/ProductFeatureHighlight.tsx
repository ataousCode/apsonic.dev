'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProductFeatureHighlightProps {
    title: string;
    description: string;
    image: string;
    bottomText?: string;
    className?: string;
}

export const ProductFeatureHighlight: React.FC<ProductFeatureHighlightProps> = ({
    title,
    description,
    image,
    bottomText,
    className,
}) => {
    return (
        <section
            className={cn(
                'relative w-full h-[80vh] sm:h-screen min-h-[500px] sm:min-h-[700px] overflow-hidden bg-black',
                className
            )}
        >
            {/* FULL BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center sm:object-[center_65%]"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-20 h-full flex flex-col items-center text-center pointer-events-none">

                {/* TOP SAFE TEXT ZONE */}
                <div className="pt-[6vh] max-w-3xl px-6 space-y-4 pointer-events-auto">
                    <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] text-white"
                        style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
                    >
                        {title}
                    </h2>

                    <p
                        className="text-xs sm:text-sm md:text-base text-gray-200 font-light leading-relaxed max-w-xl mx-auto"
                        style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
                    >
                        {description}
                    </p>
                </div>

                {/* MIDDLE BREATHING SPACE */}
                <div className="flex-1" />

                {/* BOTTOM TEXT */}
                {bottomText && (
                    <div className="absolute bottom-[2vh] left-0 right-0 text-center pointer-events-auto">
                        <p
                            className="text-xs sm:text-sm text-white tracking-wide"
                            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
                        >
                            {bottomText}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};
