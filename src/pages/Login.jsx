import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IMAGE_URL = 'https://png.pngtree.com/png-clipart/20230810/original/pngtree-jesus-christ-clipart-illustration-png-image_10696436.png'; // Placeholder Christ animated image

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin/blog');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#f3eaff] overflow-hidden">
      {/* Abstract SVG background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,160 C480,320 960,0 1440,160 L1440,800 L0,800 Z" fill="#e9d8fd" fillOpacity="0.6" />
        <path d="M0,400 C600,600 900,200 1440,400 L1440,800 L0,800 Z" fill="#d6bcfa" fillOpacity="0.3" />
      </svg>
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-2">
              <span className="inline-block w-16 h-2 rounded-full bg-purple-300"></span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Log In</h2>
            <p className="text-gray-500 text-sm">Welcome back! Please enter your details</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-xs text-purple-500 hover:underline">forgot password ?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md font-semibold hover:bg-purple-600 transition-colors"
            >
              Log in
            </button>
          </form>
          <div className="mt-8 text-center text-gray-500 text-sm">
            Don't have account? <a href="#" className="text-purple-500 font-medium hover:underline">Sign up</a>
          </div>
        </div>
        {/* Right: Image with overlay */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 opacity-80 rounded-r-2xl"></div>
          <img
            src={IMAGE_URL}
            alt="Christ animated"
            className="w-full h-full object-cover rounded-r-2xl mix-blend-multiply"
            style={{ minHeight: 400 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login; 