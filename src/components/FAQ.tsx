import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What subjects do you tutor?',
    answer: 'I offer tutoring in Advanced Functions, Calculus & Vectors, Data Management, Physics (Gr11/12), Chemistry (Gr11/12), and general Math & Science for Ontario high school students.',
  },
  {
    question: 'How do I book a tutoring session?',
    answer: "Click 'Register Now' to fill out the registration form. After submitting, I'll reach out to confirm your schedule, share a booking link, and provide all session details.",
  },
  {
    question: 'Are lessons held online or in-person?',
    answer: 'All lessons are held online via Google Meet, making it easy to join from anywhere — no commute required.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel or reschedule a session up to 24 hours in advance without any charge. Cancellations within 24 hours may incur a fee.',
  },
  {
    question: 'Do you offer group tutoring?',
    answer: 'Yes! I offer both 1-on-1 and small group sessions. Group sessions are 2–6 students covering core curriculum topics collaboratively.',
  },
  {
    question: 'How do I pay for lessons?',
    answer: 'Payments are made securely online via credit card or PayPal, prepaid on a 3-week or 6-week billing cycle. Save up to 10% with the 6-week plan.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-20 px-4" id="faq">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">FAQs</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
        </motion.div>

        <div className="divide-y divide-[#E2E8F0]">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <button
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-base font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors duration-200 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx
                      ? 'bg-[#F97316] text-white rotate-45'
                      : 'bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#E2E8F0]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#64748B] pb-5 pr-10 pl-4 border-l-4 border-[#F97316] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
