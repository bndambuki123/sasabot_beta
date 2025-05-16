import React from 'react';
import { 
  MessageSquare, 
  ShoppingCart, 
  CreditCard, 
  Globe, 
  Zap, 
  BarChart3, 
  Calendar, 
  Smartphone 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-800" />,
      title: 'AI Customer Service',
      description: 'Instantly respond to customer inquiries 24/7 in natural language that feels human'
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-blue-800" />,
      title: 'Order Management',
      description: 'Let customers browse products, place orders and track deliveries all through chat'
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-800" />,
      title: 'MPESA Integration',
      description: 'Accept payments directly within WhatsApp with seamless MPESA STK push'
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-800" />,
      title: 'Multilingual Support',
      description: 'Communicate with customers in English, Swahili, or Sheng - your choice'
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-800" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with no coding or technical knowledge required'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-800" />,
      title: 'Business Analytics',
      description: 'Track conversations, orders, and customer satisfaction with detailed insights'
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-800" />,
      title: 'Booking System',
      description: 'Allow customers to book appointments, tables, or services automatically'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-800" />,
      title: 'Multi-channel Support',
      description: 'Connect with WhatsApp, Instagram DMs, and SMS from a single platform'
    }
  ];

  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl font-medium italic text-gray-600">
            Everything you need to automate customer interactions and grow your revenue
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-green-100 rounded-full p-3 inline-flex mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/pricing" 
            className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors font-medium inline-block"
          >
            Try These Features Free
          </Link>
        </div>
      </div>
    </section>
  );
};