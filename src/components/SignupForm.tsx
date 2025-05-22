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

  if (formState.submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your application for the SasaBot beta program has been received. We'll be in touch within 24 hours with your account setup details.
        </p>
        <p className="text-gray-600">
          In the meantime, why not <a href="https://wa.me/254700000000" className="text-green-600 font-medium">chat with us on WhatsApp</a> if you have any questions?
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormSection title="Contact Information">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formState.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  formErrors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="Your full name"
              />
              {formErrors.fullName && <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="you@example.com"
              />
              {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formState.phoneNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  formErrors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="+254 or 07..."
              />
              {formErrors.phoneNumber && <p className="mt-1 text-sm text-red-600">{formErrors.phoneNumber}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method
              </label>
              <div className="space-y-2">
                {contactMethods.map(method => (
                  <label key={method} className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method}
                      checked={formState.preferredContact === method}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </FormSection>

        <FormSection title="Business Information">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formState.businessName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  formErrors.businessName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="Your business name"
              />
              {formErrors.businessName && <p className="mt-1 text-sm text-red-600">{formErrors.businessName}</p>}
            </div>

            <div>
              <label htmlFor="industrySector" className="block text-sm font-medium text-gray-700 mb-1">
                Industry Sector
              </label>
              <select
                id="industrySector"
                name="industrySector"
                value={formState.industrySector}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="">Select industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                Company Size
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formState.companySize}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="">Select size</option>
                {companySizes.map(size => (
                  <option key={size} value={size}>{size} employees</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="businessLocation.city"
                value={formState.businessLocation.city}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  formErrors.city ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="Your city"
              />
              {formErrors.city && <p className="mt-1 text-sm text-red-600">{formErrors.city}</p>}
            </div>
          </div>
        </FormSection>

        <FormSection title="Customer Interaction">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Customer Communication Channels
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {customerChannels.map(channel => (
                  <label key={channel} className="flex items-center">
                    <input
                      type="checkbox"
                      name="customerChannels"
                      value={channel}
                      checked={formState.customerChannels.includes(channel)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 rounded"
                    />
                    <span className="ml-2 text-gray-700">{channel}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="customerEnquiries" className="block text-sm font-medium text-gray-700 mb-1">
                Average Daily Customer Enquiries
              </label>
              <select
                id="customerEnquiries"
                name="customerEnquiries"
                value={formState.customerEnquiries}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="">Select range</option>
                {enquiryRanges.map(range => (
                  <option key={range} value={range}>{range} enquiries per day</option>
                ))}
              </select>
            </div>
          </div>
        </FormSection>

        <FormSection title="Beta Program Preferences">
          <div className="space-y-6">
            <div>
              <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">
                What do you hope to achieve with SasaBot?
              </label>
              <textarea
                id="expectations"
                name="expectations"
                value={formState.expectations}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="Tell us your goals and expectations..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How would you prefer to provide feedback?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {feedbackMethods.map(method => (
                  <label key={method} className="flex items-center">
                    <input
                      type="checkbox"
                      name="feedbackPreference"
                      value={method}
                      checked={formState.feedbackPreference.includes(method)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 rounded"
                    />
                    <span className="ml-2 text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about SasaBot?
              </label>
              <select
                id="referralSource"
                name="referralSource"
                value={formState.referralSource}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="">Select source</option>
                {referralSources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
          </div>
        </FormSection>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="space-y-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="shareData"
                checked={formState.shareData}
                onChange={handleCheckboxChange}
                className="h-4 w-4 mt-1 text-green-600 focus:ring-green-500 rounded"
              />
              <span className="ml-2 text-gray-700">
                I agree to share anonymous usage data to help improve SasaBot
              </span>
            </label>

            <label className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formState.agreeToTerms}
                onChange={handleCheckboxChange}
                className="h-4 w-4 mt-1 text-green-600 focus:ring-green-500 rounded"
              />
              <span className="ml-2 text-gray-700">
                I agree to receive updates about SasaBot and provide feedback during the beta program *
              </span>
            </label>
            {formErrors.agreeToTerms && <p className="text-sm text-red-600">{formErrors.agreeToTerms}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-6 w-full bg-blue-900 text-white px-6 py-3 rounded-md font-medium
              ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'} 
              transition-colors`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;