import { FaGraduationCap } from "react-icons/fa";
import { GOOGLE_FORM } from "./Constants";
import { courses } from "../DB/CoursesDB";

const Courses: React.FC = () => (
  <section className="bg-gray-50 py-16 px-4">
    <div className="mx-auto text-center max-w-6xl">
      <div className="flex items-center justify-center mb-4">
        <FaGraduationCap className="w-6 h-6 text-blue-600 mr-3" />
        <p className="text-blue-600 font-semibold text-base">Academic Excellence</p>
      </div>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Group Courses Available</h2>
      <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
        I offer group lessons and courses in these 4 core subjects. Join a collaborative learning environment designed to build strong foundations for Ontario high school students.
      </p>
      
      <div className="mb-12">
        <a 
          href="/#/courses"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
        >
          View All Courses
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
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
);

export default Courses;
