import chem11Preview from "../assets/notesPDFs/chem3.jpeg";
import phy11Preview from "../assets/notesPDFs/phy1.webp";
import adv12Preview from "../assets/notesPDFs/math1.webp";
import calc12Preview from "../assets/notesPDFs/math2.webp";
import chem12Preview from "../assets/notesPDFs/chem4.webp";
import phy12Preview from "../assets/notesPDFs/phy2.webp";

export interface CourseNotesTests {
  id: string;
  subject: string;
  grade: string;
  title: string;
  description: string;
  notesDescription: string;
  testsDescription: string;
  price: number;
  oldPrice?: number;
  pages: number;
  badge?: string;
  coverImage: string;
  features: string[];
  previewFiles: {
    notes: string[];
    tests: string[];
    solutions: string[];
  };
}

export const notesTestsData: CourseNotesTests[] = [
  {
    id: "chem11",
    subject: "Chemistry",
    grade: "Grade 11",
    title: "Grade 11 Chemistry Mastery Notes",
    description: "Exam-focused notes for Grade 11 Chemistry. Includes concise explanations, diagrams, and practice questions for every unit.",
    notesDescription: "Comprehensive notes covering all Grade 11 Chemistry units with step-by-step explanations, molecular diagrams, and practice problems. Perfect for exam preparation and homework help.",
    testsDescription: "Unit tests for all major chemistry topics with detailed answer keys. Each test includes multiple choice, short answer, and problem-solving questions to assess understanding.",
    price: 45,
    pages: 36,
    badge: "New",
    coverImage: chem11Preview,
    features: [
      "Complete unit coverage",
      "Molecular diagrams",
      "Step-by-step solutions",
      "Practice problems with answers",
      "Exam preparation materials"
    ],
    previewFiles: {
      notes: ["chem11_notes_preview.pdf"],
      tests: ["chem11_unit1_test.pdf"],
      solutions: ["chem11_unit1_solutions.pdf"]
    }
  },
  {
    id: "phy11",
    subject: "Physics",
    grade: "Grade 11",
    title: "Grade 11 Physics Success Notes",
    description: "Comprehensive notes for Grade 11 Physics. Covers all major topics with clear examples and problem-solving strategies.",
    notesDescription: "Detailed physics notes with mathematical derivations, problem-solving strategies, and real-world applications. Includes graphing techniques and experimental analysis.",
    testsDescription: "Comprehensive physics assessments with calculation problems, conceptual questions, and experimental scenarios. Includes detailed mathematical solutions and unit analysis.",
    price: 45,
    pages: 40,
    badge: "Hot",
    coverImage: phy11Preview,
    features: [
      "Mathematical derivations",
      "Problem-solving strategies",
      "Graphing techniques",
      "Experimental analysis",
      "Unit conversion methods"
    ],
    previewFiles: {
      notes: ["phy11_notes_preview.pdf"],
      tests: ["phy11_unit1_test.pdf"],
      solutions: ["phy11_unit1_solutions.pdf"]
    }
  },
  {
    id: "chem12",
    subject: "Chemistry",
    grade: "Grade 12",
    title: "Grade 12 Chemistry Exam Notes",
    description: "Detailed notes for Grade 12 Chemistry. Perfect for revision, with summaries, key concepts, and sample questions.",
    notesDescription: "Advanced chemistry notes with molecular structures, reaction mechanisms, and calculation methods. Includes laboratory procedures and safety protocols.",
    testsDescription: "Advanced chemistry assessments with molecular drawing, calculation problems, and laboratory scenario questions. Includes step-by-step solutions and alternative methods.",
    price: 55,
    pages: 38,
    badge: "New",
    coverImage: chem12Preview,
    features: [
      "Molecular structure diagrams",
      "Reaction mechanisms",
      "Calculation methodologies",
      "Laboratory procedures",
      "Safety protocols"
    ],
    previewFiles: {
      notes: ["chem12_notes_preview.pdf"],
      tests: ["chem12_unit1_test.pdf"],
      solutions: ["chem12_unit1_solutions.pdf"]
    }
  },
  {
    id: "phy12",
    subject: "Physics",
    grade: "Grade 12",
    title: "Grade 12 Physics Complete Notes",
    description: "All-in-one notes for Grade 12 Physics. Includes formulas, worked examples, and tips for acing your exams.",
    notesDescription: "Comprehensive physics notes with advanced mathematical concepts, problem-solving strategies, and real-world applications. Includes graphing techniques and experimental analysis.",
    testsDescription: "Advanced physics assessments with complex calculation problems, conceptual questions, and experimental scenarios. Includes detailed mathematical solutions and unit analysis.",
    price: 55,
    pages: 42,
    coverImage: phy12Preview,
    features: [
      "Advanced mathematical concepts",
      "Complex problem-solving",
      "Graphing techniques",
      "Experimental analysis",
      "Exam strategies"
    ],
    previewFiles: {
      notes: ["phy12_notes_preview.pdf"],
      tests: ["phy12_unit1_test.pdf"],
      solutions: ["phy12_unit1_solutions.pdf"]
    }
  },
  {
    id: "adv12",
    subject: "Advanced Functions",
    grade: "Grade 12",
    title: "Advanced Functions Grade 12 Notes",
    description: "Thorough notes for Grade 12 Advanced Functions. Covers all units with step-by-step solutions and exam tips.",
    notesDescription: "Comprehensive advanced functions notes with detailed explanations, graphing techniques, and problem-solving strategies. Includes step-by-step solutions and exam preparation materials.",
    testsDescription: "Unit assessments covering all advanced functions topics with varying difficulty levels. Tests include graphing, problem-solving, and analytical thinking questions with complete solution keys.",
    price: 55,
    pages: 45,
    coverImage: adv12Preview,
    features: [
      "Complete unit coverage",
      "Graphing techniques",
      "Step-by-step solutions",
      "Practice problems with answers",
      "Exam preparation materials"
    ],
    previewFiles: {
      notes: ["adv12_notes_preview.pdf"],
      tests: ["adv12_unit1_test.pdf"],
      solutions: ["adv12_unit1_solutions.pdf"]
    }
  },
  {
    id: "calc12",
    subject: "Calculus & Vectors",
    grade: "Grade 12",
    title: "Calculus & Vectors Grade 12 Notes",
    description: "Complete notes for Grade 12 Calculus & Vectors. Includes theory, practice problems, and clear explanations.",
    notesDescription: "Detailed calculus and vectors notes with mathematical derivations, problem-solving strategies, and real-world applications. Includes graphing techniques and step-by-step solutions.",
    testsDescription: "Advanced calculus assessments with calculation problems, conceptual questions, and vector analysis. Includes detailed mathematical solutions and alternative solution methods.",
    price: 55,
    oldPrice: 70,
    pages: 48,
    badge: "Hot",
    coverImage: calc12Preview,
    features: [
      "Mathematical derivations",
      "Problem-solving strategies",
      "Vector analysis",
      "Graphing techniques",
      "Step-by-step solutions"
    ],
    previewFiles: {
      notes: ["calc12_notes_preview.pdf"],
      tests: ["calc12_unit1_test.pdf"],
      solutions: ["calc12_unit1_solutions.pdf"]
    }
  }
];

export default notesTestsData;
