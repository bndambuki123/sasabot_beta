import React from 'react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jane Wanjiku",
      business: "Fashion Boutique Owner",
      image: "https://i.postimg.cc/kMsrxCSP/20250517-0116-Kenyan-SME-Entrepreneurs-simple-compose-01jvdp28m5e6n8098v9x6zaxem.png",
      quote: "With SasaBot, my online store never sleeps. Customers can shop at 2 AM and get immediate responses. My sales have increased by 40% since I started using it!"
    },
    {
      name: "David Omondi",
      business: "Restaurant Manager",
      image: "https://i.postimg.cc/3wGVW4mY/20250517-0122-Kenyan-Entrepreneurs-Portraits-simple-compose-01jvdpejpxe7cb5yv2zn8x0nw4.png",
      quote: "Table bookings used to be a nightmare to manage. Now SasaBot handles everything automatically. Our staff can focus on serving customers instead of answering the same questions over and over."
    },
    {
      name: "Sarah Mwangi",
      business: "Salon Owner",
      image: "https://i.postimg.cc/BZjZpNTv/20250517-0119-Kenyan-Salon-Entrepreneurs-simple-compose-01jvdp8sbwfwbrjbp0z16t226t.png",
      quote: "I was skeptical about using an AI assistant, but SasaBot was incredibly easy to set up. My clients love booking appointments through WhatsApp, and I've reduced no-shows by sending automatic reminders."
    },
    {
      name: "Abulahi Mohammed",
      business: "Hardware Store Owner",
      image: "https://i.postimg.cc/nzKZDQ4v/20250517-0109-Somali-Store-Owner-simple-compose-01jvdnp6kne2rrwbb8cgya4aq2.png",
      quote: "Since we plugged SasaBot into our WhatsApp line, customers get instant answers on stock and pricing—even at 10 p.m.—and my sales team finally has time to focus on the counter, not their phones. It's like hiring a 24/7 clerk who never asks for a day off."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from businesses already using SasaBot in their daily operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-4 -left-4 bg-green-700 rounded-full p-2">
                <Quote className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center mb-4 pt-2">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-green-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.business}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-900 rounded-xl p-8 text-white text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Join 100+ African Businesses Using SasaBot</h3>
          <p className="text-lg mb-6">Experience how SasaBot can transform your customer service and grow your revenue.</p>
          <Link 
            to="/pricing" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md transition-colors font-medium inline-block"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};