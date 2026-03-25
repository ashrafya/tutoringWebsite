import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { notesTestsData } from '../DB/NotesTestsDB';

const subjectAccent: Record<string, { pill: string; bar: string }> = {
  Chemistry:            { pill: 'bg-orange-50 text-orange-700 border-orange-200',   bar: 'bg-[#C2410C]' },
  Physics:              { pill: 'bg-indigo-50 text-indigo-700 border-indigo-200',   bar: 'bg-[#4338CA]' },
  'Advanced Functions': { pill: 'bg-teal-50   text-teal-700   border-teal-200',     bar: 'bg-[#0F766E]' },
  'Calculus & Vectors': { pill: 'bg-blue-50   text-blue-800   border-blue-200',     bar: 'bg-[#1E3A8A]' },
};

const included = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Concise Notes',
    desc: 'Structured, exam-ready explanations',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Practice Tests',
    desc: 'Exam-style questions per unit',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Full Solutions',
    desc: 'Step-by-step worked answers',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'Instant PDF',
    desc: 'Download immediately after purchase',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const NotesTests: React.FC = () => (
  <div>
    {/* ── Dark hero banner ── */}
    <section className="bg-[#0F172A] relative overflow-hidden pt-16 pb-20 px-4">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-3">Study Resources</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
          >
            Notes &amp; Practice Tests
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Exam-focused bundles made by the same tutor who teaches the content. Every package includes notes, tests, and full solutions.
          </p>

          {/* Included strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {included.map(item => (
              <div
                key={item.title}
                className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-left"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="mb-2">{item.icon}</div>
                <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
                <p className="text-gray-400 text-xs mt-0.5 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Cards grid ── */}
    <section className="bg-[#F8FAFC] py-16 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {notesTestsData.map(course => {
          const accent = subjectAccent[course.subject] ?? {
            pill: 'bg-gray-100 text-gray-700 border-gray-200',
            bar:  'bg-[#1E3A8A]',
          };

          return (
            <motion.div key={course.id} variants={cardVariant}>
              <Link
                to={`/notes-and-tests/${course.id}`}
                className="bg-white rounded-2xl border border-[#E2E8F0] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 group block"
              >
                {/* Subject colour bar */}
                <div className={`h-1 w-full ${accent.bar}`} />

                {/* Cover image */}
                <div className="relative">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/12 transition-colors duration-300" />

                  {/* Hot / New badge */}
                  {course.badge && (
                    <span
                      className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                        course.badge === 'Hot'
                          ? 'bg-[#F97316] text-white'
                          : 'bg-[#1E3A8A] text-white'
                      }`}
                    >
                      {course.badge === 'Hot' ? '🔥 Hot' : '✨ New'}
                    </span>
                  )}

                  {/* Page count */}
                  <span className="absolute bottom-3 right-3 bg-[#0F172A]/70 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {course.pages} pages
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Grade + subject */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full">
                      {course.grade}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${accent.pill}`}>
                      {course.subject}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#1E3A8A] transition-colors duration-200 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* What's inside */}
                  <div className="flex items-center gap-4 mb-5 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
                      </svg>
                      Notes
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Tests
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Solutions
                    </span>
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-auto pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-1.5">
                      {course.oldPrice && (
                        <span className="text-sm text-[#94A3B8] line-through">${course.oldPrice}</span>
                      )}
                      <span
                        className="text-2xl font-bold text-[#0F172A]"
                        style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                      >
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
          );
        })}
      </motion.div>
    </section>
  </div>
);

export default NotesTests;
