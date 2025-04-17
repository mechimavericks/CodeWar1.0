import React from "react";

function FAQS() {
  return (
    // Remove the extra space after "w-full" and ensure proper connection to the next section
    <div className="w-full">
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Here are some common questions about CodeWar 1.0 and its details.
          </p>

          {/* Rest of your FAQ content */}
          {/* ... */}

          <div className="mt-8 sm:mt-10 md:mt-12 text-center pb-4">
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
