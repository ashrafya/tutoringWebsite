import { motion } from 'framer-motion';
import yawarImg from '../assets/killarneyYawar.png';
import RegisterButton from './RegisterButton';

const credentials = [
  { label: 'University of Toronto',    color: 'bg-[#1E3A8A] text-white' },
  { label: 'Engineering Science',      color: 'bg-[#F97316] text-white' },
  { label: '97% High School Average',  color: 'bg-[#B45309] text-white' },
  { label: '5+ Years Tutoring',        color: 'bg-[#0F172A] text-white' },
];

const Me: React.FC = () => (
  <section className="bg-white py-20 px-4" id="me">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        {/* Photo */}
        <div className="flex-shrink-0 relative">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-[#F97316]/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <img
              src={yawarImg}
              alt="Yawar — Tutor Oaks"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating grade badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#F97316] text-white rounded-xl px-3 py-2 shadow-lg text-center">
            <p className="text-2xl font-bold leading-none" style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}>97%</p>
            <p className="text-xs font-medium opacity-90">HS Average</p>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#F97316] font-semibold text-base uppercase tracking-wider mb-2">Meet Your Tutor</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Hi, I'm Yawar!
          </h2>
          <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
            I'm an <span className="font-semibold text-[#0F172A]">Engineering Science</span> graduate from the{' '}
            <span className="font-semibold text-[#0F172A]">University of Toronto</span>, completed Ontario high school
            with a <span className="font-semibold text-[#F97316]">97% average</span>. I know exactly what it takes to
            succeed in these courses — and I'm here to help you get there.
          </p>
          <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
            My goal is to build <span className="font-semibold text-[#0F172A]">strong foundations</span> and{' '}
            <span className="font-semibold text-[#0F172A]">lasting confidence</span> in every student I work with.
          </p>

          {/* Credential chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {credentials.map(c => (
              <span
                key={c.label}
                className={`${c.color} text-sm font-semibold px-3 py-1.5 rounded-full`}
              >
                {c.label}
              </span>
            ))}
          </div>

          <RegisterButton />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Me;
