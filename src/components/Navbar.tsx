import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GOOGLE_FORM } from './Constants';
import NotesButton from './NotesButton'

const scrollToSectionAfterNavigation = (sectionId: string) => {
  // Wait for the page to be fully rendered
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 300); // Increased delay to ensure page is fully loaded
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Separate internal sections and href pages
  const sectionLinks = [
    { to: 'home', label: 'Home' },
    { to: 'me', label: 'About' },
    { to: 'how-it-works', label: 'How it Works' },
    { to: 'pricing', label: 'Pricing' },
  ];

  const pageLinks = [
    { to: '/courses', label: 'Courses' },
    { to: '/notes-and-tests', label: 'Notes' },
    { to: '/blog', label: 'Blog' },
  ];

  // Helper to handle logo click from any page
  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
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
            <span className="ml-3 text-3xl font-bold text-gray-800">Tutor Oaks</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Center: Links */}
          <nav className="hidden md:flex space-x-6">
            {sectionLinks.map(link => (
              <span
                key={link.to}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    // First navigate to home page
                    navigate('/');
                    // Then wait for navigation to complete before scrolling
                    setTimeout(() => {
                      scrollToSectionAfterNavigation(link.to);
                    }, 500); // Increased delay to ensure navigation is complete
                  } else {
                    scrollToSectionAfterNavigation(link.to);
                  }
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </span>
            ))}
            {pageLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Button */}
            <div className="hidden md:flex items-center space-x-4">
            <NotesButton onClick={() => navigate('/notes-and-tests')} />
            <a
              href={GOOGLE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl text-md bg-blue-700 px-6 py-2.5 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600 cursor-pointer"
            >
              Register Now
            </a>
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-center bg-white shadow-lg absolute top-full left-0 w-full z-40">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            {sectionLinks.map(link => (
              <span
                key={link.to}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors text-lg py-2"
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    // First navigate to home page
                    navigate('/');
                    // Then wait for navigation to complete before scrolling
                    setTimeout(() => {
                      scrollToSectionAfterNavigation(link.to);
                    }, 500); // Increased delay to ensure navigation is complete
                  } else {
                    scrollToSectionAfterNavigation(link.to);
                  }
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </span>
            ))}
            {pageLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-green-600 cursor-pointer transition-colors text-lg py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col items-center space-y-3 mt-2">
              <a
              href={GOOGLE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl text-lg w-full max-w-xs bg-blue-700 px-8 py-2.5 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600 cursor-pointer"
              >
              Register Now
              </a>
              <NotesButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;