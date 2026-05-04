'use client';
import { blogPosts } from '@/utils/mock';
import Link from 'next/link';
import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';

/* eslint-disable @next/next/no-img-element */
const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Tech Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on modern web development, mobile
            apps, and emerging technologies. Sharing knowledge from real-world
            projects and experiences.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Categories:
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                activeCategory === 'All'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Posts ({blogPosts.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category} ({blogPosts.filter((p) => p.category === category).length})
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Content Preview */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaTag className="text-gray-400 text-sm" />
                    <span className="text-sm font-medium text-gray-700">
                      Tags:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 4 && (
                      <span className="text-blue-600 text-xs font-medium">
                        +{post.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blogs/${post.id}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-2 text-center py-16 text-gray-400">
              <p className="text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Stay Updated</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Subscribe to get notified about new articles and tech insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
