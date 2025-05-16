import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const demos = [
    {
      title: "Online Shop",
      description: "See how SasaBot handles product inquiries, processes orders, and collects payment for an online clothing store.",
      messages: [
        { isUser: true, text: "Hi, do you have the blue dress in size M?" },
        { isBot: true, text: "Hello! Yes, we have the blue summer dress in size M in stock. Would you like to see a photo of it?" },
        { isUser: true, text: "Yes please" },
        { isBot: true, text: "Here's our blue summer dress in size M for Ksh 2,500. [Image: Blue Dress]" },
        { isUser: true, text: "I'd like to buy it. How do I pay?" },
        { isBot: true, text: "Great choice! I can process your order right now. Would you like to pay via MPESA?" },
        { isUser: true, text: "Yes" },
        { isBot: true, text: "Perfect! Please confirm your delivery details: Jane Doe, Apartment 4B, Westlands, Nairobi. Is this correct?" },
        { isUser: true, text: "Yes that's right" },
        { isBot: true, text: "Thank you! I'm sending an MPESA payment request of Ksh 2,500 to your number now. Once payment is confirmed, your order will ship within 24 hours." }
      ]
    },
    {
      title: "Restaurant Booking",
      description: "Watch SasaBot handle table reservations, answer menu questions, and manage special requests for a restaurant.",
      messages: [
        { isUser: true, text: "Hello, I'd like to book a table for tomorrow" },
        { isBot: true, text: "Hi there! I'd be happy to help you book a table at Savanna Restaurant. For how many people and what time were you thinking?" },
        { isUser: true, text: "4 people, around 7pm" },
        { isBot: true, text: "I have availability for 4 people at either 6:30pm or 7:15pm tomorrow. Which would you prefer?" },
        { isUser: true, text: "7:15 works better" },
        { isBot: true, text: "Perfect! I've booked a table for 4 people tomorrow at 7:15pm. Can I get your name for the reservation?" },
        { isUser: true, text: "John Kamau" },
        { isBot: true, text: "Thank you, Mr. Kamau. Your reservation is confirmed. Would you like to see our menu or do you have any special requests I should note?" },
        { isUser: true, text: "Does the restaurant have vegetarian options?" },
        { isBot: true, text: "Yes, we have several vegetarian options including our popular mushroom risotto and vegetable curry. All vegetarian dishes are marked with a (V) on our menu. I'll note your interest in vegetarian options for your reservation." }
      ]
    },
    {
      title: "Salon Appointment",
      description: "Experience how SasaBot helps customers book beauty services, check pricing, and receive appointment reminders.",
      messages: [
        { isUser: true, text: "Hi, I need a haircut and manicure" },
        { isBot: true, text: "Hello! Welcome to Glow Beauty Salon. I'd be happy to help you book a haircut and manicure. What day and time would work best for you?" },
        { isUser: true, text: "Is Saturday morning available?" },
        { isBot: true, text: "Let me check... We have availability this Saturday at 9:00 AM, 10:30 AM, or 11:45 AM. Which time would you prefer?" },
        { isUser: true, text: "10:30 please. How much will it cost?" },
        { isBot: true, text: "I've reserved Saturday at 10:30 AM for you. For pricing, a ladies' haircut is Ksh 1,500 and a regular manicure is Ksh 800, so your total would be Ksh 2,300. Would you like to book both services?" },
        { isUser: true, text: "Yes, that works" },
        { isBot: true, text: "Great! Can I get your name to complete the booking?" },
        { isUser: true, text: "Mary Achieng" },
        { isBot: true, text: "Thank you, Mary. Your appointment for a haircut and manicure is confirmed for this Saturday at 10:30 AM. Would you like a reminder the day before your appointment?" }
      ]
    }
  ];
  
  const handleNext = () => {
    setActiveDemo((prev) => (prev === demos.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveDemo((prev) => (prev === 0 ? demos.length - 1 : prev - 1));
  };
  
  const [visibleMessages, setVisibleMessages] = useState<number>(3);
  
  useEffect(() => {
    setVisibleMessages(3);
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < demos[activeDemo].messages.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [activeDemo]);
  
  return (
    <section className="py-16 bg-white" id="demo">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            See SasaBot in Action
          </h2>
          
          <br/>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous demo"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">{demos[activeDemo].title}</h3>
              <p className="text-gray-600">{demos[activeDemo].description}</p>
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next demo"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          {/* Tablet Frame */}
          <div className="max-w-md mx-auto bg-gray-800 rounded-[2.5rem] p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Tablet Details */}
            <div className="flex justify-between items-center mb-2">
              <div className="w-20 h-1 bg-gray-700 rounded-full mx-auto"></div>
            </div>
            
            {/* WhatsApp Interface */}
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* WhatsApp Header */}
              <div className="bg-green-600 text-white p-4 flex items-center">
                <img 
                  src="https://i.postimg.cc/KcJwb7W7/Whatsapp-icon.png"
                  alt="SasaBot Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">SasaBot</p>
                  <p className="text-sm opacity-90">AI Assistant</p>
                </div>
              </div>
              
              {/* Chat Area */}
              <div 
                className="h-[400px] overflow-y-auto p-4 space-y-3"
                style={{
                  backgroundImage: 'url(https://i.postimg.cc/yxF1jcZx/qwd83nc4xxf41.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {demos[activeDemo].messages.slice(0, visibleMessages).map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`rounded-lg p-3 max-w-[80%] shadow-md ${
                        message.isUser 
                          ? 'bg-[#dcf8c6] ml-auto' 
                          : 'bg-white'
                      }`}
                    >
                      <p className="text-gray-800">{message.text}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input Area */}
              <div className="bg-gray-50 p-4 flex items-center space-x-3 border-t">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  className="flex-1 bg-white rounded-full px-4 py-2 text-sm focus:outline-none border border-gray-200"
                />
                <button className="bg-green-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Tablet Home Button */}
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-700"></div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {demos.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeDemo ? 'bg-green-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveDemo(index)}
                aria-label={`Show demo ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/pricing" 
              className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors font-medium inline-block"
            >
              Try SasaBot Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};