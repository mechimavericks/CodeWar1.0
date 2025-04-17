import React from 'react';

function FAQS() {
  return (
    <div className="w-full min-h-screen">
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 sm:py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-8 sm:mb-12">
            Here are some common questions about CodeWar 1.0 and its details.
          </p>
          
          <div className="space-y-4">
            {/* FAQ Items */}
            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">What is CodeWar 1.0?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                CodeWar 1.0 is a coding competition exclusively for BCA students at Mechi Multiple Campus. It aims to promote problem-solving and coding skills through challenging coding problems, teamwork, and innovative thinking.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">How can I register for CodeWar 1.0?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                You can register for CodeWar 1.0 through the official registration form available on the event's website. Registration is mandatory to participate in the event.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">Can I participate individually or do I need a team?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                CodeWar 1.0 allows individual participation only. The organizers will be responsible for forming groups and assigning participants to teams based on their skill levels, ensuring a balanced and competitive environment for everyone.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">What will be the format of the event?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                The event will consist of multiple rounds, including preliminary, intermediate, and team challenges. Participants will have specific time limits to complete coding challenges and present their solutions.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">Do I need prior coding experience to participate?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                While prior coding experience is helpful, it is not mandatory. CodeWar 1.0 encourages participants from various backgrounds, including those who are still learning programming. The challenges are designed to accommodate different skill levels.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">How will the challenges be judged?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                The challenges will be judged based on several factors, including accuracy, creativity, complexity, and overall performance. The judges will evaluate your coding solution, problem-solving approach, and teamwork skills.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">Are there prizes for the winners?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                Yes! CodeWar 1.0 will award prizes to the top scorers based on their performance throughout the event. These prizes may include recognition, certificates, and other exciting rewards.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">When and where is CodeWar 1.0 happening?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                CodeWar 1.0 will take place on June 05 and 06, 2025, starting at 9:30 AM onwards. It will be hosted physically at the BCA Department of Mechi Multiple Campus, and participants will join through the event's designated platform.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">Can I participate if I am not a BCA student at Mechi Multiple Campus?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                Yes, CodeWar 1.0 is for All the students at Mechi Multiple Campus. We encourage you to stay tuned for future events.
              </div>
            </details>

            <details className="group bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50">
                <h3 className="text-lg sm:text-xl font-medium">How can I prepare for CodeWar 1.0?</h3>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 sm:p-6 pt-0 text-gray-300">
                We recommend reviewing common coding problems, algorithms, and data structures. You can also practice coding on platforms like LeetCode, HackerRank, or Codeforces to improve your problem-solving skills. It's also important to collaborate with teammates and practice teamwork.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQS;
