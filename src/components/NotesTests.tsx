import { Link } from "react-router-dom";
import { notesTestsData } from "../DB/NotesTestsDB";

const badgeColors: Record<string, string> = {
  New: "bg-green-500",
  Hot: "bg-red-500",
};

const NotesTests: React.FC = () => (
  <section className="mx-auto py-12 px-2 bg-gray-50">
    <div className="text-center mb-8">
      <h4 className="text-blue-600 font-bold text-lg mb-1 tracking-wide">Featured Study Resources</h4>
      <h1 className="text-4xl font-extrabold text-black mb-2">High School Notes & Practice Tests</h1>
      <p className="text-gray-500 text-lg">
        Modern, exam-ready notes and tests to help you succeed. Quick downloads, clear explanations, and proven results.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {notesTestsData.map((course) => (
        <Link
          key={course.id}
          to={`/notes-and-tests/${course.id}`}
          className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <div className="relative">
            <img
              src={course.coverImage}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            {course.badge && (
              <span className={`absolute text-xs top-4 left-4 px-1.5 py-1 font-semibold text-white rounded-md ${badgeColors[course.badge]}`}>
                {course.badge}
              </span>
            )}
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-3">{course.description}</p>
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-600 font-semibold">Complete Package</span>
                <div className="flex items-center">
                  {course.oldPrice && (
                    <span className="text-gray-400 line-through text-sm font-medium mr-2">
                      ${course.oldPrice}
                    </span>
                  )}
                  <span className="text-gray-900 text-lg font-bold">${course.price}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Includes notes, tests & solutions • {course.pages} pages
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default NotesTests;