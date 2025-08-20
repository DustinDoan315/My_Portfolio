import { blogPosts } from "@/utils/mock";
import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";

/* eslint-disable @next/next/no-img-element */
const BlogsPage = () => {
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tech Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              All Posts ({blogPosts.length})
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 cursor-pointer transition-colors">
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
                        className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
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
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to get notified about new articles and tech insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
