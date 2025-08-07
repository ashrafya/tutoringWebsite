import { Link as ScrollLink } from 'react-scroll';
import { GOOGLE_FORM } from './Constants';

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <svg
              className="w-8 text-blue-500"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500}
              className="ml-3 text-3xl font-bold text-gray-800 cursor-pointer"
            >
              Tutor Hero
            </ScrollLink>
          </div>

          {/* Center: Links */}
          <nav className="hidden md:flex space-x-6">
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500}
              offset={-70}
              activeClass="text-indigo-600 font-medium"
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
            >
              Home
            </ScrollLink>
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500}
              offset={-70}
              activeClass="text-indigo-600 font-medium"
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
            >
              About
            </ScrollLink>
            <ScrollLink 
              to="features" 
              smooth={true} 
              duration={500}
              offset={-70}
              activeClass="text-indigo-600 font-medium"
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
            >
              Features
            </ScrollLink>
            <ScrollLink 
              to="how-it-works" 
              smooth={true} 
              duration={500}
              offset={-70}
              activeClass="text-indigo-600 font-medium"
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
            >
              How it Works
            </ScrollLink>
            <ScrollLink 
              to="pricing" 
              smooth={true} 
              duration={500}
              offset={-70}
              activeClass="text-indigo-600 font-medium"
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
            >
              Pricing
            </ScrollLink>

            <ScrollLink 
              to="testimonials" 
              smooth={true} 
              duration={500}
              offset={-70}
              activeClass="text-indigo-600 font-medium"
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink 
              to="faq" 
              smooth={true} 
              duration={500}
              offset={-70}
              activeClass="text-indigo-600 font-medium"
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
            >
              FAQ
            </ScrollLink>
          </nav>

          {/* Right: Button */}
          <div className="hidden md:block">
            <a 
              href={GOOGLE_FORM} 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-xl text-lg bg-blue-700 px-8 py-2.5 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600 cursor-pointer"
            >
              Get Started
            </a>
            {/* <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500}
              offset={-70}
              className="rounded-xl text-lg bg-blue-700 px-8 py-2.5 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600 cursor-pointer"
            >
              Get Started
            </ScrollLink> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
