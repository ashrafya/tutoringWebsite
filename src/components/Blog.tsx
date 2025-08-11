import { Link } from "react-router-dom";
import BlogDB from "../Blogs/BlogDB";

const Blog: React.FC = () => (
  <section className="mx-auto py-16 px-4 bg-gray-50">
    <div className="text-center mb-10">
      <h4 className="text-blue-600 font-bold text-lg mb-2">Tutoring Insights</h4>
      <h1 className="text-4xl font-extrabold text-black mb-3">Latest from Our Blog</h1>
      <p className="text-gray-500 text-lg">
        Explore tips, strategies, and stories to help students succeed. Stay updated with expert advice and news from our tutoring team.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {BlogDB.map((post, idx) => (
        <article
          key={idx}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col border border-blue-100"
        >
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover scale-100 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 flex flex-col p-6">
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 self-start shadow">
              {post.date}
            </span>
            <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
                to={`/blog/${post.id}`}
                className="mt-auto inline-block text-blue-700 font-semibold hover:underline hover:text-blue-900 transition-colors"
              >
                Read More &rarr;
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Blog;