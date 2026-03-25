import { motion } from 'framer-motion';
import NotesButton from './NotesButton';

const features = [
  {
    title: 'Personalized Learning',
    description: 'Every session is tailored to your unique needs and learning style for maximum results.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Expert Tutor',
    description: 'Taught by a UofT Engineering grad with a 97% high school average and 5+ years experience.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Scheduling',
    description: 'Book sessions at times that fit your busy schedule with our easy booking process.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees. Choose 3-week or 6-week bundles with discounts.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 6v2m0 8v2M9 9h1.5a1.5 1.5 0 010 3H9m6 0h-1.5a1.5 1.5 0 010-3H15" />
      </svg>
    ),
  },
  {
    title: 'Online Convenience',
    description: 'Access expert tutoring from anywhere via Google Meet — no travel required.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed progress updates and personalized feedback.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Features: React.FC = () => (
  <section className="bg-[#F8FAFC] py-20 px-4" id="features">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">Why Tutor Oaks</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Built for Your Success</h2>
        <p className="text-lg text-[#64748B] mb-14 max-w-2xl mx-auto">
          Everything you need to go from struggling to confident — in one place.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map(feature => (
          <motion.div
            key={feature.title}
            variants={cardVariant}
            className="bg-white rounded-2xl border border-[#CBD5E1] p-6 text-left shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feature.title}</h3>
            <p className="text-[#64748B] text-base leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <NotesButton />
      </div>
    </div>
  </section>
);

export default Features;
