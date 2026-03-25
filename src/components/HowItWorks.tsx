import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';

const steps = [
  {
    number: '01',
    title: 'Choose Your Plan',
    description: 'Browse our tutoring options and select the plan that fits your needs and goals.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Register',
    description: 'Sign up and reserve your spot. We\'ll confirm your schedule and send all details.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19.5 2 21l1.5-5L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Contact & Consultation',
    description: 'I\'ll reach out to discuss your goals and provide a booking link with all necessary info.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Start Learning',
    description: 'Join your sessions online, get personalized help, and track your progress every week.',
    icon: (
      <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const HowItWorks: React.FC = () => (
  <section className="bg-[#0F172A] py-20 px-4" id="how-it-works">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">Process</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Getting Started is Easy</h2>
        <p className="text-lg text-gray-400 mb-14">
          Four simple steps to begin your tutoring journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors duration-300"
          >
            {/* Step number */}
            <span
              className="text-6xl font-bold text-white/5 absolute top-4 right-4 select-none leading-none"
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            >
              {step.number}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 bg-[#F97316]/15 rounded-xl flex items-center justify-center mb-4">
              {step.icon}
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

            {/* Connector dot for desktop */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#F97316] items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.45 }}
        className="mt-12"
      >
        <RegisterButton />
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
