import React from "react";

function FAQS() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
            Here are some common questions about CodeWar 1.0 and its details.
          </p>

          <div className="space-y-3 sm:space-y-4">
            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  What is CodeWar 1.0?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                CodeWar 1.0 is a coding competition exclusively for BCA students
                at Mechi Multiple Campus. It aims to promote problem-solving and
                coding skills through challenging coding problems, teamwork, and
                innovative thinking.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  How can I register for CodeWar 1.0?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                You can register for CodeWar 1.0 through the official
                registration form available on the event&apos;s website.
                Registration is mandatory to participate in the event.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  Can I participate individually or do I need a team?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                CodeWar 1.0 allows individual participation only. The organizers
                will be responsible for forming groups and assigning
                participants to teams based on their skill levels, ensuring a
                balanced and competitive environment for everyone.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  What will be the format of the event?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                The event will consist of multiple rounds, including
                preliminary, intermediate, and team challenges. Participants
                will have specific time limits to complete coding challenges and
                present their solutions.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  Do I need prior coding experience to participate?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                While prior coding experience is helpful, it is not mandatory.
                CodeWar 1.0 encourages participants from various backgrounds,
                including those who are still learning programming. The
                challenges are designed to accommodate different skill levels.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  How will the challenges be judged?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                The challenges will be judged based on several factors,
                including accuracy, creativity, complexity, and overall
                performance. The judges will evaluate your coding solution,
                problem-solving approach, and teamwork skills.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  Are there prizes for the winners?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                Yes! CodeWar 1.0 will award prizes to the top scorers based on
                their performance throughout the event. These prizes may include
                recognition, certificates, and other exciting rewards.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  When and where is CodeWar 1.0 happening?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                CodeWar 1.0 will take place on June 05 and 06, 2025, starting at
                9:30 AM onwards. It will be hosted physically at the BCA
                Department of Mechi Multiple Campus, and participants will join
                through the event&apos;s designated platform.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  Can I participate if I am not a BCA student at Mechi Multiple
                  Campus?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                Yes, CodeWar 1.0 is for All the students at Mechi Multiple
                Campus. We encourage you to stay tuned for future events.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                <h3 className="text-sm sm:text-base md:text-lg font-medium pr-2">
                  How can I prepare for CodeWar 1.0?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-300">
                We recommend reviewing common coding problems, algorithms, and
                data structures. You can also practice coding on platforms like
                LeetCode, HackerRank, or Codeforces to improve your
                problem-solving skills. It&apos;s also important to collaborate
                with teammates and practice teamwork.
              </div>
            </details>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-300 pb-4">
              Have more questions?{" "}
              <a
                href="mailto:mechimavericks@gmail.com"
                className="text-[#1ba9a9ee] hover:text-[#72de80] underline transition-colors duration-300"
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
