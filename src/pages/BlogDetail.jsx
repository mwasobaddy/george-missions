import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  let post = null;
  const stored = localStorage.getItem('blogPosts');
  if (stored) {
    const parsed = JSON.parse(stored);
    post = (parsed.posts || []).find(p => p.id === id);
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-orange-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {post.image && (
          <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
        )}
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-orange-600 font-medium">{post.category}</span>
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gray-500">By {post.author}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>
          <div className="prose max-w-none text-gray-800" style={{whiteSpace: 'pre-line'}}>{post.content}</div>
          <div className="mt-8">
            <Link to="/blog" className="text-orange-600 hover:underline">← Back to Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 