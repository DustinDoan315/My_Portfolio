/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { blogPosts } from '@/utils/mock';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaArrowLeft,
  FaBookmark,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaHeart,
  FaShare,
  FaTag,
} from 'react-icons/fa';

const BlogDetailPage = ({ params }: any) => {
  const blog = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Blog Header */}
        <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {blog.category}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {blog.readTime}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-8 mb-8">
          {/* Meta Information */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEye />
                <span>1.2k views</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:text-red-400 transition-colors">
                <FaHeart />
              </button>
              <button className="p-2 text-gray-500 hover:text-cyan-400 transition-colors">
                <FaBookmark />
              </button>
              <button className="p-2 text-gray-500 hover:text-emerald-400 transition-colors">
                <FaShare />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-3">
              <FaTag className="text-gray-500" />
              <span className="text-sm font-medium text-gray-400">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 border border-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {blog.content}
            </p>

            <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">
              Key Takeaways
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Understanding the fundamentals of {blog.tags[0]} development
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Best practices for implementing {blog.tags[1]} in production
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Performance optimization techniques for better user experience
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This comprehensive guide covers the essential aspects of{' '}
              {blog.tags[0]} development. By following these best practices and
              implementing the techniques discussed, you will be well-equipped
              to build robust and scalable applications.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(
                (post) => post.category === blog.category && post.id !== blog.id
              )
              .slice(0, 2)
              .map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="block group"
                >
                  <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors line-clamp-2 text-sm">
                          {post.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.readTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-8 text-center text-white border border-blue-600">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to get notified about new articles and tech insights like
            this one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Enjoyed This Article?
          </h3>
          <p className="text-lg text-gray-400 mb-6">
            Check out more of my work and let&#39;s discuss how we can collaborate on
            your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-200"
            >
              View My Projects
            </Link>
            <a
              href="mailto:dustindoan315@gmail.com"
              className="border border-cyan-600 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
