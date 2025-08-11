import React from "react";

import blogImg1 from "../assets/cartoon-made-with-love-by-neural-frames.png";
import blogImg2 from "../assets/cartoon-made-with-love-by-neural-frames12.png";
import blogImg3 from "../assets/yawar-turkey-boat-square.png";

const notesTests = [
  {
    title: "Algebra Mastery Notes",
    excerpt: "Concise, exam-focused notes for high school algebra. Perfect for quick revision and concept clarity.",
    image: blogImg1,
    badge: "New",
    price: 15,
    oldPrice: 20,
  },
  {
    title: "Physics Mechanics Practice Test",
    excerpt: "Challenging practice questions and solutions for mechanics. Boost your test scores with targeted prep.",
    image: blogImg2,
    price: 10,
  },
  {
    title: "Motivation Guide for Students",
    excerpt: "Actionable worksheets and tips to help students stay motivated and organized all year.",
    image: blogImg3,
    badge: "Hot",
    price: 12,
    oldPrice: 16,
  }
];

const badgeColors: Record<string, string> = {
  New: "bg-green-500",
  Hot: "bg-red-500",
};

const NotesTests: React.FC = () => (
  <section className="mx-auto py-12 px-2 bg-gray-50">
    <div className="text-center mb-8">
      <h4 className="text-blue-600 font-bold text-lg mb-1 tracking-wide">Featured Study Resources</h4>
      <h1 className="text-4xl font-extrabold text-black mb-2">High School Notes & Practice Tests</h1>
      <p className="text-gray-500 text-lg">
        Modern, exam-ready notes and tests to help you succeed. Quick downloads, clear explanations, and proven results.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {notesTests.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col overflow-hidden"
          style={{ maxWidth: 340, margin: "0 auto" }}
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            {item.badge && (
              <span className={`absolute text-xs top-4 left-4 px-1.5 py-1 font-semibold text-white rounded-md ${badgeColors[item.badge]}`}>
                {item.badge}
              </span>
            )}
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{item.excerpt}</p>
            <div className="mt-auto flex items-center">
              {item.oldPrice && (
                <span className="text-gray-400 line-through text-sm font-medium mr-2">
                  ${item.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="text-gray-900 text-sm font-bold">{item.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NotesTests;