const HowItWorks: React.FC = () => (
    <section>
      <div className="relative px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl bg-gray-700">
        <div className="max-w-xl mx-auto text-center lg:text-balance">
          <p className="text-sm font-bold uppercase text-blue-600">Tagline</p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-base-900"
          >
            Key updates & releases
          </h2>
          <p className="text-base mt-4 font-medium text-base-500">
            Explore the evolution of our product, from the initial launch to the
            latest enhancements.
          </p>
        </div>
        <div className="flex flex-col mx-auto mt-12 grid-cols-9 md:grid">
          <div className="flex flex-row-reverse md:contents">
            <div className="my-4 ml-auto col-start-1 col-end-5">
              <div className="relative p-4 size-full bg-base-50 lg:p-8 rounded-xl">
                <p className="text-sm font-bold uppercase text-blue-600">
                  <time dateTime="01.08.2024">01.08.2024</time>
                </p>
                <h3 className="text-lg md:text-xl mt-8 font-medium text-base-900">
                  The dawn of version 3.0.0
                </h3>
                <p className="text-base mt-4 font-medium text-base-500">
                  Welcome to the future with Version 3.0.0! This monumental update
                  unveils a completely revamped interface, groundbreaking AI-powered
                  tools, and seamless integration with your favorite apps. Get ready
                  to explore uncharted territories in productivity!
                </p>
                <div className="mt-8">
                  <a
                    className="text-base flex items-center font-medium text-blue-500 gap-2 hover:text-base-900"
                    href="#_"
                  >
                    Read further
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler-chevron-right size-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
              <div className="flex items-center justify-center w-3 h-full">
                <div
                  className="h-full w-[0.05rem] bg-base-200 pointer-events-none"
                ></div>
              </div>
              <div
                className="absolute w-3 h-3 -mt-3 bg-white border-2 rounded-full border-blue-500 top-1/2"
              ></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
              <div className="flex items-center justify-center w-3 h-full">
                <div
                  className="h-full w-[0.05rem] bg-base-200 pointer-events-none"
                ></div>
              </div>
              <div
                className="absolute w-3 h-3 -mt-3 bg-white border-2 rounded-full border-blue-500 top-1/2"
              ></div>
            </div>
            <div className="my-4 mr-auto col-start-6 col-end-10">
              <div className="relative p-4 size-full bg-base-50 lg:p-8 rounded-xl">
                <p className="text-sm font-bold uppercase text-blue-600">
                  <time dateTime="01.08.2024">01.08.2024</time>
                </p>
                <h3 className="text-lg md:text-xl mt-8 font-medium text-base-900">
                  Version 3.1.0: the cosmic leap
                </h3>
                <p className="text-base mt-4 font-medium text-base-500">
                  Version 3.1.0 propels you into the cosmos with faster processing
                  speeds, enhanced customization options, and new cosmic-themed
                  visual elements. Experience the power of the stars at your
                  fingertips.
                </p>
                <div className="mt-8">
                  <a
                    className="text-base flex items-center font-medium text-blue-500 gap-2 hover:text-base-900"
                    href="#_"
                  >
                    Read further
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler-chevron-right size-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default HowItWorks;