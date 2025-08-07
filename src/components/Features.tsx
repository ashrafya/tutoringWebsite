import { FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt, FaDollarSign , FaLaptop } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const features = [
  {
    title: "Personalized Learning",
    description: "Every session is tailored to your unique needs and learning style for maximum results.",
    icon: <FaUserGraduate className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Expert Tutors",
    description: "Learn from experienced tutors with proven track records in math, science, and more.",
    icon: <FaChalkboardTeacher className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Flexible Scheduling",
    description: "Book sessions at times that fit your busy schedule with our easy booking process.",
    icon: <FaCalendarAlt className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Affordable & Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees and flexible payment options.",
    icon: <FaDollarSign className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Online Convenience",
    description: "Access expert tutoring from anywhere—no travel required, just log in and learn.",
    icon: <FaLaptop className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed progress reports and personalized feedback.",
    icon: <GiProgression className="w-8 h-8 text-blue-600" />,
  },
];

const blob = "M77.6,54.2Q68.7,68.4,54.2,75.7Q39.7,83,26.3,72.2Q12.9,61.4,18.2,44.7Q23.5,28,37.7,19.3Q51.9,10.6,65.2,22.1Q78.5,33.6,77.6,54.2Z";


<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M48.5,-70.9C62.6,-66.3,73.7,-52.5,80.5,-37C87.3,-21.4,89.8,-4.1,84.7,10.3C79.7,24.6,67.1,35.9,56,48.5C45,61.1,35.5,74.9,22.7,80C9.8,85.1,-6.5,81.3,-22,76.2C-37.5,71,-52.1,64.5,-64.6,53.9C-77.1,43.3,-87.5,28.7,-88.4,13.5C-89.3,-1.6,-80.8,-17.3,-70.7,-29.4C-60.7,-41.4,-49,-49.8,-37,-55.3C-24.9,-60.8,-12.5,-63.5,2.4,-67.2C17.2,-70.8,34.3,-75.5,48.5,-70.9Z" transform="translate(100 100)" />
</svg>

const Features: React.FC = () => (
  <section className="bg-gray-50 py-20 px-4">
    <div className="mx-auto text-center max-w-screen-xl">
      <p className="text-blue-600 font-semibold text-lg mb-2">Some Key Features</p>
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Why Choose Us?</h2>
      <p className="text-xl text-gray-500 mb-14">
        The best tutoring experience, designed for your success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="flex items-center text-left gap-5"
          >
            <div className="relative flex-shrink-0 w-20 h-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-blue-100">
                <path d={blob} fill="currentColor" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center">
                {feature.icon}
              </span>
            </div>
            <div className="pl-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-base text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;