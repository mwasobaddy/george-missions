import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';
import LoginAnimation from '../assets/img/LoginAnimation.webp';

const IMAGE_URL = LoginAnimation;
const BRAND_ORANGE = '#f97316';

const AdminBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(blogPosts.posts);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    image: '',
    excerpt: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('isAdmin');
    setIsAuthenticated(!!auth);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'georgesadera' && credentials.password === 'georgesadera@123') {
      localStorage.setItem('isAdmin', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    navigate('/admin/blog');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center relative bg-[#fff7ed] overflow-hidden">
        {/* Abstract SVG background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160 C480,320 960,0 1440,160 L1440,800 L0,800 Z" fill="#fde68a" fillOpacity="0.5" />
          <path d="M0,400 C600,600 900,200 1440,400 L1440,800 L0,800 Z" fill="#fcd34d" fillOpacity="0.3" />
        </svg>
        <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex overflow-hidden">
          {/* Left: Admin Login Form */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-2">
                <span className="inline-block w-16 h-2 rounded-full bg-orange-300"></span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-1">Admin Login</h2>
              <p className="text-gray-500 text-sm">Sign in to manage blog posts</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter your username"
                  value={credentials.username}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors"
              >
                Log in
              </button>
            </form>
          </div>
          {/* Right: Image with overlay */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 opacity-80 rounded-r-2xl"></div>
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
  }

  const handlePostInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      const updatedPosts = posts.map(post => 
        post.id === editId ? { ...newPost, id: editId, date: new Date().toISOString().split('T')[0] } : post
      );
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify({ posts: updatedPosts }));
    } else {
      const newPostWithId = {
        ...newPost,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      };
      const updatedPosts = [...posts, newPostWithId];
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify({ posts: updatedPosts }));
    }

    setNewPost({
      title: '',
      content: '',
      author: '',
      category: '',
      image: '',
      excerpt: ''
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (post) => {
    setNewPost(post);
    setIsEditing(true);
    setEditId(post.id);
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify({ posts: updatedPosts }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <button
          onClick={handleLogout}
          className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handlePostInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={newPost.author}
              onChange={handlePostInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={newPost.category}
              onChange={handlePostInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={newPost.image}
              onChange={handlePostInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Excerpt</label>
          <textarea
            name="excerpt"
            value={newPost.excerpt}
            onChange={handlePostInputChange}
            className="w-full p-2 border rounded"
            rows="2"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content</label>
          <textarea
            name="content"
            value={newPost.content}
            onChange={handlePostInputChange}
            className="w-full p-2 border rounded"
            rows="6"
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
        >
          {isEditing ? 'Update Post' : 'Add Post'}
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Posts</h2>
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="border p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{post.date} - {post.author}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBlog; 