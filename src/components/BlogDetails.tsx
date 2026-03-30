import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogDB from "../DB/BlogDB";

// Convert "Jun 10, 2024" → "2024-06-10" for schema/datetime
const toISODate = (dateStr: string): string => {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split('T')[0];
};

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const post = BlogDB.find(p => p.id === id);

  if (!post) return <div className="text-center py-20">Blog not found.</div>;

  const isoDate = toISODate(post.date);
  const pageUrl = `https://tutoroaks.ca/blog/${post.id}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Tutor Oaks Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type"        content="article" />
        <meta property="og:url"         content={pageUrl} />
        <meta property="og:title"       content={`${post.title} | Tutor Oaks`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image"       content="https://tutoroaks.ca/logo.png" />
        <meta property="article:published_time" content={isoDate} />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        {/* BlogPosting JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "url": pageUrl,
          "datePublished": isoDate,
          "dateModified": isoDate,
          "author": {
            "@type": "Person",
            "name": "Yawar Ashraf",
            "url": "https://tutoroaks.ca"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Tutor Oaks",
            "url": "https://tutoroaks.ca",
            "logo": { "@type": "ImageObject", "url": "https://tutoroaks.ca/logo.png" }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tutoroaks.ca/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://tutoroaks.ca/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title }
            ]
          }
        })}</script>
      </Helmet>

      <section className="bg-gray-50 min-h-screen py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
          <time
            dateTime={isoDate}
            className="inline-block border border-black text-black bg-gray-50 text-sm font-semibold px-5 py-1 rounded mb-6 shadow"
          >
            {post.date}
          </time>
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
    </>
  );
};

export default BlogDetails;
