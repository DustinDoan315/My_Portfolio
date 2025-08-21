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

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const blog = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Blog Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Meta Information */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
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
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <FaHeart />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                <FaBookmark />
              </button>
              <button className="p-2 text-gray-400 hover:text-green-500 transition-colors">
                <FaShare />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-3">
              <FaTag className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {blog.content}
            </p>

            {/* Additional content sections for demonstration */}
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Key Takeaways
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Understanding the fundamentals of {blog.tags[0]} development
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Best practices for implementing {blog.tags[1]} in production
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Performance optimization techniques for better user experience
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This comprehensive guide covers the essential aspects of{' '}
              {blog.tags[0]} development. By following these best practices and
              implementing the techniques discussed, you will be well-equipped
              to build robust and scalable applications. Remember that
              technology evolves rapidly, so staying updated with the latest
              trends and practices is crucial for continued success.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
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
                  <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to get notified about new articles and tech insights like
            this one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Enjoyed This Article?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Check out more of my work and lets discuss how we can collaborate on
            your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View My Projects
            </Link>
            <a
              href="mailto:dustindoan315@gmail.com"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
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
