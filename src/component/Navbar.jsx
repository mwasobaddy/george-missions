import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

// Navbar component with mobile responsiveness

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentScripture, setCurrentScripture] = useState({
        verse: "Go therefore and make disciples of all nations...",
        reference: "Matthew 28:19"
    });
    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-orange-600">George's Mission</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#mission" className="text-gray-700 hover:text-orange-600">Mission</a>
                <a href="#updates" className="text-gray-700 hover:text-orange-600">Updates</a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-600">Impact</a>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
                  Donate
                </button>
              </div>
    
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                <a href="#mission" className="block px-3 py-2 text-gray-700 hover:bg-orange-50">Mission</a>
                <a href="#updates" className="block px-3 py-2 text-gray-700 hover:bg-orange-50">Updates</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-orange-50">Impact</a>
                <button className="w-full mt-2 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
                  Donate
                </button>
              </div>
            </div>
          )}
        </nav>
    );
};

export default Navbar;