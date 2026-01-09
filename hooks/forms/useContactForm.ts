import { useState } from 'react';

export interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string; // Optional
    department: string;
    subject: string;
    message: string;
}

export interface ContactFormErrors {
    [key: string]: string;
}

export const useContactForm = () => {
    const [values, setValues] = useState<ContactFormValues>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        department: 'general',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validate = (fieldValues: ContactFormValues): boolean => {
        let tempErrors: ContactFormErrors = {};
        let isValid = true;

        if (!fieldValues.firstName.trim()) {
            tempErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!fieldValues.lastName.trim()) {
            tempErrors.lastName = 'Last name is required';
            isValid = false;
        }

        if (!fieldValues.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(fieldValues.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }

        // Phone is optional, but if entered, should be valid-ish
        if (fieldValues.phone && !/^\+?[\d\s-]{10,}$/.test(fieldValues.phone)) {
            tempErrors.phone = 'Phone number format is invalid';
            isValid = false;
        }

        if (!fieldValues.subject.trim()) {
            tempErrors.subject = 'Subject is required';
            isValid = false;
        }

        if (!fieldValues.message.trim()) {
            tempErrors.message = 'Message is required';
            isValid = false;
        } else if (fieldValues.message.trim().length < 20) {
            tempErrors.message = 'Message must be at least 20 characters';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validate(values)) {
            setIsSubmitting(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                setSubmitStatus('success');
                // Reset form optionally
                setValues({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    department: 'general',
                    subject: '',
                    message: ''
                });
            } catch (error) {
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const resetStatus = () => setSubmitStatus('idle');

    return {
        values,
        errors,
        isSubmitting,
        submitStatus,
        handleChange,
        handleSubmit,
        resetStatus
    };
};
