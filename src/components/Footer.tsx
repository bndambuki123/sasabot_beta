import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Link to="/">
                <img 
                  src="https://i.postimg.cc/m2QL81Wn/Sasa-BOT-Logo-X-small.png" 
                  alt="SasaBot Logo" 
                  className="h-10 w-auto mr-2"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4 max-w-xs">
              AI-powered WhatsApp assistant that helps African SMEs automate customer service, orders, and payments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/254700000000" className="text-gray-300 hover:text-green-500 transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="mailto:info@sasabot.com" className="text-gray-300 hover:text-green-500 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+254700000000" className="text-gray-300 hover:text-green-500 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/demo" className="text-gray-300 hover:text-green-500 transition-colors">Demo</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-green-500 transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-green-500 transition-colors">FAQ</Link></li>
              <li><Link to="/signup" className="text-gray-300 hover:text-green-500 transition-colors">Join Beta</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-green-500 transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:privacy@sasabot.ai" className="text-gray-300 hover:text-green-500 transition-colors">Data Protection</a></li>
              <li><a href="mailto:legal@sasabot.ai" className="text-gray-300 hover:text-green-500 transition-colors">Legal Inquiries</a></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <Mail className="mr-2 h-5 w-5 text-green-500" />
                <a href="mailto:info@sasabot.com" className="hover:text-green-500 transition-colors">info@sasabot.ai</a>
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="mr-2 h-5 w-5 text-green-500" />
                <a href="tel:+254700000000" className="hover:text-green-500 transition-colors">+254 762 222 000</a>
              </p>
              <p className="flex items-center text-gray-300">
                <MessageSquare className="mr-2 h-5 w-5 text-green-500" />
                <a href="https://wa.me/254700000000" className="hover:text-green-500 transition-colors">WhatsApp Support</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} SasaBot. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link to="/privacy-policy" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-green-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};