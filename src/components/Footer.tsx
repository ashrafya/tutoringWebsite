import { Link } from 'react-router-dom';
import { GOOGLE_FORM } from './Constants';

const footerSections = [
  {
    heading: 'Navigate',
    links: [
      { label: 'Home',        href: '/#/',          isExternal: false },
      { label: 'About',       href: '/#/about',     isExternal: false },
      { label: 'Courses',     href: '/#/courses',   isExternal: false },
      { label: 'Notes Shop',  href: '/#/notes-and-tests', isExternal: false },
      { label: 'Blog',        href: '/#/blog',      isExternal: false },
    ],
  },
  {
    heading: 'Sections',
    links: [
      { label: 'How It Works', href: '#how-it-works', isExternal: false, isScroll: true },
      { label: 'Pricing',      href: '#pricing',      isExternal: false, isScroll: true },
      { label: 'FAQ',          href: '#faq',          isExternal: false, isScroll: true },
      { label: 'Testimonials', href: '#testimonials', isExternal: false, isScroll: true },
    ],
  },
  {
    heading: 'Get Started',
    links: [
      { label: 'Register Now',  href: GOOGLE_FORM,     isExternal: true },
      { label: 'View Courses',  href: '/#/courses',    isExternal: false },
      { label: 'Notes & Tests', href: '/#/notes-and-tests', isExternal: false },
    ],
  },
];

const Footer = () => (
  <footer className="bg-[#0F172A] border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
              Tutor Oaks
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Expert high school tutoring in Math, Physics, Chemistry & more. Online, flexible, and results-driven.
          </p>
          <p className="text-[#F97316] text-sm font-semibold">98% Student Satisfaction ⭐</p>
        </div>

        {/* Link columns */}
        {footerSections.map(section => (
          <div key={section.heading}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{section.heading}</h4>
            <ul className="space-y-2.5">
              {section.links.map(link => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Tutor Oaks. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Ontario High School Tutoring · Toronto, ON
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
