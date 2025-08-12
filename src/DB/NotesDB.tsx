import chem11Preview from "../assets/notesPDFs/chem3.jpeg";
import phy11Preview from "../assets/notesPDFs/phy1.webp";
import adv12Preview from "../assets/notesPDFs/math1.webp";
import calc12Preview from "../assets/notesPDFs/math2.webp";
import chem12Preview from "../assets/notesPDFs/chem4.webp";
import phy12Preview from "../assets/notesPDFs/phy2.webp";

const NotesDB = [
  {
    id: "chem11",
    title: "Grade 11 Chemistry Mastery Notes",
    description: "Exam-focused notes for Grade 11 Chemistry. Includes concise explanations, diagrams, and practice questions for every unit.",
    subject: "Chemistry",
    grade: 11,
    previewPDF: chem11Preview,
    price: 45,
    pages: 36,
    badge: "New",
    coverImage: chem11Preview,
  },
  {
    id: "phy11",
    title: "Grade 11 Physics Success Notes",
    description: "Comprehensive notes for Grade 11 Physics. Covers all major topics with clear examples and problem-solving strategies.",
    subject: "Physics",
    grade: 11,
    previewPDF: phy11Preview,
    price: 45,
    pages: 40,
    badge: "Hot",
    coverImage: phy11Preview,
  },
  {
    id: "chem12",
    title: "Grade 12 Chemistry Exam Notes",
    description: "Detailed notes for Grade 12 Chemistry. Perfect for revision, with summaries, key concepts, and sample questions.",
    subject: "Chemistry",
    grade: 12,
    previewPDF: chem12Preview,
    price: 55,
    pages: 38,
    badge: "New",
    coverImage: chem12Preview,
  },
  {
    id: "phy12",
    title: "Grade 12 Physics Complete Notes",
    description: "All-in-one notes for Grade 12 Physics. Includes formulas, worked examples, and tips for acing your exams.",
    subject: "Physics",
    grade: 12,
    previewPDF: phy12Preview,
    price: 55,
    pages: 42,
    coverImage: phy12Preview,
  },
  {
    id: "adv12",
    title: "Advanced Functions Grade 12 Notes",
    description: "Thorough notes for Grade 12 Advanced Functions. Covers all units with step-by-step solutions and exam tips.",
    subject: "Advanced Functions",
    grade: 12,
    previewPDF: adv12Preview,
    price: 55,
    pages: 45,
    coverImage: adv12Preview,
  },
  {
    id: "calc12",
    title: "Calculus & Vectors Grade 12 Notes",
    description: "Complete notes for Grade 12 Calculus & Vectors. Includes theory, practice problems, and clear explanations.",
    subject: "Calculus & Vectors",
    grade: 12,
    previewPDF: calc12Preview,
    oldPrice: 70,
    price: 55,
    pages: 48,
    badge: "Hot",
    coverImage: calc12Preview,
  }
];

export default NotesDB;