'use client';

import React from 'react';
import { MdLocationOn, MdPhone, MdEmail, MdPublic, MdMap } from 'react-icons/md';
import { motion } from 'framer-motion';

// Expanded list of countries APSONIC is active in (16-20 approx)
// West Africa focus + others
const coverageCountries = [
    { name: "Togo 🇹🇬", active: true },
    { name: "Ghana 🇬🇭", active: true },
    { name: "Mali 🇲🇱", active: true },
    { name: "Burkina Faso 🇧🇫", active: true },
    { name: "Ivory Coast 🇨🇮", active: true },
    { name: "Benin 🇧🇯", active: true },
    { name: "Guinea 🇬🇳", active: true },
    { name: "Niger 🇳🇪", active: true },
    { name: "Senegal 🇸🇳", active: true },
    { name: "Nigeria 🇳🇬", active: true },
    { name: "Cameroon 🇨🇲", active: true },
    { name: "Chad 🇹🇩", active: true },
    { name: "Liberia 🇱🇷", active: true },
    { name: "Sierra Leone 🇸🇱", active: true },
    { name: "Gambia 🇬🇲", active: true },
    { name: "Gabon 🇬🇦", active: true }
];

const offices = [
    {
        country: "Togo 🇹🇬",
        city: "Lomé",
        address: "Zone Portuaire, Lomé",
        phone: "+228 90 00 00 00",
        email: "togo@apsonic.dev",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d1.222186314769039!3d6.124580995568863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x231899122312!2sLome%20Port!5e0!3m2!1sen!2stg!4v1625431234567" // Placeholder
    },
    {
        country: "Ghana 🇬🇭",
        city: "Accra",
        address: "124 Spintex Road, Accra",
        phone: "+233 54 000 0000",
        email: "ghana@apsonic.dev",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127065.2465366479!2d-0.1995!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s!5e0!3m2!1sen!2sgh"
    },
    {
        country: "Mali 🇲🇱",
        city: "Bamako",
        address: "ACI 2000, Bamako",
        phone: "+223 20 00 00 00",
        email: "mali@apsonic.dev",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248900.2!2d-8.0!3d12.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
    },
    {
        country: "Burkina Faso 🇧🇫",
        city: "Ouagadougou",
        address: "Kwame N'Krumah Ave, Ouagadougou",
        phone: "+226 25 00 00 00",
        email: "burkina@apsonic.dev",
        mapUrl: ""
    },
    {
        country: "Ivory Coast 🇨🇮",
        city: "Abidjan",
        address: "Marcory Zone 4, Abidjan",
        phone: "+225 27 00 00 00",
        email: "ci@apsonic.dev",
        mapUrl: ""
    },
    {
        country: "Benin 🇧🇯",
        city: "Cotonou",
        address: "Ave Steinmetz, Cotonou",
        phone: "+229 97 00 00 00",
        email: "benin@apsonic.dev",
        mapUrl: ""
    },
    {
        country: "Guinea 🇬🇳",
        city: "Conakry",
        address: "Kaloum, Conakry",
        phone: "+224 620 00 00 00",
        email: "guinea@apsonic.dev",
        mapUrl: ""
    },
    {
        country: "China 🇨🇳", // Flag added for consistency
        city: "Guangzhou",
        address: "Tianhe District, Guangzhou",
        phone: "+86 20 0000 0000",
        email: "hq@apsonic.dev",
        mapUrl: ""
    }
];

export const OfficeLocations = () => {
    return (
        <div className="space-y-16">

            {/* Market Coverage Section - Full Width Banner */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-brand-green/20 p-3 rounded-full text-brand-green text-2xl">
                                <MdPublic />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Market Coverage</h3>
                        </div>
                        <p className="text-gray-400">
                            According to industry reports, APSONIC is active across West Africa and beyond,
                            selling and servicing motorcycles in approximately 16–20 African countries.
                        </p>
                    </div>

                    <div className="max-w-lg flex flex-wrap gap-2 justify-start md:justify-end">
                        {coverageCountries.map((c, idx) => (
                            <span
                                key={idx}
                                className="bg-[#111] hover:bg-brand-green/20 hover:text-brand-green transition-colors text-gray-400 px-3 py-1.5 rounded-lg text-xs border border-white/10"
                            >
                                {c.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Official Offices Grid - With Map Visuals */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-8">Official Branches</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offices.map((office, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group flex flex-col rounded-2xl bg-[#1a1a1a] border border-white/5 overflow-hidden hover:border-brand-green/30 transition-all hover:bg-[#202020]"
                        >
                            {/* Map Thumbnail Placeholder or Iframe */}
                            <div className="h-40 w-full bg-[#222] relative overflow-hidden">
                                {office.mapUrl ? (
                                    <iframe
                                        src={office.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 opacity-30" style={{
                                            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="h-8 w-8 rounded-full bg-brand-green/20 flex items-center justify-center animate-pulse">
                                                <div className="h-3 w-3 rounded-full bg-brand-green shadow-[0_0_10px_rgba(31,168,79,0.8)]" />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Map Icon overlay */}
                                <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-lg backdrop-blur-md pointer-events-none z-10">
                                    <MdMap className="text-white/70" />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-white font-bold text-lg">{office.country}</h4>
                                </div>
                                <span className="text-brand-green text-sm font-medium mb-4 block">{office.city}</span>

                                <p className="text-gray-400 text-xs mb-6 flex-grow leading-relaxed">
                                    {office.address}
                                </p>

                                <div className="space-y-2 pt-4 border-t border-white/5">
                                    <a href={`tel:${office.phone}`} className="flex items-center gap-3 text-xs text-gray-500 hover:text-white transition-colors">
                                        <MdPhone className="text-sm" />
                                        <span>{office.phone}</span>
                                    </a>
                                    <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-xs text-gray-500 hover:text-white transition-colors">
                                        <MdEmail className="text-sm" />
                                        <span>{office.email}</span>
                                    </a>
                                </div>

                                <div className="mt-4 pt-4">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address + ', ' + office.city + ', ' + office.country)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2 rounded-lg bg-white/5 text-xs font-bold text-white hover:bg-brand-green hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <MdLocationOn /> View Directions
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};
