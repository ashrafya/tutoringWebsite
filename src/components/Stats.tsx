import React, { useEffect, useRef, useState } from "react";
import NotesButton from "./NotesButton";

const stats = [
  {
    value: 65,
    suffix: "+",
    label: "Students Helped",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="currentColor" />
        <path stroke="currentColor" d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    value: 1200,
    suffix: "+",
    label: "Hours Tutored",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    value: 98,
    suffix: "%",
    label: "Student Satisfaction",
    icon: (
      // Happy face SVG
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 15c1.5 2 6.5 2 8 0" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 16h8M8 8h8" />
      </svg>
    ),
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
    const durations = [1000, 1000, 1000, 1000];
    const intervals = stats.map((stat, i) => {
      const increment = Math.ceil(stat.value / (durations[i] / 16));
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[i] < stat.value) {
            next[i] = Math.min(next[i] + increment, stat.value);
          }
          return next;
        });
      }, 16);
    });
    return () => intervals.forEach(clearInterval);
  }, [visible]);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center" ref={sectionRef}>
        <p className="text-blue-600 font-semibold text-lg mb-2">Some Fun Facts</p>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Our achievements</h2>
        <p className="text-xl text-gray-500 mb-14">
          Numbers that show dedication and impact in tutoring.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-lg bg-gray-50 shadow-md">
                {stat.icon}
              </div>
              <span className="text-4xl font-extrabold text-gray-900 mb-1">
                {counts[i]}
                {stat.suffix}
              </span>
              <span className="text-lg font-medium text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <NotesButton />
      </div>
    </section>
  );
};

export default Stats;