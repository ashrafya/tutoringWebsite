import CTAbutton from "./Button"; 


const CTASection = () => (
  <section className="bg-white py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
        Boost your productivity.<br />
        Start using our app today.
      </h2>
      <p className="text-2xl text-gray-500 mb-12">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CTAbutton />
      </div>
    </div>
  </section>
);

export default CTASection;