import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { notesTestsData } from '../DB/NotesTestsDB';
import type { CourseNotesTests } from '../DB/NotesTestsDB';
import PurchaseButton from './PurchaseButton';

const subjectBar: Record<string, string> = {
  Chemistry:            'from-[#C2410C] to-[#EA580C]',
  Physics:              'from-[#4338CA] to-[#6366F1]',
  'Advanced Functions': 'from-[#0F766E] to-[#0D9488]',
  'Calculus & Vectors': 'from-[#1E3A8A] to-[#1E40AF]',
  Mathematics:          'from-[#1E3A8A] to-[#1E40AF]',
};

const CourseDetail: React.FC = () => {
  // Support both /resources/:slug and legacy /notes-and-tests/:id routes
  const { slug, id } = useParams<{ slug?: string; id?: string }>();
  const lookup = slug ?? id ?? '';
  const course: CourseNotesTests | undefined =
    notesTestsData.find(c => c.slug === lookup) ?? notesTestsData.find(c => c.id === lookup);
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
            Resource not found
          </h1>
          <Link to="/resources" className="text-[#F97316] hover:text-[#EA6C00] font-semibold transition-colors">
            ← Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const gradient = subjectBar[course.subject] ?? 'from-[#1E3A8A] to-[#1E40AF]';

  return (
    <>
      <Helmet>
        <title>{course.title} | Tutor Oaks</title>
        <meta name="description" content={course.metaDescription} />
        <link rel="canonical" href={`https://tutoroaks.ca/resources/${course.slug}`} />

        {/* Open Graph */}
        <meta property="og:type"        content="product" />
        <meta property="og:url"         content={`https://tutoroaks.ca/resources/${course.slug}`} />
        <meta property="og:title"       content={`${course.title} | Tutor Oaks`} />
        <meta property="og:description" content={course.metaDescription} />
        <meta property="og:image"       content="https://tutoroaks.ca/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={`${course.title} | Tutor Oaks`} />
        <meta name="twitter:description" content={course.metaDescription} />
        <meta name="twitter:image"       content="https://tutoroaks.ca/logo.png" />

        {/* Product JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": course.title,
          "description": course.metaDescription,
          "url": `https://tutoroaks.ca/resources/${course.slug}`,
          "brand": { "@type": "Brand", "name": "Tutor Oaks" },
          "offers": {
            "@type": "Offer",
            "price": course.price,
            "priceCurrency": "CAD",
            "availability": "https://schema.org/InStock",
            "url": `https://tutoroaks.ca/resources/${course.slug}`
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "65"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://tutoroaks.ca/" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://tutoroaks.ca/resources" },
              { "@type": "ListItem", "position": 3, "name": course.title }
            ]
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#F8FAFC]">

        {/* ── Hero ── */}
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
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
              to="/resources"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors mb-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-5 flex-wrap">
                  <span className="text-sm font-semibold text-white/70 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                    {course.grade}
                  </span>
                  <span className="text-sm font-semibold text-[#F97316] bg-[#F97316]/15 border border-[#F97316]/30 px-3 py-1 rounded-full">
                    {course.courseCode}
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
                <div className="flex gap-8 flex-wrap">
                  {[
                    { value: course.pages, label: 'Pages' },
                    { value: course.unitTests.length, label: 'Unit Tests' },
                    { value: '100%', label: 'Ontario Curriculum' },
                  ].map(s => (
                    <div key={s.label}>
                      <p className="text-3xl font-bold text-[#F97316]" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
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
                  <div className={`h-1 w-full rounded-full bg-gradient-to-r ${gradient} mb-6`} />

                  <p className="text-gray-300 text-sm mb-1">Complete Package</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-white" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
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
                    {[
                      ...(course.hasNotes ? ['Comprehensive notes PDF'] : []),
                      `${course.unitTests.length} practice tests`,
                      'Full solutions PDF',
                      'Instant download',
                    ].map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-200">
                        <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <PurchaseButton courseId={course.id} className="w-full justify-center py-3.5 text-base">
                    Purchase Now — ${course.price}
                  </PurchaseButton>

                  {/* Free sample CTA */}
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <p className="text-gray-400 text-xs mb-2">Not ready to buy?</p>
                    <Link
                      to="/free-sample"
                      className="text-[#F97316] hover:text-[#EA6C00] text-sm font-semibold transition-colors"
                    >
                      Get a free practice test →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">

          {/* ── PDF Preview (if notes exist) ── */}
          {course.previewPdf && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center justify-between px-8 py-5 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
                    Preview the Notes
                  </h2>
                </div>
                <button
                  onClick={() => setPreviewOpen(!previewOpen)}
                  className="text-sm font-semibold text-[#F97316] hover:text-[#EA6C00] transition-colors flex items-center gap-1"
                >
                  {previewOpen ? 'Hide' : 'Show preview'}
                  <svg
                    className={`w-4 h-4 transition-transform ${previewOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {previewOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    src={course.previewPdf}
                    title={`${course.title} preview`}
                    className="w-full"
                    style={{ height: '600px', border: 'none' }}
                  />
                  <div className="px-8 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
                    <p className="text-sm text-[#64748B]">Preview — purchase for the complete package</p>
                    <a
                      href={course.previewPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#F97316] hover:text-[#EA6C00] transition-colors flex items-center gap-1"
                    >
                      Open in new tab
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ── Unit Tests list ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
                Unit Tests Included
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.unitTests.map((test, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 px-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl"
                >
                  <span className="w-6 h-6 bg-[#F97316]/10 text-[#F97316] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-[#0F172A]">{test}</span>
                  <span className="ml-auto text-xs font-semibold text-[#64748B] bg-[#E2E8F0] px-2.5 py-1 rounded-full">
                    {test === 'Final Exam' ? 'Exam' : 'Test + Solutions'}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Notes section (if hasNotes) ── */}
          {course.hasNotes && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
                  Comprehensive Notes
                </h2>
              </div>
              <p className="text-[#64748B] leading-relaxed">{course.notesDescription}</p>
            </motion.div>
          )}

          {/* ── What's included ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
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

          {/* ── Lead gen CTA banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-[#FFF7ED] border border-[#F97316]/25 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="w-14 h-14 bg-[#F97316]/15 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-[#0F172A] text-lg" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
                Try before you buy
              </p>
              <p className="text-[#64748B] text-sm mt-1">
                Get a free unit test (with solutions) delivered instantly — no credit card needed.
              </p>
            </div>
            <Link
              to="/free-sample"
              className="flex-shrink-0 bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              Get Free Test
            </Link>
          </motion.div>

          {/* ── Bottom purchase CTA ── */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
                Get the Complete Package
              </h2>
              <p className="text-gray-400 mb-8">
                {course.grade} {course.subject} ({course.courseCode}) — {course.hasNotes ? 'notes, ' : ''}tests &amp; solutions
              </p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-5xl font-bold text-white" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>
                  ${course.price}
                </span>
                {course.oldPrice && (
                  <span className="text-xl text-gray-500 line-through">${course.oldPrice}</span>
                )}
              </div>
              <PurchaseButton courseId={course.id} className="px-10 py-4 text-lg">
                Purchase Now
              </PurchaseButton>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default CourseDetail;
