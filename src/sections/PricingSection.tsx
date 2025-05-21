import React, { useState } from 'react';
import { Check, X, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const allFeatures = [
    'Chat Flows Automation',
    'WhatsApp Business API Hosting',
    'Multi-language support',
    'AI chat capabilities',
    'Analytics dashboard',
    'Instagram & Facebook Integration',
    'Priority support',
    'Custom integrations'
  ];

  const standardPlans = [
    {
      name: 'Msingi',
      monthlyPrice: 0.49,
      yearlyPrice: 5.29,
      conversations: 'Basic automation only',
      features: {
        'Chat Flows Automation': true,
        'WhatsApp Business API Hosting': true,
        'Multi-language support': false,
        'AI chat capabilities': false,
        'Analytics dashboard': false,
        'Instagram & Facebook Integration': false,
        'Priority support': false,
        'Custom integrations': false
      }
    },
    {
      name: 'Start',
      monthlyPrice: 34.99,
      yearlyPrice: 377.89,
      conversations: 'Up to 1,000 conversations/month',
      features: {
        'Chat Flows Automation': true,
        'WhatsApp Business API Hosting': true,
        'Multi-language support': true,
        'AI chat capabilities': true,
        'Analytics dashboard': true,
        'Instagram & Facebook Integration': false,
        'Priority support': false,
        'Custom integrations': false
      }
    },
    {
      name: 'Growth',
      monthlyPrice: 99.99,
      yearlyPrice: 1079.89,
      conversations: 'Up to 3,000 conversations/month',
      features: {
        'Chat Flows Automation': true,
        'WhatsApp Business API Hosting': true,
        'Multi-language support': true,
        'AI chat capabilities': true,
        'Analytics dashboard': true,
        'Instagram & Facebook Integration': true,
        'Priority support': true,
        'Custom integrations': false
      }
    }
  ];

  const enterprisePlan = {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    conversations: 'Custom volume',
    features: {
      'Chat Flows Automation': true,
      'WhatsApp Business API Hosting': true,
      'Multi-language support': true,
      'AI chat capabilities': true,
      'Analytics dashboard': true,
      'Instagram & Facebook Integration': true,
      'Priority support': true,
      'Custom integrations': true
    }
  };

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
            Choose the plan that best fits your business needs
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
              Yearly <span className="text-green-600">(Save up to 10%)</span>
            </span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
          {standardPlans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden flex-1 transform transition-all hover:-translate-y-1"
            >
              <div className="bg-gray-800 p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="opacity-90">&nbsp;</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm text-gray-600 mr-1">$</span>
                    <span className="text-3xl font-bold text-gray-800">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm font-normal text-gray-600 ml-1">/{isYearly ? 'yr' : 'mo'}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{plan.conversations}</p>
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
                  <Link
                    to="/signup"
                    className="w-full h-14 rounded-md bg-blue-900 hover:bg-blue-700
                             text-white transition-colors font-medium
                             flex items-center justify-center"
                  >
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1">
          <div className="bg-gray-800 p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-1">{enterprisePlan.name}</h3>
            <p className="text-sm opacity-90">For large-scale operations</p>
          </div>
          <div className="p-6">
            <div className="md:flex items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <span className="text-3xl font-bold text-gray-800">Custom Pricing</span>
                <p className="text-gray-600 mt-2">Tailored solutions for your business needs</p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://wa.me/254700000000"
                  className="inline-block px-8 h-14 rounded-md bg-gray-800 hover:bg-gray-700
                           text-white transition-colors font-medium
                           flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding Conversation-Based Pricing</h3>
            <p className="text-gray-600">
              Conversation-based pricing empowers you to drive more engagement with your audience. A conversation is open for 24 hours* with an unlimited number of messages.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              * A conversation starts when a customer messages you and includes all messages exchanged within the next 24 hours.
            </p>
          </div>
          
          <div className="mt-6">
            <p className="text-sm">All prices are in USD and exclude VAT</p>
            <p className="text-sm mt-2">Need a custom plan? <a href="https://wa.me/254700000000" className="text-blue-600 hover:text-blue-700">Contact us</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};