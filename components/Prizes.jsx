"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Prizes() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Prizes And Awards
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 px-2">
              Please note that, the prizes and awards are subjected to change as
              per the event&apos;s requirements.
            </p>
          </div>

          {/* Prize Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Winner Card */}
            {inView && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col h-full p-5 sm:p-6 md:p-8 bg-gray-800/50 rounded-lg border-2 border-violet-400"
              >
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-1 bg-gradient-to-br from-yellow-300 to-yellow-600 text-gray-900 text-sm md:text-base font-medium rounded-full whitespace-nowrap">
                  Winner
                </span>

                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <ul className="space-y-2 sm:space-y-3 text-gray-300">
                    <PrizeListItem text="Certificate for all the Participants" />
                    <PrizeListItem text="Special Recognition for Winner" />
                    <PrizeListItem text="Stickers for participants" />
                    <PrizeListItem text="Exciting Swags & Gifts for Winner" />
                    <PrizeListItem text="Defang Pro for 1 Year" />
                  </ul>
                </div>
              </motion.div>
            )}

            {/* First Runner Up Card */}
            {inView && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex flex-col h-full p-5 sm:p-6 md:p-8 bg-gray-800/50 rounded-lg border-2 border-violet-400"
              >
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-1 bg-gradient-to-br from-gray-300 to-gray-600 text-gray-900 text-sm md:text-base font-medium rounded-full whitespace-nowrap">
                  First Runner Up
                </span>

                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <ul className="space-y-2 sm:space-y-3 text-gray-300">
                    <PrizeListItem text="Certificate for all the Participants" />
                    <PrizeListItem text="Special Recognition" />
                    <PrizeListItem text="Stickers for participants" />
                    <PrizeListItem text="Exciting Gifts" />
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for prize list items
const PrizeListItem = ({ text }) => (
  <li className="flex items-center space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 text-violet-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
    <span className="text-xs sm:text-sm md:text-base">{text}</span>
  </li>
);

export default Prizes;
