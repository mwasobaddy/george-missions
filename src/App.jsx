import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import Blog from './pages/Blog';
import DonatePage from './pages/DonatePage';
import AdminBlog from './pages/AdminBlog';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin" element={<Navigate to="/admin/blog" replace />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 