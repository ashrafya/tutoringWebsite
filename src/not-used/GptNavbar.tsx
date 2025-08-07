import React from "react";

const GptNavbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-gray-800 text-white shadow-md">
      <div className="font-bold text-2xl tracking-wide">
        TutoringWebsite
      </div>
      <ul className="flex gap-6 list-none m-0 p-0">
        <li>
          <a href="/" className="text-white no-underline hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white no-underline hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="text-white no-underline hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white no-underline hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default GptNavbar;
