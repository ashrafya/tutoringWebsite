import React from "react";
import { FaCalculator, FaAtom, FaRocket } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

export interface Course {
  title: string;
  description: string;
  topics: string[];
  icon: React.ReactElement;
  level: string;
  duration: string;
  color: string;
}

export const courses: Course[] = [
  {
    title: "Calculus",
    description: "Master the fundamentals of calculus including limits, derivatives, and integrals. Perfect for Ontario Grade 12 students preparing for university mathematics.",
    topics: [
      "Limits and Continuity",
      "Derivatives and Differentiation Rules",
      "Applications of Derivatives",
      "Integrals and Antiderivatives",
      "Applications of Integrals"
    ],
    icon: <FaCalculator className="w-6 h-6 text-blue-600" />,
    level: "Grade 12",
    duration: "Semester Course",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Advanced Functions",
    description: "Build a strong foundation in advanced mathematical functions and transformations. Essential for Ontario Grade 12 mathematics curriculum.",
    topics: [
      "Polynomial Functions",
      "Rational Functions",
      "Exponential and Logarithmic Functions",
      "Trigonometric Functions",
      "Function Transformations"
    ],
    icon: <GiProgression className="w-6 h-6 text-green-600" />,
    level: "Grade 12",
    duration: "Semester Course",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Grade 11 Physics",
    description: "Explore fundamental physics principles through hands-on learning. Covers the Ontario Grade 11 physics curriculum with practical applications.",
    topics: [
      "Kinematics and Motion",
      "Forces and Newton's Laws",
      "Energy and Work",
      "Waves and Sound",
      "Electricity and Magnetism"
    ],
    icon: <FaAtom className="w-6 h-6 text-purple-600" />,
    level: "Grade 11",
    duration: "Semester Course",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Grade 12 Physics",
    description: "Dive deeper into advanced physics concepts with comprehensive coverage of Ontario Grade 12 physics topics and enhanced problem-solving skills.",
    topics: [
      "Advanced Mechanics",
      "Electric Fields and Circuits",
      "Magnetic Fields and Induction",
      "Wave Phenomena",
      "Modern Physics"
    ],
    icon: <FaRocket className="w-6 h-6 text-red-600" />,
    level: "Grade 12",
    duration: "Semester Course",
    color: "from-red-500 to-red-600"
  }
];
