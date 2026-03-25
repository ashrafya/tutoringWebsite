import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';

const CTASection = () => (
  <section className="bg-[#0F172A] py-24 px-4 relative overflow-hidden">
    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }}
    />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative max-w-3xl mx-auto text-center"
    >
      <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-4">Ready to Start?</p>
      <h2
        className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
      >
        Ace Your Exams.<br />
        <span className="text-[#F97316]">Learn Smarter, Not Harder.</span>
      </h2>
      <p className="text-xl text-gray-400 mb-10">
        Personalized tutoring for real, measurable results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <RegisterButton className="text-lg px-10 py-4 shadow-lg shadow-orange-500/20" />
        <a
          href="/#/courses"
          className="inline-block px-10 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200"
        >
          View Courses
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
