import chem11Preview from "../assets/notesPDFs/chem3.jpeg";
import phy11Preview from "../assets/notesPDFs/phy1.webp";
import adv12Preview from "../assets/notesPDFs/math1.webp";
import calc12Preview from "../assets/notesPDFs/math2.webp";
import chem12Preview from "../assets/notesPDFs/chem4.webp";
import phy12Preview from "../assets/notesPDFs/phy2.webp";
import math10Preview from "../assets/notesPDFs/math1.webp";
import math11CollegePreview from "../assets/notesPDFs/math2.webp";
import functions11Preview from "../assets/notesPDFs/math1.webp";
import math12CollegePreview from "../assets/notesPDFs/math2.webp";
import data12Preview from "../assets/notesPDFs/math1.webp";

export interface CourseNotesTests {
  id: string;
  slug: string;           // SEO-friendly URL slug
  courseCode: string;     // Ontario course code e.g. MCV4U
  subject: string;
  grade: string;
  title: string;
  metaDescription: string; // For SEO <meta description>
  description: string;
  notesDescription: string;
  testsDescription: string;
  price: number;
  oldPrice?: number;
  pages: number;
  badge?: string;
  hasNotes: boolean;      // Whether full notes PDF exists
  coverImage: string;
  previewPdf?: string;    // Path in /public/previews/
  features: string[];
  unitTests: string[];    // List of unit test topics
  previewFiles: {
    notes: string[];
    tests: string[];
    solutions: string[];
  };
}

