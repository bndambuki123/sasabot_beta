import React from 'react';
import { Settings, MessageSquare, ShoppingBag, CreditCard, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How SasaBot Works
          </h2>
          <p className="text-xl font-medium italic text-gray-600">
            Get set up in minutes, no technical knowledge required
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Quick Setup</h3>
                <p className="text-lg text-gray-600">
                  Sign up and connect SasaBot to your WhatsApp business account in just a few clicks. No coding or technical knowledge needed.
                </p>
              </div>
              <div className="md:w-12 flex justify-center">
                <div className="bg-green-600 text-white rounded-full p-3 relative z-10">
                  <Settings className="h-6 w-6" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <img 
                  src="https://i.postimg.cc/xTMXDjfL/20250516-1728-Seamless-Mobile-Connection-simple-compose-01jvcvb2cxfcqagwd4jp8f0cgg.png" 
                  alt="Setup illustration" 
                  className="rounded-lg shadow-md mx-auto md:ml-0 mt-4 md:mt-0 max-w-xs"
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Customize Your Bot</h3>
                <p className="text-lg text-gray-600">
                  Train SasaBot with your business information, product details, and FAQs. Choose languages and response style that matches your brand.
                </p>
              </div>
              <div className="md:w-12 flex justify-center">
                <div className="bg-green-600 text-white rounded-full p-3 relative z-10">
                  <MessageSquare className="h-6 w-6" />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                <img 
                  src="https://i.postimg.cc/WzRcYQ5N/Untitled24new.png" 
                  alt="Customize illustration" 
                  className="rounded-lg shadow-md mx-auto md:mr-0 mt-4 md:mt-0 max-w-xs"
                />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Automate Orders</h3>
                <p className="text-lg text-gray-600">
                  Let SasaBot handle customer orders, collect details, and prepare them for fulfillment automatically through your familiar WhatsApp.
                </p>
              </div>
              <div className="md:w-12 flex justify-center">
                <div className="bg-green-600 text-white rounded-full p-3 relative z-10">
                  <ShoppingBag className="h-6 w-6" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <img 
                  src="https://i.postimg.cc/GmY5rvcJ/20250516-1802-Automated-Order-Processing-simple-compose-01jvcx7w9ke4jr238cv72gbszt.png" 
                  alt="Orders illustration" 
                  className="rounded-lg shadow-md mx-auto md:ml-0 mt-4 md:mt-0 max-w-xs"
                />
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Receive Payments</h3>
                <p className="text-lg text-gray-600">
                  Integrate with MPESA to accept payments directly through chat. Customers can pay quickly without leaving WhatsApp.
                </p>
              </div>
              <div className="md:w-12 flex justify-center">
                <div className="bg-green-600 text-white rounded-full p-3 relative z-10">
                  <CreditCard className="h-6 w-6" />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                <img 
                  src="https://i.postimg.cc/66zs1kcV/20250516-1826-Digital-Payment-Transition-simple-compose-01jvcykrcxe6wsc1be4z5pf624.png" 
                  alt="Payments illustration" 
                  className="rounded-lg shadow-md mx-auto md:mr-0 mt-4 md:mt-0 max-w-xs"
                />
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Grow Your Business</h3>
                <p className="text-lg text-gray-600">
                  Monitor performance in your dashboard, get insights on customer behavior, and watch your business grow 24/7.
                </p>
              </div>
              <div className="md:w-12 flex justify-center">
                <div className="bg-green-600 text-white rounded-full p-3 relative z-10">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <img 
                  src="https://i.postimg.cc/Vkwf2dVS/20250516-1838-Empowered-Entrepreneurial-Success-simple-compose-01jvczb2b4evnr0d3e2k4vbdd6.png" 
                  alt="Growth illustration" 
                  className="rounded-lg shadow-md mx-auto md:ml-0 mt-4 md:mt-0 max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/pricing" 
            className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors font-medium inline-block"
          >
            Get Started For Free
          </Link>
        </div>
      </div>
    </section>
  );
};