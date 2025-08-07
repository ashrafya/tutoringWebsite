import React from 'react';

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "English Literature"
];

const grades = [
  "Grade 9", "Grade 10", "Grade 11", "Grade 12"
];

const About = () => (
  <section className="bg-gray-50 py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-blue-600 font-semibold text-lg mb-2">Classes Supported</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Subjects & Tutoring Modes</h2>
      <p className="text-lg text-gray-600 mb-10">
        I offer expert tutoring for high school students in a range of subjects and grades, with flexible options to fit your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Subjects & Grades List */}
        <div className="bg-blue-50 rounded-2xl shadow p-8 flex flex-col items-center w-full">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Subjects</h3>
          <ul className="space-y-3 text-lg text-gray-800 mb-6 w-full">
            {subjects.map((subject) => (
              <li
                key={subject}
                className="bg-white px-5 py-2 rounded-lg shadow-sm border-l-4 border-blue-500 w-full text-left"
              >
                {subject}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Grades</h3>
          <ul className="flex flex-wrap justify-center gap-3 text-base text-gray-700">
            {grades.map((grade) => (
              <li
                key={grade}
                className="bg-white px-4 py-1 rounded shadow-sm border border-blue-200"
              >
                {grade}
              </li>
            ))}
          </ul>
        </div>
        {/* Tutoring Modes */}
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border-t-4 border-blue-500 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-800 mb-1">1-on-1 Tutoring</h4>
              <p className="text-gray-600 text-base">Personalized sessions focused on your specific needs and learning style.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border-t-4 border-green-500 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-800 mb-1">Group Tutoring</h4>
              <p className="text-gray-600 text-base">Collaborative learning with small student groups for shared understanding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;