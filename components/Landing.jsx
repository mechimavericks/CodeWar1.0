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
      className="flex min-h-screen gap-2"
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${url})`,
        backgroundPosition: "center",
      }}
    >
      <div
        ref={ref1}
        className="flex flex-col items-center justify-center w-full gap-10 p-5"
      >
        <div className="absolute flex left-3 top-3">
          <h2
            className="text-xl text-white sm:text-2xl"
            ref={reff}
            onMouseOver={replays}
            onFocus={replays}
          >
            CODEWAR 1.0
          </h2>
        </div>
        {inView && (
          <h1
            className="text-5xl font-bold text-white sm:text-6xl lg:text-9xl md:text-7xl"
            ref={ref}
            onMouseOver={replay}
            onFocus={replay}
          >
            CODEWAR 1.0
          </h1>
        )}
        <h2 className="text-sm font-bold text-center text-white md:text-2xl">
          @Mechi Multiple Campus - Bhadrapur, Jhapa
        </h2>
        <h2 className="text-2xl font-bold text-white md:text-4xl">June 2025</h2>
        {/* <h2 className="text-2xl font-bold text-white md:text-4xl">Coming Soon</h2> */}
        <div className="flex flex-wrap justify-center gap-5">
          <button
            type="button"
            className="relative px-6 py-3 overflow-hidden font-semibold text-white duration-300 bg-blue-800 rounded dark:bg-blue-200 dark:text-gray-900 hover:bg-black hover:text-white"
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
          {/* <button
            type="button"
            className="relative px-6 py-3 overflow-hidden font-semibold text-white duration-300 bg-blue-800 rounded dark:bg-blue-200 dark:text-gray-900 hover:bg-black hover:text-white"
            onClick={() => {

              window.open("https://docs.google.com/document/d/1wC_Kpgs119-MnfYq1v_2W5A7xn8OFAraA8szXcNnykU/edit?tab=t.0#heading=h.9bs2qovp1s7s", "_blank")
            }
            }
          >
            Event Rules
          </button> */}
          <button
            type="button"
            className="px-6 py-3 font-semibold duration-300 bg-gray-100 border rounded dark:border-gray-100 dark:text-gray-100 dark:bg-transparent dark:hover:bg-white hover:bg-transparent hover:text-white dark:hover:text-black"
            onClick={() => {
              const url = window.location.href; // Declare url properly
              if (url.includes("bcaassociation")) {
                window.open(
                  "https://www.facebook.com/bcaassociation",
                  "_blank"
                ); // Fixed typo
              } else {
                window.open(
                  "https://www.facebook.com/mechimavericks",
                  "_blank"
                ); // Fixed typo
              }
            }}
          >
            Find us On Facebook
          </button>
        </div>
        Application Opens
        <div className="flex justify-center">
          <Countdown
            className="text-white"
            date={new Date("2025-04-23T00:00:00")}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (!completed) {
                return (
                  <div className="flex flex-col gap-5">
                    <h2 className="text-lg font-bold text-center text-white md:text-2xl">
                      {/* Application Closes On */}
                      Application Opens Soon
                    </h2>
                    {/* <h2 className="text-3xl font-bold text-white md:text-5xl">
                      {days}d {hours}h {minutes}m {seconds}s
                    </h2> */}
                  </div>
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
