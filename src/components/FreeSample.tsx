import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FORMSPREE_ENDPOINT } from './Constants';

// ── Deterministic course → free sample mapping ───────────────────────────────
// Each course always gives the same two PDFs (first unit test + solutions).
const COURSE_SAMPLES: Record<string, {
  label: string;
  grade: string;
  topic: string;
  questions: string;
  solutions: string;
}> = {
  MPM2D: {
    label: 'MPM2D — Grade 10 Academic Math',
    grade: 'Grade 10',
    topic: 'Linear Systems',
    questions: '/free-samples/GR10_MPM2D_Linear_Systems.pdf',
    solutions: '/free-samples/GR10_MPM2D_Linear_Systems_Solutions.pdf',
  },
  MBF3C: {
    label: 'MBF3C — Grade 11 College Math',
    grade: 'Grade 11',
    topic: 'Exponential Functions',
    questions: '/free-samples/GR11_MBF3C_Exponential_Functions.pdf',
    solutions: '/free-samples/GR11_MBF3C_Exponential_Functions_Solutions.pdf',
  },
  MCR3U: {
    label: 'MCR3U — Grade 11 Functions',
    grade: 'Grade 11',
    topic: 'Characteristics of Functions',
    questions: '/free-samples/GR11_MCR3U_Characteristics_of_Functions.pdf',
    solutions: '/free-samples/GR11_MCR3U_Characteristics_of_Functions_Solutions.pdf',
  },
  SCH3U: {
    label: 'SCH3U — Grade 11 Chemistry',
    grade: 'Grade 11',
    topic: 'Matter, Bonding & Trends',
    questions: '/free-samples/GR11_Chem_Matter_Bonding_Trends.pdf',
    solutions: '/free-samples/GR11_Chem_Matter_Bonding_Trends_Solutions.pdf',
  },
  SPH3U: {
    label: 'SPH3U — Grade 11 Physics',
    grade: 'Grade 11',
    topic: 'Kinematics',
    questions: '/free-samples/GR11_Phy_Kinematics.pdf',
    solutions: '/free-samples/GR11_Phy_Kinematics_Solutions.pdf',
  },
  MAP4C: {
    label: 'MAP4C — Grade 12 College Math',
    grade: 'Grade 12',
    topic: 'Modelling with Functions',
    questions: '/free-samples/GR12_MAP4C_Modelling_with_Functions.pdf',
    solutions: '/free-samples/GR12_MAP4C_Modelling_with_Functions_Solutions.pdf',
  },
  MDM4U: {
    label: 'MDM4U — Grade 12 Data Management',
    grade: 'Grade 12',
    topic: 'One-Variable Statistics',
    questions: '/free-samples/GR12_MDM4U_One-Variable_Statistics.pdf',
    solutions: '/free-samples/GR12_MDM4U_One-Variable_Statistics_Solutions.pdf',
  },
  MHF4U: {
    label: 'MHF4U — Grade 12 Advanced Functions',
    grade: 'Grade 12',
    topic: 'Polynomial Functions',
    questions: '/free-samples/GR12_AF_Polynomial_Functions.pdf',
    solutions: '/free-samples/GR12_AF_Polynomial_Functions_Solutions.pdf',
  },
  MCV4U: {
    label: 'MCV4U — Grade 12 Calculus & Vectors',
    grade: 'Grade 12',
    topic: 'Limits & Rates of Change',
    questions: '/free-samples/GR12_MCV4U_Limits_and_Rates.pdf',
    solutions: '/free-samples/GR12_MCV4U_Limits_and_Rates_Solutions.pdf',
  },
  SCH4U: {
    label: 'SCH4U — Grade 12 Chemistry',
    grade: 'Grade 12',
    topic: 'Structure & Properties of Matter',
    questions: '/free-samples/GR12_Chem_Structure_and_Properties.pdf',
    solutions: '/free-samples/GR12_Chem_Structure_and_Properties_Solutions.pdf',
  },
  SPH4U: {
    label: 'SPH4U — Grade 12 Physics',
    grade: 'Grade 12',
    topic: 'Kinematics',
    questions: '/free-samples/GR12_Physics_Kinematics.pdf',
    solutions: '/free-samples/GR12_Physics_Kinematics_Solution.pdf',
  },
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const FreeSample: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [submittedCourse, setSubmittedCourse] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmittedCourse(selectedCourse);
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const sample = COURSE_SAMPLES[submittedCourse];

  return (
    <>
      <Helmet>
        <title>Free Practice Test | Tutor Oaks</title>
        <meta name="description" content="Get a free Ontario high school practice test — math, chemistry, or physics. Enter your email and instantly download a unit test with full solutions." />
        <link rel="canonical" href="https://tutoroaks.ca/free-sample" />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://tutoroaks.ca/free-sample" />
        <meta property="og:title"       content="Free Practice Test | Tutor Oaks" />
        <meta property="og:description" content="Get a free Ontario high school practice test — math, chemistry, or physics. Instant download, no credit card needed." />
        <meta property="og:image"       content="https://tutoroaks.ca/logo.png" />
        <meta name="twitter:card"       content="summary_large_image" />
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
                Pick your course, enter your email, and instantly download a unit test plus full solutions — no credit card needed.
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
                        Full Name <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] transition-colors bg-white"
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
                        className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] transition-colors bg-white"
                      />
                    </div>

                    {/* Course dropdown */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5" htmlFor="course">
                        Course <span className="text-[#F97316]">*</span>
                      </label>
                      <select
                        id="course"
                        name="course"
                        required
                        value={selectedCourse}
                        onChange={e => setSelectedCourse(e.target.value)}
                        className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] transition-colors bg-white"
                      >
                        <option value="" disabled>Select your course</option>
                        <optgroup label="Grade 10">
                          {['MPM2D'].map(code => (
                            <option key={code} value={code}>{COURSE_SAMPLES[code].label}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Grade 11">
                          {['MBF3C', 'MCR3U', 'SCH3U', 'SPH3U'].map(code => (
                            <option key={code} value={code}>{COURSE_SAMPLES[code].label}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Grade 12">
                          {['MAP4C', 'MDM4U', 'MHF4U', 'MCV4U', 'SCH4U', 'SPH4U'].map(code => (
                            <option key={code} value={code}>{COURSE_SAMPLES[code].label}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    {/* Preview of what they'll receive */}
                    {selectedCourse && COURSE_SAMPLES[selectedCourse] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-[#FFF7ED] border border-[#F97316]/30 rounded-xl px-4 py-3"
                      >
                        <p className="text-xs font-semibold text-[#0F172A] mb-2">You'll receive 2 PDFs:</p>
                        <div className="space-y-1.5">
                          {[
                            { icon: '📄', label: `${COURSE_SAMPLES[selectedCourse].topic} — Questions` },
                            { icon: '✅', label: `${COURSE_SAMPLES[selectedCourse].topic} — Full Solutions` },
                          ].map(item => (
                            <div key={item.label} className="flex items-center gap-2 text-xs text-[#64748B]">
                              <svg className="w-3.5 h-3.5 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {item.label}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {formState === 'error' && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        Something went wrong. Please try again.
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
                          Get My Free Tests
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[#94A3B8]">No spam, ever. Unsubscribe anytime.</p>
                  </form>
                </motion.div>

              ) : (
                // ── Success state ──
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
                >
                  <div className="w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h2
                    className="text-3xl font-bold text-[#0F172A] mb-2 text-center"
                    style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                  >
                    Here are your free tests!
                  </h2>
                  <p className="text-[#64748B] text-center mb-8 text-sm leading-relaxed">
                    {sample?.grade} · {sample?.topic}
                  </p>

                  {sample && (
                    <div className="space-y-3 mb-8">
                      <a
                        href={sample.questions}
                        download
                        className="flex items-center gap-3 w-full bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold px-6 py-4 rounded-xl transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <div className="text-left">
                          <p className="text-sm font-bold">Download Questions</p>
                          <p className="text-xs text-white/70">{sample.topic} — {submittedCourse}</p>
                        </div>
                      </a>

                      <a
                        href={sample.solutions}
                        download
                        className="flex items-center gap-3 w-full bg-[#0F172A] hover:bg-[#1E2D4E] text-white font-semibold px-6 py-4 rounded-xl transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <div className="text-left">
                          <p className="text-sm font-bold">Download Solutions</p>
                          <p className="text-xs text-white/70">{sample.topic} — {submittedCourse}</p>
                        </div>
                      </a>
                    </div>
                  )}

                  <div className="pt-6 border-t border-[#F1F5F9] text-center">
                    <p className="text-sm text-[#64748B] mb-3">Want the full package for {submittedCourse}?</p>
                    <Link
                      to="/resources"
                      className="inline-flex items-center gap-1.5 text-[#F97316] hover:text-[#EA6C00] font-semibold text-sm transition-colors"
                    >
                      Browse all resources
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── What's included strip ── */}
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
                    className="border border-white/10 rounded-xl px-5 py-4"
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
