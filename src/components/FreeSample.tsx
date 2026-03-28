import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ─── Replace YOUR_FORMSPREE_ID with your actual Formspree form ID ───────────
// Sign up at https://formspree.io → New Form → copy the ID from the endpoint URL
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

const FREE_SAMPLES: Record<string, { label: string; file: string; description: string }> = {
  math10: {
    label: 'GR10 Academic Math – Analytic Geometry Test',
    file: '/free-samples/GR10_MPM2D_Analytic_Geometry.pdf',
    description: 'MPM2D unit test on analytic geometry with full solutions',
  },
  math11: {
    label: 'GR11 Functions – Trigonometric Ratios Test',
    file: '/free-samples/GR11_MCR3U_Trigonometric_Ratios.pdf',
    description: 'MCR3U unit test on trig ratios with full solutions',
  },
  chem11: {
    label: 'GR11 Chemistry – Stoichiometry Test',
    file: '/free-samples/GR11_Chem_Stoichiometry.pdf',
    description: 'SCH3U unit test on stoichiometry with full solutions',
  },
  calc12: {
    label: 'GR12 Calculus & Vectors – Limits & Rates Test',
    file: '/free-samples/GR12_MCV4U_Limits_and_Rates.pdf',
    description: 'MCV4U unit test on limits with full solutions',
  },
};

const GRADE_TO_SAMPLE: Record<string, string> = {
  '10': 'math10',
  '11': 'math11',
  '12': 'calc12',
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const FreeSample: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [downloadKey, setDownloadKey] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        // Pick the best matching free sample based on grade + subject
        const grade = data.get('grade') as string;
        const subject = data.get('subject') as string;
        let key = GRADE_TO_SAMPLE[grade] ?? 'math11';
        if (subject === 'chemistry' && grade === '11') key = 'chem11';
        if (subject === 'chemistry' && grade === '12') key = 'calc12';
        setDownloadKey(key);
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Practice Test | Tutor Oaks</title>
        <meta
          name="description"
          content="Get a free Ontario high school practice test — math, chemistry, or physics. Enter your email and instantly download a unit test with full solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* ── Hero ── */}
        <section className="bg-[#0F172A] relative overflow-hidden pt-16 pb-20 px-4">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Free Resource
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                Get a Free Practice Test
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
                Enter your name and email below and we'll match you with a free unit test — complete with full solutions — for your grade and subject.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Form / Success ── */}
        <section className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
                >
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5" htmlFor="name">
                        First Name <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your first name"
                        className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5" htmlFor="email">
                        Email Address <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] transition-colors"
                      />
                    </div>

                    {/* Grade */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5" htmlFor="grade">
                        Grade <span className="text-[#F97316]">*</span>
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        required
                        value={selectedGrade}
                        onChange={e => setSelectedGrade(e.target.value)}
                        className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] transition-colors bg-white"
                      >
                        <option value="" disabled>Select your grade</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5" htmlFor="subject">
                        Subject Interest <span className="text-[#F97316]">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={selectedSubject}
                        onChange={e => setSelectedSubject(e.target.value)}
                        className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] transition-colors bg-white"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="math">Mathematics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="physics">Physics</option>
                      </select>
                    </div>

                    {/* Preview of what they'll get */}
                    {selectedGrade && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-[#FFF7ED] border border-[#F97316]/30 rounded-xl px-4 py-3 flex items-start gap-3"
                      >
                        <svg className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-[#0F172A]">You'll receive:</p>
                          <p className="text-xs text-[#64748B] mt-0.5">
                            {FREE_SAMPLES[
                              selectedSubject === 'chemistry' && selectedGrade === '11'
                                ? 'chem11'
                                : GRADE_TO_SAMPLE[selectedGrade] ?? 'math11'
                            ]?.description}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {formState === 'error' && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-[#F97316] hover:bg-[#EA6C00] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-base"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Get My Free Test
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[#94A3B8]">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                </motion.div>
              ) : (
                // ── Success state ──
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)] text-center"
                >
                  <div className="w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2
                    className="text-3xl font-bold text-[#0F172A] mb-3"
                    style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                  >
                    Here's your free test!
                  </h2>
                  <p className="text-[#64748B] mb-8 leading-relaxed">
                    Click the button below to download your practice test. Good luck!
                  </p>

                  {downloadKey && FREE_SAMPLES[downloadKey] && (
                    <a
                      href={FREE_SAMPLES[downloadKey].file}
                      download
                      className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-base mb-4"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download: {FREE_SAMPLES[downloadKey].label}
                    </a>
                  )}

                  <p className="text-sm text-[#64748B] mb-6">
                    Want more? Browse our complete notes & test bundles.
                  </p>
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-1.5 text-[#F97316] hover:text-[#EA6C00] font-semibold text-sm transition-colors"
                  >
                    View all resources
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── What's inside strip ── */}
        {formState !== 'success' && (
          <section className="bg-[#0F172A] py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-wider font-semibold">What every test includes</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Exam-Style Questions', desc: 'Multiple choice, short answer & long answer — just like the real test' },
                  { title: 'Full Solutions', desc: 'Step-by-step worked answers so you can learn from every mistake' },
                  { title: 'Ontario Curriculum', desc: '100% aligned to the Ontario high school curriculum for your course' },
                ].map(item => (
                  <div
                    key={item.title}
                    className="bg-white/6 border border-white/10 rounded-xl px-5 py-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default FreeSample;
