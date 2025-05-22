import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://i.postimg.cc/Bnj2bFC1/Sasa-BOT-Logo-X-blue-mini.png" 
                alt="SasaBot Logo" 
                className="h-10 w-auto mr-2"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
          </nav>
          
          <div className="hidden md:block">
            <Link 
              to="/pricing" 
              className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors font-medium"
            >
              Join Now
            </Link>
          </div>
          
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/demo"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/faq"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/pricing" 
              className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};