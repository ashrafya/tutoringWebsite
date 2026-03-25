import { motion } from 'framer-motion';
import { GOOGLE_FORM } from './Constants';
import { courses } from '../DB/CoursesDB';

const Courses: React.FC = () => (
  <section className="bg-[#F8FAFC] py-20 px-4" id="courses">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">Academic Excellence</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Group Courses Available</h2>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-8">
          Small-group lessons in 4 core Ontario high school subjects. Collaborative, structured, and results-driven.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { icon: '👥', text: 'Small groups (2–6 students)' },
            { icon: '💻', text: 'Online via Google Meet' },
            { icon: '📋', text: 'Ontario curriculum aligned' },
          ].map(b => (
            <span
              key={b.text}
              className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] rounded-full px-4 py-1.5 text-sm text-[#0F172A] font-medium shadow-sm"
            >
              <span>{b.icon}</span>
              {b.text}
            </span>
          ))}
        </div>

        <a
          href="/#/courses"
          className="inline-block bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:shadow-lg text-base"
        >
          View Full Course Details →
        </a>
      </motion.div>

      {/* Course cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {courses.map((course, i) => (
          <motion.div
            key={course.subject}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Coloured top strip */}
            <div className={`bg-gradient-to-r ${course.accentBg} px-6 py-5 flex items-center justify-between`}>
              <div>
                {/* Course code badge */}
                <span className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1 block">
                  {course.subject}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {course.level} — {course.title}
                </h3>
                <p className="text-white/70 text-xs mt-1">{course.duration} · Online</p>
              </div>
              <div className="flex-shrink-0 w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center ml-4">
                {course.icon}
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              <p className="text-[#64748B] text-sm leading-relaxed mb-5">{course.description}</p>

              {/* Topic pills */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2.5">Key Topics</p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map(topic => (
                    <span
                      key={topic}
                      className="text-xs font-medium px-3 py-1 rounded-full border text-[#0F172A] bg-[#F8FAFC] border-[#E2E8F0]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={GOOGLE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 hover:shadow-md text-sm"
              >
                Join Group Course
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
