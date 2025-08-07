const steps = [
  {
    title: "Choose Your Plan",
    description: "Browse our tutoring options and select the plan that fits your needs and goals.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 3v4M8 3v4" />
      </svg>
    ),
  },
  {
    title: "Contact & Consultation",
    description: "Reach out to discuss your goals. We'll recommend the best tutoring plan for you.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" />
        <path d="M21 10.5l-9 5-9-5" />
        <circle cx="18" cy="18" r="3" />
        <path d="M18 16v2l1 1" />
      </svg>
    ),
  },
  {
    title: "Register",
    description: "Sign up and reserve your spot in your chosen plan. We'll confirm your schedule and details.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 2 21l1.5-5L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Start Learning",
    description: "Join your sessions online, get personalized help, and track your progress every week.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="M17 2v4M7 2v4" />
        <path d="M12 12v3" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    ),
  },
];

// SVG squiggly arrow component
function SquigglyArrow() {
  return (
    <svg width="60" height="32" viewBox="0 0 60 32" fill="none" className="hidden md:block absolute top-1/2 right-[-30px] -translate-y-1/2">
      <path
        d="M5 16 Q20 5 30 16 Q40 27 55 16"
        stroke="#2563eb"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M55 16 Q53 13 50 15"
        stroke="#2563eb"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M55 16 Q57 18 54 21"
        stroke="#2563eb"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

const HowItWorks: React.FC = () => (
  <section className="bg-gray-50 py-20 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-blue-600 font-semibold text-lg mb-2">How It Works</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Getting Started is Easy</h2>
      <p className="text-lg text-gray-600 mb-14">
        Just follow these simple steps to begin your tutoring journey.
      </p>
      <div className="relative flex flex-col md:flex-row items-start justify-center gap-6 md:gap-4">
        {steps.map((step, idx) => (
          <div key={step.title} className="relative flex flex-col items-center bg-blue-50 rounded-xl shadow p-5 w-full md:w-56 min-h-[230px] mx-auto">
            <div className="mb-3">{step.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
            <span className="mt-4 text-blue-600 font-bold text-2xl opacity-20 select-none">{idx + 1}</span>
            {/* Arrow except for last card */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block">
                <SquigglyArrow />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;