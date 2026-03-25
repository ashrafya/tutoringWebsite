import React from "react";

export interface Course {
  title: string;
  subject: string;
  description: string;
  topics: string[];
  icon: React.ReactElement;
  level: string;
  duration: string;
  accentColor: string;
  accentBg: string;
}

export const courses: Course[] = [
  {
    title: "Calculus",
    subject: "MCV4U",
    description: "Master limits, derivatives, and integrals with step-by-step guidance. Builds the exact skills you need for university math.",
    topics: [
      "Limits & Continuity",
      "Derivatives",
      "Optimization",
      "Integrals",
      "Applications",
    ],
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 14c0 2-1.5 4-3 4s-3-2-3-4 1.5-4 3-4 3 2 3 4z" />
      </svg>
    ),
    level: "Grade 12",
    duration: "Semester",
    accentColor: "#1E3A8A",
    accentBg: "from-[#1E3A8A] to-[#1E40AF]",
  },
  {
    title: "Advanced Functions",
    subject: "MHF4U",
    description: "Deep dive into polynomial, rational, exponential, and trigonometric functions. Essential preparation for calculus and university STEM.",
    topics: [
      "Polynomial Functions",
      "Rational Functions",
      "Exponentials & Logs",
      "Trigonometry",
      "Function Transformations",
    ],
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-8 4 5 3-3 4 6" />
      </svg>
    ),
    level: "Grade 12",
    duration: "Semester",
    accentColor: "#0F766E",
    accentBg: "from-[#0F766E] to-[#0D9488]",
  },
  {
    title: "Physics",
    subject: "SPH3U",
    description: "Build a solid physics foundation covering motion, forces, energy, and waves. Practical problem-solving skills that carry through to Grade 12.",
    topics: [
      "Kinematics",
      "Forces & Newton's Laws",
      "Energy & Work",
      "Waves & Sound",
      "Electricity",
    ],
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    level: "Grade 11",
    duration: "Semester",
    accentColor: "#C2410C",
    accentBg: "from-[#C2410C] to-[#EA580C]",
  },
  {
    title: "Physics",
    subject: "SPH4U",
    description: "Advanced mechanics, electromagnetism, and modern physics. Rigorous problem-solving and concept mastery for university science programs.",
    topics: [
      "Advanced Mechanics",
      "Electric & Magnetic Fields",
      "Circuits & Induction",
      "Wave Phenomena",
      "Modern Physics",
    ],
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    level: "Grade 12",
    duration: "Semester",
    accentColor: "#4338CA",
    accentBg: "from-[#4338CA] to-[#6366F1]",
  },
];
