import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GOOGLE_FORM } from './Constants';
import NotesButton from './NotesButton';

const scrollToSectionAfterNavigation = (sectionId: string) => {
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 100);
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sectionLinks = [
    { to: 'home',         label: 'Home' },
    { to: 'about',        label: 'About' },
    { to: 'how-it-works', label: 'How it Works' },
    { to: 'pricing',      label: 'Pricing' },
  ];

  const pageLinks = [
    { to: '/courses',        label: 'Courses' },
    { to: '/notes-and-tests', label: 'Notes' },
    { to: '/blog',           label: 'Blog' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSectionAfterNavigation(sectionId), 500);
    } else {
      scrollToSectionAfterNavigation(sectionId);
    }
    setMenuOpen(false);
  };

  const handleSimpleNavigation = () => {
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <header
      className={`bg-[#0F172A] sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      {/* Orange accent top bar */}
      <div className="h-[3px] bg-[#F97316]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-[#F97316] transition-colors duration-200" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
              Tutor Oaks
            </span>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center space-x-6">
            {sectionLinks.map(link => (
              <span
                key={link.to}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 text-base font-medium"
                onClick={() => link.to === 'home' ? handleSimpleNavigation() : handleSectionNavigation(link.to)}
              >
                {link.label}
              </span>
            ))}
            {pageLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 text-base font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <NotesButton />
            <a
              href={GOOGLE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#F97316] hover:bg-[#EA6C00] px-5 py-2.5 font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-[#0F172A] cursor-pointer text-base shadow-md hover:shadow-lg"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E2D4E] border-t border-white/10 absolute top-full left-0 w-full z-40 shadow-xl">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {sectionLinks.map(link => (
              <span
                key={link.to}
                className="text-gray-200 hover:text-white cursor-pointer transition-colors duration-200 text-lg py-2.5 border-b border-white/10"
                onClick={() => link.to === 'home' ? handleSimpleNavigation() : handleSectionNavigation(link.to)}
              >
                {link.label}
              </span>
            ))}
            {pageLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-200 hover:text-white cursor-pointer transition-colors duration-200 text-lg py-2.5 border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col items-stretch gap-3 mt-4">
              <a
                href={GOOGLE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#F97316] hover:bg-[#EA6C00] px-6 py-3 font-semibold text-white text-center text-lg transition-all duration-200"
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
