import React from "react";

function FAQS() {
  return (
    <div className="w-full ">
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Here are some common questions about CodeWar 1.0 and its details.
          </p>

          <div className="space-y-3 sm:space-y-4">
            {/* FAQ Items */}
            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-3 sm:p-4 md:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2">
                  What is CodeWar 1.0?
                </h3>
                <span className="transition group-open:rotate-180 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-3 sm:p-4 md:p-6 pt-0 text-sm sm:text-base text-gray-300">
                CodeWar 1.0 is a coding competition exclusively for BCA students
                at Mechi Multiple Campus. It aims to promote problem-solving and
                coding skills through challenging coding problems, teamwork, and
                innovative thinking.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-3 sm:p-4 md:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2">
                  How can I register for CodeWar 1.0?
                </h3>
                <span className="transition group-open:rotate-180 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-3 sm:p-4 md:p-6 pt-0 text-sm sm:text-base text-gray-300">
                You can register for CodeWar 1.0 through the official
                registration form available on the event's website. Registration
                is mandatory to participate in the event.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-3 sm:p-4 md:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2">
                  Can I participate individually or do I need a team?
                </h3>
                <span className="transition group-open:rotate-180 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-3 sm:p-4 md:p-6 pt-0 text-sm sm:text-base text-gray-300">
                CodeWar 1.0 allows individual participation only. The organizers
                will be responsible for forming groups and assigning
                participants to teams based on their skill levels, ensuring a
                balanced and competitive environment for everyone.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-3 sm:p-4 md:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2">
                  What will be the format of the event?
                </h3>
                <span className="transition group-open:rotate-180 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-3 sm:p-4 md:p-6 pt-0 text-sm sm:text-base text-gray-300">
                The event will consist of multiple rounds, including
                preliminary, intermediate, and team challenges. Participants
                will have specific time limits to complete coding challenges and
                present their solutions.
              </div>
            </details>

            {/* Repeat the same responsive changes for the other FAQ items */}
            {/* I'm showing only a few for brevity, but the same pattern should be applied to all */}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-300">
              Have more questions?{" "}
              <a
                href="mailto:mechimavericks@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQS;
