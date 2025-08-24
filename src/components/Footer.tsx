import { Link as ScrollLink } from 'react-scroll';

const footerLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Features", to: "features" },
  { label: "Pricing", to: "pricing" },
  { label: "How it Works", to: "how-it-works" },
  { label: "Testimonials", to: "testimonials" },
  { label: "FAQ", to: "faq" },
];

const Footer = () => (
  <footer className="bg-blue-200 px-3 py-3">
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
      {/* Navigation Links */}
      <nav className="mb-8">
        <ul className="flex flex-wrap gap-x-8 gap-y-4 justify-center text-gray-900 text-lg font-medium">
          {footerLinks.map(link => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-blue-700 transition-colors"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* Social Icons */}
      <div className="flex space-x-8 mb-8">
        {/* ...social icons as before... */}
      </div>
      {/* Copyright */}
      <div className="text-gray-900 text-lg text-center">
        © {new Date().getFullYear()} Tutor Oaks, Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;