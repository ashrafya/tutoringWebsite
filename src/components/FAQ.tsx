import { useState } from "react";

const faqs = [
  {
    question: "What subjects do you tutor?",
    answer:
      "I offer tutoring in Mathematics, Physics, Chemistry, and Computer Science for high school and undergraduate students.",
  },
  {
    question: "How do I book a tutoring session?",
    answer:
      "You can book a session using the booking link on our website. After booking, you'll receive a confirmation email with the session details.",
  },
  {
    question: "Are lessons held online or in-person?",
    answer:
      "All lessons are held online via Google Meet, making it convenient for students to join from anywhere.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel or reschedule a session up to 24 hours in advance without any charge. Cancellations within 24 hours may incur a fee.",
  },
  {
    question: "Do you offer group tutoring?",
    answer:
      "Yes, I offer both one-on-one and small group tutoring sessions. Please contact me for group rates and availability.",
  },
  {
    question: "How do I pay for lessons?",
    answer:
      "Payments can be made securely online via credit card or PayPal and are prepaid at a biweekly or monthly cadence.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-16 px-4 bg-gray-50 flex justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-5xl font-bold mb-10 text-gray-900 text-center">Frequently asked questions</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={faq.question}>
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <span className="ml-4 text-2xl text-gray-400">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 pb-6 pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;