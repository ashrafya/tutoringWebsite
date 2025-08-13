import React from "react";
import { useParams, Link } from "react-router-dom";
import BlogDB from "../DB/BlogDB";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const post = BlogDB.find(p => p.id === id);

  if (!post) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg mb-8"
        />
        <span className="inline-block border border-black text-black bg-gray-50 text-sm font-semibold px-5 py-1 rounded mb-6 shadow">
          {post.date}
        </span>
        <h1 className="text-3xl font-extrabold text-gray-700 mb-6">{post.title}</h1>
        <div
          className="prose prose-blue max-w-none text-gray-700 mb-8 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
        />
        <Link
          to="/blog"
          className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors text-base"
        >
          &larr; See All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogDetails;