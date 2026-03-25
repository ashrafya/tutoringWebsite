import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';

const plans = [
  {
    name: 'Group Tutoring',
    description: '3 hours/week in small groups (2 classes of 1.5 hours each). Collaborative and interactive learning.',
    threeWeek: 195,
    sixWeek: 350,
    features: [
      '2 group classes/week',
      '1.5 hours per class',
      'Small group size',
      'Homework help & exam prep',
      'Progress updates for parents',
    ],
    popular: false,
  },
  {
    name: 'Group + Personal',
    description: 'All group benefits plus 1 hour/week of personal lessons. Our most popular plan for extra support.',
    threeWeek: 330,
    sixWeek: 580,
    features: [
      'Everything in Group Tutoring',
      '1 hour/week 1-on-1 session',
      'Personalized feedback',
      'Flexible scheduling for personal lessons',
    ],
    popular: true,
  },
  {
    name: 'Personal Tutoring',
    description: 'Fully personalized 1-on-1 tutoring. Flexible scheduling and tailored lesson plans.',
    threeWeek: 405,
    sixWeek: 780,
    features: [
      '3 hours/week 1-on-1',
      'Custom lesson plans',
      'Homework help & exam prep',
      'Progress tracking',
      'Direct feedback after each session',
    ],
    popular: false,
  },
  {
    name: 'Custom Plan',
    description: "Need something different? Tell us your needs and we'll build a plan just for you.",
    threeWeek: 'Custom',
    sixWeek: 'Custom',
    features: [
      'Flexible hours',
      'Mix of group & personal',
      'Special subjects or requests',
      'Custom pricing based on needs',
      'Personal consultation',
    ],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'threeWeek' | 'sixWeek'>('threeWeek');

  return (
    <section className="bg-[#F8FAFC] px-4 py-20" id="pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Flexible Plans for Every Learner
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Choose the plan that fits your schedule. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-[#CBD5E1] rounded-full p-1 shadow-sm gap-1">
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                billing === 'threeWeek'
                  ? 'bg-[#1E3A8A] text-white shadow-md'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
              onClick={() => setBilling('threeWeek')}
            >
              3 Weeks
            </button>
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                billing === 'sixWeek'
                  ? 'bg-[#1E3A8A] text-white shadow-md'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
              onClick={() => setBilling('sixWeek')}
            >
              6 Weeks
              <span className="bg-[#F97316] text-white text-xs px-2 py-0.5 rounded-full font-bold">Save ~10%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              className={`relative bg-white rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-2 border-[#F97316] shadow-[0_8px_32px_rgba(249,115,22,0.2)]'
                  : 'border border-[#CBD5E1] shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                <p className="text-[#64748B] text-sm mb-5 leading-relaxed">{plan.description}</p>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className="text-4xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                  >
                    {plan.threeWeek === 'Custom'
                      ? 'Custom'
                      : `$${billing === 'threeWeek' ? plan.threeWeek : plan.sixWeek}`}
                  </span>
                  {plan.threeWeek !== 'Custom' && (
                    <span className="text-[#64748B] text-sm ml-1">
                      /{billing === 'threeWeek' ? '3 weeks' : '6 weeks'}
                    </span>
                  )}
                </div>

                {/* Savings badge */}
                {billing === 'sixWeek' && plan.threeWeek !== 'Custom' && (
                  <div className="mb-4">
                    <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                      Save ${(Number(plan.threeWeek) * 2 - Number(plan.sixWeek))} vs monthly
                    </span>
                  </div>
                )}

                <ul className="space-y-2.5 flex-1 mb-6 mt-2">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-[#64748B]">
                      <svg className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <RegisterButton
                  className={`w-full text-center justify-center text-base py-2.5 ${
                    plan.popular
                      ? ''
                      : 'bg-[#1E3A8A] hover:bg-[#1E40AF] !shadow-none'
                  }`}
                  label={plan.threeWeek === 'Custom' ? 'Contact Us' : 'Get Started'}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
