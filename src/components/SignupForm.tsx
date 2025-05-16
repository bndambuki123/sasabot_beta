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
        [parent]: { ...prev[parent as keyof FormState], [child]: value }
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
        }])
        .select();

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
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4">Beta Benefits</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Free 3-month access to all features</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>50% discount for 1 year after beta</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Priority support and onboarding</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Influence future features</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Setup in less than 24 hours</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 p-8 bg-gray-50">
            <div className="text-center">
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormSection title="Contact Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
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
                placeholder="Your name"
              />
              {formErrors.fullName && <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
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
                Phone Number (WhatsApp)
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
                placeholder="+254"
              />
              {formErrors.phoneNumber && <p className="mt-1 text-sm text-red-600">{formErrors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formState.preferredContact}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-200"
              >
                <option value="">Select Contact Method</option>
                {contactMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>
          </div>
        </FormSection>

        <FormSection title="Business Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                Business Name <span className="text-red-500">*</span>
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-200"
              >
                <option value="">Select Industry</option>
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-200"
              >
                <option value="">Select Company Size</option>
                {companySizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="businessLocation.city" className="block text-sm font-medium text-gray-700 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="businessLocation.city"
                name="businessLocation.city"
                value={formState.businessLocation.city}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  formErrors.city ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="Enter your city"
              />
              {formErrors.city && <p className="mt-1 text-sm text-red-600">{formErrors.city}</p>}
            </div>
          </div>

          <div className="mt-4">
            <p className="block text-sm font-medium text-gray-700 mb-2">How do you currently interact with customers?</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {customerChannels.map(channel => (
                <div key={channel} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`channel-${channel}`}
                    name="customerChannels"
                    value={channel}
                    checked={formState.customerChannels.includes(channel)}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`channel-${channel}`} className="ml-2 text-sm text-gray-700">
                    {channel}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="customerEnquiries" className="block text-sm font-medium text-gray-700 mb-1">
              Estimated customer enquiries per day
            </label>
            <select
              id="customerEnquiries"
              name="customerEnquiries"
              value={formState.customerEnquiries}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-200"
            >
              <option value="">Select Range</option>
              {enquiryRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </FormSection>

        <FormSection title="Expectations & Permissions">
          <div>
            <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">
              What would you like SasaBot™ to help you with the most?
            </label>
            <textarea
              id="expectations"
              name="expectations"
              value={formState.expectations}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-200"
              placeholder="E.g., handling customer chats, tracking orders, sending payment links, post on socials, etc."
            ></textarea>
          </div>

          <div className="mt-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="shareData"
                name="shareData"
                checked={formState.shareData}
                onChange={handleCheckboxChange}
                className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="shareData" className="ml-2 text-sm text-gray-700">
                I agree to share anonymous chat data to improve SasaBot's accuracy
                <p className="text-xs text-gray-500 mt-1">
                  Your data will be anonymized and used only to improve our service. No personal or sensitive information will be shared.
                </p>
              </label>
            </div>
          </div>

          <div className="mt-4">
            <p className="block text-sm font-medium text-gray-700 mb-2">How would you prefer to give feedback during the beta?</p>
            <div className="grid grid-cols-2 gap-3">
              {feedbackMethods.map(method => (
                <div key={method} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`feedback-${method}`}
                    name="feedbackPreference"
                    value={method}
                    checked={formState.feedbackPreference.includes(method)}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`feedback-${method}`} className="ml-2 text-sm text-gray-700">
                    {method}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </FormSection>

        <FormSection title="Additional Information">
          <div>
            <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us?
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formState.referralSource}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-200"
            >
              <option value="">Select Source</option>
              {referralSources.map(source => (
                <option key={source} value={source}>{source}</option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formState.agreeToTerms}
                onChange={handleCheckboxChange}
                className={`mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                  formErrors.agreeToTerms ? 'border-red-500' : ''
                }`}
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                I agree to receive updates about SasaBot™ and provide feedback during the beta phase <span className="text-red-500">*</span>
                {formErrors.agreeToTerms && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.agreeToTerms}</p>
                )}
              </label>
            </div>
          </div>
        </FormSection>

        <div className="text-center">
          <button 
            type="submit" 
            className={`bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors font-medium ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

export { SignupForm }