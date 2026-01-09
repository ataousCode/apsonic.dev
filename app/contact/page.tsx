import React from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactCategories } from '@/components/contact/ContactCategories';
import { ContactForm } from '@/components/contact/ContactForm';
import { OfficeLocations } from '@/components/contact/OfficeLocations';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { FAQ } from '@/components/service-page';
import { SERVICE_FAQ_ITEMS } from '@/lib/data/faq';

export const metadata = {
    title: 'Contact Us - Apsonic',
    description: 'Get in touch with Apsonic. Dealer inquiries, support, and general questions.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black">
            <ContactHero />
            <ContactCategories />

            <Section backgroundColor={colors.background.primary} className="py-20">
                <div className="container mx-auto px-4">

                    {/* Section 1: Contact Form - Centered */}
                    <div className="max-w-3xl mx-auto mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                            <p className="text-gray-400">
                                Fill out the form below and we'll route your inquiry to the right department.
                            </p>
                        </div>
                        <ContactForm />
                    </div>

                    {/* Section 2: Offices & Coverage - Full Width */}
                    <div className="border-t border-white/5 pt-20">
                        <OfficeLocations />
                    </div>

                </div>
            </Section>

            {/* FAQ Section Reuse */}
            <div className="border-t border-white/10">
                <FAQ items={SERVICE_FAQ_ITEMS.slice(0, 4)} />
            </div>

        </main>
    );
}
