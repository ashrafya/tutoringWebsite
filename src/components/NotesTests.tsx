import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { notesTestsData } from '../DB/NotesTestsDB';

const badgeStyle: Record<string, string> = {
  New: 'bg-[#1E3A8A] text-white',
  Hot: 'bg-[#F97316] text-white',
};

const subjectAccent: Record<string, string> = {
  Chemistry:           'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]',
  Physics:             'bg-[#EEF2FF] text-[#4338CA] border-[#C7D2FE]',
  'Advanced Functions': 'bg-[#F0FDFA] text-[#0F766E] border-[#99F6E4]',
  'Calculus & Vectors': 'bg-[#EFF6FF] text-[#1E40AF] border-[#BFDBFE]',
};

const packageItems = [
  { icon: '📄', label: 'Notes' },
  { icon: '📝', label: 'Practice Tests' },
  { icon: '✅', label: 'Solutions' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const NotesTests: React.FC = () => (
  <section className="bg-[#F8FAFC] py-20 px-4">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 max-w-2xl mx-auto"
    >
      <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">Study Resources</p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
        Notes & Practice Tests
      </h1>
      <p className="text-lg text-[#64748B]">
        Exam-focused packages made by the same tutor who teaches the content. Each bundle includes notes, practice tests, and full solutions.
      </p>
    </motion.div>

    {/* What's included strip */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {[
        { icon: '📄', title: 'Concise Notes',        desc: 'Clear, structured explanations' },
        { icon: '📝', title: 'Practice Tests',       desc: 'Exam-style questions per unit' },
        { icon: '✅', title: 'Full Solutions',        desc: 'Step-by-step worked answers' },
        { icon: '⚡', title: 'Instant Download',     desc: 'PDF delivered immediately' },
      ].map(item => (
        <div
          key={item.title}
          className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl px-5 py-3 shadow-sm"
        >
          <span className="text-xl">{item.icon}</span>
          <div className="text-left">
            <p className="text-sm font-semibold text-[#0F172A]">{item.title}</p>
            <p className="text-xs text-[#64748B]">{item.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>

    {/* Cards */}
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      {notesTestsData.map(course => (
        <motion.div key={course.id} variants={cardVariant}>
          <Link
            to={`/notes-and-tests/${course.id}`}
            className="bg-white rounded-2xl border border-[#E2E8F0] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group block"
          >
            {/* Cover image */}
            <div className="relative">
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-full h-44 object-cover"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/10 transition-colors duration-300" />

              {/* Badge */}
              {course.badge && (
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeStyle[course.badge] ?? 'bg-gray-600 text-white'}`}>
                  {course.badge === 'Hot' ? '🔥 ' : '✨ '}{course.badge}
                </span>
              )}

              {/* Pages count */}
              <span className="absolute bottom-3 right-3 bg-[#0F172A]/70 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                {course.pages} pages
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              {/* Grade + Subject chips */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full">
                  {course.grade}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${subjectAccent[course.subject] ?? 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                  {course.subject}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#1E3A8A] transition-colors duration-200">
                {course.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>

              {/* Package items */}
              <div className="flex items-center gap-3 mb-5">
                {packageItems.map(item => (
                  <div key={item.label} className="flex items-center gap-1 text-xs text-[#64748B]">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="mt-auto pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
                <div className="flex items-baseline gap-1.5">
                  {course.oldPrice && (
                    <span className="text-sm text-[#94A3B8] line-through font-medium">${course.oldPrice}</span>
                  )}
                  <span className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
                    ${course.price}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-[#F97316] hover:bg-[#EA6C00] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-200">
                  Buy Now
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default NotesTests;
