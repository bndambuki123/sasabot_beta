import React from 'react';
import { Users, DollarSign, Globe, Clock } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About SasaBot™
          </h2>
          <p className="text-xl font-semibold text-gray-600 italic">
            The AI assistant that helps African businesses automate customer interactions and grow revenue.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              <span className="font-semibold text-blue-900">SasaBot™</span> is an <span className="font-semibold text-gray-600">AI-powered chatbot</span> designed specifically for <span className="font-semibold text-gray-600">businesses</span>. We help you leverage the power of <span className="font-semibold text-gray-600">automation</span> through familiar channels like <span className="font-semibold text-gray-600">WhatsApp</span>, Instagram, and SMS.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              While big companies have expensive custom solutions, <span className="font-semibold text-blue-900">SasaBot™</span> brings the same <span className="font-semibold text-gray-600">powerful technology</span> to local businesses at an <span className="font-semibold text-gray-600">affordable</span> price - giving you the tools to <span className="font-semibold text-gray-600">compete</span> and thrive in today's <span className="font-semibold text-gray-600">digital</span> market.
            </p><br/><br/>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Local Focus</h3>
                  <p className="text-gray-600">Built for African SMEs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <DollarSign className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Affordable</h3>
                  <p className="text-gray-600">Priced for small businesses</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Globe className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Multilingual</h3>
                  <p className="text-gray-600">English, Swahili, Sheng</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">24/7 Service</h3>
                  <p className="text-gray-600">Always available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg p-8 text-white md:transform md:rotate-2 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Why businesses choose SasaBot™:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>"My shop now takes orders even when I'm asleep. Revenue increased by 32%."</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>"I used to miss customer messages. Now everyone gets an instant response."</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>"The payment integration with MPESA is seamless. Customers love it!"</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>"It took me 10 minutes to set up, with no technical knowledge needed."</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-blue-900 text-white rounded-lg p-1 font-small transform -rotate-3 shadow-lg hidden md:block">
              Join the Future of Business Messaging!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};