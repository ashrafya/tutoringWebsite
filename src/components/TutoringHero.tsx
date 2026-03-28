import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RegisterButton from './RegisterButton';

const stats = [
  { value: '65+',   label: 'Students Helped' },
  { value: '1,200+', label: 'Hours Tutored' },
  { value: '98%',   label: 'Satisfaction Rate' },
  { value: '5+',    label: 'Years Experience' },
];

const subjects = [
  {
    label: 'Grade 12 Calculus & Advanced Functions',
    icon: (
      <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8 17.926 17.926 0 00-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
      </svg>
    ),
  },
  {
    label: 'Grade 11 & 12 Physics',
    icon: (
      <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'Grade 11 & 12 Chemistry',
    icon: (
      <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    label: 'Data Management & College Math',
    icon: (
      <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const TutoringHero = () => (
  <section className="bg-[#0F172A] relative overflow-hidden" id="home">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }}
    />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">

          {/* Credential chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-7"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
          >
            <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="text-white/80 text-sm font-medium">University of Toronto · Engineering Science · 97% High School Avg</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
          >
            Ace Your Exams.<br />
            <span className="text-[#F97316]">Build Real Confidence.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Expert tutoring in Math, Physics, and Chemistry for Ontario high school students. Online, flexible, and results-driven.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <RegisterButton className="text-lg px-8 py-3.5 shadow-lg shadow-orange-500/20" />
            <Link
              to="/resources"
              className="inline-block px-8 py-3.5 rounded-xl border border-white/25 text-white font-semibold text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Browse Resources
            </Link>
          </motion.div>
        </div>

        {/* Right: trust card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="flex-shrink-0 w-full max-w-sm lg:max-w-xs"
        >
          <div className="bg-white/8 border border-white/15 rounded-2xl p-7 text-white shadow-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>

            {/* Card header */}
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
              <div className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>Tutor Oaks</p>
                <p className="text-gray-400 text-xs mt-0.5">Ontario High School Tutoring</p>
              </div>
            </div>

            {/* Subject list */}
            <div className="space-y-3 mb-6">
              {subjects.map(s => (
                <div key={s.label} className="flex items-center gap-3">
                  {s.icon}
                  <span className="text-gray-200 text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Rating row */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-3.5 h-3.5 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-xs">98% satisfaction rate</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.5, ease: 'easeOut' }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden"
      >
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col items-center py-6 px-4" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
            <span className="text-3xl font-bold text-[#F97316]" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
              {stat.value}
            </span>
            <span className="text-gray-400 text-sm mt-1 text-center">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TutoringHero;
