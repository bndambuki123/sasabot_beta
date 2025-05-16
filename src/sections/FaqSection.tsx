import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection = () => {
  const faqs = [
    {
      question: "How does SasaBot work with my WhatsApp?",
      answer: "SasaBot connects to your WhatsApp Business account through the official WhatsApp Business API. We handle all the technical setup so you don't have to worry about it. Once connected, SasaBot can automatically respond to messages, collect customer information, process orders, and even initiate payment requests."
    },
    {
      question: "What exactly counts as a \"conversation\" on SasaBot and how does that affect my pricing?",
      answer: "A \"conversation\" is defined as a <strong>single 24-hour window</strong> of interaction between SasaBot and <strong>one</strong> customer. <br><br>The window opens the moment SasaBot receives a new message from that customer and <strong>closes 24 hours later</strong>; every message exchanged in that period—whether automated replies, follow-up questions, or agent takeovers—belongs to that <strong>same</strong> conversation. <br><br>If the customer sends another message after the 24-hour window has lapsed, a <strong>new conversation begins and is counted separately</strong>.<br><br>Each pricing tier includes a monthly allowance of such conversations (for example, 500 on the Msingi plan and 5,000 on the Growth plan); <strong>you are billed based on how many windows you use</strong>, NOT on the number of individual messages inside them. <br/><br/>Staying within your plan's allowance keeps your cost fixed, while exceeding it either rolls you into the next tier or adds a small per-conversation overage—whichever is cheaper for you."
    },
    {
      question: "Do I need technical knowledge to use SasaBot?",
      answer: "NOT AT ALL! SasaBot is designed to be easy to use for anyone, regardless of technical background. Our setup wizard guides you through the process step by step, and our team is available to help if needed. You can customize your bot's responses, products, and settings through a simple dashboard."
    },
    {
      question: "What languages does SasaBot support?",
      answer: "SasaBot currently supports English, Swahili, and Sheng. You can set your default language and even allow the bot to automatically detect and respond in the language your customer is using. We plan to add more local languages in the future."
    },
    {
      question: "How does the MPESA integration work?",
      answer: "SasaBot integrates directly with MPESA through the STK push service. When a customer is ready to pay, SasaBot can automatically send them an MPESA payment request. The customer simply enters their PIN, and payment is processed. You'll receive real-time notifications of successful payments."
    },
    {
      question: "What if a customer asks something SasaBot can't handle?",
      answer: "While SasaBot can handle most routine inquiries and transactions, you can set it to notify you when it encounters something it can't answer. You can then take over the conversation manually. Over time, SasaBot learns from these interactions to get better at handling similar questions in the future."
    },
    {
      question: "What happens after the free beta period?",
      answer: "After your 3-month free beta period, you'll automatically receive a 50% lifetime discount on any of our regular plans. You'll get plenty of notice before the beta period ends, and there's no obligation to continue - though we hope you'll love SasaBot enough to stay with us!"
    },
    {
      question: "Is my business information and customer data secure?",
      answer: "Absolutely. We take security very seriously. All conversations and customer data are encrypted, and we comply with data protection regulations. We never share your business or customer information with third parties, and you always maintain ownership of your data."
    },
    {
      question: "Can SasaBot integrate with my existing business software?",
      answer: "For beta users, we offer basic integration with common business tools through Zapier. Premium plans will include direct API access for custom integrations with your existing systems like inventory management or CRM software."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(-1);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SasaBot
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button 
                  className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
            <a 
              href="https://wa.me/254700000000" 
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.52 0-2.992-.527-4.172-1.493l-.298-.224-.31.163-1.532.61.155-1.665-.243-.376c-1.026-1.64-1.568-3.532-1.568-5.478 0-5.695 4.632-10.327 10.328-10.327 2.758 0 5.352 1.075 7.3 3.025 1.95 1.949 3.025 4.542 3.024 7.3 0 5.695-4.631 10.328-10.327 10.328m4.895-18.217c-2.343-2.344-5.456-3.635-8.769-3.636-6.853 0-12.442 5.589-12.442 12.442 0 2.19.578 4.33 1.675 6.217l-1.783 6.504 6.672-1.749c1.812.995 3.85 1.52 5.878 1.52 6.854 0 12.443-5.589 12.443-12.442 0-3.312-1.292-6.424-3.63-8.769" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};