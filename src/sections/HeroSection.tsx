import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-green-700">Automate</span> Your Business on <span className="text-green-700">WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Let AI handle your customer service, orders, and payments 24/7.
              <span className="block mt-2 text-gray-500 text-lg">
                <em>"Biz yako iendelee, bila stress"</em>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/pricing" 
                className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all transform hover:scale-105 font-medium text-center flex items-center justify-center"
              >
                Join Free Beta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 px-6 py-3 rounded-md transition-colors font-medium text-center"
              >
                See Demo
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Currently in beta - 3 months free access + 50% discount on future plans
            </p>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Tablet Frame with Rotation */}
            <div className="max-w-md mx-auto bg-gray-800 rounded-[2.5rem] p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Tablet Details */}
              <div className="flex justify-between items-center mb-2">
                <div className="w-20 h-1 bg-gray-700 rounded-full mx-auto"></div>
              </div>
              
              {/* WhatsApp Chat Interface */}
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* WhatsApp Header */}
                <div className="bg-green-700 text-white p-3 flex items-center">
                  <img 
                    src="https://i.postimg.cc/KcJwb7W7/Whatsapp-icon.png"
                    alt="SasaBot Profile"
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <p className="text-lg font-bold">SasaBot - AI Assistant</p>
                </div>
                
                {/* Chat Area */}
                <div 
                  className="h-[400px] overflow-y-auto p-3 space-y-2 text-sm"
                  style={{
                    backgroundImage: 'url(https://i.postimg.cc/yxF1jcZx/qwd83nc4xxf41.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-2 max-w-[80%] shadow">
                      <p>Hello! I'd like to book a table for tomorrow evening.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-2 max-w-[80%] shadow">
                      <p>Hi there! I'd be happy to help you book a table. For how many people and what time would you prefer?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-2 max-w-[80%] shadow">
                      <p>4 people at 7:30 PM please.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-2 max-w-[80%] shadow">
                      <p>Great! I've booked a table for 4 people tomorrow at 7:30 PM. Would you like me to send you a confirmation?</p>
                    </div>
                  </div>
                </div>
                
                {/* Input Area */}
                <div className="bg-gray-50 p-3 flex items-center space-x-2">
                  <input 
                    type="text" 
                    placeholder="Type a message..."
                    className="flex-1 bg-white rounded-full px-4 py-2 text-sm focus:outline-none border border-gray-200"
                  />
                  <button className="bg-green-700 text-white rounded-full p-2 text-sm">
                    Send
                  </button>
                </div>
              </div>
              
              {/* Tablet Home Button */}
              <div className="mt-4 flex justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-gray-700"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white rounded-lg p-4 font-semibold transform rotate-3 shadow-lg text-sm hidden md:block">
              All automated, no human needed!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};