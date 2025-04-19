"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(
  () => import("react-multi-carousel").then((mod) => mod.default),
  { ssr: false }
);

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

// Custom arrow components
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 sm:left-2 md:left-4 transform -translate-y-1/2 top-1/2 bg-gray-700 hover:bg-gray-600 text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-md sm:shadow-lg md:shadow-xl z-10 transition-all duration-300"
    aria-label="Previous"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 sm:right-2 md:right-4 transform -translate-y-1/2 top-1/2 bg-gray-700 hover:bg-gray-600 text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-md sm:shadow-lg md:shadow-xl z-10 transition-all duration-300"
    aria-label="Next"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </button>
);

function Sponsors() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    import("react-multi-carousel/lib/styles.css");
  }, []);

  const supportedByList = [
    {
      name: "Defang.io",
      logo: "https://i.ibb.co/Q7hqvDfw/icon-removebg-preview.png",
      link: "https://defang.io/",
      title: "Technical Partner",
    },
    {
      name: "GeeksforGeeks",
      logo: "https://i.ibb.co/8D1b3HDf/220px-Geeksfor-Geeks-svg.webp",
      link: "https://www.geeksforgeeks.org/",
      title: "Learning Partner",
    },
    {
      name: "GitHub Education",
      logo: "https://i.ibb.co/ynrmNS6V/github-6980894-1280.png",
      link: "https://education.github.com/",
      title: "Education & Community Partner",
    },
  ];

  if (supportedByList.length === 0) return null;

  return (
    <section className="py-6 px-3 sm:px-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Sponsors
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4">
          We are grateful to our sponsors for their generous support.
        </p>
      </div>

      {isMounted ? (
        <div className="relative container mx-auto px-2 mt-8">
          {" "}
          {/* Added padding to make room for arrows */}
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            showDots={false}
            arrows={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            containerClass="carousel-container"
            itemClass="p-2 sm:p-4 md:p-6 flex flex-col items-center"
          >
            {supportedByList.map((sponsor, index) => (
              <a
                key={`sponsor-${index}`}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center mx-2 sm:mx-4 md:mx-6"
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-contain max-w-full max-h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <span className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-300 flex flex-col items-center justify-center">
                  {sponsor.name}
                  <span className="text-xs sm:text-sm md:text-base text-gray-400">
                    {sponsor.title}
                  </span>
                </span>
              </a>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="flex justify-center py-8">
          <div className="animate-pulse space-y-8">
            <div className="flex justify-center space-x-12">
              {[1, 2].map((i) => (
                <div key={i} className="w-28 h-28 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Sponsors;
