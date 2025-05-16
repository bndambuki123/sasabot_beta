import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    businessType: '',
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(?:\+254|0)[17]\d{8}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid Kenyan phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.business.trim()) {
      newErrors.business = 'Business name is required';
    }
    
    if (!formData.businessType) {
      newErrors.businessType = 'Please select your business type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white" id="join-beta">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join SasaBot Beta
          </h2>
          <p className="text-xl text-green-100">
            Get 3 months free access and 50% discount on future plans
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
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
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden text-gray-800">
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
                    <span>50% lifetime discount after beta</span>
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
                <p className="text-sm text-gray-500">
                  Limited spots available. Beta access closing soon.
                </p>
              </div>
              
              <div className="bg-gray-50 md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                        }`}
                        placeholder="+254 or 07..."
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.business ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                        }`}
                        placeholder="Your business name"
                      />
                      {errors.business && <p className="mt-1 text-sm text-red-600">{errors.business}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.businessType ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
                        }`}
                      >
                        <option value="">Select business type</option>
                        <option value="retail">Retail / Online Shop</option>
                        <option value="restaurant">Restaurant / Cafe</option>
                        <option value="hotel">Hotel / Accommodation</option>
                        <option value="beauty">Salon / Beauty Services</option>
                        <option value="transport">Transport / Logistics</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.businessType && <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Early Access'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};