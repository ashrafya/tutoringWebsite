import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { notesTestsData } from '../DB/NotesTestsDB';
import type { CourseNotesTests } from '../DB/NotesTestsDB';
import PurchaseButton from './PurchaseButton';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the course data based on the ID
  const course: CourseNotesTests | undefined = notesTestsData.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Link to="/notes-and-tests" className="text-blue-600 hover:text-blue-800">
            ← Back to Notes & Tests
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header with Course Image as Background */}
      <div className="relative h-[28rem]">
        <img 
          src={course.coverImage} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/notes-and-tests" className="text-white hover:text-gray-200 mb-8 inline-block transition-colors">
              ← Back to Notes & Tests
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Course Info */}
              <div className="text-white">
                <div className="inline-block bg-white bg-opacity-20 rounded-full px-6 py-2 text-sm font-medium mb-6">
                  {course.grade} • {course.subject}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
                <p className="text-xl mb-8 max-w-2xl">{course.description}</p>
                
                {/* Key Stats */}
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{course.pages}</div>
                    <div className="text-sm text-gray-200">Pages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-gray-200">PDFs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-gray-200">Ready</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Purchase Section */}
              <div className="text-center lg:text-right">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 inline-block">
                  <div className="text-5xl font-bold mb-2">${course.price}</div>
                  {course.oldPrice && (
                    <div className="text-2xl text-red-200 line-through mb-2">
                      ${course.oldPrice}
                    </div>
                  )}
                  <div className="text-lg text-blue-100 mb-6">Complete Package</div>
                  <PurchaseButton courseId={id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Notes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📚 Comprehensive Notes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{course.notesDescription}</p>
          </div>
          
          <div className="space-y-4">
            {course.previewFiles.notes.map((file, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200">
                <span className="font-medium text-gray-700">{file}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  View Preview
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tests Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📝 Practice Tests & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{course.testsDescription}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <span className="font-medium text-gray-700">{course.previewFiles.tests[0]}</span>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-medium transition-colors">
                View Test
              </button>
            </div>
            
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <span className="font-medium text-gray-700">{course.previewFiles.solutions[0]}</span>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-medium transition-colors">
                View Solutions
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's Included</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Purchase Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <div className="text-6xl font-bold text-blue-600 mb-2">${course.price}</div>
          {course.oldPrice && (
            <div className="text-2xl text-gray-400 line-through mb-4">
              ${course.oldPrice}
            </div>
          )}
          <p className="text-gray-600 mb-8 text-lg">
            Complete package for {course.grade} {course.subject}
          </p>
          <PurchaseButton courseId={id} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
