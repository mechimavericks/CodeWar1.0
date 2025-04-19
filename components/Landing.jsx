"use client";
import React, { useEffect, useState } from "react";
import { useScramble } from "use-scramble";
import Countdown from "react-countdown";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import { motion } from "framer-motion";

function Landing() {
  const url = "https://i.ibb.co/j9vk4vK6/R-min.jpg";

  const { ref, replay } = useScramble({
    text: "CODEWAR 1.0",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  const { ref: reff, replay: replays } = useScramble({
    text: "CODEWAR 1.0",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  const { ref: ref1, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      replay();
      replays();
    }
  }, [inView, replay, replays]);

  return (
    <div
      className="relative flex min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${url})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -inset-[10%] bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute inset-y-[30%] -inset-x-[10%] bg-gradient-to-r from-teal-900 to-indigo-900 rounded-full blur-3xl animate-slow-spin-reverse"></div>
      </div>

      {/* Main content */}
      <div
        ref={ref1}
        className="flex flex-col items-center justify-center w-full gap-6 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-8 relative z-10"
      >
        {/* Branding corner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute left-5 top-5 z-20"
        >
          <h2
            className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wider"
            ref={reff}
            onMouseOver={replays}
            onFocus={replays}
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              CODEWAR 1.0
            </span>
          </h2>
        </motion.div>

        {/* Main title section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          {inView && (
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-600 opacity-20 blur-xl rounded-full"></div>
              <h1
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white text-center tracking-tighter"
                ref={ref}
                onMouseOver={replay}
                onFocus={replay}
              >
                <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  CODEWAR 1.0
                </span>
              </h1>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3 md:space-y-4"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-teal-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium text-center text-gray-200">
                @Mechi Multiple Campus - Bhadrapur, Jhapa
              </h2>
            </div>

            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-teal-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                June 2025
              </h2>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 mt-2 md:mt-4"
        >
          <Button
            text="Registration Form"
            variant="outline"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              window.open("https://forms.mechimavericks.tech", "_blank");
            }}
          />
          <Button
            text="Event Rules"
            variant="secondary"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              window.open("https://shorturl.at/wYY3d", "_blank");
            }}
          />
          <Button
            text="Find Us On Facebook"
            variant="outline"
            className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white hover:text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              const url = window.location.href;
              if (url.includes("bcaassociation")) {
                window.open(
                  "https://www.facebook.com/bcaassociation",
                  "_blank"
                );
              } else {
                window.open(
                  "https://www.facebook.com/mechimavericks",
                  "_blank"
                );
              }
            }}
          />
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center w-full px-4 mt-4 md:mt-6"
        >
          <Countdown
            className="text-white"
            date={new Date("2025-05-27T23:59:59")}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (!completed) {
                return (
                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-400 mr-2 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-200">
                        Application Closes On
                      </h2>
                    </div>

                    <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                      {[
                        { value: days, label: "DAYS" },
                        { value: hours, label: "HOURS" },
                        { value: minutes, label: "MINUTES" },
                        { value: seconds, label: "SECONDS" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 p-2 sm:p-3 md:p-4 shadow-lg"
                        >
                          <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                            {String(item.value).padStart(2, "0")}
                          </span>
                          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium mt-1">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
