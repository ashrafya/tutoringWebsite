import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { notesTestsData } from '../DB/NotesTestsDB';
import type { CourseNotesTests } from '../DB/NotesTestsDB';
import PurchaseButton from './PurchaseButton';

const subjectBar: Record<string, string> = {
  Chemistry:            'from-[#C2410C] to-[#EA580C]',
  Physics:              'from-[#4338CA] to-[#6366F1]',
  'Advanced Functions': 'from-[#0F766E] to-[#0D9488]',
  'Calculus & Vectors': 'from-[#1E3A8A] to-[#1E40AF]',
};

const packageSections = [
  {
    key: 'notes' as const,
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'Comprehensive Notes',
    descKey: 'notesDescription' as const,
  },
  {
    key: 'tests' as const,
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    label: 'Practice Tests',
    descKey: 'testsDescription' as const,
  },
  {
    key: 'solutions' as const,
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Full Solutions',
    descKey: 'testsDescription' as const,
  },
];

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course: CourseNotesTests | undefined = notesTestsData.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
            Product not found
          </h1>
          <Link to="/notes-and-tests" className="text-[#F97316] hover:text-[#EA6C00] font-semibold transition-colors">
            ← Back to Notes &amp; Tests
          </Link>
        </div>
      </div>
    );
  }

  const gradient = subjectBar[course.subject] ?? 'from-[#1E3A8A] to-[#1E40AF]';

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ── Hero ── */}
      <div className="relative bg-[#0F172A] overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Blurred cover image accent */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={course.coverImage}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-10 blur-sm scale-105"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <Link
            to="/notes-and-tests"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Notes &amp; Tests
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-sm font-semibold text-white/70 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                  {course.grade}
                </span>
                <span className="text-sm font-semibold text-[#F97316] bg-[#F97316]/15 border border-[#F97316]/30 px-3 py-1 rounded-full">
                  {course.subject}
                </span>
                {course.badge && (
                  <span className="text-xs font-bold text-white bg-[#F97316] px-2.5 py-1 rounded-full">
                    {course.badge === 'Hot' ? '🔥 Hot' : '✨ New'}
                  </span>
                )}
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">{course.description}</p>

              {/* Quick stats */}
              <div className="flex gap-8">
                {[
                  { value: course.pages, label: 'Pages' },
                  { value: '3',          label: 'PDFs Included' },
                  { value: '100%',       label: 'Ontario Curriculum' },
                ].map(s => (
                  <div key={s.label}>
                    <p
                      className="text-3xl font-bold text-[#F97316]"
                      style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-gray-400 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: purchase card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-full max-w-sm shadow-2xl">
                {/* Subject gradient bar */}
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${gradient} mb-6`} />

                <p className="text-gray-300 text-sm mb-1">Complete Package</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-5xl font-bold text-white"
                    style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                  >
                    ${course.price}
                  </span>
                  {course.oldPrice && (
                    <span className="text-xl text-gray-400 line-through">${course.oldPrice}</span>
                  )}
                </div>
                {course.oldPrice && (
                  <p className="text-green-400 text-sm font-semibold mb-5">
                    Save ${course.oldPrice - course.price}
                  </p>
                )}

                <ul className="space-y-2.5 mb-6 mt-4">
                  {['Comprehensive notes PDF', 'Practice tests PDF', 'Full solutions PDF', 'Instant download'].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <PurchaseButton courseId={id} className="w-full justify-center py-3.5 text-base">
                  Purchase Now — ${course.price}
                </PurchaseButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Package sections: Notes / Tests / Solutions */}
        {packageSections.map((section, i) => (
          <motion.div
            key={section.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
                {section.icon}
              </div>
              <h2
                className="text-2xl font-bold text-[#0F172A]"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                {section.label}
              </h2>
            </div>
            <p className="text-[#64748B] leading-relaxed mb-5">{course[section.descKey]}</p>
            <div className="space-y-2">
              {course.previewFiles[section.key].map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 px-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl"
                >
                  <span className="text-sm font-medium text-[#0F172A] flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#64748B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    {file}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B] bg-[#E2E8F0] px-3 py-1 rounded-full">
                    Included
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* What's included features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        >
          <h2
            className="text-2xl font-bold text-[#0F172A] mb-6"
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
          >
            What's Included
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#FFF7ED] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#0F172A] text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-[#0F172A] rounded-2xl p-10 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wider mb-3">Ready to Study?</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            >
              Get the Complete Package
            </h2>
            <p className="text-gray-400 mb-8">
              {course.grade} {course.subject} — notes, tests &amp; solutions
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span
                className="text-5xl font-bold text-white"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                ${course.price}
              </span>
              {course.oldPrice && (
                <span className="text-xl text-gray-500 line-through">${course.oldPrice}</span>
              )}
            </div>
            <PurchaseButton courseId={id} className="px-10 py-4 text-lg">
              Purchase Now
            </PurchaseButton>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CourseDetail;