export const notesTestsData: CourseNotesTests[] = [
  // ── Grade 10 ──────────────────────────────────────────────────────────────
  {
    id: "mpm2d",
    slug: "gr10-academic-math",
    courseCode: "MPM2D",
    subject: "Mathematics",
    grade: "Grade 10",
    title: "Grade 10 Academic Math Practice Tests",
    metaDescription: "Grade 10 Academic Math (MPM2D) unit tests and solutions covering quadratics, linear systems, analytic geometry, and trigonometry. Ontario curriculum.",
    description: "Exam-style practice tests for every unit in Grade 10 Academic Math (MPM2D). Covers quadratics, systems of equations, analytic geometry, and trig.",
    notesDescription: "",
    testsDescription: "Six unit tests covering all MPM2D topics: linear systems, quadratic expressions, quadratic functions, quadratic equations & trig, analytic geometry, and a full final exam. Each test includes detailed solutions.",
    price: 35,
    pages: 70,
    badge: "New",
    hasNotes: false,
    coverImage: math10Preview,
    features: [
      "6 unit tests + final exam",
      "Full step-by-step solutions",
      "Ontario MPM2D curriculum",
      "Multiple choice & long answer",
      "Instant PDF download"
    ],
    unitTests: [
      "Linear Systems",
      "Quadratic Expressions",
      "Quadratic Functions",
      "Quadratic Equations & Trigonometry",
      "Analytic Geometry",
      "Final Exam"
    ],
    previewFiles: {
      notes: [],
      tests: ["GR10_MPM2D_Analytic_Geometry.pdf"],
      solutions: ["GR10_MPM2D_Analytic_Geometry_Solutions.pdf"]
    }
  },

  // ── Grade 11 ──────────────────────────────────────────────────────────────
  {
    id: "mbf3c",
    slug: "gr11-college-math",
    courseCode: "MBF3C",
    subject: "Mathematics",
    grade: "Grade 11",
    title: "Grade 11 College Math Practice Tests",
    metaDescription: "Grade 11 College Math (MBF3C) unit tests covering exponential functions, personal finance, geometry, statistics, and trigonometry. Ontario curriculum.",
    description: "Complete set of practice tests for Grade 11 College Math (MBF3C). Covers personal finance, exponential functions, geometry, statistics, and trigonometry.",
    notesDescription: "",
    testsDescription: "Six unit tests covering all MBF3C topics: exponential functions, personal finance, geometry & measurement, statistics & probability, trigonometry, and a full final exam. Detailed solutions included.",
    price: 35,
    pages: 65,
    hasNotes: false,
    coverImage: math11CollegePreview,
    features: [
      "6 unit tests + final exam",
      "Full step-by-step solutions",
      "Ontario MBF3C curriculum",
      "Real-world application problems",
      "Instant PDF download"
    ],
    unitTests: [
      "Exponential Functions",
      "Personal Finance",
      "Geometry & Measurement",
      "Statistics & Probability",
      "Trigonometry",
      "Final Exam"
    ],
    previewFiles: {
      notes: [],
      tests: ["GR11_MBF3C_Exponential_Functions.pdf"],
      solutions: ["GR11_MBF3C_Exponential_Functions_Solutions.pdf"]
    }
  },
  {
    id: "mcr3u",
    slug: "gr11-functions",
    courseCode: "MCR3U",
    subject: "Mathematics",
    grade: "Grade 11",
    title: "Grade 11 Functions Practice Tests",
    metaDescription: "Grade 11 Functions (MCR3U) unit tests covering characteristics of functions, exponential, trigonometric, and discrete functions. Ontario curriculum.",
    description: "Exam-style practice tests for all units in Grade 11 Functions (MCR3U). Covers function characteristics, exponential, trigonometric, and discrete functions.",
    notesDescription: "",
    testsDescription: "Six unit tests covering all MCR3U topics: characteristics of functions, exponential functions, discrete functions, trigonometric ratios, trigonometric functions, and a full final exam. Step-by-step solutions included.",
    price: 35,
    pages: 72,
    badge: "Hot",
    hasNotes: false,
    coverImage: functions11Preview,
    features: [
      "6 unit tests + final exam",
      "Full step-by-step solutions",
      "Ontario MCR3U curriculum",
      "Graphing & analytical problems",
      "Instant PDF download"
    ],
    unitTests: [
      "Characteristics of Functions",
      "Exponential Functions",
      "Discrete Functions",
      "Trigonometric Ratios",
      "Trigonometric Functions",
      "Final Exam"
    ],
    previewFiles: {
      notes: [],
      tests: ["GR11_MCR3U_Trigonometric_Ratios.pdf"],
      solutions: ["GR11_MCR3U_Trigonometric_Ratios_Solutions.pdf"]
    }
  },
  {
    id: "chem11",
    slug: "gr11-chemistry",
    courseCode: "SCH3U",
    subject: "Chemistry",
    grade: "Grade 11",
    title: "Grade 11 Chemistry Mastery Notes & Tests",
    metaDescription: "Grade 11 Chemistry (SCH3U) comprehensive notes and unit tests covering matter, bonding, gases, solutions, stoichiometry, and chemical reactions. Ontario curriculum.",
    description: "Exam-focused notes and tests for Grade 11 Chemistry. Includes concise explanations, diagrams, and practice questions for every unit.",
    notesDescription: "Comprehensive notes covering all Grade 11 Chemistry units with step-by-step explanations, molecular diagrams, and practice problems. Perfect for exam preparation and homework help.",
    testsDescription: "Unit tests for all major chemistry topics with detailed answer keys. Each test includes multiple choice, short answer, and problem-solving questions.",
    price: 45,
    pages: 36,
    badge: "New",
    hasNotes: true,
    coverImage: chem11Preview,
    previewPdf: "/previews/GR11ChemistryPreview.pdf",
    features: [
      "Complete unit coverage",
      "Molecular diagrams",
      "Step-by-step solutions",
      "Practice problems with answers",
      "Exam preparation materials"
    ],
    unitTests: [
      "Matter, Bonding & Trends",
      "Chemical Reactions",
      "Quantities in Chemical Reactions (Stoichiometry)",
      "Solutions",
      "Gases",
      "Final Exam"
    ],
    previewFiles: {
      notes: ["GR11Chemistry.pdf"],
      tests: ["GR11_Chem_Stoichiometry.pdf"],
      solutions: ["GR11_Chem_Stoichiometry_Solutions.pdf"]
    }
  },
  {
    id: "phy11",
    slug: "gr11-physics",
    courseCode: "SPH3U",
    subject: "Physics",
    grade: "Grade 11",
    title: "Grade 11 Physics Success Notes & Tests",
    metaDescription: "Grade 11 Physics (SPH3U) comprehensive notes and unit tests covering kinematics, forces, energy, waves, sound, and electricity. Ontario curriculum.",
    description: "Comprehensive notes for Grade 11 Physics. Covers all major topics with clear examples and problem-solving strategies.",
    notesDescription: "Detailed physics notes with mathematical derivations, problem-solving strategies, and real-world applications. Includes graphing techniques and experimental analysis.",
    testsDescription: "Comprehensive physics assessments with calculation problems, conceptual questions, and experimental scenarios. Includes detailed mathematical solutions.",
    price: 45,
    pages: 40,
    badge: "Hot",
    hasNotes: true,
    coverImage: phy11Preview,
    previewPdf: "/previews/GR11PhysicsPreview.pdf",
    features: [
      "Mathematical derivations",
      "Problem-solving strategies",
      "Graphing techniques",
      "Experimental analysis",
      "Unit conversion methods"
    ],
    unitTests: [
      "Kinematics",
      "Forces",
      "Energy",
      "Waves & Sound",
      "Electricity",
      "Final Exam"
    ],
    previewFiles: {
      notes: ["GR11Physics.pdf"],
      tests: ["GR11_Physics_Kinematics.pdf"],
      solutions: ["GR11_Physics_Kinematics_Solutions.pdf"]
    }
  },

  // ── Grade 12 ──────────────────────────────────────────────────────────────
  {
    id: "map4c",
    slug: "gr12-college-math",
    courseCode: "MAP4C",
    subject: "Mathematics",
    grade: "Grade 12",
    title: "Grade 12 College Math Practice Tests",
    metaDescription: "Grade 12 College Math (MAP4C) unit tests covering modelling with functions, trigonometry, geometry, statistics, and financial mathematics. Ontario curriculum.",
    description: "Full set of practice tests for Grade 12 College Math (MAP4C). Covers financial math, modelling, trigonometry, geometry, and statistics.",
    notesDescription: "",
    testsDescription: "Six unit tests covering all MAP4C topics: modelling with functions, trigonometry & geometry, applications of geometry, financial mathematics, statistics, and a full final exam. Solutions included.",
    price: 40,
    pages: 68,
    hasNotes: false,
    coverImage: math12CollegePreview,
    features: [
      "6 unit tests + final exam",
      "Full step-by-step solutions",
      "Ontario MAP4C curriculum",
      "Financial & real-world problems",
      "Instant PDF download"
    ],
    unitTests: [
      "Modelling with Functions",
      "Trigonometry & Geometry",
      "Applications of Geometry",
      "Financial Mathematics",
      "Statistics",
      "Final Exam"
    ],
    previewFiles: {
      notes: [],
      tests: ["GR12_MAP4C_Financial_Mathematics.pdf"],
      solutions: ["GR12_MAP4C_Financial_Mathematics_Solutions.pdf"]
    }
  },
  {
    id: "mdm4u",
    slug: "gr12-data-management",
    courseCode: "MDM4U",
    subject: "Mathematics",
    grade: "Grade 12",
    title: "Grade 12 Data Management Practice Tests",
    metaDescription: "Grade 12 Data Management (MDM4U) unit tests covering counting techniques, probability, discrete distributions, normal distribution, and one-variable statistics. Ontario curriculum.",
    description: "Practice tests for every unit in Grade 12 Data Management (MDM4U). Covers probability, statistics, distributions, and counting techniques.",
    notesDescription: "",
    testsDescription: "Six unit tests covering all MDM4U topics: one-variable statistics, counting techniques, probability, discrete probability distributions, normal distribution, and a final exam. Full solutions included.",
    price: 40,
    pages: 66,
    hasNotes: false,
    coverImage: data12Preview,
    features: [
      "6 unit tests + final exam",
      "Full step-by-step solutions",
      "Ontario MDM4U curriculum",
      "Statistics & probability problems",
      "Instant PDF download"
    ],
    unitTests: [
      "One-Variable Statistics",
      "Counting Techniques",
      "Probability",
      "Discrete Probability Distributions",
      "Normal Distribution",
      "Final Exam"
    ],
    previewFiles: {
      notes: [],
      tests: ["GR12_MDM4U_Probability.pdf"],
      solutions: ["GR12_MDM4U_Probability_Solutions.pdf"]
    }
  },
  {
    id: "adv12",
    slug: "gr12-advanced-functions",
    courseCode: "MHF4U",
    subject: "Advanced Functions",
    grade: "Grade 12",
    title: "Advanced Functions Grade 12 Notes & Tests",
    metaDescription: "Grade 12 Advanced Functions (MHF4U) comprehensive notes and unit tests. Ontario curriculum covering polynomial, rational, trigonometric, and exponential functions.",
    description: "Thorough notes for Grade 12 Advanced Functions. Covers all units with step-by-step solutions and exam tips.",
    notesDescription: "Comprehensive advanced functions notes with detailed explanations, graphing techniques, and problem-solving strategies. Includes step-by-step solutions and exam preparation.",
    testsDescription: "Unit assessments covering all advanced functions topics with varying difficulty. Includes graphing, problem-solving, and analytical thinking questions with complete solution keys.",
    price: 55,
    pages: 45,
    hasNotes: true,
    coverImage: adv12Preview,
    previewPdf: "/previews/GR12AdvancedFunctionsPreview.pdf",
    features: [
      "Complete unit coverage",
      "Graphing techniques",
      "Step-by-step solutions",
      "Practice problems with answers",
      "Exam preparation materials"
    ],
    unitTests: [
      "Polynomial & Rational Functions",
      "Trigonometric Functions",
      "Exponential & Logarithmic Functions",
      "Combining Functions",
      "Final Exam"
    ],
    previewFiles: {
      notes: ["GR12AdvancedFunctions.pdf"],
      tests: ["GR12_MHF4U_Unit1_Test.pdf"],
      solutions: ["GR12_MHF4U_Unit1_Solutions.pdf"]
    }
  },
  {
    id: "calc12",
    slug: "gr12-calculus-vectors",
    courseCode: "MCV4U",
    subject: "Calculus & Vectors",
    grade: "Grade 12",
    title: "Calculus & Vectors Grade 12 Notes & Tests",
    metaDescription: "Grade 12 Calculus & Vectors (MCV4U) comprehensive notes and unit tests. Ontario curriculum covering limits, derivatives, applications, and vectors.",
    description: "Complete notes for Grade 12 Calculus & Vectors. Includes theory, practice problems, and clear explanations.",
    notesDescription: "Detailed calculus and vectors notes with mathematical derivations, problem-solving strategies, and real-world applications. Includes graphing techniques and step-by-step solutions.",
    testsDescription: "Advanced calculus assessments with calculation problems, conceptual questions, and vector analysis. Includes detailed mathematical solutions and alternative solution methods.",
    price: 55,
    oldPrice: 70,
    pages: 48,
    badge: "Hot",
    hasNotes: true,
    coverImage: calc12Preview,
    previewPdf: "/previews/GR12CaclulusPreview.pdf",
    features: [
      "Mathematical derivations",
      "Problem-solving strategies",
      "Vector analysis",
      "Graphing techniques",
      "Step-by-step solutions"
    ],
    unitTests: [
      "Limits & Rates of Change",
      "Derivative Rules",
      "Applications of Derivatives",
      "Trig, Exponential & Log Derivatives",
      "Vectors",
      "Lines & Planes",
      "Final Exam"
    ],
    previewFiles: {
      notes: ["GR12Caclulus.pdf"],
      tests: ["GR12_MCV4U_Limits_and_Rates.pdf"],
      solutions: ["GR12_MCV4U_Limits_and_Rates_Solutions.pdf"]
    }
  },
  {
    id: "chem12",
    slug: "gr12-chemistry",
    courseCode: "SCH4U",
    subject: "Chemistry",
    grade: "Grade 12",
    title: "Grade 12 Chemistry Exam Notes & Tests",
    metaDescription: "Grade 12 Chemistry (SCH4U) comprehensive notes and unit tests covering structure & properties, energy, equilibrium, electrochemistry, and organic chemistry. Ontario curriculum.",
    description: "Detailed notes for Grade 12 Chemistry. Perfect for revision, with summaries, key concepts, and sample questions.",
    notesDescription: "Advanced chemistry notes with molecular structures, reaction mechanisms, and calculation methods. Includes laboratory procedures and safety protocols.",
    testsDescription: "Advanced chemistry assessments with molecular drawing, calculation problems, and laboratory scenario questions. Includes step-by-step solutions.",
    price: 55,
    pages: 38,
    badge: "New",
    hasNotes: true,
    coverImage: chem12Preview,
    previewPdf: "/previews/GR12ChemistryPreview.pdf",
    features: [
      "Molecular structure diagrams",
      "Reaction mechanisms",
      "Calculation methodologies",
      "Laboratory procedures",
      "Safety protocols"
    ],
    unitTests: [
      "Structure & Properties of Matter",
      "Energy Changes & Rates of Reaction",
      "Chemical Equilibrium",
      "Electrochemistry",
      "Organic Chemistry",
      "Final Exam"
    ],
    previewFiles: {
      notes: ["GR12Chemistry.pdf"],
      tests: ["GR12_Chem_Equilibrium.pdf"],
      solutions: ["GR12_Chem_Equilibrium_Solutions.pdf"]
    }
  },
  {
    id: "phy12",
    slug: "gr12-physics",
    courseCode: "SPH4U",
    subject: "Physics",
    grade: "Grade 12",
    title: "Grade 12 Physics Complete Notes & Tests",
    metaDescription: "Grade 12 Physics (SPH4U) comprehensive notes and unit tests covering kinematics, dynamics, energy, fields, light, and modern physics. Ontario curriculum.",
    description: "All-in-one notes for Grade 12 Physics. Includes formulas, worked examples, and tips for acing your exams.",
    notesDescription: "Comprehensive physics notes with advanced mathematical concepts, problem-solving strategies, and real-world applications. Includes graphing techniques and experimental analysis.",
    testsDescription: "Advanced physics assessments with complex calculation problems, conceptual questions, and experimental scenarios. Includes detailed mathematical solutions.",
    price: 55,
    pages: 42,
    hasNotes: true,
    coverImage: phy12Preview,
    previewPdf: "/previews/GR12PhysicsPreview.pdf",
    features: [
      "Advanced mathematical concepts",
      "Complex problem-solving",
      "Graphing techniques",
      "Experimental analysis",
      "Exam strategies"
    ],
    unitTests: [
      "Kinematics",
      "Dynamics",
      "Energy & Momentum",
      "Gravitational, Electric & Magnetic Fields",
      "Light & Geometric Optics",
      "Modern Physics",
      "Final Exam"
    ],
    previewFiles: {
      notes: ["GR12Physics.pdf"],
      tests: ["GR12_Physics_Kinematics.pdf"],
      solutions: ["GR12_Physics_Kinematics_Solutions.pdf"]
    }
  },
];

export default notesTestsData;
