import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Navbar component with mobile responsiveness

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAdmin = localStorage.getItem('isAdmin');

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-orange-600">George's Mission</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${location.pathname === '/about' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600`}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={`${location.pathname === '/gallery' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600`}
            >
              Gallery
            </Link>
            <Link 
              to="/blog" 
              className={`${location.pathname === '/blog' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600`}
            >
              Blog
            </Link>
            <Link 
              to="/donate" 
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
            >
              Donate
            </Link>
            {isAdmin ? (
              <Link 
                to="/admin/blog" 
                className={`${location.pathname === '/admin/blog' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600`}
              >
                Admin
              </Link>
            ) : (
              <Link 
                to="/admin/blog" 
                className={`${location.pathname === '/admin/blog' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600`}
              >
                Admin Login
              </Link>
            )}
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
            <Link 
              to="/" 
              className={`block px-3 py-2 ${location.pathname === '/' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-orange-50'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 ${location.pathname === '/about' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-orange-50'}`}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={`block px-3 py-2 ${location.pathname === '/gallery' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-orange-50'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/blog" 
              className={`block px-3 py-2 ${location.pathname === '/blog' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-orange-50'}`}
            >
              Blog
            </Link>
            <Link 
              to="/donate" 
              className="w-full mt-2 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
            >
              Donate
            </Link>
            {isAdmin ? (
              <Link 
                to="/admin/blog" 
                className={`block px-3 py-2 ${location.pathname === '/admin/blog' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-orange-50'}`}
              >
                Admin
              </Link>
            ) : (
              <Link 
                to="/admin/blog" 
                className={`block px-3 py-2 ${location.pathname === '/admin/blog' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-orange-50'}`}
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;