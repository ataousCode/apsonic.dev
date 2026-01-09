'use client';

import React from 'react';
import { useContactForm } from '@/hooks/forms/useContactForm';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { colors } from '@/lib/design-tokens';
import { motion, AnimatePresence } from 'framer-motion';
import { MdCheckCircle, MdError } from 'react-icons/md';

export const ContactForm = () => {
    const { values, errors, isSubmitting, submitStatus, handleChange, handleSubmit, resetStatus } = useContactForm();

    if (submitStatus === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-12 bg-[#1a1a1a] rounded-2xl border border-green-500/20"
            >
                <div className="text-6xl text-brand-green mb-6">
                    <MdCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully</h3>
                <p className="text-gray-400 mb-8 max-w-md">
                    Thank you for contacting Apsonic. A member of our team will review your request and get back to you within 24 hours.
                </p>
                <Button onClick={resetStatus} variant="outline" className="border-white text-white">
                    Send Another Message
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    value={values.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    disabled={isSubmitting}
                />
                <Input
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={values.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    disabled={isSubmitting}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={isSubmitting}
                />
                <Input
                    name="phone"
                    type="tel"
                    label="Phone Number (Optional)"
                    placeholder="+233 ..."
                    value={values.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    disabled={isSubmitting}
                />
            </div>

            {/* Department Select - Custom Style to match */}
            <div className="w-full">
                <label className="mb-2 block text-sm font-medium text-white">Department</label>
                <select
                    name="department"
                    value={values.department}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="flex h-12 w-full rounded-lg px-4 bg-[#1e1e1e] border border-white/10 text-white focus:border-brand-green focus:outline-none transition-colors"
                >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Fleet</option>
                    <option value="dealership">Dealership Application</option>
                    <option value="support">Technical Support</option>
                    <option value="media">Media & PR</option>
                </select>
            </div>

            <Input
                name="subject"
                label="Subject"
                placeholder="How can we help?"
                value={values.subject}
                onChange={handleChange}
                error={errors.subject}
                disabled={isSubmitting}
            />

            <Textarea
                name="message"
                label="Message"
                placeholder="Tell us more about your inquiry..."
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                disabled={isSubmitting}
                rows={5}
            />

            <div className="pt-4">
                <Button
                    type="submit"
                    className="w-full md:w-auto min-w-[200px]"
                    loading={isSubmitting}
                    variant="primary"
                >
                    Send Message
                </Button>
            </div>

            {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg">
                    <MdError />
                    <span>Something went wrong. Please try again later.</span>
                </div>
            )}
        </form>
    );
};
