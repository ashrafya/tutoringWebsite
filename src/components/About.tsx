import React from 'react';

const About = () => {
  // Sample data - replace with your actual information
  const tutorData = {
    name: "Sarah Johnson",
    bio: "Certified educator with 8 years of experience helping students unlock their full potential. I specialize in creating personalized learning experiences that build confidence and academic success.",
    subjects: [
      "Mathematics", 
      "Physics", 
      "Chemistry", 
      "Biology", 
      "Computer Science",
      "English Literature"
    ],
    tutoringOptions: [
      {
        type: "1-on-1 Tutoring",
        description: "Personalized sessions focused on your specific needs and learning style",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )
      },
      {
        type: "Group Tutoring",
        description: "Collaborative learning with small student groups for shared understanding",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Your Tutor</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/5 flex justify-center items-center p-8 bg-indigo-50">
              <div className="relative">
                {/* Profile Image */}
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <div className="bg-gradient-to-br from-indigo-300 to-purple-400 w-full h-full flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Your Photo Here</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Hello, I'm {tutorData.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {tutorData.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">Certified Educator</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">8+ Years Experience</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">Masters in Education</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tutoring Options Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Subjects Column */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500">
                Subjects I Tutor
              </h2>
              <ul className="space-y-4">
                {tutorData.subjects.map((subject, index) => (
                  <li 
                    key={index} 
                    className="bg-indigo-50 p-4 rounded-xl hover:bg-indigo-100 transition-all duration-300 flex items-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-gray-800">{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Arrow Visualization */}
          <div className="hidden lg:flex flex-col justify-center items-center relative my-8">
            {/* Arrow SVG from subjects to 1-on-1 */}
            <div className="absolute top-1/4 -left-8">
              <svg width="80" height="40" viewBox="0 0 100 40">
                <path 
                  d="M0,20 L80,20" 
                  stroke="#4f46e5" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="5,5"
                />
                <polygon points="90,20 80,15 80,25" fill="#4f46e5" />
              </svg>
            </div>
            
            {/* Arrow SVG from subjects to group */}
            <div className="absolute top-3/4 -left-8">
              <svg width="80" height="40" viewBox="0 0 100 40">
                <path 
                  d="M0,20 L80,20" 
                  stroke="#4f46e5" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="5,5"
                />
                <polygon points="90,20 80,15 80,25" fill="#4f46e5" />
              </svg>
            </div>
          </div>
          
          {/* Tutoring Options Column */}
          <div className="lg:w-3/5 flex flex-col gap-8">
            {tutorData.tutoringOptions.map((option, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  index === 0 ? 'border-t-4 border-blue-500' : 'border-t-4 border-green-500'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg mr-6 ${
                      index === 0 ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{option.type}</h3>
                      <p className="text-lg text-gray-600 mb-6">{option.description}</p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">Customized lesson plans</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">Flexible scheduling</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">Progress tracking</span>
                        </li>
                      </ul>
                      <button className={`px-6 py-3 rounded-lg font-medium text-white ${
                        index === 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                      } transition-colors duration-300`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;