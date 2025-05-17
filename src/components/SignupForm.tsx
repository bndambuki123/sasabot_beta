import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { supabase } from '../lib/supabase';

interface FormState {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredContact: string;
  businessName: string;
  industrySector: string;
  companySize: string;
  businessLocation: {
    country: string;
    city: string;
  };
  customerChannels: string[];
  customerEnquiries: string;
  expectations: string;
  shareData: boolean;
  feedbackPreference: string[];
  referralSource: string;
  agreeToTerms: boolean;
  submitted: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
    {children}
  </div>
);

const SignupForm = () => {
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    phoneNumber: '',
    preferredContact: '',
    businessName: '',
    industrySector: '',
    companySize: '',
    businessLocation: {
      country: 'Kenya',
      city: ''
    },
    customerChannels: [],
    customerEnquiries: '',
    expectations: '',
    shareData: false,
    feedbackPreference: [],
    referralSource: '',
    agreeToTerms: false,
    submitted: false
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = ['Email', 'WhatsApp', 'SMS'];
  const industries = ['Retail', 'Hospitality', 'Financial Services', 'Services', 'Logistics', 'Other'];
  const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+'];
  const customerChannels = ['WhatsApp', 'Instagram', 'Facebook Messenger', 'SMS', 'Phone Calls', 'E-commerce site', 'Walk-in', 'Other'];
  const enquiryRanges = ['<10', '10-50', '50-100', '100-200', '200-300', '300+'];
  const feedbackMethods = ['WhatsApp chat', 'Google Form', 'Email', 'Scheduled call'];
  const referralSources = ['Google', 'Instagram', 'Facebook', 'Whastapp Group', 'Friend/Colleague', 'Business Network', 'Other'];

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formState.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formState.businessName.trim()) {
      errors.businessName = 'Business name is required';
    }

    if (!formState.businessLocation.city.trim()) {
      errors.city = 'City is required';
    }

    if (formState.phoneNumber && !/^\+?[0-9\s-()]+$/.test(formState.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formState.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to receive updates and provide feedback';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormState(prev => ({
        ...prev,
        [parent]: { ...(prev[parent as keyof FormState] as object), [child]: value }
      }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if (name === 'customerChannels' || name === 'feedbackPreference') {
      setFormState(prev => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormState(prev => ({ ...prev, [name]: checked }));
    }

    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('beta_signups')
        .insert([{
          full_name: formState.fullName,
          email: formState.email,
          phone_number: formState.phoneNumber,
          preferred_contact: formState.preferredContact,
          business_name: formState.businessName,
          industry_sector: formState.industrySector,
          company_size: formState.companySize,
          business_location: formState.businessLocation,
          customer_channels: formState.customerChannels,
          customer_enquiries: formState.customerEnquiries,
          expectations: formState.expectations,
          share_data: formState.shareData,
          feedback_preference: formState.feedbackPreference,
          referral_source: formState.referralSource
        }]);

      if (error) throw error;

      setFormState(prev => ({ ...prev, submitted: true }));
      toast.success('Registration submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster position="top-right" />
      {/* Form UI continues here... */}
    </div>
  );
};

export default SignupForm;
