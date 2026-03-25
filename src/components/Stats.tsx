import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import NotesButton from './NotesButton';

const stats = [
  {
    value: 65,
    suffix: '+',
    label: 'Students Helped',
    icon: (
      <svg className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    value: 1200,
    suffix: '+',
    label: 'Hours Tutored',
    icon: (
      <svg className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    value: 98,
    suffix: '%',
    label: 'Student Satisfaction',
    icon: (
      <svg className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 15c1.5 2 6.5 2 8 0" />
        <circle cx="9"  cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    icon: (
      <svg className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 16h8M8 8h8" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "Yawar helped me go from a 72 to a 91 in Calculus. His explanations actually make sense!",
    name: "High School Student",
    subject: "Grade 12 Calculus",
  },
  {
    quote: "Best investment before finals. My daughter's Physics mark jumped 15 points in 3 weeks.",
    name: "Parent",
    subject: "Grade 12 Physics",
  },
  {
    quote: "The group sessions are great — you learn from each other's questions too. Highly recommend.",
    name: "High School Student",
    subject: "Advanced Functions",
  },
];

const Stats: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const intervals = stats.map((stat, i) => {
      const duration = 1200;
      const increment = Math.ceil(stat.value / (duration / 16));
      return setInterval(() => {
        setCounts(prev => {
          const next = [...prev];
          if (next[i] < stat.value) next[i] = Math.min(next[i] + increment, stat.value);
          return next;
        });
      }, 16);
    });
    return () => intervals.forEach(clearInterval);
  }, [visible]);

  return (
    <section className="bg-[#0F172A] py-20 px-4" id="testimonials" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">By the Numbers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Results Speak for Themselves</h2>
          <p className="text-lg text-gray-400">
            Dedication, consistency, and real impact — measured in every session.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-[#F97316]/15 rounded-xl flex items-center justify-center mb-3">
                {stat.icon}
              </div>
              <span
                className="text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                {counts[i]}{stat.suffix}
              </span>
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-[#F97316] text-xs">{t.subject}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <NotesButton />
        </div>
      </div>
    </section>
  );
};

export default Stats;
