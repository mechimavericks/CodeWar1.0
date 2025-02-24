import React from 'react';

function FAQS() {
  return (
    <div>
      <section className="dark:bg-gray-800 w-full dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl text-center">
            Frequently Asked Questions - CodeWar 1.0
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400 text-center">
            Here are some common questions about CodeWar 1.0 and its details.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What is CodeWar 1.0?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                CodeWar 1.0 is a coding competition exclusively for BCA students at Mechi Multiple Campus. It aims to promote problem-solving and coding skills through challenging coding problems, teamwork, and innovative thinking.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How can I register for CodeWar 1.0?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                You can register for CodeWar 1.0 through the official registration form available on the event's website. Registration is mandatory to participate in the event.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Can I participate individually or do I need a team?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                CodeWar 1.0 allows individual participation only. The organizers will be responsible for forming groups and assigning participants to teams based on their skill levels, ensuring a balanced and competitive environment for everyone.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What will be the format of the event?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The event will consist of multiple rounds, including preliminary, intermediate, and team challenges. Participants will have specific time limits to complete coding challenges and present their solutions.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Do I need prior coding experience to participate?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                While prior coding experience is helpful, it is not mandatory. CodeWar 1.0 encourages participants from various backgrounds, including those who are still learning programming. The challenges are designed to accommodate different skill levels.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How will the challenges be judged?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The challenges will be judged based on several factors, including accuracy, creativity, complexity, and overall performance. The judges will evaluate your coding solution, problem-solving approach, and teamwork skills.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Are there prizes for the winners?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Yes! CodeWar 1.0 will award prizes to the top scorers based on their performance throughout the event. These prizes may include recognition, certificates, and other exciting rewards.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                When and where is CodeWar 1.0 happening?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                CodeWar 1.0 will take place on March 6 and 7, 2025, starting at 9:30 AM onwards. It will be hosted physically at the BCA Department of Mechi Multiple Campus, and participants will join through the event's designated platform.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Can I participate if I am not a BCA student at Mechi Multiple Campus?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Unfortunately, CodeWar 1.0 is exclusively for BCA students at Mechi Multiple Campus. However, we encourage you to stay tuned for future events that may open to other participants.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How can I prepare for CodeWar 1.0?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                We recommend reviewing common coding problems, algorithms, and data structures. You can also practice coding on platforms like LeetCode, HackerRank, or Codeforces to improve your problem-solving skills. It's also important to collaborate with teammates and practice teamwork.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQS;
