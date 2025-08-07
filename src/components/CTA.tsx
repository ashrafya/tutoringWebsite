import CTAbutton from "./Button"; 


const CTASection = () => (
  <section className="bg-gray-50 py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
        Ace your exams.<br />
        Learn smarter not harder.
      </h2>
      <p className="text-2xl text-gray-500 mb-12">
        Personalized tutoring for real results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CTAbutton />
      </div>
    </div>
  </section>
);

export default CTASection;