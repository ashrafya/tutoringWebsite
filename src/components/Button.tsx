const GoogleForm = "https://docs.google.com/forms/d/e/1FAIpQLSdp3QsBcOuG4CPZO6kQnOvkjkrdFAabIpSyIyNBjDoR0uJIYw/viewform?usp=dialog"

const CTAbutton = () => {
  return ( 
    <a
      href={GoogleForm}
      title=""
      className="rounded-xl bg-blue-700 px-8 py-2.5 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600 text-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Register Now
    </a>
  );
}

export default CTAbutton;