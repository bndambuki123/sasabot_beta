import React, { useState } from 'react';
import { Check, X, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const allFeatures = [
    'Chat Flows Automation',
    'Order & payment links',
    'Multi-language support',
    'AI chat capabilities',
    'Analytics dashboard',
    'Instagram & Facebook (Coming Soon)',
    'Priority support'
  ];

  const plans = [
    {
      name: 'Beta Access',
      isBeta: true,
      monthlyPrice: 0,
      yearlyPrice: 0,
      conversations: 'Unlimited during beta',
      features: {
        'Chat Flows Automation': true,
        'Order & payment links': true,
        'Multi-language support': true,
        'AI chat capabilities': true,
        'Analytics dashboard': true,
        'Instagram & Facebook (Coming Soon)': true,
        'Priority support': true
      }
    },
    {
      name: 'Msingi',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      conversations: '500 conversations/month',
      features: {
        'Chat Flows Automation': true,
        'Order & payment links': true,
        'Multi-language support': true,
        'AI chat capabilities': false,
        'Analytics dashboard': false,
        'Instagram & Facebook (Coming Soon)': false,
        'Priority support': false
      }
    },
    {
      name: 'Growth',
      monthlyPrice: 9999,
      yearlyPrice: 109999,
      conversations: '5,000 conversations/month',
      features: {
        'Chat Flows Automation': true,
        'Order & payment links': true,
        'Multi-language support': true,
        'AI chat capabilities': true,
        'Analytics dashboard': true,
        'Instagram & Facebook (Coming Soon)': false,
        'Priority support': false
      }
    },
    {
      name: 'Boss',
      monthlyPrice: 19999,
      yearlyPrice: 215999,
      conversations: '10,000 conversations/month',
      features: {
        'Chat Flows Automation': true,
        'Order & payment links': true,
        'Multi-language support': true,
        'AI chat capabilities': true,
        'Analytics dashboard': true,
        'Instagram & Facebook (Coming Soon)': true,
        'Priority support': true
      }
    }
  ];

  const sortFeatures = (plan) => {
    return [...allFeatures].sort((a, b) => {
      if (plan.features[a] && !plan.features[b]) return -1;
      if (!plan.features[a] && plan.features[b]) return 1;
      return 0;
    });
  };

  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Join our beta and get 3 months free + 50% off for your first year
          </p>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-green-600' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-gray-200' : 'bg-green-500'
              }`}
              role="switch"
              aria-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-green-600' : 'text-gray-500'}`}>
              Yearly <span className="text-green-600">(Save 15%)</span>
            </span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden flex-1 transform transition-all hover:-translate-y-1 ${
                plan.isBeta ? 'border-2 border-blue-500' : ''
              }`}
            >
              <div className={`${plan.isBeta ? 'bg-blue-900' : 'bg-gray-800'} p-6 text-white text-center`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="opacity-90">{plan.isBeta ? 'Limited time offer' : '\u00A0'}</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  {plan.isBeta ? (
                    <>
                      <span className="text-4xl font-bold text-gray-800">Free</span>
                      <span className="text-gray-600 ml-2">for 3 months</span>
                      <p className="text-gray-600 mt-2">Then 50% off any plan for 1 year!</p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-gray-800">
                          {(isYearly ? plan.yearlyPrice : plan.monthlyPrice).toLocaleString('en-KE', { style: 'currency', currency: 'KES' }).replace('.00', '')}
                        </span>
                        <span className="text-sm font-normal text-gray-600 ml-1">/{isYearly ? 'yr' : 'mo'}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{plan.conversations}</p>
                    </>
                  )}
                </div>
                
                <div className="min-h-[320px]">
                  <ul className="space-y-3">
                    {sortFeatures(plan).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        {plan.features[feature] ? (
                          <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${plan.features[feature] ? 'text-gray-600' : 'text-gray-400'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                  {plan.isBeta ? (
                    <Link
                      to="/signup"         
                      className="w-full h-14 rounded-md bg-blue-900 hover:bg-blue-700 text-white
                               transition-all transform hover:scale-105 font-medium
                               flex items-center justify-center"
                    >
                      Join Free Beta
                    </Link>
                  ) : (
                    <button
                      className="w-full h-14 rounded-md bg-gray-200 text-gray-800
                               hover:bg-gray-300 transition-colors font-medium
                               flex items-center justify-center"
                      disabled
                    >
                      <Lock className="h-5 w-5 mr-2" />
                      Coming Soon
                    </button>
                  )}
                </div>

                {plan.isBeta && (
                  <p className="text-sm text-gray-500 text-center mt-4">No credit card required</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">All prices are in KES and include VAT</p>
          <p className="text-sm mt-2">Need a custom plan? <a href="https://wa.me/254700000000" className="text-blue-600 hover:text-blue-700">Contact us</a></p>
        </div>
      </div>
    </section>
  );
};