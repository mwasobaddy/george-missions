import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="mt-6 inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 