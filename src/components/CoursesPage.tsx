import { FaGraduationCap } from "react-icons/fa";
import { GOOGLE_FORM } from "./Constants";
import { courses } from "../DB/CoursesDB";

const CoursesPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header Section */}
    <section className="bg-white py-20 px-4">
      <div className="mx-auto text-center max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <FaGraduationCap className="w-8 h-8 text-blue-600 mr-3" />
          <p className="text-blue-600 font-semibold text-lg">Academic Excellence</p>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Group Courses Available</h1>
        <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
          I offer group lessons and courses in these 4 core subjects. Join a collaborative learning environment designed to build strong foundations for Ontario high school students.
        </p>
      </div>
    </section>

    {/* Courses Grid Section */}
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${course.color} p-4 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    {course.icon}
                  </div>
                  <div className="text-right">
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                <p className="text-white/90 text-xs">{course.duration}</p>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {course.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-left text-sm">Key Topics:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {course.topics.map((topic, index) => (
                      <div key={index} className="flex items-center text-left">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-3 border-t border-gray-100 text-center">
                  <a 
                    href={GOOGLE_FORM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    Join Group Course
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CoursesPage;
