import React, { useState } from "react";
import RegisterButton from "./RegisterButton"

const plans = [
  {
    name: "Group Tutoring",
    description: "3 hours/week in small groups (2 classes of 1.5 hours each). Collaborative and interactive learning.",
    biweekly: 130,
    monthly: 230,
    features: [
      "2 group classes/week",
      "1.5 hours per class",
      "Small group size",
      "Homework help & exam prep",
      "Progress updates for parents",
    ],
    popular: false,
  },
  {
    name: "Group + Personal",
    description: "All group benefits plus 1 hour/week of personal lessons. Our most popular plan for extra support.",
    biweekly: 220,
    monthly: 420,
    features: [
      "Everything in Group Tutoring",
      "1 hour/week 1-on-1 session",
      "Personalized feedback",
      "Flexible scheduling for personal lessons",
    ],
    popular: true,
  },
  {
    name: "Personal Tutoring",
    description: "Fully personalized 1-on-1 tutoring. Flexible scheduling and tailored lesson plans.",
    biweekly: 270,
    monthly: 560,
    features: [
      "3 hours/week 1-on-1",
      "Custom lesson plans",
      "Homework help & exam prep",
      "Progress tracking",
      "Direct feedback after each session",
    ],
    popular: false,
  },
  {
    name: "Custom Plan",
    description: "Need something different? Contact us for a custom plan that fits your needs.",
    biweekly: "--",
    monthly: "--",
    features: [
      "Flexible hours",
      "Mix of group & personal",
      "Special subjects or requests",
      "Contact for quote",
    ],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<"biweekly" | "monthly">("biweekly");

  return (
    <section className="px-4 py-16 mx-auto bg-gray-50 text-black">
      <p className="text-blue-600 font-semibold text-lg mb-2 text-center">Pricing</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
        Flexible plans for every learner
      </h2>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Choose the plan that fits your learning style and schedule. No hidden fees, no surprises.
      </p>
      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              billing === "biweekly"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700"
            }`}
            onClick={() => setBilling("biweekly")}
          >
            Biweekly
          </button>
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              billing === "monthly"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl border border-gray-200 shadow-md p-8 flex flex-col items-center ${
              plan.popular ? "border-2 border-blue-600 shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                Most popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-6 text-center">{plan.description}</p>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-extrabold text-gray-900">
                {plan.biweekly === "--"
                  ? "--"
                  : `$${billing === "biweekly" ? plan.biweekly : plan.monthly}`}
              </span>
              <span className="text-gray-500 ml-2 mb-1 text-lg font-medium">
                {plan.biweekly === "--"
                  ? ""
                  : `/${billing === "biweekly" ? "biweekly" : "month"}`}
              </span>
            </div>
            {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mb-6 transition">
              {plan.name === "Custom Plan" ? "Contact us" : "Get started"}
            </button> */}
            <ul className="w-full text-gray-700 space-y-3 text-left text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <RegisterButton />
      </div>
    </section>
  );
};

export default Pricing;