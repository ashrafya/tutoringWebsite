import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';
import { GOOGLE_FORM } from './Constants';

const stats = [
  { value: '65+',   label: 'Students Helped' },
  { value: '1200+', label: 'Hours Tutored' },
  { value: '98%',   label: 'Satisfaction Rate' },
  { value: '5+',    label: 'Years Experience' },
];

const TutoringHero = () => (
  <section className="bg-[#0F172A] relative overflow-hidden" id="home">
    {/* Subtle grid pattern overlay */}
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
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-[#F97316] text-sm">🎓</span>
            <span className="text-white/90 text-sm font-medium">University of Toronto · Engineering Science · 97% High School Avg</span>
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
            Expert tutoring in Math, Physics, Chemistry & more for Ontario high school students. Online, flexible, and results-driven.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <RegisterButton className="text-lg px-8 py-3.5 shadow-lg shadow-orange-500/20" />
            <a
              href="/#/courses"
              className="inline-block px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              View Courses
            </a>
          </motion.div>
        </div>

        {/* Right: Floating trust card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="flex-shrink-0 w-full max-w-sm lg:max-w-xs"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-lg" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>Tutor Oaks</p>
                <p className="text-gray-300 text-sm">High School Tutoring</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              {[
                { icon: '📐', text: 'Grade 12 Calculus & Advanced Functions' },
                { icon: '⚛️', text: 'Grade 11 & 12 Physics' },
                { icon: '🧪', text: 'Grade 11 & 12 Chemistry' },
                { icon: '💻', text: 'Data Management & Math' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2.5 text-gray-200">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/20">
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-300 text-xs ml-1">98% satisfaction rate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.5, ease: 'easeOut' }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center py-6 px-4 bg-white/5 hover:bg-white/10 transition-colors duration-200 ${
              i < stats.length - 1 ? 'border-r border-white/10' : ''
            }`}
          >
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
