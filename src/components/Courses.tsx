import { FaCalculator, FaAtom, FaRocket, FaGraduationCap } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const courses = [
  {
    title: "Calculus",
    description: "Master the fundamentals of calculus including limits, derivatives, integrals, and their applications. Perfect for students preparing for university-level mathematics.",
    topics: [
      "Limits and Continuity",
      "Derivatives and Differentiation Rules",
      "Applications of Derivatives",
      "Integrals and Antiderivatives",
      "Applications of Integrals",
      "Differential Equations"
    ],
    icon: <FaCalculator className="w-8 h-8 text-blue-600" />,
    level: "Advanced",
    duration: "Full Year Course",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Advanced Functions",
    description: "Build a strong foundation in advanced mathematical functions, transformations, and problem-solving strategies essential for higher-level mathematics.",
    topics: [
      "Polynomial Functions",
      "Rational Functions",
      "Exponential and Logarithmic Functions",
      "Trigonometric Functions",
      "Function Transformations",
      "Complex Numbers"
    ],
    icon: <GiProgression className="w-8 h-8 text-green-600" />,
    level: "Grade 12",
    duration: "Full Year Course",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Grade 11 Physics",
    description: "Explore the fundamental principles of physics through hands-on learning and real-world applications. Build a solid foundation for advanced studies.",
    topics: [
      "Kinematics and Motion",
      "Forces and Newton's Laws",
      "Energy and Work",
      "Waves and Sound",
      "Electricity and Magnetism",
      "Optics and Light"
    ],
    icon: <FaAtom className="w-8 h-8 text-purple-600" />,
    level: "Grade 11",
    duration: "Full Year Course",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Grade 12 Physics",
    description: "Dive deeper into advanced physics concepts with comprehensive coverage of university preparation topics and enhanced problem-solving skills.",
    topics: [
      "Advanced Mechanics",
      "Electric Fields and Circuits",
      "Magnetic Fields and Induction",
      "Wave Phenomena",
      "Modern Physics",
      "Nuclear Physics"
    ],
    icon: <FaRocket className="w-8 h-8 text-red-600" />,
    level: "Grade 12",
    duration: "Full Year Course",
    color: "from-red-500 to-red-600"
  }
];

const Courses: React.FC = () => (
  <section className="bg-white py-20 px-4">
    <div className="mx-auto text-center max-w-screen-xl">
      <div className="flex items-center justify-center mb-4">
        <FaGraduationCap className="w-8 h-8 text-blue-600 mr-3" />
        <p className="text-blue-600 font-semibold text-lg">Academic Excellence</p>
      </div>
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Courses I Teach</h2>
      <p className="text-xl text-gray-500 mb-16 max-w-3xl mx-auto">
        Comprehensive tutoring in mathematics and physics, designed to build strong foundations and prepare students for academic success.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
          >
            <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 rounded-full p-3">
                  {course.icon}
                </div>
                <div className="text-right">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-white/90 text-sm">{course.duration}</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-left">Key Topics Covered:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.topics.map((topic, index) => (
                    <div key={index} className="flex items-center text-left">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose My Tutoring?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Knowledge</h4>
            <p className="text-gray-600 text-sm">Deep understanding of curriculum requirements and exam preparation strategies.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GiProgression className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
            <p className="text-gray-600 text-sm">Track record of helping students improve grades and build confidence.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAtom className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Personalized Approach</h4>
            <p className="text-gray-600 text-sm">Tailored instruction based on individual learning styles and needs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Courses;
