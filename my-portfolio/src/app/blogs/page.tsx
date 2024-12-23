import { blogPosts } from "@/utils/mock";

const BlogsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        {/* <h1 className="text-4xl font-bold text-gray-700 mb-8">Blogs</h1> */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md">
              {/* Title and Date */}
              <header className="rounded-t-xl">
                <h2 className="text-2xl font-bold text-gray-200">
                  {post.title}
                </h2>
                <p className="text-gray-200 text-sm">{post.date}</p>
              </header>

              <img
                src={post.image}
                alt={post.title}
                className="w-full max-h-lvh object-cover mb-4"
              />

              <div className="px-6">
                {/* Content */}
                <p className="text-gray-700 leading-relaxed">{post.content}</p>

                {/* Tags */}
                <div className="py-4">
                  <h3 className="text-gray-500 font-semibold text-sm mb-2">
                    Tags:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-cyan-100 text-cyan-700 px-3 py-1 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
