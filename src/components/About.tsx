import { motion } from 'framer-motion';
import NotesButton from './NotesButton';

const subjects = [
  { name: 'Advanced Functions',    icon: '∫' },
  { name: 'Calculus & Vectors',    icon: '∂' },
  { name: 'Data Management',       icon: '∑' },
  { name: 'Physics GR11',          icon: '⚡' },
  { name: 'Physics GR12',          icon: '⚛️' },
  { name: 'Chemistry GR11',        icon: '🧪' },
  { name: 'Chemistry GR12',        icon: '⚗️' },
  { name: 'Math',                  icon: '📐' },
  { name: 'Science',               icon: '🔬' },
];

const modes = [
  {
    title: '1-on-1 Tutoring',
    description: 'Fully personalized sessions tailored to your pace, learning style, and goals. Direct feedback every session.',
    icon: (
      <svg className="w-8 h-8 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: 'Group Tutoring',
    description: 'Small group sessions (2–6 students) covering core topics collaboratively. Great value with peer learning.',
    icon: (
      <svg className="w-8 h-8 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="9"  cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <circle cx="19" cy="7" r="3" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const About = () => (
  <section className="bg-[#F8FAFC] py-20 px-4" id="about">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">Classes Supported</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
          Subjects & Tutoring Modes
        </h2>
        <p className="text-lg text-[#64748B] mb-12 max-w-2xl mx-auto">
          Expert tutoring for Ontario high school students across a range of STEM subjects — in whatever format works best for you.
        </p>
      </motion.div>

      {/* Subject pills */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-14"
      >
        {subjects.map(subject => (
          <motion.div
            key={subject.name}
            variants={item}
            className="flex items-center gap-2 bg-white border border-[#CBD5E1] rounded-full px-4 py-2 shadow-sm hover:border-[#1E3A8A] hover:shadow-md transition-all duration-200 cursor-default"
          >
            <span className="text-base">{subject.icon}</span>
            <span className="text-[#0F172A] font-medium text-sm">{subject.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Mode cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {modes.map((mode, i) => (
          <motion.div
            key={mode.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
            className="bg-white border border-[#CBD5E1] rounded-2xl p-7 text-left shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#FFF7ED] rounded-xl flex items-center justify-center mb-4">
              {mode.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">{mode.title}</h3>
            <p className="text-[#64748B] text-base leading-relaxed">{mode.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <NotesButton />
      </div>
    </div>
  </section>
);

export default About;
