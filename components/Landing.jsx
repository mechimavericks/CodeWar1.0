"use client";
import React, { useState } from "react";
import { useScramble } from "use-scramble";
import Countdown from "react-countdown";

function Landing() {
  const url =
    "https://th.bing.com/th/id/R.948e837d18990ad0573b3a65c9505d0a?rik=ghXmIeWZgEaQZg&pid=ImgRaw&r=0";

  const { ref, replay } = useScramble({
    text: "MECHI HACKS",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  const ref2 = React.useRef();

  const { ref: reff, replay: replays } = useScramble({
    text: "MECHI TECH FEST 2024",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  return (
    <div
      className="flex min-h-screen gap-2"
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${url})`,
      }}
    >
      <div className="flex gap-10 flex-col p-5 justify-center items-center w-full">
        <div className="flex absolute left-3 top-3">
          <h2
            className="text-white sm:text-2xl text-xl"
            ref={reff}
            onMouseOver={replays}
            onFocus={replays}
          >
            MECHI TECH FEST 2024
          </h2>
        </div>
        <h1
          className="sm:text-6xl text-5xl lg:text-9xl md:text-7xl font-bold text-white"
          ref={ref}
          onMouseOver={replay}
          onFocus={replay}
        >
          MECHI HACKS
        </h1>
        <h2 className="md:text-2xl text-center text-sm font-bold text-white">
          @Mechi Multiple Campus - Bhadrapur, Jhapa
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-white">May 2024</h2>
        <div className="flex gap-5 flex-wrap justify-center">
          <button
            type="button"
            className="relative px-6 py-3 px-5 overflow-hidden font-semibold rounded dark:bg-blue-200 bg-blue-800 dark:text-gray-900 text-white  hover:bg-black duration-300 hover:text-white"
          >
            Register Opens
            <span className="absolute top-0 right-0 px-3 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400 bg-violet-600 p-5">
              Soon
            </span>
          </button>
          <button
            type="button"
            className="px-6 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 dark:bg-transparent bg-gray-100 dark:hover:bg-white hover:bg-transparent hover:text-white  duration-300 dark:hover:text-black"
          >
            Find Us On Facebook
          </button>
        </div>
        {/* Application Opens */}
        <div className="flex justify-center">
          <Countdown
            className="text-white"
            date={new Date("2024-03-28T00:00:00")}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (!completed) {
                return (
                  <div className="flex gap-5 flex-col">
                    <h2 className="text-white text-center text-lg md:text-2xl font-bold">
                      Application Opens
                    </h2>
                    <h2 className="text-white text-3xl md:text-5xl font-bold">
                      {days}d {hours}h {minutes}m {seconds}s
                    </h2>
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
