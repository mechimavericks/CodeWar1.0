"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(
  () => import("react-multi-carousel").then((mod) => mod.default),
  { ssr: false }
);

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

// Custom arrow components
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 sm:left-2 md:left-4 transform -translate-y-1/2 top-1/2 bg-gray-800/80 hover:bg-teal-900/80 text-teal-400 p-2 sm:p-2.5 md:p-3 rounded-full shadow-md border border-teal-500/20 sm:shadow-lg md:shadow-xl z-10 transition-all duration-300"
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
    className="absolute right-0 sm:right-2 md:right-4 transform -translate-y-1/2 top-1/2 bg-gray-800/80 hover:bg-teal-900/80 text-teal-400 p-2 sm:p-2.5 md:p-3 rounded-full shadow-md border border-teal-500/20 sm:shadow-lg md:shadow-xl z-10 transition-all duration-300"
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

function SupportedBy() {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
    import("react-multi-carousel/lib/styles.css");
  }, []);

  const supportedByList = [
    {
      name: "Unity Samaj",
      logo: "https://i.ibb.co/pj7kb0hk/unitysamaj.png",
      link: "https://www.facebook.com/profile.php?id=61558765380070",
      isCircular: true,
      title: "Community Partner",
    },
    // Add duplicate entries for demonstration if there's only one supporter
    // {
    //   name: "Unity Samaj",
    //   logo: "https://i.ibb.co/pj7kb0hk/unitysamaj.png",
    //   link: "https://www.facebook.com/profile.php?id=61558765380070",
    //   isCircular: true,
    //   title: "Community Partner",
    // },
    // {
    //   name: "Unity Samaj",
    //   logo: "https://i.ibb.co/pj7kb0hk/unitysamaj.png",
    //   link: "https://www.facebook.com/profile.php?id=61558765380070",
    //   isCircular: true,
    //   title: "Community Partner",
    // },
    // You can add more supporters here
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
            Community Support
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Supported By
            </span>
          </h1>
          
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            We are grateful to our supporters for their generous contributions.
          </p>
        </motion.div>

        {isMounted ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative container mx-auto px-2 mt-8"
          >
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all 0.8s ease"
              transitionDuration={800}
              swipeable={true}
              draggable={true}
              showDots={false}
              arrows={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              containerClass="carousel-container py-4"
              itemClass="px-3 sm:px-4 md:px-6 flex flex-col items-center"
            >
              {supportedByList.map((supporter, index) => (
                <a
                  key={`supporter-${index}`}
                  href={supporter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group"
                >
                  <div className="w-48 h-48 flex items-center justify-center p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-teal-500/10">
                    {supporter.isCircular ? (
                      <div className="bg-white rounded-full flex items-center justify-center w-4/5 h-4/5 p-0">
                        <img
                          src={supporter.logo}
                          alt={supporter.name}
                          className="object-contain max-w-full max-h-full rounded-full transition-all duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img
                        src={supporter.logo}
                        alt={supporter.name}
                        className="object-contain max-w-full max-h-full rounded-lg transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex flex-col items-center justify-center">
                    <span className="text-lg font-medium bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                      {supporter.name}
                    </span>
                    {supporter.title && (
                      <span className="text-sm text-gray-400 mt-1">
                        {supporter.title}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </Carousel>
          </motion.div>
        ) : (
          <div className="flex justify-center py-8">
            <div className="animate-pulse space-y-8">
              <div className="flex justify-center space-x-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-48 h-48 bg-gray-800/50 border border-gray-700/50 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SupportedBy;
