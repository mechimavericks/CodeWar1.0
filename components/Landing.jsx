"use client";
import React, { useEffect, useState } from "react";
import { useScramble } from "use-scramble";
import Countdown from "react-countdown";
import { useInView } from "react-intersection-observer";

function Landing() {
  const url = "https://i.ibb.co/j9vk4vK6/R-min.jpg";

  const { ref, replay } = useScramble({
    text: "CODEWAR 1.0",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  const { ref: ref1, inView } = useInView();

  useEffect(() => {
    if (inView) {
      replay();
      replays();
    }
  }, [inView]);

  const { ref: reff, replay: replays } = useScramble({
    text: "CODEWAR 1.0",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  return (
    <div
      className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${url})`,
      }}
    >
      <div
        ref={ref1}
        className="flex flex-col items-center justify-center w-full gap-5 sm:gap-8 md:gap-10 p-4 sm:p-5"
      >
        <div className="absolute flex left-3 top-3">
          <h2
            className="text-lg sm:text-xl md:text-2xl text-white"
            ref={reff}
            onMouseOver={replays}
            onFocus={replays}
          >
            CODEWAR 1.0
          </h2>
        </div>
        {inView && (
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white text-center"
            ref={ref}
            onMouseOver={replay}
            onFocus={replay}
          >
            CODEWAR 1.0
          </h1>
        )}
        <h2 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold text-center text-white px-2">
          @Mechi Multiple Campus - Bhadrapur, Jhapa
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          June 2025
        </h2>
        {/* <h2 className="text-2xl font-bold text-white md:text-4xl">Coming Soon</h2> */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 px-2 sm:px-4">
          <button
            type="button"
            className="relative px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base overflow-hidden font-semibold text-white duration-300 bg-blue-800 rounded dark:bg-blue-200 dark:text-gray-900 hover:bg-black hover:text-white"
            onClick={() => {
              window.open("https://forms.mechimavericks.tech", "_blank");
            }}
          >
            Registration Opens
            {/* Registration Form */}
            <span className="absolute top-0 right-0 p-5 px-3 py-1 text-xs text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full tracki translate-x-1/3 dark:bg-violet-400 bg-violet-600">
              Soon
            </span>
          </button>
          <button
            type="button"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold duration-300 bg-gray-100 border rounded dark:border-gray-100 dark:text-gray-100 dark:bg-transparent dark:hover:bg-white hover:bg-transparent hover:text-white dark:hover:text-black"
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
          >
            Find Us On Facebook
          </button>
        </div>
        <div className="text-center text-white text-sm sm:text-base mt-2">
          Application Opens
        </div>
        <div className="flex justify-center w-full px-4">
          <Countdown
            className="text-white"
            date={new Date("2025-04-23T00:00:00")}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (!completed) {
                return (
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-white">
                      {/* Application Closes On */}
                      Application Opens Soon
                    </h2>
                    {/* <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
                      {days}d {hours}h {minutes}m {seconds}s
                    </h2> */}
                  </div>
                );
              }
              return null;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
