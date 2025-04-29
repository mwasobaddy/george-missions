import React, { useState, useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import backgroundImage from '../assets/hero-background.webp';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  useEffect(() => {
    // Load blog posts from localStorage (created by admin)
    const fetchPosts = async () => {
      try {
        const stored = localStorage.getItem('blogPosts');
        if (stored) {
          const parsed = JSON.parse(stored);
          setPosts(parsed.posts || []);
        } else {
          setPosts([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const categories = ['all', 'Success Stories', 'Project Updates', 'Team Stories', 'Announcements'];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Blog - George Missions"
        description="Read inspiring stories, mission updates, and success stories from George Missions."
      />
      
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="backdrop-blur-sm bg-orange-200/50 pt-16 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 pt-20 pb-12 sm:pt-24 lg:pt-32">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Our Blog</span>
                <span className="block text-orange-600">Stories of Hope & Impact</span>
              </h1>
              <p className="mt-6 text-xl text-gray-800 max-w-3xl font-semibold">
                Discover inspiring stories, mission updates, and testimonies from our work in Kenya and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-200'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48">
                    <LazyLoadImage
                      src={post.image}
                      alt={post.title}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-orange-600 font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-orange-600 hover:text-orange-800 font-medium flex items-center group"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage; 